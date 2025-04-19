import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import State from "@/components/delivery/State";
import Card from "@/components/delivery/Card";
import { useState } from "react";

export default function DeliveryDashboard (){
    const [ controler, setControler] = useState<'disponible' | 'camino' | 'entregados' | 'cancelados'>('disponible')
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.headerF}>
                    <Image style={styles.fondo} source={require('@assets/images/fondo2.png')}/>
                </View>
                <View style={styles.header}>
                    <State/>
                    <TouchableOpacity>
                        <Image  style={styles.notification} source={require('@assets/icons/notification.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.subContainer}>
                    <View style={styles.selec}>
                        <TouchableOpacity style={[styles.controler, controler === 'disponible' && {backgroundColor: '#EDEFFD', borderRadius: 10}]} onPress={() => setControler('disponible')}>
                            <Text style={styles.textControler}>Disponibles</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.controler, controler === 'camino' && {backgroundColor: '#EDEFFD', borderRadius: 10}]} onPress={() => setControler('camino')}>
                            <Text style={styles.textControler}>En camino</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.controler, controler === 'entregados' && {backgroundColor: '#EDEFFD', borderRadius: 10}]} onPress={() => setControler('entregados')}>
                            <Text style={styles.textControler}>Entregados</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.controler, controler === 'cancelados' && {backgroundColor: '#EDEFFD', borderRadius: 10}]} onPress={() => setControler('cancelados')}>
                            <Text style={styles.textControler}>Cancelados</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.info}>Disponibles (4)</Text>
                    <View style= {styles.cardContainer}>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141252',
    },
    header: {
        position: "absolute",
        top: 50,
        width: '100%',
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    fondo: {
        top: 40,
        height: 80,
        width: '100%',
        resizeMode: 'cover',
    },
    headerF: {
        width: '100%',
        height: 70
    },
    notification: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    subContainer: {
        backgroundColor: "#EFF1F5",
        flex: 1,
        top: 40,
        alignItems: "center",
    },
    selec: {
        marginVertical: 20,
        width: '95%',
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor: "#fff",
        borderStyle: "solid",
        borderColor: "#dad9e5",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    controler: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    textControler: {
        fontSize: 12,
        fontWeight: "700",
        fontFamily: "Nunito-Bold",
        color: "#141252",
    },
    info: {
        width: '95%',
        textAlign: 'left',
        paddingBottom: 20,
        fontSize: 15,
        fontWeight: "700",
        fontFamily: "Nunito-Bold",
        color: "#141744",
    },
    cardContainer: {
        width: '100%',
        flexDirection: 'column',
        alignItems: "center",
        gap: 5
    }
})

