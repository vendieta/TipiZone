import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { Colors, Fonts } from '@/src/utils/Constants'
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomText from '@/components/ui/CustomText';

interface ActionButtonProps {
    icon: string;
    label: string;
    onPress?: () => void
}

const ActionButton: FC<ActionButtonProps> = ({ icon, label, onPress }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <View style={styles.iconContainer}>
                <Icon name={icon} color={Colors.text} size={RFValue(14)} />
            </View>
            <CustomText variant='h7' fontFamily={Fonts.Medium}>
                {label}
            </CustomText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginVertical: 10
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderRadius: 100,
        backgroundColor: Colors.backgroundSecondary
    }
})

export default ActionButton