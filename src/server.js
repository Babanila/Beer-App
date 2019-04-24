const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

// Setting CORS
app.use(cors());

// Using Sandbox key parameter to get the beer list.
app.get("/:key", async (req, res) => {
  const url = `https://sandbox-api.brewerydb.com/v2/beers?key=${
    req.params.key
  }`;
  try {
    const { data } = await axios.get(url);
    res.status(200).send(data);
  } catch (e) {
    res.status(e.response.status).send(e.response.statusText);
  }
});

// Using Sandbox key and id parameter to get a particular beer.
app.get("/:key/:id", async (req, res) => {
  const url = `https://sandbox-api.brewerydb.com/v2/beer/${req.params.id}?key=${
    req.params.key
  }`;

  try {
    const result = await axios.get(url);
    const { data } = result.data;
    res.status(200).send(data);
  } catch (e) {
    res.status(e.response.status).send(e.response.statusText);
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
