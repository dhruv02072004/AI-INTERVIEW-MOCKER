/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_Tl68nRbakvHD@ep-weathered-bird-a1s64h3k-pooler.ap-southeast-1.aws.neon.tech/minemock?sslmode=require&channel_binding=require',
    }
  };