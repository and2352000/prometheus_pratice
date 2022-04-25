const client = require("prom-client");
// const collectDefaultMetrics = client.collectDefaultMetrics;

const Registry = client.Registry;
const register = new Registry();
// collectDefaultMetrics({ register });
const healthCounter = new client.Counter({
  name: "get_health_counter",
  help: "metric_help",
  registers: [register],
});

module.exports = { register, healthCounter };
