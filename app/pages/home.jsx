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
                    Óla, Usuário
                </Text>
            </View>
            <View style={styles.categorias}>

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
    title:{
        width: width,
        backgroundColor: '#00000'
    },
    categorias: {
    }
//     img: {
//     width: 145,
//     height: 145,
//     resizeMode: 'contain',
//     marginBottom: 20,
//   },
})