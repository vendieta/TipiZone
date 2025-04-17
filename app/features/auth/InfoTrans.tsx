import { useState } from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from "react-native"


export default function InfoTrans () {
    const [ licencia, setLicencia ] = useState('');
    const [ matricula, setMatricula ] = useState('');
    const [ seguro, setSeguro ] = useState('');


    return(
        <View style={{alignItems: 'center'}}>
            <Text style={styles.title}>Información de transporte</Text>
            <Text style={styles.text}>¿Con qué vas a hacer delivery?</Text>
            <View style={styles.containerOption}>
                <TouchableOpacity style={styles.option}>
                    <View style={styles.ico}>
                        <Image style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={require('@assets/icons/bike.png')}/>
                    </View>
                    <Text style={styles.subText}>Bicicleta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <View style={styles.ico}>
                    <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={require('@assets/icons/moto.png')}/>
                    </View>
                    <Text style={styles.subText}>Moto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <View style={styles.ico}>
                    <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={require('@assets/icons/walk.png')}/>
                    </View>
                    <Text style={styles.subText}>A pie</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <View style={styles.ico}>
                    <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={require('@assets/icons/car.png')}/>
                    </View>
                    <Text style={styles.subText}>Carro</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>Información adicional</Text>
            <TouchableOpacity style={styles.rectangleView}>
                <Text style={styles.text}>Cédula por ambos lados</Text>
            </TouchableOpacity>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Número de licencia de conducir "
                    placeholderTextColor="#ccc"
                    keyboardType= 'default'
                    value={licencia}
                    onChangeText={setLicencia}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Matricula"
                    placeholderTextColor="#ccc"
                    keyboardType= 'default'
                    value={matricula}
                    onChangeText={setMatricula}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Seguro de vehículo (opcional)"
                    placeholderTextColor="#ccc"
                    keyboardType= 'default'
                    value={seguro}
                    onChangeText={setSeguro}
                />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        paddingVertical: 10,
        width: '80%',
        flexDirection: 'column',
        gap: 10
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 15,
        color: '#333',
    },
    rectangleView: {
        height: 70,
        width: '80%',
        borderRadius: 5,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#dad9e5",
        justifyContent: 'center',
        margin: 10
    },
    title: {
        fontSize: 20,
        letterSpacing: -0.4,
        fontWeight: "700",
        fontFamily: "Nunito-Bold",
        paddingBottom: 15,
    },
    text: {
        fontSize: 15,
        fontWeight: "700",
        fontFamily: "Nunito-Bold",
        color: "#141744",
        textAlign: 'left',
        width: '80%'
    },
    subText: {
        bottom: -25
    },
    ico: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        bottom: -7

    },
    option: {
        width: 70,
        height: 70,
        borderWidth: 0.5,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: "#f5f4fb",
        borderStyle: "solid",
        borderColor: "#dad9e5",
    },
    containerOption: {
        flexDirection: 'row',
        gap: 15,
        paddingTop: 20,
        paddingBottom: 40
        
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