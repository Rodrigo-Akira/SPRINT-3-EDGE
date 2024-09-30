const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware para ler dados JSON
app.use(bodyParser.json()); 

// Endpoint para receber os dados do ESP32
app.post('/dados-carro', (req, res) => {
  const { velocidade, desgastePneus, tempoPitStop } = req.body;
  
  // Aqui você pode armazenar esses dados, processá-los, etc.
  console.log(`Recebido: Velocidade: ${velocidade}, Desgaste dos Pneus: ${desgastePneus}, Tempo de Pit Stop: ${tempoPitStop}`);
  
  // Responde ao ESP32
  res.status(200).send('Dados recebidos com sucesso');
});

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
