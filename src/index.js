const express = require('express');
const utilsFile = require('./utils/readTalkerData');
const generateToken = require('./utils/generateToken');
const { validateEmail, validatePassword } = require('./middleware/validateLogin');
const checkToken = require('./middleware/checkToken');
const validateFied = require('./middleware/validateFields');
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

app.post('/login', validateEmail, validatePassword, (_req, res) => {
  const token = generateToken();
  res.status(HTTP_OK_STATUS).json({ token });
});

app.use(checkToken);

app.post('/talker', validateFied, async (req, res) => {
  const talkersData = await utilsFile.readAllData();
  const lastId = Number(talkersData[talkersData.length - 1].id);
  const newTalker = {
    id: lastId + 1,
    ...req.body,
  };
  await utilsFile.writeDataFile(newTalker);
  res.status(201).json(newTalker);
});

app.put('/talker/:id', validateFied, async (req, res) => {
  const id = Number(req.params.id);
  const newTalker = { id, ...req.body };
  const updateTalkers = [];
  (await utilsFile.readAllData()).reduce((acc, talker) => {
    if (talker.id === id) {
      updateTalkers.push(newTalker);
    } else updateTalkers.push(talker);
    return true;
  }, updateTalkers);
  console.log(newTalker);
 await utilsFile.updateDataFile(updateTalkers);
 return res.status(HTTP_OK_STATUS).json(newTalker);
});

app.delete('/talker/:id', async (req, res) => {
  const id = Number(req.params.id);
  const updateTalkers = (await utilsFile.readAllData())
    .filter((talker) => talker.id !== id);
    await utilsFile.updateDataFile(updateTalkers);
 return res.status(204).json();
});

app.listen(PORT, () => {
  console.log('Online');
});
