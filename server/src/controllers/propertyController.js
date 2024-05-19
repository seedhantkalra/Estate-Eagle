const propertyService = require('../services/propertyService');

exports.getProperties = async (req, res) => {
  try {
    const properties = await propertyService.getProperties();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPropertyByAddress = async (req, res) => {
  const { address } = req.params;
  try {
    const property = await propertyService.getPropertyByAddress(address);
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProperty = async (req, res) => {
  const property = req.body;
  try {
    const newProperty = await propertyService.createProperty(property);
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProperty = async (req, res) => {
  const { address } = req.params;
  const updates = req.body;
  try {
    const updatedProperty = await propertyService.updateProperty(address, updates);
    res.status(200).json(updatedProperty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProperty = async (req, res) => {
  const { address } = req.params;
  try {
    await propertyService.deleteProperty(address);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
