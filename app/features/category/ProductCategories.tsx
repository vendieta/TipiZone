import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '@/components/ui/CustomHeader';
import {Colors} from '@/src/utils/Constants';
import Sidebar from './Sidebar';
import {getAllCategories, getProductsByCategoryId} from '@/src/service/productService';
import ProductList from './ProductList';
import withCart from '@/app/features/cart/WithCart';

const ProductCategories = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState<boolean>(true);
  const [productsLoading, setProductsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setCategoriesLoading(true);
        const data = await getAllCategories();
        console.log('estas son las categorias: ',data)
        setCategories(data);
        if (data && data?.length > 0) {
          setSelectedCategory(data[0]);
        }
      } catch (error) {
        console.log('Error Fetching Categories', error);
      } finally {
        setCategoriesLoading(false);
      }
    };

    fetchCategories();
  }, []);


  useEffect(() => {

    const fetchProducts = async (categoryId: string) => {
        try {
            setProductsLoading(true)
            const data = await getProductsByCategoryId(categoryId)
            setProducts(data)
        } catch (error) {
            console.log("Error Fetching Products", error)
        } finally {
            setProductsLoading(false)
        }
    }

    if (selectedCategory?._id) {
        fetchProducts(selectedCategory?._id)
    }
}, [selectedCategory])

  return (
    <View style={styles.mainContainer}>
      <CustomHeader title={selectedCategory?.name || 'Categories'} search />
      <View style={styles.subContainer}>
        {categoriesLoading ? (
          <ActivityIndicator size="small" color={Colors.border} />
        ) : (
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryPress={(category: any) => setSelectedCategory(category)}
          />
        )}

        {productsLoading ? (
          <ActivityIndicator
            size="large"
            color={Colors.border}
            style={styles.center}
          />
        ) : (
          <ProductList data={products || []} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withCart(ProductCategories)
