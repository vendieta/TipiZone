import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import FloatMenu from "@/components/general/FloatMenu";
import { SafeAreaView } from "react-native";

export default function Map() {
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.subHeader}>
                    <Text>Helados ideal</Text>
                    <Text>Calle 12 y Av. América, Torre A</Text>
                </View>
            </View>
            <MapView
                style = {styles.map}
                initialRegion = {{
                    latitude: 0, // latitud inicial
                    longitude: 0, // longitud inicial
                    latitudeDelta: 0.01, // El delta es para la el zoom inical (ajusta el nivle del zoom )
                    longitudeDelta: 0.001,
                }}>
                
            </MapView>
            <FloatMenu>
                <View>
                    <Text>hola</Text>
                </View>
            </FloatMenu>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map : {
        width : '100%',
        height : '100%'
    },
    subHeader : {
        borderStyle: "solid",
        borderColor: "#dad9e5",
        borderRadius: 10,
    },
    header: {
        position: "absolute",
        width: 10000,
        height: 8000,
        backgroundColor: "red",
    }
})