import { Image } from "expo-image";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

const CARD_WIDTH = (width - 68) / 4;

const CategoriaItem = ({ title, imageSource }) => (
  <View style={styles.categoriaItem}>
    <View style={styles.categoria123}>
      <Image style={styles.imgCategoria} source={imageSource} />
    </View>
    <Text style={styles.textCategoria}>{title}</Text>
  </View>
);

const ProdutoCard = ({ nome, preco, imagemSource2 }) => (
    <View style={styles.cardContainer}>
        <Image style={styles.cardImage} source={imagemSource2}/>
        <View style={styles.cardInfo}>
            <Text style={styles.cardPreco}>{preco}</Text>
            <Text style={styles.cardNome}>{nome}</Text>
        </View>
    </View>
);

export default function Home() {
  // Usei Array para simplificar e arganizar o código.
  const categoriasData = [
    { title: "Bolos", image: require("../../assets/images/BoloCategoria.png") },
    { title: "Sobremesas", image: require("../../assets/images/BoloCategoria.png") },
    { title: "Encomenda", image: require("../../assets/images/BoloCategoria.png") },
  ];

  const produtosData = [
    { id: 'p1', nome: 'Bolo De Pote Choco.Branco', preco: 'R$12,00', imagem: require('../../assets/images/BoloPoteChocoBranco.jpg') },
    { id: 'p2', nome: 'Bolo De Pote Choco.Preto', preco: 'R$12,00', imagem: require('../../assets/images/BoloPoteChocoPreto.jpg') },
    { id: 'p3', nome: 'Delicia de Abacaxi', preco: 'R$12,00', imagem: require('../../assets/images/BombomPote.jpg') },
    { id: 'p4', nome: 'Bombom de pote', preco: 'R$12,00', imagem: require('../../assets/images/DeliciaAbacaxi.jpg') },
  ];

  return (
    <View style={styles.containerGeral}>
    <ScrollView contentContainerStyle={styles.principal}>
      <View style={styles.banner}>
        <Image
          style={styles.img}
          source={require("../../assets/images/LogoCake.png")}
        />
      </View>
      <View style={styles.title}>
        <Text>Olá</Text>
        <View style={styles.linha} />
      </View>
      <View style={styles.categorias}>
        {categoriasData.map((item, index) => (
          <CategoriaItem
            key={index} // Chave única é importante no React!
            title={item.title}
            imageSource={item.image}
          />
        ))}

        {/* <CategoriaItem 
                    title="Bolos" 
                    imageSource={require('../../assets/images/BoloCategoria.png')}
                />
                <CategoriaItem 
                    title="Sobremesas" 
                    imageSource={require('../../assets/images/BoloCategoria.png')}
                />
                <CategoriaItem 
                    title="Encomenda" 
                    imageSource={require('../../assets/images/BoloCategoria.png')} 
                /> 
                */}
        {/* <View style={styles.categoria123}>
                        <Image style={styles.imgCategoria} source={require('../../assets/images/BoloCategoria.png')}/>
                    </View>
                    <View style={styles.categoria123}>
                        <Image style={styles.imgCategoria} source={require('../../assets/images/BoloCategoria.png')}/>
                    </View>
                    <View style={styles.categoria123}>
                        <Image style={styles.imgCategoria} source={require('../../assets/images/BoloCategoria.png')}/>
                    </View> */}
      </View>
      <View style={styles.linha2} />
      <View style={styles.title}>
        <Text>Destaque</Text>
        <View style={styles.linha} />
      </View>

      <View style={styles.destaque}>
        {produtosData.map((produto) => (
            <ProdutoCard 
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            imagemSource2={produto.imagem}
            />
        ))}
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerGeral: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  principal: {
    alignItems: "center",
    // justifyContent: "center",
    // padding: 20,
    paddingTop:30,
  },
  banner: {
    backgroundColor: "#FFF6F7",
    justifyContent: "center",
    alignItems: "center",
    width: width,
    paddingTop: 25,
    marginTop: 20
    
  },
  img: {
    width: 145,
    height: 145,
    resizeMode: "contain",
    marginBottom: 20,
  },
  // imgCategoria: {
  //     borderRadius: 5,
  //     width: 40,
  //     height: 40,
  // },
  title: {
    width: width,
    marginTop: 20,
    marginLeft: 30,
    marginBottom: 20
  },
  linha: {
    width: "25%",
    height: 1,
    backgroundColor: "#F7B6C3",
    marginTop: 5,
    // marginBottom: 10,
  },
  linha2: {
    width: "100%",
    height: 1,
    backgroundColor: "#E8E8E8",
    marginTop: 10,
    // marginBottom: 10,
  },
  categorias: {
    width: width,
    // marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  categoriaItem: {
    alignItems: "center",
  },
  categoria123: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    width: 75,
    height: 75,
    backgroundColor: "#fff0f1",
  },
  imgCategoria: {
    borderRadius: 5,
    width: 60,
    height: 60,
  },
  textCategoria: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
  destaque: {
    width: width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingHorizontal: 0,
    marginTop: 10,
  },
  cardContainer: {
    width: CARD_WIDTH,
    backgroundColor: '#ffff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    marginHorizontal: 4,
  },
  cardImage: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius: 10,
    backgroundColor: '#f7f7f7',
  },
  cardInfo: {
    padding: 10,
  },
  cardPreco: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 2,
  },
  cardNome: {
    fontSize: 10,
    color: '#000',
  }
});
