import { ReactNode } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";


interface Props {
    children: ReactNode,
    ViewStyle?: ViewStyle | null | undefined
}

export default function FloatMenu({children, ViewStyle}: Props) {

    return(
        <View style={[styles.container, ViewStyle]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 20,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        position: 'absolute',
        bottom: 0,
    }
})