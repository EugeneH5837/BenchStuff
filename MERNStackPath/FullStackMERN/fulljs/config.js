const env = process.env;

export const logStars = (message) => {
  console.log("******");
  console.log(message);
  console.log("******");
};

export const nodeEnv = env.NODE_ENV || "development";
export default {
  dbName: "test",
  mongodbUri: "mongodb://localhost:27017/test",
  port: env.PORT || "8080",
  host: env.HOST || "0.0.0.0",
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  },
};