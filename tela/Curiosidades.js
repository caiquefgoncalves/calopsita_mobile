import {Text,  StyleSheet, ScrollView} from "react-native";
import Imagem from "../components/Imagem"
import Card from "../components/Card"
import BotaoNavegacao from "../components/BotaoNavegacao"


export default function Curiosidades( {navigation} ) {

    const listaCuriosides = [
        "Origem: Elas são nativas das regiões desérticas da Austrália",
        "Sono: Uma calopsita precisa dormir entre 10 e 12 horas por noite",
        "Topete: O topete em pé indica alerta, colado á cabeça indica medo ou irritação",
        "Inteligência: Elas conseguem aprender a assobiar músicas inteiras com facilidade",
        "Longevidade: Com os cuidados certos, elas podem viver entre 15 e 20 anos"
    ]


    return (
        <ScrollView contentContainerStyle={styles.container} >
            <Imagem url="https://exoticosmanausam.com/wp-content/uploads/2025/10/Gemini_Generated_Image_lliqw7lliqw7lliq-1-1.png" />

            <Text style={styles.titulo}>Curiosidades</Text>

            {listaCuriosides.map((item, index) => (
                <Card key={index} texto={item} />
            ))}

            <BotaoNavegacao
            titulo="Voltar para a Home"
            destino="Home"
            navigation={navigation}
            />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#0F172A',
        paddingHorizontal: 24,
        paddingVertical: 30,
    },
    titulo: {
        fontSize: 32,
        fontWeight: '800',
        color: '#F8FAFC',
        marginBottom: 20,
        textAlign: 'center',
    }
})