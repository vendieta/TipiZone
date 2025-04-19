import iconSet from "@expo/vector-icons/build/Fontisto";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Button from "../general/Button";
import ButtonNav from "../general/ButtonNav";

const { height, width } = Dimensions.get('screen');

export default function Card () {
    
    return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View>
                        <Image style={styles.ico} source={require('@assets/images/local.png')}/>
                    </View>
                    <View>
                        <Text style={styles.title}>Helados ideal</Text>
                        <Text style={styles.name}>Mario Oleas Coronel</Text>
                        <Text style={styles.text}>Entregar antes de: 13:20</Text>
                        <Text style={styles.text}>Ganancia $1.50</Text>
                    </View>
                    <View>
                        <Text>2.5 km</Text>
                    </View>
                </View>
                <View style={styles.button}>
                    <ButtonNav 
                        text="Ruta del pedido"
                        styleView={{
                            backgroundColor: "#FF391F",
                            width: "60%",
                            padding: 0,
                            paddingVertical: 5,
                            borderRadius: 80
                        }}
                        styleText={{
                            fontSize: 14,
                            lineHeight: 21,
                            fontWeight: "700",
                            fontFamily: "Nunito-Bold"
                        }}
                        routeName={'Mapa'}
                    />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: "#fff",
        justifyContent: 'space-between',
        width: '95%',
        padding: 5,
        borderRadius: 5,
        borderStyle: "solid",
        borderColor: "#dad9e5",
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        fontFamily: "Nunito-SemiBold",
        color: "#141744",
    },
    name: {
        fontSize: 12,
        fontWeight: "500",
        fontFamily: "Nunito-Medium",
        color: "#ffa599"
    },
    text: {
        fontSize: 11,
        fontWeight: "500",
        fontFamily: "Nunito-Medium",
        color: "#9e9cac",
    },
    subContainer: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        position: 'relative',
        width: width*0.95,
        alignItems: 'center',
        marginTop: 10
    },
    ico: {
        width: 70,
        height: 70,
    }
})