import { ScrollView, View, Text, TouchableOpacity, TextInput, TouchableWithoutFeedback, Pressable, StyleSheet } from "react-native"
import { useState } from "react";

interface Props {
    setData : React.Dispatch<React.SetStateAction<string>>;
}

export default function DocPersonal ({setData}: Props) {
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [direction, setDirection] = useState('');
    const [ visible, setVisible ] = useState(false);
    
    return(
        <>
            <ScrollView style={{flex: 1}}>
                <View style={styles.container}>
                    <Text style={styles.title}>Documentos personales</Text>
                    <TouchableOpacity style={styles.rectangleView} onPress={() => setVisible(true)}>
                        <Text style={styles.text}>Cédula por ambos lados</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rectangleView} onPress={() => setVisible(true)}>
                        <Text style={styles.text}>Cédula por ambos lados</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rectangleView} onPress={() => setVisible(true)}>
                        <Text style={styles.text}>Cédula por ambos lados</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rectangleView} onPress={() => setVisible(true)}>
                        <Text style={styles.text}>Cédula por ambos lados</Text>
                    </TouchableOpacity>

                    <Text style={styles.text2}>Información adicional</Text>

                    <View style={{width: '80%'}}>
                        <Text style={styles.label}>Correo electrónico</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="ejemplo@dominio.com"
                                placeholderTextColor="#ccc"
                                keyboardType="email-address"
                                value={email}
                                onChangeText={setEmail}
                            />
                        <Text style={styles.label}>Ingresa tu teléfono celular*</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="0987654321"
                                placeholderTextColor="#ccc"
                                keyboardType= 'numeric'
                                value={celular}
                                onChangeText={setCelular}
                            />
                        <Text style={styles.label}>Incluye tu dirección y ubicación de domicilio*</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Urdesa Central, calle primera y Guayacanes #233"
                                placeholderTextColor="#ccc"
                                keyboardType= 'default'
                                value={direction}
                                onChangeText={setDirection}
                            />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => setData('InfoT')}>
                        <Text style={styles.buttonText}>Continuar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
                {/* COMPONENTE SUPERPUESTO */}
                
                {visible && (
            <TouchableWithoutFeedback onPress={() => setVisible(false)}>
            <View style={styles.overlay}>
                {/* Esto evita que se cierre si haces tap dentro del componente */}
                <TouchableWithoutFeedback>
                <View style={styles.modal}>
                    <Text style={styles.title}>🎯 Componente Superpuesto</Text>
                    <Pressable style={styles.button} onPress={() => setVisible(false)}>
                    <Text style={styles.buttonText}>Cerrar</Text>
                    </Pressable>
                </View>
                </TouchableWithoutFeedback>
            </View>
            </TouchableWithoutFeedback>)}
        </>
    )
}


const styles = StyleSheet.create({
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.08)', // fondo oscuro
        justifyContent: 'center',
        alignItems: 'center',

    },
    modal: {
        width: 250,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        elevation: 10,
        
    },
    rectangleView: {
        height: 90,
        width: '80%',
        borderRadius: 5,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#dad9e5",
        justifyContent: 'center'
    },
    container: {
        alignItems: 'center',
        height: '100%'
    },
    title: {
        fontSize: 20,
        letterSpacing: -0.4,
        fontWeight: "700",
        fontFamily: "Nunito-Bold",
        marginBottom: 25
    },
    label: {
        marginBottom: 6,
        fontWeight: '500',
        color: "#141744",
        fontSize: 13,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
        paddingRight: 45,
        color: '#333',
    },
    text: {
        fontSize: 13,
        fontWeight: "700",
        fontFamily: "Nunito-Bold",
        color: "#141744",
    },
    text2: {
        fontSize: 13,
        fontWeight: "700",
        fontFamily: "Nunito-Bold",
        color: "#141744",
        marginVertical: 20
    },
    button: {
        backgroundColor: '#FF5A3C',
        borderRadius: 10,
        paddingVertical: 14,
        marginTop: 20,
        width: '80%'
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 16
    },
})
