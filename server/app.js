const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const { Agent } = require('./model');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

router.get('/agents', async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});

router.post('/agent', async (req, res) => {
  const { body } = req;
  console.log("fuck-----------")
  console.log(body)
  await Agent.create(body);
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Agent was created successfully.");
});

app.use("/", router);

module.exports = app;
