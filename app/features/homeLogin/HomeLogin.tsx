import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import FloatMenu from "@/components/general/FloatMenu";
import Button from "@/components/general/ButtonNav";
import { router } from "expo-router";

const { height , width } = Dimensions.get('screen')


export default function HomeLogin(){

    return(
        <View style={styles.container}>
            <Image
            source={require('@assets/images/name.png')}
            style={styles.logo} // Cubre toda la pantalla
            // blurRadius={2} // Opcional: desenfoque ligero
            />
            <Image
            source={require('@assets/images/image.png')}
            style={styles.backgraund} // Cubre toda la pantalla
            // blurRadius={2} // Opcional: desenfoque ligero
            />
            <FloatMenu>
                <View style={styles.subContainer}>
                    <Text style={styles.title}>Únete como Zoners</Text>
                    <Text style={styles.text}>Donde los deliveries locales hacen historia</Text>
                    <Button 
                        routeName= 'DeliveryLogin'
                        text= '¿Eres Zonners?'
                        styleView={{
                            backgroundColor: '#141744',
                            width: '80%',
                        }}
                        styleText= {{
                            
                        }} 
                        />
                    
                    <Text style={styles.text}> o </Text>

                    <Button
                        routeName= 'DeliveryLogin'
                        text= '¿Eres Zonners?'
                        styleView={{
                            backgroundColor: '#FF391F',
                            width: '80%',
                        }}
                        styleText= {{

                        }} 
                        />
                </View>
            </FloatMenu>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141252',
        
    },
    backgraund: {
        position: 'absolute',
        width: 360,
        height: 500,
        top: (height/2)-250
    },
    logo: {
        position: 'absolute',
        width: 85,
        height: 60,
        left: (width/2)-42.5,
        top: 50
    },
    subContainer: {
        alignItems: 'center',
        gap: 9
    },
    title: {
        fontSize: 29,
        color: '#141744',
        fontWeight: 'bold',
        letterSpacing: -0.5
    },
    text: {
        fontSize: 18,
        color:  '#141744',
        fontWeight: 'light',
        letterSpacing: -0.5
    }
})