import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";


interface Props {
    children: ReactNode,
}

export default function FloatMenu({children}: Props) {

    return(
        <View style={styles.container}>
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