import {View, Text, SafeAreaView, StyleSheet, Pressable} from 'react-native';
import React, {FC} from 'react';
import {Colors, Fonts} from '@/src/utils/Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import {goBack} from '@/src/utils/NavigationUtils';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomText from './CustomText';

const CustomHeader: FC<{title: string; search?: boolean}> = ({
  title,
  search,
}) => {
  return (
    <SafeAreaView>
      <View style={styles.flexRow}>
        <Pressable onPress={() => goBack()}>
          <Icon name="chevron-back" color={Colors.text} size={RFValue(25)} />
        </Pressable>
        <CustomText
          style={styles.text}
          variant="h5"
          fontFamily={Fonts.SemiBold}>
          {title}
        </CustomText>

        <View>
          {search && (
            <Icon name="search" color={Colors.text} size={RFValue(25)} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    justifyContent: 'space-between',
    paddingTop: 25,
    paddingBottom: 5,
    paddingHorizontal:10,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 0.6,
    borderColor: Colors.border,
  },
  text: {
    textAlign: 'center',
    fontSize: 20
  },
});

export default CustomHeader;
