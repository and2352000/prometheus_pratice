const { register, healthCounter } = require("./prom-utils");
const express = require("express");

const app = express();
const port = 8888;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

async function bootstrap() {
  app.get("/health", (req, res) => {
    healthCounter.inc();
    res.send("ok");
  });
  app.get("/metrics", async (req, res) => {
    const m = await register.metrics();
    res.send(m);
  });
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

bootstrap();
