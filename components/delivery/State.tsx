import { View, Text, StyleSheet } from "react-native";



export default function state() {

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Estado</Text>
            <Text style={styles.estado}>Inactivo</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 100,
        borderRadius: 10,
        backgroundColor: "#fff",
        paddingVertical: 5,
        paddingHorizontal: 20,
        alignItems: "center",
    },
    estado: {
        fontSize: 12,
        fontWeight: "700",
        fontFamily: "Nunito-Bold",
        color: "#141252",
    },
    title: {
        fontSize: 11,
        fontWeight: "500",
        fontFamily: "Nunito-Medium",
        color: "#9e9cac",
    },
})