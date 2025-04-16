import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import React, {FC, useEffect} from 'react';
import { Colors } from '@/src/utils/Constants'; 
// import logo from '@/app/assets/images/logo.jpeg';
import {screenHeight, screenWidth} from '@/src/utils/Scaling';
import { resetAndNavigate} from '@/src/utils/NavigationUtils';
import * as Location from 'expo-location';
import {useAuthStore} from '@/src/state/authStore';
import {tokenStorage} from '@/src/state/storage';
import {jwtDecode} from 'jwt-decode';
// import {refetchUser, refresh_tokens} from '@/src/service/authService';


// GeoLocation.setRNConfiguration({
//     skipPermissionRequests: false,
//     authorizationLevel: 'always',
//     enableBackgroundLocationUpdates: true,
//     locationProvider: 'auto',
// });


interface DecodedToken {
    exp: number;
}

const accessToken = false
const refreshToken = true
const user = 'Customer'

const SplashScreen: FC = () => {
    const Logo = require('@/assets/images/logo.jpeg');
    // const {user, setUser} = useAuthStore();
    const tokenCheck = async () => {
        // const accessToken = await tokenStorage.getString('accessToken');
        // const refreshToken = await tokenStorage.getString('refreshToken');
        console.log('esto es el 1: ', accessToken && refreshToken)
        if (accessToken && refreshToken) {
            const decodedAccessToken = jwtDecode<DecodedToken>(accessToken);
            const decodedRefreshToken = jwtDecode<DecodedToken>(refreshToken);
            const currentTime = Date.now() / 1000;
            if (decodedRefreshToken?.exp < currentTime) {
                resetAndNavigate('CustomerLogin');
                Alert.alert('Session Expired', 'Please login again');
                return false;
            }
            if (decodedAccessToken?.exp < currentTime) {
                try {
                    // refresh_tokens();
                    // await refetchUser(setUser);
                } catch (error) {
                    console.log(error);
                    Alert.alert('There was an error refreshing token!');
                    return false;
                }
            }
            console.log('navegacion: ', user === 'Customer')
            // if (user?.role === 'Customer') {  
            if (user === 'Customer') {
                resetAndNavigate('ProductDashboard');
            } else {
                resetAndNavigate('DeliveryDashboard');
            }
            return true;
        }
        // resetAndNavigate('CustomerLogin');
        resetAndNavigate('HomeLogin');
        return false;
    };
    useEffect(() => {
        const initialStartup = async () => {
            try {
                // 1. Solicitar permisos de ubicación
                const { status } = await Location.requestForegroundPermissionsAsync();
                
                if (status !== 'granted') {
                Alert.alert(
                    'Permiso requerido',
                    'Necesitamos acceso a tu ubicación para brindarte una mejor experiencia',
                    [{ text: 'OK' }]
                );
                return;
                }
        
                // 2. Verificar token (asegúrate de manejar errores aquí también)
                await tokenCheck();
                
            } catch (error) {
                console.error('Error en initialStartup:', error);
                Alert.alert(
                'Error',
                'Ocurrió un problema al iniciar la aplicación',
                [{ text: 'OK' }]
                );
            }
        };
        // Retraso inicial con cleanup
        const timeoutId = setTimeout(initialStartup, 1000);
        return () => clearTimeout(timeoutId);
    }, []);
    

    // codigo antiguo
    // useEffect(() => {
    //     const intialStartup = async () => {
    //     try {
    //         GeoLocation.requestAuthorization();
    //         tokenCheck();
    //     } catch (error) {
    //         Alert.alert(
    //         'Sorry we need location service to give you better shopping experience',
    //         );
    //     }
    //     };
    //     const timeoutId = setTimeout(intialStartup, 1000);
    //     return () => clearTimeout(timeoutId);
    // }, []);
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logoImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        height: screenHeight * 0.4,
        width: screenWidth * 0.4,
        resizeMode: 'contain',
    },
});

export default SplashScreen;