const config = {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "mysecretkey",
    mongoUri: process.env.MONGODB_URI ||
        process.env.MONGO_HOST ||
        "mongodb://" + (process.env.IP || "localhost") + ":" +
        "/mernSkeleton"
};

export default config;