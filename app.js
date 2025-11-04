const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send('<h1>Hello from Node CI/CD via SSM 🚀</h1>');
});

app.listen(port, () => console.log(`App listening on ${port}`));
