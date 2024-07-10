import React, { useState } from 'react';

import './App.css'
const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  const PORT = 3000;
  const BASE_URL = `http://localhost:${PORT}/api/calculate`;

  const calculate = async () => {
    try {
        const response = await fetch(
        `${BASE_URL}?num1=${num1}&num2=${num2}&operation=${operation}`
        );
        const data = await response.json();
        setResult(data);
    } catch (error) {
        alert('A requisição falhou (o servidor está fora?)');
        setResult(null);
    }
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Número 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Número 2"
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">Adicionar</option>
        <option value="subtract">Subtrair</option>
        <option value="multiply">Multiplicar</option>
        <option value="divide">Dividir</option>
      </select>
      <button onClick={calculate}>Calcular</button>
      {result !== null && <h2>Resultado: {result}</h2>}
    </div>
  );
};

export default App
