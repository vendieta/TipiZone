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
