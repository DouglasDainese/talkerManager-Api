const express = require('express');
const utilsFile = require('./utils/readTalkerData');
// iniciando o projeto

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_req, res) => {
  const talkersData = await utilsFile.readAllData();
 return res.status(HTTP_OK_STATUS).json(talkersData);
});

app.get('/talker/:id', async (req, res) => {
  const id = Number(req.params.id);
  const talkerData = await utilsFile.readAllData();
  const checkIdData = talkerData.some((t) => t.id === id);
  if (!checkIdData) {
      return res.status(404).json({
         message: 'Pessoa palestrante não encontrada',
       });
  }
  const talkerById = talkerData.find((talker) => talker.id === id);
  return res.status(HTTP_OK_STATUS).json(talkerById);
});

app.listen(PORT, () => {
  console.log('Online');
});
