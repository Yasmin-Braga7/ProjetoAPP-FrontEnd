import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Index() {
  // Aqui eu estou usando useState para gerenciar o estado dos campos.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Aqui ta o estado para a mensagem de erro.

  // Validação de Login.
  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setError(''); // Vai limpar os erros anteriores.

    // Verificação de campos vazios
    if (!email.trim() || !password.trim()) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // Verificação de campos imcorretos
    if (!emailRegex.test(email)) {
      setError('Seu e-mail está incorreto.');
      return;
    }

    // Aqui se tudo estiver certo vai para pagina Home "Principal"
    Alert.alert('Sucesso', `Bem-vindo, ${email}`);
    router.push('../pages/home')
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/images/LogoCake.png')} />

      <Text style={styles.titulo}>Bem-Vindo de volta !</Text>

      <View style={styles.form}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput 
        style={styles.input} 
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail} //atualização do estado do email
        keyboardType='email-address' // Facilidação a entrada do email
        autoCapitalize='none' // Desligar automática
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput 
        style={styles.input} 
        placeholder="Digite sua senha" 
        secureTextEntry
        value={password}
        onChangeText={setPassword} //atualização do estado da senha
        />

        {error ? <Text style={styles.errorText}>{error}</Text>: null}

        <View style={styles.buttonC}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
        </View>
        {/* <View style={styles.buttonC}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('../pages/home')}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
        </View> */}
        <Text style={styles.link}>Esqueci minha senha</Text>
      </View>
      <Text style={styles.footer}>
        Não tem uma conta? <Text style={styles.signup}>Cadastra-se</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF6F7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  img: {
    width: 145,
    height: 145,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 18,
    color: '#828181',
    fontWeight: '500',
    marginBottom: 30,
  },
  form: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: '#73443E',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#0000002d',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#FFF6F7',
  },
  errorContainer: {
    borderWidth: 0.2,
    borderColor: '#cfcfcfff',
    borderRadius: 8,
  },
  errorText: {
    color: '#d8000c',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#6B3F31',
    width: '100%',
    height: 45,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonC: {
    alignItems: 'center'
  },
  link: {
    color: '#6B3F31',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 13,
  },
  footer: {
    marginTop: 30,
    fontSize: 14,
    color: '#7E7E7E',
  },
  signup: {
    color: '#6B3F31',
    fontWeight: 'bold',
  }
})