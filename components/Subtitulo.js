import {Text, StyleSheet} from 'react-native'

export default function Subtitulo({texto}) {

    return(
        <Text style={styles.texto}>{texto}</Text>
    )
}


const styles = StyleSheet.create({
    texto: {
        fontSize: 20,
        fontWeight: '700',
        color: '#EAB308',
        alignSelf: 'flex-start',
        maxWidth: 360,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
        marginTop: 15,
        width: '100%',
    }
})