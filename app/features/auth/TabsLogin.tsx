import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import Login from "@/components/deliveryLogin/login";
import Register from "@/components/deliveryLogin/register";


interface Props {
    setData: React.Dispatch<React.SetStateAction<string>>;
}


export default function TabsLogin({ setData }: Props) {
    const [tab, setTab] = useState('login');

    return(
        <View style={styles.subContainer}>
            <View style={styles.mainControler}>
                <TouchableOpacity onPress={() => setTab('login')}>
                    <Text style={[styles.tabText, tab === 'login' && styles.activeTab]}>Inicia sesión</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTab('signup')}>
                    <Text style={[styles.tabText, tab === 'signup' && styles.activeTab]}>Crea una cuenta</Text>
                </TouchableOpacity>
                </View>
                    {
                        tab === 'login' ? <Login/> : <Register setData={setData}/>
                    }
        </View>
    )
}

const styles = StyleSheet.create({
    subContainer: {
        alignItems: 'center',
    },
    mainControler: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 60,
        width: '80%'
    },
    tabText: {
        fontSize: 16,
        letterSpacing: -0.3,
        fontWeight: "700",
        color: '#FFFFFF'
    },
    activeTab: {
        color: 'white',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        paddingBottom: 4,
    },
})