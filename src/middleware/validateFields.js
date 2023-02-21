const validateName = (req, res, next) => {
const { name } = req.body;

if (!name) {
  return res.status(400).json({ message: 'O campo "name" é obrigatório' });
}
if (name.length <= 2) {
  return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
}
return next();
};

const validateAge = (req, res, next) => {
  const { age } = req.body;
  if (!age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (typeof age !== 'number') {
    return res.status(400).json({ message: 'O campo "age" deve ser do tipo "number"' });
  }
  if (!Number.isInteger(age)) {
    return res.status(400).json({ message: 'O campo "age" deve ser um "number" do tipo inteiro' });
  }
  if (age < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  return next();
};

const validateTalk = (req, res, next) => {
  const { talk } = req.body;
  const checkData = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
  if (!talk) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }
  if (!talk.watchedAt) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!checkData.test(talk.watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  } 
  
  return next();
};

const validateTalkRate = (req, res, next) => {
  const { talk } = req.body;
  const rangeRate = /^[1-5]/;
  if (!talk.rate && talk.rate !== 0) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  } 
  if (!Number.isInteger(talk.rate) || !(rangeRate.test(talk.rate))) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
   next();
};

const validateFied = [
  validateName,
  validateAge,
  validateTalk,
  validateTalkRate,
];

module.exports = validateFied;