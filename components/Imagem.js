import {View, Image, StyleSheet } from 'react-native'


export default function Imagem({url}) {
    return(
        <View style={styles.imagemContainer}>
            <Image source={{uri: url}} style={styles.imagem} resizeMode={'cover'} />
        </View>
    )
}

const styles = StyleSheet.create({
    imagem:{
        width: 130,
        height: 130,
    },

    imagemContainer: {
        width: 130,
        height: 130,
        borderRadius: 65,
        backgroundColor: '#fff',
        marginHorizontal: 15,
        overflow: 'hidden',
    }
})