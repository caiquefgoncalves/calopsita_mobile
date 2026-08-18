import {Text, View, Image,  StyleSheet, ScrollView} from "react-native";
import BotaoNavegacao from "../components/BotaoNavegacao"


export default function GaleriaImagem( {navigation} ) {

    const listaImgens = [
        "https://exoticosmanausam.com/wp-content/uploads/2025/10/Gemini_Generated_Image_lliqw7lliqw7lliq-1-1.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5SrFejOLTwRshq9tSUDhZmXnFU0BPr76W8pTlO7bFPaqdu6JM7NQqBQ&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLA4LJi7RZXugwNkM8vTxkI3KTcK8yJI5mSJmogVFMRlGnm6ftxBaurdc&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2sHX2VSG6wP1Sdb206GFcuhqjWDEmKBGiOx085c6g_-_Vr2P9StgRqQo&s=10"
    ]


    return (
        <ScrollView contentContainerStyle={styles.container} >
            <Text style={styles.titulo}>Galeria de Fotos</Text>

            <View>
                {listaImgens.map((url, index) => (
                    <View key={index} style={styles.itemGrid}>
                        <Image
                            source={{ uri: url }}
                            style={styles.imagem}
                            resizeMode="cover"
                        />
                    </View>
                ))}

                <BotaoNavegacao
                    titulo="Voltar para a Home"
                    destino="Home"
                    navigation={navigation}
                />
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#0F172A',
        paddingHorizontal: 16,
        paddingVertical: 30,
    },
    titulo: {
        fontSize: 32,
        fontWeight: '800',
        color: '#F8FAFC',
        textAlign: 'center',
        marginBottom: 6,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 360,
        marginBottom: 15,
    },
    itemGrid: {
        width: '48%',
        aspectRatio: 1,
        backgroundColor: '#1E293B',
        borderRadius: 16,
        marginBottom: 16,
        overflow: 'hidden',
    },
    imagem: {
        width: '100%',
        height: '100%',
    }
})