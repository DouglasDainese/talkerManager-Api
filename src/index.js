const express = require('express');
const fs = require('fs/promises');
const path = require('path');
// iniciando o projeto

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (req, res) => {
  const contentPath = path.resolve(__dirname, 'talker.json');
  const data = await fs.readFile(contentPath, 'utf-8');
  const talkersData = JSON.parse(data);
 return res.status(HTTP_OK_STATUS).json(talkersData);
});

app.listen(PORT, () => {
  console.log('Online');
});
