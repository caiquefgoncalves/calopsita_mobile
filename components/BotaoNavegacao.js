import {View, Button, StyleSheet } from 'react-native'


export default function BotaoNavegacao({titulo, destino, navigation}) {
    return(
        <View style={styles.botaoContainer}>
            <Button
            title={titulo}
            color="#EAB308"
            onPress={() => navigation.navigate(destino)}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    botaoContainer: {
        width: '100%',
        maxWidth: 360,
        marginTop: 10,
    }
})