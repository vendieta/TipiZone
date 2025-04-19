import { View, Text, StyleSheet, DimensionValue, ViewStyle, TextStyle, TouchableOpacity } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native";
import { navigate } from "@/src/utils/NavigationUtils";

// Define tus rutas (ajusta según tu navegación)
type RootStackParamList = {
  [key: string]: undefined; // Ajusta los parámetros según tus pantallas
};

interface Props {
    text: string;
    styleView?: ViewStyle;
    styleText?: TextStyle;
    routeName: keyof RootStackParamList; // Nombre de la ruta como string
}
export default function ButtonNav({ text, styleView, styleText, routeName }: Props) {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return(
        <TouchableOpacity style={[styles.container, styleView]} onPress={() => navigate(routeName)}>
            <Text style={[styles.text,styleText]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 18,
        lineHeight: 27,
        fontWeight: "700",
        // fontFamily: "Nunito-Bold",
    }
})