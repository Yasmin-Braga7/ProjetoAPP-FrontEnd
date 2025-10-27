import { Image, StyleSheet, Text, TextInput, View } from "react-native";

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

      </View>
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
    backgroundColor: '#FFF0F0',
  }
})