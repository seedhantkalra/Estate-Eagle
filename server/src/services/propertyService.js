const Listing = require('../models/Property');

async function getProperties() {
    return await Listing.getAll();
}

async function getPropertyByAddress(address) {
    return await Listing.getByAddress(address);
}

async function createProperty(property) {
    return await Listing.create(property);
}

async function updateProperty(address, updates) {
    return await Listing.update(address, updates);
}

async function deleteProperty(address) {
    return await Listing.delete(address);
}

module.exports = {
    getProperties,
    getPropertyByAddress,
    createProperty,
    updateProperty,
    deleteProperty,
}