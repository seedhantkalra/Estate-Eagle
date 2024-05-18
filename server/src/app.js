const express = require('express');
const cors = require('cors');

const authMiddleware = require('./middleware/authMiddleware');
const errorHandler = require('./middleware/errorHandler');

const authRoutes = require('./routes/authRoutes');
const alertRoutes = require('./routes/alertRoutes');
const blockchainRoutes = require('./routes/blockchainRoutes');
const priceRoutes = require('./routes/priceRoutes');
const propertyRoutes = require('./routes/propertyRoutes');

const app = express();

app.use(cors());
app.use(express());

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use('/api/auth', authRoutes);
app.use('/api/alert', alertRoutes);
app.use('/api/blockchain', blockchainRoutes);
app.use('/api/price', priceRoutes);
app.use('/api/property', propertyRoutes);

app.use(errorHandler);

module.exports = app;