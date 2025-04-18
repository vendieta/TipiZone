import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import State from "@/components/delivery/State";
import iconSet from "@expo/vector-icons/build/FontAwesome5";

export default function DeliveryDashboard (){
    
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
        top: 60,
        width: '100%',
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    fondo: {
        top: 50,
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
    }
})

