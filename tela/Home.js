import {Text, View, StyleSheet, Button, Image} from "react-native";



export default function Home( {navigation} ) {
    return (
        <View style={styles.pagina}>
            <View style={styles.imagemContainer}>
                <Image
                source={require('../assets/calopsita.png')}
                style={styles.imagem}
                resizeMode="cover"/>
            </View>


            <Text style={styles.titulo}>Calopsitas</Text>

            <View style={styles.card}>
                <Text style={styles.descricao}>
                    Bem-vindo ao App das Calopsitas, aprenda tudo sobre essas aves impressionantes!
                </Text>
            </View>

            <View style={styles.botaoContainer}>
                <Button title={"Curiosidades"} color="#EAB308" onPress={() => navigation.navigate("Curiosidades")}/>
            </View>

            <View style={styles.botaoContainer}>
                <Button title={"Especies"} color="#EAB308" onPress={() => navigation.navigate("Especies")}/>
            </View>

            <View style={styles.botaoContainer}>
                <Button title={"Galeria de Imagens"} color="#EAB308" onPress={() => navigation.navigate("Galeria")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pagina:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#0f172a',
        paddingHorizontal: 24,
    },
    imagemContainer:{
        width: 140,
        height: 140,
        borderRadius: 70,
        backgroundColor: '#ffffff',
        marginBottom: 20,
        overflow: "hidden",
    },

    imagem:{
        width: 140,
        height: 140,
    },

    titulo:{
        fontSize: 40,
        fontWeight:'bold',
        color: '#f8fafc',
        marginBottom: 15,
        textAlign:'center',
    },

    card:{
        width:"100%",
        maxWidth: 340,
        backgroundColor:'#1e293b',
        borderRadius: 16,
        padding: 20,
        marginBottom: 25,
    },

    descricao:{
        fontSize: 16,
        color: '#94a3b8',
        textAlign:'center',
        lineHeight: 24,
    },

    botaoContainer:{
        width:'100%',
        maxWidth: 340,
        marginBottom: 25,
    }
})