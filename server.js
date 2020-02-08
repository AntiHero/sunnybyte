const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  res.header("x-hello-world", "A.Schemelev");

  if (
    Object.entries(req.query).length === 0 &&
    req.query.constructor === Object
  ) {
    res.json({ ip: `${ip}` });
  } else {
    res.greeting = req.query["name"];
    res.json({ ip: `${ip}`, greeting: res.greeting });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
