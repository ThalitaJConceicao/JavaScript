import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

//Função principal do aplicativo
const app = () =>{
  //Estados para armazenar o nome de usuário e a senha
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //Função que é chamada quando o botão de login é pressionado
  const handleLogin = () => {
    //Aqui, você poderia adicionar a lógica para autenticar o usuário
    alert(`Usuário: ${username}\nSenha: ${password} `);
  };

  return (
    // Conteiner principal que centraliza o conteúdo
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>
      <TextInput
        style={styles.input}
        placeholder = "Nome de usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder = "Senha"
        secureTextIntry={true}
        value={password}
        onChangeText={setPassword} //Atualiza o estado da senha
      />
      <Button title="Entrar" onPress={handleLogin} />{/* Botão de Login */}
    </View>
  );
};

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

export default App;