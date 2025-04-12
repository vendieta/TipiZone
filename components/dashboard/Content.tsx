import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { adData, categories } from '@/src/utils/dummyData'
import AdCarousal from './AdCarousal'
import { Fonts } from '@/src/utils/Constants'
import CustomText from '@/components/ui/CustomText'
import CategoryContainer from './CategoryContainer'

const Content:FC = () => {
  return (
    <View style={styles.container}>
      <AdCarousal adData={adData} />
      <CustomText variant='h5' fontFamily={Fonts.SemiBold}>Grocery & Kitchen</CustomText>
      <CategoryContainer data={categories} />
      <CustomText variant='h5' fontFamily={Fonts.SemiBold}>Bestsellers</CustomText>
      <CategoryContainer data={categories} />
      <CustomText variant='h5' fontFamily={Fonts.SemiBold}>Snacks & Drinks</CustomText>
      <CategoryContainer data={categories} />
      <CustomText variant='h5' fontFamily={Fonts.SemiBold}>Home & Lifestyle</CustomText>
      <CategoryContainer data={categories} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20
    }
})

export default Content