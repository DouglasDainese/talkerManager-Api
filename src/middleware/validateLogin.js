const validateEmail = (req, res, next) => {
  const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const { email } = req.body;
  if ([email].includes(undefined)) {
   return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!reg.test(email)) {
   return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if ([password].includes(undefined)) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
   }
  if (password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

module.exports = {
  validateEmail,
  validatePassword,
};