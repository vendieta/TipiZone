import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '@/components/ui/CustomHeader';
import {Colors} from '@/src/utils/Constants';
import Sidebar from './Sidebar';
import {getAllCategories, getProductsByCategoryId} from '@/src/service/productService';
import ProductList from './ProductList';
import withCart from '@/app/features/cart/WithCart';
// import { categories } from '@/src/utils/dummyData';

// const categorias =  categories
// console.log(categorias[0].image)

const categorias = [
  {
    "name": "Electrónica",
    "category_id": 1,
    "image": "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "name": "Ropa",
    "category_id": 2,
    "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "name": "Hogar",
    "category_id": 3,
    "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "name": "Deportes",
    "category_id": 4,
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "name": "Juguetes",
    "category_id": 5,
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "name": "Libros",
    "category_id": 6,
    "image": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "name": "Muebles",
    "category_id": 7,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "name": "Jardinería",
    "category_id": 8,
    "image": "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "name": "Belleza",
    "category_id": 9,
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "name": "Alimentos",
    "category_id": 10,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  }
]
const productos = [
  {
    "id": 1,
    "name": "Smartphone Android",
    "category_id": 1, // Electrónica
    "image": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 2,
    "name": "Laptop Ultrabook",
    "category_id": 1, // Electrónica
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 3,
    "name": "Camiseta Casual",
    "category_id": 2, // Ropa
    "image": "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 4,
    "name": "Zapatos Deportivos",
    "category_id": 2, // Ropa
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 5,
    "name": "Sofá Moderno",
    "category_id": 3, // Hogar
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 6,
    "name": "Lámpara LED",
    "category_id": 3, // Hogar
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 7,
    "name": "Balón de Fútbol",
    "category_id": 4, // Deportes
    "image": "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 8,
    "name": "Raqueta de Tenis",
    "category_id": 4, // Deportes
    "image": "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 9,
    "name": "Set de Lego",
    "category_id": 5, // Juguetes
    "image": "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 10,
    "name": "Muñeca Articulada",
    "category_id": 5, // Juguetes
    "image": "https://images.unsplash.com/photo-1589874186480-ecd507e67230?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 11,
    "name": "Novela Best-Seller",
    "category_id": 6, // Libros
    "image": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 12,
    "name": "Libro de Cocina",
    "category_id": 6, // Libros
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 13,
    "name": "Mesa de Centro",
    "category_id": 7, // Muebles
    "image": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 14,
    "name": "Silla Ergonómica",
    "category_id": 7, // Muebles
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 15,
    "name": "Maceta Decorativa",
    "category_id": 8, // Jardinería
    "image": "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 16,
    "name": "Kit de Jardinería",
    "category_id": 8, // Jardinería
    "image": "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 17,
    "name": "Crema Hidratante",
    "category_id": 9, // Belleza
    "image": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 18,
    "name": "Paleta de Maquillaje",
    "category_id": 9, // Belleza
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 19,
    "name": "Cesta de Frutas Orgánicas",
    "category_id": 10, // Alimentos
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 20,
    "name": "Aceite de Oliva Extra Virgen",
    "category_id": 10, // Alimentos
    "image": "https://images.unsplash.com/photo-1536975700520-3a9a9d5d5c1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
  }
] 

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
        // const data = await getAllCategories();
        const data = categorias;
        console.log('estas son las categorias: ',data)
        setCategories(data);
        if (data && data?.length > 0) {
          setSelectedCategory(data[0]);
          console.log('esto es el if contiene: ', selectedCategory)
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

    const fetchProducts = async (categoryId: Number) => {
        try {
            setProductsLoading(true)
            // const data = await getProductsByCategoryId(categoryId)  
            const data = productos.filter(product => product.category_id === categoryId)
            console.log('estas son los productos: ',categoryId)
            setProducts(data)
        } catch (error) {
            console.log("Error Fetching Products", error)
        } finally {
            setProductsLoading(false)
        }
    }

    if (selectedCategory?.category_id) {
        fetchProducts(selectedCategory?.category_id)
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
