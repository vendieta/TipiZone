import { View, Text, StyleSheet, DimensionValue, ViewStyle, TextStyle, TouchableOpacity } from "react-native";


interface Props {
    text: string;
    styleView?: ViewStyle;
    styleText?: TextStyle;
}
export default function ButtonNav({ text, styleView, styleText }: Props) {

    return(
        <TouchableOpacity style={[styles.container, styleView]} onPress={}>
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