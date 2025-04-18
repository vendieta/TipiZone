import { View, Text, StyleSheet } from "react-native";



export default function state() {

    return(
        <View style={styles.container}>
            <Text>Estado</Text>
            <Text>Inactivo</Text>
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
    }
})