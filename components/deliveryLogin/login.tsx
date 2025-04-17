import { View, Text, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import { useState } from "react";
import Button from "../general/ButtonNav";
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
    const [controler, setControler] = useState('email');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);
    
    return(
        <>
            <Text style={styles.text}>¡Registrate como Zoners!</Text>
            <View style={styles.controler}>
                <TouchableOpacity onPress={() => setControler('email')}>
                    <Text style={[styles.textControler, controler === 'email' && styles.tabControler]}>Correo electrónico</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setControler('id')}>
                    <Text style={[styles.textControler, controler === 'id' && styles.tabControler]}>Cédula de identidad</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                {
                    controler === 'email' ? <>
                        <Text style={styles.label}>Correo electrónico</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="ejemplo@dominio.com"
                            placeholderTextColor="#ccc"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </> : <>
                        <Text style={styles.label}>Cedula</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="0987654321"
                                placeholderTextColor="#ccc"
                                keyboardType="email-address"
                                value={email}
                                onChangeText={setEmail}
                            />
                    </>
                }
            <Text style={styles.label}>Contraseña</Text>
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="••••••••"
                    placeholderTextColor="#ccc"
                    secureTextEntry={secureText}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity
                style={styles.icon}
                onPress={() => setSecureText(!secureText)}
                >
                <Ionicons name={secureText ? 'eye-off' : 'eye'} size={20} color="#999" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
            </View>
            <Button
                text="Comienza a comprar"
                styleView={{
                    backgroundColor: '#FF391F'
                }}
                routeName='DeliveryLogin'
                />
            <Text style={styles.text2}>¡Registra tu negocio y vende!</Text>
            <Text style={styles.textHelp}>¿Necesitas ayuda?</Text>
                            
        </>
    )
}


const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
        paddingRight: 45,
        color: '#333',
    },
    icon: {
        position: 'absolute',
        right: 15,
        top: 14,
    },
    container: {
        width: '80%',
        paddingVertical: 20
    },
    forgot: {
        textAlign: 'right',
        color: '#2f2f73',
        fontWeight: '500',
        marginTop: -10,
    },
    textControler: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        fontSize: 13,
        color: "#fff",
        fontWeight: "700",
        borderRadius: 5
    },
    passwordContainer: {
        position: 'relative',
    },
    text: {
        fontSize: 18,
        letterSpacing: -0.4,
        fontWeight: "700",
        fontFamily: "Nunito-Bold",
        color: '#141744',
        paddingBottom: 20
    },
    textHelp: {
        padding: 12,
        fontSize: 13,
        fontWeight: "700",
        fontFamily: "Nunito-Bold",
        color: "#141744",
    },
    controler: {
        flexDirection: 'row',
        gap: 5,
        backgroundColor: '#20256F',
        borderRadius: 5,
        padding: 5
        
    },
    label: {
        marginBottom: 6,
        fontWeight: '500',
        color: "#141744",
        fontSize: 13,
    },
    tabControler: {
        backgroundColor: '#ff391f'
    },
    text2: {
        paddingVertical: 20,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "700",
        color: '#141744'
    },

})