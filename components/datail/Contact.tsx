import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";


export default function Contact () {

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <View style={styles.data}>
                    <Text style={styles.pedido}>Pedido #2345</Text>
                    <Text style={styles.name}>Allisson Salame</Text>
                </View>
                <View style={styles.minContainer}> 
                    <View style={styles.subMinContainer}>
                        <Text style={styles.min}>5 min.</Text>
                    </View>
                </View>
            </View>
            <View style={styles.contact}>
                <TouchableOpacity style={styles.selec}>
                    <Image style={styles.ico} source={require('@assets/icons/sms.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.selec}>
                    <Image style={styles.ico} source={require('@assets/icons/call.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        borderRadius: 12,
        backgroundColor: "#141744",
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 0,
    },
    info: {
        flexDirection: "row",
        gap: 20
    },
    contact: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    data: {

    },
    pedido: {
        fontSize: 14,
        fontWeight: "700",
        fontFamily: "Nunito-Bold",
        color: "#fff",
    },
    name: {
        fontSize: 12,
        fontWeight: "500",
        fontFamily: "Nunito-Medium",
        color: "#fff",
    },
    min: {
        fontSize: 13,
        fontWeight: "600",
        fontFamily: "Nunito-SemiBold",
        color: "#fff",
    },
    minContainer: {
    
        justifyContent: "center",
    
    },
    subMinContainer: {
        borderRadius: 20,
        backgroundColor: "#8187da",
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    ico: {
        height: 25,
        width: 25,
    },
    selec: {
        backgroundColor: "#FFFFFF",
        padding: 10,
        borderRadius: 50,
    },

})