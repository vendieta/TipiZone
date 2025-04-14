import {View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import React, { FC } from 'react';
import {Colors, Fonts} from '@/src/utils/Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import RollingBar from 'react-native-rolling-bar';
import CustomText from '@/components/ui/CustomText';

const { height, width } = Dimensions.get('screen')

const SearchBar: FC = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Icon name="search" color={Colors.text} size={RFValue(20)} />
      <RollingBar
        interval={3000}
        defaultStyle={false}
        customStyle={styles.textContainer}>
        <CustomText variant="h6" fontFamily={Fonts.Medium}>
          <Text>
            Search "sweets"
          </Text>
        </CustomText>
        <CustomText variant="h6" fontFamily={Fonts.Medium}>
          <Text>
            Search "milk"
          </Text>
        </CustomText>
        <CustomText variant="h6" fontFamily={Fonts.Medium}>
          <Text>
            Search for ata, dal, coke
          </Text>
        </CustomText>
        <CustomText variant="h6" fontFamily={Fonts.Medium}>
          <Text>
            Search "chips"
          </Text>
        </CustomText>
        <CustomText variant="h6" fontFamily={Fonts.Medium}>
          <Text>
            Search "pooja thali"
          </Text>
        </CustomText>
      </RollingBar>

      <View style={styles.divider} />

      <Icon name='mic' color={Colors.text} size={RFValue(20)} />

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 0.6,
    borderColor: Colors.border,
    marginTop: 15,
    overflow: 'hidden',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    width: width-20,
    bottom: -80,
  },
  textContainer: {
    width: '80%',
    paddingLeft: 10,
    height: 50,
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: '#ddd',
    marginHorizontal: 10,
  },
});

export default SearchBar;
