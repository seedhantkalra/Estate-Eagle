const User = require('../models/User');

async function getUsers() {
    return await User.getAll();
}

async function getUserByID(id) {
    return await User.getById(id);
}

async function createUser(user) {
    return await User.create(user);
}

async function updateUser(id, updates) {
    return await User.update(id, updates);
}

async function deleteUser(id) {
    return await User.delete(id);
}

async function getAlertsByUserID(id) {
    const user = await User.getById(id);
    return user.alerts;
}

async function addAlertToUser(id, alert) {
    const user = await User.getById(id);
    user.alerts = user.alerts.filter(alert => alert.id !== alert.id);
    return await User.updateUser(id, {alerts: user.alerts });
}

module.exports = {
    getUsers,
    getUserByID,
    createUser,
    updateUser,
    deleteUser,
    getAlertsByUserID,
    addAlertToUser
};