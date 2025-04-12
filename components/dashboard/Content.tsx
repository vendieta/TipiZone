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
      <CustomText variant='h5' fontFamily={Fonts.SemiBold}><Text>Grocery & Kitchen</Text></CustomText>
      <CategoryContainer data={categories} />
      <CustomText variant='h5' fontFamily={Fonts.SemiBold}><Text>Bestsellers</Text></CustomText>
      <CategoryContainer data={categories} />
      <CustomText variant='h5' fontFamily={Fonts.SemiBold}><Text>Snacks & Drinks</Text></CustomText>
      <CategoryContainer data={categories} />
      <CustomText variant='h5' fontFamily={Fonts.SemiBold}><Text>Home & Lifestyle</Text></CustomText>
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