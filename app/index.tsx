import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/images/LogoCake.png')} />

      <Text style={styles.titulo}>Bem-Vindo de volta !</Text>

      <View style={styles.form}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input} placeholder="Digite seu email"/>

        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry/>
        <View style={styles.buttonC}>
        <TouchableOpacity style={styles.button}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F5',
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
    fontWeight: '600',
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
    borderColor: '#E5CACA',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#73443E',
    width: 221,
    height: 42,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonC: {
    alignItems: 'center'
  },
  link: {
    color: '#73443E',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 13,
  },
  footer: {
    marginTop: 30,
    fontSize: 14,
    color: '#999',
  },
  signup: {
    color: '#73443E',
    fontWeight: 'bold',
  }
})