const nearAPI = require('near-api-js');
const { connect, keyStores, WalletConnection } = nearAPI;

const keyStore = new keyStores.InMemoryKeyStore();

const config = {
    networkId: 'testnet',
    nodeUrl: 'https://rpc.testnet.near.org',
    walletUrl: 'https://wallet.testnet.near.org',
    helperUrl:  'https://helper.testnet.near.org',
    explorerUrl: 'https://explorer.testnet.near.org',
    accountId: 'eagleestate.testnet',
};

async function initNear() {
    const near = await connect(config);
    const wallet = new WalletConnection(near, config.accountId);
    return wallet;
}

async function setHousePrice(address, price) {
    const wallet = await initNear();
    await wallet.account().functionCall({
        contractId: config.accountId,
        methodName: 'set_price',
        args: { address, price },
        gas: '100000000000000',
        attachedDeposit: '0'
    })
}

async function getHousePriceHistory(address) {
    const wallet = await initNear();
    const result = await wallet.account().viewFunction(config.accountId, 'get_price', { address });
    return result;
}

async function getAllHousePrices() {
    const wallet = await initNear();
    const result = await wallet.account().viewFunction(config.accountId, 'get_all_prices', {});
    return result;
}

module.exports = {
    setHousePrice,
    getHousePriceHistory,
    getAllHousePrices
}