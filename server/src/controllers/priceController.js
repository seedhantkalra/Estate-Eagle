const nearService = require('../services/priceService');

exports.setPrice = async (req, res) => {
    const { address, price } = req.body;
    try {
        await nearService.setHousePrice(address, price);
        res.json({ message: 'Price set successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getHousePriceHistory = async (req, res) => {
    const { address } = req.params;
    try {
        const priceHistory = await nearService.getHousePriceHistory(address);
        res.status(200).json({ priceHistory })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllPrices = async (req, res) => {
    try {
        const priceHistory = await nearService.getAllHousePrices();
        res.status(200).json({ priceHistory })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

