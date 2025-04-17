import { ScrollView, TouchableOpacity, Text, Image, StyleSheet } from "react-native";



export default function RegisterForm() {

    return(
        <ScrollView>
            <Text>Documentos personales</Text>
            <TouchableOpacity style={styles.rectangleView}>
                <Text>Cédula por ambos lados</Text>
            </TouchableOpacity>
            <Text>Información adicional</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rectangleView: {
        borderRadius: 5,
        backgroundColor: "#fff",
        borderStyle: "solid",
        borderColor: "#dad9e5",
    }
})
