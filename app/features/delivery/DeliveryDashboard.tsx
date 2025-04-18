import { View, StyleSheet, ScrollView, Image } from "react-native";


export default function DeliveryDashboard (){
    
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Image style={styles.fondo} source={require('@assets/images/fondo2.png')}/>
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
    fondo: {

    },
    header: {
        width: '100%',
        height: 70
    }
})

