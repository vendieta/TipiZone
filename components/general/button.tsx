import { View, Text, StyleSheet, DimensionValue, ViewStyle, TextStyle } from "react-native";


interface Props {
    data: {
        text: string;
        styleView: ViewStyle;
        styleText?: TextStyle;
        // width: DimensionValue;
        // color: string
    }
}

export default function Button({data}: Props) {

    return(
        <View style={[styles.container, data.styleView]}>
            <Text style={[styles.text,data.styleText]}>
                {data.text}
            </Text>
        </View>
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