import { Image } from 'expo-image';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get("window");

export default function Home() {
    return(
        <View style={styles.principal}>
            <View style={styles.banner}>
                <Image style={styles.img} source={require('../../assets/images/LogoCake.png')}/>
            </View>
            <View style={styles.title}>
                <Text>
                    Olá
                </Text>
                <View style={styles.linha}/>
            </View>
            <View style={styles.categorias}>
                    <View style={styles.categoria123}>
                        <Image style={styles.imgCategoria} source={require('../../assets/images/BoloCategoria.png')}/>
                    </View>
                    <View style={styles.categoria123}>
                        <Image style={styles.imgCategoria} source={require('../../assets/images/BoloCategoria.png')}/>
                    </View>
                    <View style={styles.categoria123}>
                        <Image style={styles.imgCategoria} source={require('../../assets/images/BoloCategoria.png')}/>
                    </View>
            </View>
            <View style={styles.titleCategoria}>
                <Text style={styles.textCategoria}>
                    Bolos
                </Text>
                <Text style={styles.textCategoria2}>
                    Sobremesas
                </Text>
                <Text style={styles.textCategoria2}>
                    Encomenda
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    principal: {
        flex: 1,
        backgroundColor: '#ffffffff',
        alignItems: 'center',
        justifyContent: 'center',
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
    title:{
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
    categoria123: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        width: 45,
        height: 45,
        backgroundColor: '#fff0f1',
    },
    titleCategoria: {
        width: width,
        backgroundColor: '#815f5fff',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    textCategoria2: {
        fontSize: 10,
    }
//     img: {
//     width: 145,
//     height: 145,
//     resizeMode: 'contain',
//     marginBottom: 20,
//   },
})