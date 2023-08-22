// src/App.tsx
import React from 'react';
import './App.css';
import Login from './view/login/Login';

const App: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    // Lógica de autenticação aqui (ex: fazer uma requisição para um servidor)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Login onLogin={handleLogin} />
      </header>
    </div>
  );
};

export default App;
