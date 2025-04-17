import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';

interface Props {
    controler: void
}



export default function Register (control: Props) {
    const [genero, setGenero] = useState<'' | 'Femenino' | 'Masculino' | 'Otro'>('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.title}>¡Regístrate como Zoners!</Text>

                <Text style={styles.label}>¿Cuáles son tus nombres y apellidos?*</Text>
                <View style={styles.nameRow}>
                    <TextInput
                    placeholder="Miguel Ángel"
                    style={[styles.input, { flex: 1, marginRight: 10 }]}
                    />
                    <TextInput
                    placeholder="Pérez Mendoza"
                    style={[styles.input, { flex: 1 }]}
                    />
                </View>

                <Text style={styles.label}>Ingresa tu cédula de identidad*</Text>
                <TextInput
                    placeholder="093120588 - 3"
                    style={styles.input}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>Fecha de nacimiento*</Text>
                <View style={styles.dateInputContainer}>
                    <TextInput
                    placeholder="24/05/2000"
                    style={[styles.input, { paddingRight: 35 }]}
                    value={fechaNacimiento}
                    onChangeText={setFechaNacimiento}
                    />
                    <Ionicons
                    name="calendar-outline"
                    size={20}
                    color="#999"
                    style={styles.calendarIcon}
                    />
                </View>

                <Text style={styles.label}>Género*</Text>
                <View style={styles.options}>
                    {['Femenino', 'Masculino', 'Otro'].map((option) => (
                        <TouchableOpacity
                        key={option}
                        style={styles.radioOption}
                        onPress={() => setGenero(option)}
                        >
                        <View style={styles.radioCircle}>
                            {genero === option && <View style={styles.radioChecked} />}
                        </View>
                        <Text style={styles.radioText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* <ButtonNav
                    text="Continuar"
                    routeName={}
                /> */}

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: '80%'
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#141744',
        textAlign: 'center',
        letterSpacing: -0.4,
        fontFamily: "Nunito-Bold",
        marginBottom: 20
    },
    label: {
        fontSize: 13,
        fontWeight: "500",
        fontFamily: "Nunito-Medium",
        color: "#141744",
        textAlign: 'left'
    },
    input: {
        borderWidth: 1,
        borderColor: '#dad9e5',
        borderRadius: 10,
        padding: 12,
        margin: 5,
        fontSize: 14,
        backgroundColor: '#fff'
    },
    nameRow: {
        flexDirection: 'row',
    },
    dateInputContainer: {
        position: 'relative',
        marginBottom: 5
    },
    calendarIcon: {
        position: 'absolute',
        right: 10,
        top: 14
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: '#dad9e5',
        borderRadius: 5,
    },
    radioCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FF5A3C',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    radioChecked: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#FF5A3C'
    },
    radioText: {
        fontSize: 14,
        color: '#141744'
    },
    button: {
        backgroundColor: '#FF5A3C',
        paddingVertical: 14,
        borderRadius: 10,
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 16
    },
    options: {
        marginTop: 10
    }
});