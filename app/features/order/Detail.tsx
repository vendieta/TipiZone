import { View, Text, StyleSheet } from "react-native";


export default function Detail () {

    return (
        <View style={styles.container}>
            <Text>hola</Text>
            <View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EFF1F5",
    }
})