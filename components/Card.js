import {View, Text, StyleSheet } from 'react-native'


export default function Card({texto}) {
    return(
        <View style={styles.card}>
            <Text style={styles.texto} >{texto}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#1e293b',
        padding: 16,
        borderRadius: 12,
        marginHorizontal: 12,
        width:'100%',
        maxWidth: 320,
        borderLeftWidth: 4,
        borderLeftColor:'#eab308',
        marginBottom: 16,

    },

    texto: {
        fontSize: 15,
        color: '#e2e8f0',
        lineHeight: 22,
        fontWeight: 500,
    }
})