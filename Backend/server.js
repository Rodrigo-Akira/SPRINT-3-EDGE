const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json()); // Para ler dados JSON

app.post('/dados-carro', (req, res) => {
  const { velocidade, desgastePneus, tempoPitStop } = req.body;
  
  // Aqui você pode armazenar esses dados, processá-los, etc.
  console.log(`Recebido: Velocidade: ${velocidade}, Desgaste dos Pneus: ${desgastePneus}, Tempo de Pit Stop: ${tempoPitStop}`);
  
  res.status(200).send('Dados recebidos com sucesso');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
