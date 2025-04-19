import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import FloatMenu from "@/components/general/FloatMenu";
import ButtonNav from "@/components/general/ButtonNav"; 
import Contact from "@/components/datail/Contact";

export default function Map() {
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.subHeader}>
                    <Text style={styles.titleHeader}>Helados ideal</Text>
                    <Text style={styles.textHeader}>Calle 12 y Av. América, Torre A</Text>
                </View>
            </View>
            <MapView
                style = {styles.map}
                initialRegion = {{
                    latitude: -2.123, // latitud inicial
                    longitude: -79.923, // longitud inicial
                    latitudeDelta: 0.4, // El delta es para la el zoom inical (ajusta el nivle del zoom )
                    longitudeDelta: 0.4,
                }}>
                
            </MapView>
            <FloatMenu>
                <View style={styles.bar}>
                    <Contact/>
                    <View style={styles.textBar}>
                        <Text style={styles.titleBar}>Pedido <Text style={{color: '#9E9CAC'}}>4 productos</Text></Text>
                        <Text style={styles.titleBar}>Total<Text style={{color: '#9E9CAC'}}>$ 2.25</Text></Text>
                    </View>
                    <ButtonNav
                        text="Detalle del pedido"
                        routeName={'Detail'}
                        styleView={{
                            backgroundColor: "#FF391F",
                            marginVertical: 5,
                            width: '90%'
                        }}
                        />
                </View>
            </FloatMenu>
        </View>
    )
}


const styles = StyleSheet.create({
    bar: {
        alignItems: "center",
    },
    container: {
        flex: 1,
    },
    map : {
        width : '100%',
        height : '100%'
    },
    subHeader : {
        borderWidth: 0.5,
        borderStyle: "solid",
        borderColor: "#dad9e5",
        borderRadius: 10,
        backgroundColor: "#fff",
        top: 25,
        width: '80%',
        padding: 20
    },
    header: {
        position: "absolute",
        zIndex: 99,
        width: '100%',
        height: 80,
        alignItems: 'center'
    },
    textHeader: {
        fontSize: 12,
        fontWeight: "300",
        fontFamily: "Nunito-Light",
        color: "#141252",
    },  
    titleHeader: {
        fontSize: 18,
        fontWeight: "600",
        fontFamily: "Nunito-SemiBold",
        color: "#141744",
    },
    textBar: {
        width: '80%',
        flexDirection: "row",
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    titleBar: {
        fontWeight: "700",
        color: "#141744",
        fontSize: 16
    },
})