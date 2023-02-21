const fs = require('fs/promises');
const path = require('path');

const readAllData = async () => {
  try {
    const contentPath = path.resolve(__dirname, '../talker.json');
    const data = await fs.readFile(contentPath, 'utf-8');
    const talkersData = JSON.parse(data);
    return talkersData;
  } catch (error) {
    return `Erro ao ler o arquivo ${error}`;
  }
};

module.exports = {
  readAllData,
};