// Home.tsx

import { Image } from "expo-image";
import React, { JSX } from 'react';
import { Dimensions, ImageRequireSource, ScrollView, StyleSheet, Text, View } from "react-native";

// 1. Interfaces para Estrutura de Dados
// Define o formato de cada item na lista de Categorias
interface Categoria {
  title: string;
  // O tipo para 'require()' em React Native é ImageRequireSource
  image: ImageRequireSource; 
}

// Define o formato de cada item na lista de Produtos
interface Produto {
  id: string;
  nome: string;
  preco: string;
  imagem: ImageRequireSource;
}

// 2. Interfaces para Props dos Componentes
interface CategoriaItemProps {
  title: string;
  imageSource: ImageRequireSource;
}

interface ProdutoCardProps {
  nome: string;
  preco: string;
  // Renomeando a prop para melhor clareza na tipagem, se preferir
  imagemSource: ImageRequireSource; 
}

// Constantes de Layout
const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 68) / 4;

/**
 * Componente que exibe uma categoria.
 * @param {CategoriaItemProps} props - As propriedades do item de categoria.
 * @returns {JSX.Element}
 */
const CategoriaItem = ({ title, imageSource }: CategoriaItemProps): JSX.Element => (
  <View style={styles.categoriaItem}>
    <View style={styles.categoria123}>
      <Image style={styles.imgCategoria} source={imageSource} />
    </View>
    <Text style={styles.textCategoria}>{title}</Text>
  </View>
);

/**
 * Componente que exibe um card de produto.
 * @param {ProdutoCardProps} props - As propriedades do card de produto.
 * @returns {JSX.Element}
 */
const ProdutoCard = ({ nome, preco, imagemSource }: ProdutoCardProps): JSX.Element => (
  <View style={styles.cardContainer}>
    {/* Nota: Renomeei a prop de imagemSource2 para imagemSource para consistência com a interface */}
    <Image style={styles.cardImage} source={imagemSource}/>
    <View style={styles.cardInfo}>
      <Text style={styles.cardPreco}>{preco}</Text>
      <Text style={styles.cardNome}>{nome}</Text>
    </View>
  </View>
);

/**
 * Tela principal da aplicação.
 * @returns {JSX.Element}
 */
export default function Home(): JSX.Element {
  // Tipando o array de categorias
  const categoriasData: Categoria[] = [
    { title: "Bolos", image: require("../../assets/images/BoloCategoria.png") },
    { title: "Sobremesas", image: require("../../assets/images/BoloCategoria.png") },
    { title: "Encomenda", image: require("../../assets/images/BoloCategoria.png") },
  ];

  // Tipando o array de produtos
  const produtosData: Produto[] = [
    { id: 'p1', nome: 'Bolo De Pote Choco.Branco', preco: 'R$12,00', imagem: require('../../assets/images/BoloPoteChocoBranco.jpg') },
    { id: 'p2', nome: 'Bolo De Pote Choco.Preto', preco: 'R$12,00', imagem: require('../../assets/images/BoloPoteChocoPreto.jpg') },
    { id: 'p3', nome: 'Delicia de Abacaxi', preco: 'R$12,00', imagem: require('../../assets/images/BombomPote.jpg') },
    { id: 'p4', nome: 'Bombom de pote', preco: 'R$12,00', imagem: require('../../assets/images/DeliciaAbacaxi.jpg') },
  ];

  const produtos2Data: Produto[] = [
    { id: 'p5', nome: 'Bolo De Banana', preco: 'R$12,00', imagem: require('../../assets/images/BoloBanana.jpg') },
    { id: 'p6', nome: 'Bolo De Cenoura', preco: 'R$12,00', imagem: require('../../assets/images/BoloCenoura.jpg') },
    { id: 'p7', nome: 'Bolo De Pote', preco: 'R$12,00', imagem: require('../../assets/images/BoloPoteBrigadeiro.jpg') },
    { id: 'p8', nome: 'Bolo De Pote', preco: 'R$12,00', imagem: require('../../assets/images/BoloPoteDoceLeite.jpg') },
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
        
        {/* Renderização das Categorias */}
        <View style={styles.categorias}>
          {categoriasData.map((item, index) => (
            <CategoriaItem
              key={index} 
              title={item.title}
              imageSource={item.image}
            />
          ))}
        </View>
        
        <View style={styles.linha2} />
        <View style={styles.title}>
          <Text>Destaque</Text>
          <View style={styles.linha} />
        </View>

        {/* Renderização dos Produtos 1 */}
        <View style={styles.destaque}>
          {produtosData.map((produto) => (
            <ProdutoCard 
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              imagemSource={produto.imagem} // Passando a prop com o nome corrigido
            />
          ))}
        </View>
        
        {/* Renderização dos Produtos 2 */}
        <View style={styles.destaque}>
          {produtos2Data.map((produto) => (
            <ProdutoCard 
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              imagemSource={produto.imagem} // Passando a prop com o nome corrigido
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  containerGeral: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  principal: {
    alignItems: "center",
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
  title: {
    width: width,
    marginTop: 20,
    marginLeft: 30,
    marginBottom: 20,
    paddingLeft: 20, // Ajuste para o texto não ficar tão na borda
  },
  linha: {
    width: "25%",
    height: 1,
    backgroundColor: "#F7B6C3",
    marginTop: 5,
  },
  linha2: {
    width: "100%",
    height: 1,
    backgroundColor: "#E8E8E8",
    marginTop: 10,
  },
  categorias: {
    width: width,
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