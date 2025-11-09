// Index.tsx

import { router } from 'expo-router';
import React, { JSX, useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
// Importar o tipo StyleSheetProperties para garantir a tipagem correta dos estilos, se necessário.
// Mas o StyleSheet.create já infere bem o tipo.

/**
 * Componente principal da tela de Login.
 * * @returns {JSX.Element} O componente de login.
 */
export default function Index(): JSX.Element {
  // O TypeScript infere que os estados são do tipo 'string'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // O estado de erro também é 'string'
  const [error, setError] = useState('');

  /**
   * Função que lida com a lógica de login e validação.
   * Não precisa de um tipo de retorno explícito, pois é void (não retorna nada).
   */
  const handleLogin = () => {
    // Definindo o Regex para validação de e-mail
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setError(''); // Limpa os erros anteriores.

    // 1. Verificação de campos vazios
    if (!email.trim() || !password.trim()) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // 2. Verificação do formato do e-mail
    if (!emailRegex.test(email)) {
      setError('Seu e-mail está incorreto.');
      return;
    }

    // Se tudo estiver correto, prossegue para a navegação.
    Alert.alert('Sucesso', `Bem-vindo, ${email}`);
    // Assume-se que o caminho '../pages/home' é válido no seu Expo Router setup.
    router.push('/(tabs)/home');
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
          // Os tipos das funções do useState (setEmail/setPassword) são corretamente inferidos.
          onChangeText={setEmail}
          keyboardType='email-address'
          autoCapitalize='none'
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Digite sua senha" 
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Exibe o erro se o estado 'error' não for vazio */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <View style={styles.buttonC}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.link}>Esqueci minha senha</Text>
      </View>
      <Text style={styles.footer}>
        Não tem uma conta? <Text style={styles.signup}>Cadastra-se</Text>
      </Text>
    </View>
  );
}

// O StyleSheet.create já retorna um objeto com a tipagem de StyleSheet, 
// o que é suficiente na maioria dos casos.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF6F7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  img: {
    width: 180,
    height: 180,
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
});