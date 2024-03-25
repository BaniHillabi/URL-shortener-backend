const express = require("express");
const urlModel = require("./models/index").urls;

const app = express();

app.use(express.json());

app.post("/", async (req, res) => {
  const data = {
    short: req.body.short,
    long: req.body.long,
  };

  await urlModel.create(data);
  res.json({
    message: "sukses tod",
  });
});

app.get("/:short", async (req, res) => {
  const short = req.params.short;
  const findData = await urlModel.findOne({ where: { short } });

  res.redirect(findData.long);
});

app.listen(3000);
