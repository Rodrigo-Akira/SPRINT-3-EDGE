import React, { useEffect, useState } from 'react';
import './App.css'; 

function App() {
  const [dadosCarro, setDadosCarro] = useState({ velocidade: 0, desgastePneus: 0, tempoPitStop: 0 });

  useEffect(() => {
    const fetchDadosCarro = async () => {
      try {
        const response = await fetch('http://20.201.120.166:3000/dados-carro'); // Endereço do seu back-end
        const data = await response.json();
        setDadosCarro(data);
      } catch (error) {
        console.error("Erro ao buscar dados do carro:", error);
      }
    };
    fetchDadosCarro();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dados do Carro em Tempo Real</h1>
      </header>
      <main>
        <h2>Informações do Carro</h2>
        <p><strong>Velocidade:</strong> {dadosCarro.velocidade} km/h</p>
        <p><strong>Desgaste dos Pneus:</strong> {dadosCarro.desgastePneus}%</p>
        <p><strong>Tempo de Pit Stop:</strong> {dadosCarro.tempoPitStop} segundos</p>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 - Site de Corridas. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
