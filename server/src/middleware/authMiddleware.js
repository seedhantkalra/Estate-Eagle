const { withAuth } = require("@clerk/clerk-sdk-node")

const authMiddleware = (req, res, next) => {
    withAuth()(req, res, (err) => {
        if (err) {
            return res.status(401).json({ error: "Unauthorized"})
        }
        next();
    });
};

module.exports = authMiddleware;