import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import FloatMenu from "@/components/general/FloatMenu";
import { navigate } from "@/src/utils/NavigationUtils";
import { useState } from "react";
import TabsLogin from "./TabsLogin";
import RegisterForm from "@/components/deliveryLogin/RegisterForm";

const { height, width } = Dimensions.get('screen')


export default function DeleveryLogin() {
    const [tab, setTab] = useState('tabs');
    


    return(
        <View style={{flex: 1, backgroundColor: '#141744'}}>
            <Image
                source={require('@assets/images/fondo2.png')}
                style={styles.fondo}
            />
            <Image
                source={require('@assets/images/logo2.png')}
                style={styles.logo}
            />
            <TouchableOpacity style={styles.button} onPress={()=> navigate('HomeLogin')}>  
                <Image
                    source={require('@assets/images/Arrow-icon.png')}
                    style={styles.arrow}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <FloatMenu ViewStyle={tab === 'form' ? { height: '80%' } : undefined}>
                {
                    tab === 'tabs' ? <TabsLogin setData={setTab}/> : <RegisterForm/>
                }
            </FloatMenu>
        </View>
    )
}

const styles = StyleSheet.create({
    fondo: {
        position: 'absolute',
        height: 225,
        width: 384,
        top: 40
    },
    logo: {
        position: 'absolute',
        width: 45,
        height: 51,
        left: (width/2)-22.5,
        top: 60
    },
    arrow: {
        position: 'absolute',
        height: 16,
        width: 10,
        
    },
    button: {
        position: 'absolute',
        top: 50,
        left: 10,
        zIndex: 10, 
        width: 44, 
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
})
