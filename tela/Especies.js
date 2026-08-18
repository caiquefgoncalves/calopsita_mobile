import {Text,  StyleSheet, ScrollView} from "react-native";
import Imagem from "../components/Imagem"
import Card from "../components/Card"
import BotaoNavegacao from "../components/BotaoNavegacao"
import Subtitulo from "../components/Subtitulo"


export default function Curiosidades( {navigation} ) {

    const listaEspecies = [
        "Ancestral (Silvestre): É a cor original, eles possuem o corpo cinza, cabeça amarela e as bochechas laranjas.",
        "Lutino: São totalmente brancas ou amarelas claras, com olhos vermelhos e bochechas ovais vermelhas.",
        "Cara Branca: Uma mutação linda onde a ave perde todo o pigmento amarelo e laranja, ficando apenas com tons de cinza, preto e branco."
    ]

    const listaEspecies2 = [
        "Arlequim: Possuem manchas de cores claras (amarelo/branco) misturadas com o cinza pelo corpo.",
        "Canela: O cinza do corpo é substituído por um tom marrom-claro sutil."
    ]


    return (
        <ScrollView contentContainerStyle={styles.container} >
            <Imagem url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThWMcoewIuElY_LUAIZe_3I2r5SBkfMpWNMt-IqlW2Z7cRvtF_U8mOI_VV&s=10" />

            <Text style={styles.titulo}>Mutações e Cores</Text>

            <Subtitulo texto="Mais Comuns" />
            {listaEspecies.map((item, index) => (
                <Card key={index} texto={item} />
            ))}

            <Subtitulo texto="Outras Variações" />
            {listaEspecies2.map((item, index) => (
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
        marginBottom: 10,
        textAlign: 'center',
    }
})