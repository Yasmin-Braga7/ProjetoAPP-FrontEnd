import { Image } from 'expo-image';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get("window");

const CategoriaItem = ({ title, imageSource }) => (
    <View style={styles.categoriaItem}>
        <View style={styles.categoria123}>
            <Image style={styles.imgCategoria} source={imageSource} />
        </View>
        <Text style={styles.textCategoria}>
            {title}
        </Text>
    </View>
);

export default function Home() {
    // Usei Array para simplificar e arganizar o código.
    const categoriasData = [
        { title: 'Bolos', image: require('../../assets/images/BoloCategoria.png') },
        { title: 'Sobremesas', image: require('../../assets/images/BoloCategoria.png') },
        { title: 'Encomenda', image: require('../../assets/images/BoloCategoria.png') },
    ];

    return (
        <View style={styles.principal}>
            <View style={styles.banner}>
                <Image style={styles.img} source={require('../../assets/images/LogoCake.png')} />
            </View>
            <View style={styles.title}>
                <Text>
                    Olá
                </Text>
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
        </View>
    );
}

const styles = StyleSheet.create({
    principal: {
        flex: 1,
        backgroundColor: '#ffffffff',
        alignItems: 'center',
        padding: 20,
    },
    banner: {
        backgroundColor: '#FFF6F7',
        justifyContent: "center",
        alignItems: "center",
        width: width,
        paddingTop: 15,
    },
    img: {
        width: 145,
        height: 145,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    imgCategoria: {
        borderRadius: 5,
        width: 40,
        height: 40,
    },
    title: {
        width: width,
        backgroundColor: '#00000',
        marginTop: 20,
        marginLeft: 30,
    },
    linha: {
        width: '20%',
        height: 1.5,
        backgroundColor: '#F7B6C3',
        marginTop: 5,
        // marginBottom: 10,
    },
    categorias: {
        width: width,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    categoriaItem: {
        alignItems: 'center',
    },
    categoria123: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        width: 60,
        height: 60,
        backgroundColor: '#fff0f1',
    },
    imgCategoria: {
        borderRadius: 5,
        width: 50,
        height: 50,
    },
    textCategoria: {
        fontSize: 16,
        marginTop: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    }
    //     img: {
    //     width: 145,
    //     height: 145,
    //     resizeMode: 'contain',
    //     marginBottom: 20,
    //   },
})