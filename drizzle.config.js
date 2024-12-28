/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://Nishant:iIXBCQg6q7fj@ep-purple-surf-a1xgyavs.ap-southeast-1.aws.neon.tech/AceTheMock?sslmode=require',
    }
};