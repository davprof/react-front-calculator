# react-front-calculator

Vamos criar um projeto Vite com React e JavaScript para desenvolver uma calculadora que segue o padrão RESTful.

## Passo a Passo

# Instalar nodejs

## Opcional: Instalar asdf tool-version manager

Rode `chmod +x deps.sh; ./deps.sh`
Isso irá gerenciar suas versões do nodejs.

### Passo 1: Criar o projeto Vite com React

1. **Instalar o Vite**:
   Primeiro, precisamos instalar o Vite. Se você ainda não tem o Vite instalado, execute o seguinte comando no terminal:
   ```bash
   npm create vite@latest
   ```

2. **Configurar o projeto**:
   Quando solicitado, insira o nome do projeto (por exemplo, `calculator`). Escolha a opção `react` e depois `react` (JavaScript):
   ```bash
    ✔ Project name: vite-project
    ✔ Select a framework: › React
    ✔ Select a variant: › JavaScript
   ```

3. **Instalar as dependências**:
   Entre no diretório do projeto e instale as dependências:
   ```bash
   cd vite-project
   npm install
   ```

4. **Iniciar o servidor de desenvolvimento**:
   Para garantir que tudo está configurado corretamente, inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

### Passo 2: Criar a interface da calculadora

1. **Editar o arquivo `App.jsx`**:
   Vamos criar uma interface simples para a calculadora em `App.jsx`:
   ```jsx
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
   ```


### Desenvolvimento

Agora, você deve ter a interface do React rodando em `http://localhost:5173` (ou a porta configurada pelo Vite) e o backend em `http://localhost:3000`. A calculadora deve funcionar corretamente, fazendo chamadas à API para realizar as operações.

### Deploy

Da raíz do projeto

    ```bash
    cd vite-project
    npm run build
    ```

O conteúdo ficará em `dist`.