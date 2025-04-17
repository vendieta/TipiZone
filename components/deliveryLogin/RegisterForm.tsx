import { View, ScrollView, TouchableOpacity, Text, Image, StyleSheet, TextInput, TouchableWithoutFeedback, Pressable, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import DocPersonal from "@/app/features/auth/DocPesonal";
import InfoTrans from "@/app/features/auth/InfoTrans";


export default function RegisterForm() {

    // docP = documentos personales
    const [ controler, setControler ] = useState('docP')

    return(
        <View style={{height: '100%'}}>
            {
                controler === 'docP' ? <DocPersonal setData={setControler}/> : <InfoTrans/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    
})
