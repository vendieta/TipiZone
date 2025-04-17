import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import FloatMenu from "@/components/general/FloatMenu";
import { navigate } from "@/src/utils/NavigationUtils";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import Button from "@/components/general/ButtonNav";


const { height, width } = Dimensions.get('screen')


export default function DeleveryLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);
    const [tab, setTab] = useState('login');
    const [controler, setControler] = useState('email');


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
            <FloatMenu>
                <View style={styles.subContainer}>
                    <View style={styles.mainControler}>
                        <TouchableOpacity onPress={() => setTab('login')}>
                            <Text style={[styles.tabText, tab === 'login' && styles.activeTab]}>Inicia sesión</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setTab('signup')}>
                            <Text style={[styles.tabText, tab === 'signup' && styles.activeTab]}>Crea una cuenta</Text>
                        </TouchableOpacity>
                    </View>
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
                </View>
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
    text: {
        fontSize: 18,
        letterSpacing: -0.4,
        fontWeight: "700",
        fontFamily: "Nunito-Bold",
        color: '#141744',
        paddingBottom: 20
    },
    subContainer: {
        alignItems: 'center',
    },
    controler: {
        flexDirection: 'row',
        gap: 5,
        backgroundColor: '#20256F',
        borderRadius: 5,
        padding: 5
        
    },
    textControler: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        fontSize: 13,
        color: "#fff",
        fontWeight: "700",
        borderRadius: 5
    },
    container: {
        width: '80%',
        paddingVertical: 20
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
    passwordContainer: {
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        right: 15,
        top: 14,
    },
    forgot: {
        textAlign: 'right',
        color: '#2f2f73',
        fontWeight: '500',
        marginTop: -10,
    },
    text2: {
        paddingVertical: 20,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "700",
        color: '#141744'
    },
    textHelp: {
        padding: 12,
        fontSize: 13,
        fontWeight: "700",
        fontFamily: "Nunito-Bold",
        color: "#141744",
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
    tabControler: {
        backgroundColor: '#ff391f'
    }

})



// import {View, Text, Alert, StyleSheet, ScrollView} from 'react-native';
// import React, {FC, useState} from 'react';
// import {deliveryLogin} from '@/src/service/authService';
// import {resetAndNavigate} from '@/src/utils/NavigationUtils';
// import CustomSafeAreaView from '@/components/global/CustomSafeAreaView';
// import {screenHeight} from '@/src/utils/Scaling';
// import LottieView from 'lottie-react-native';
// import CustomText from '@/components/ui/CustomText';
// import { Fonts } from '@/src/utils/Constants';
// import CustomInput from '@/components/ui/CustomInput';
// import Icon from 'react-native-vector-icons/Ionicons'
// import { RFValue } from 'react-native-responsive-fontsize';
// import CustomButton from '@/components/ui/CustomButton';

// const DeliveryLogin: FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//     setLoading(true);
//     try {
//       await deliveryLogin(email, password);
//       resetAndNavigate('DeliveryDashboard');
//     } catch (error) {
//       Alert.alert('Login Failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <CustomSafeAreaView>
//       <ScrollView
//         keyboardShouldPersistTaps="handled"
//         keyboardDismissMode="on-drag">
//         <View style={styles.container}>
//           <View style={styles.lottieContainer}>
//             <LottieView
//               autoPlay
//               loop
//               style={styles.lottie}
//               source={require('@assets/animations/delivery_man.json')}
//               hardwareAccelerationAndroid
//             />
//           </View>

//           <CustomText variant='h3' fontFamily={Fonts.Bold}>
//             Delivery Partner Portal
//           </CustomText>
//           <CustomText variant='h6' style={styles.text} fontFamily={Fonts.SemiBold}>
//             Faster than Flash⚡️
//           </CustomText>


//           <CustomInput
//             onChangeText={setEmail}
//             value={email}
//             left={
//             <Icon
//               name='mail'
//               color='#F8890E'
//               style={{ marginLeft: 10 }}
//               size={RFValue(18)} />
//             }
//             placeholder='Email'
//             inputMode='email'
//             right={false}
//           />

//           <CustomInput
//             onChangeText={setPassword}
//             value={password}
//             left={<Icon
//               name='key-sharp'
//               color='#F8890E'
//               style={{ marginLeft: 10 }}
//               size={RFValue(18)} />}
//             placeholder='Password'
//             secureTextEntry
//             right={false}
//           />

//         <CustomButton
//             disabled={email.length == 0 || password.length < 8}
//             title='Login'
//             onPress={handleLogin}
//             loading={loading}
//           />


//         </View>
//       </ScrollView>
//     </CustomSafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     alignItems: 'center',
//   },
//   lottie: {
//     height: '100%',
//     width: '100%',
//   },
//   lottieContainer: {
//     height: screenHeight * 0.12,
//     width: '100%',
//   },
//   text: {
//     marginTop: 2,
//     marginBottom: 25,
//     opacity: 0.8,
//   },
// });

// export default DeliveryLogin;
