import React, { useState } from 'react';
import './App.css';

function App() {
  // Estados para armazenar o nome de usuário e a senha
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Função chamada ao clicar no botão de login
  const handleRegister = () => {
    alert(`Nome: ${username}\nEndereço: ${address}\nEmail: ${email}\nTelefone: ${phone}`);
  };

  const handleClear = () => {
    setUsername('');
    setAddress('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className="App">
    <h1>Tela de Login</h1>
      
      <div className="form-container">
        <label>
          Nome:
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Digite seu nome"
          />
        </label>
        <br />

        <label>
          Endereço:
          <input 
            type="text" 
            value={address}
            onChange={(e) => setAddress(e.target.value)} 
            placeholder="Digite seu endereço"
          />
        </label>
        <br />

        <label>
          Email:
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Digite seu email"
          />
        </label>
        <br />

        <label>
          Telefone:
          <input 
            type="tel" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)} 
            placeholder="Digite seu telefone"
          />
        </label>
        <br />
        
        <button onClick={handleRegister}>Cadastrar</button>
        <button onClick={handleClear}>Limpar</button>
      </div>
    </div>
  );
}

/*
//Definição dos estilos
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupar todo o espaço da altura da tela
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,  //Tamanho da fonte
    fontWeight: "bold", //Texto em negrito
    marginBottom: "20", //Espaço abaixo do titulo
  },
  input: {
    height: 40, //Altura do campo de entrada
    borderColor: '#ccc', //Cor da borda do campo de entrada
    borderWidth: 1, //Largura da borda
    marginBottom: 15, //Espaço abaixo do campo de entrada
    paddingHorizontal: 10,  //Espaçamento interno do campo de entrada
    width: '80%', //Lagura do campo de entrada
  },
})
*/
export default App;
