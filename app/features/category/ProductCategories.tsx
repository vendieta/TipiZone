// import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import {Colors} from '@/src/utils/Constants';
// import withCart from '@/app/features/cart/WithCart';

// // Datos simulados de la base de datos
// const mockDatabase = {
//   categories: [
//     {
//       "_id": "1",
//       "name": "Electrónicos",
//       "description": "Dispositivos electrónicos y gadgets",
//       "image": "https://example.com/electronics.jpg",
//       "createdAt": "2023-10-15T10:00:00Z",
//       "updatedAt": "2023-10-15T10:00:00Z"
//     },
//     {
//       "_id": "2",
//       "name": "Ropa",
//       "description": "Ropa para hombres, mujeres y niños",
//       "image": "https://example.com/clothing.jpg",
//       "createdAt": "2023-10-15T10:05:00Z",
//       "updatedAt": "2023-10-15T10:05:00Z"
//     },
//     {
//       "_id": "3",
//       "name": "Hogar",
//       "description": "Artículos para el hogar",
//       "image": "https://example.com/home.jpg",
//       "createdAt": "2023-10-15T10:10:00Z",
//       "updatedAt": "2023-10-15T10:10:00Z"
//     }
//   ],
//   products: [
//     {
//       "_id": "101",
//       "name": "Smartphone X",
//       "description": "Último modelo con cámara de 108MP",
//       "price": 899.99,
//       "categoryId": "1",
//       "images": [
//         "https://example.com/phone1.jpg",
//         "https://example.com/phone2.jpg"
//       ],
//       "stock": 50,
//       "rating": 4.8,
//       "createdAt": "2023-10-15T10:15:00Z",
//       "updatedAt": "2023-10-15T10:15:00Z"
//     },
//     {
//       "_id": "102",
//       "name": "Laptop Pro",
//       "description": "16GB RAM, 1TB SSD, Intel i7",
//       "price": 1299.99,
//       "categoryId": "1",
//       "images": [
//         "https://example.com/laptop1.jpg"
//       ],
//       "stock": 30,
//       "rating": 4.9,
//       "createdAt": "2023-10-15T10:20:00Z",
//       "updatedAt": "2023-10-15T10:20:00Z"
//     },
//     {
//       "_id": "201",
//       "name": "Camiseta Premium",
//       "description": "100% algodón, talles S-XL",
//       "price": 29.99,
//       "categoryId": "2",
//       "images": [
//         "https://example.com/shirt1.jpg",
//         "https://example.com/shirt2.jpg"
//       ],
//       "stock": 100,
//       "rating": 4.5,
//       "createdAt": "2023-10-15T10:25:00Z",
//       "updatedAt": "2023-10-15T10:25:00Z"
//     },
//     {
//       "_id": "202",
//       "name": "Jeans Clásicos",
//       "description": "Corte recto, color azul",
//       "price": 59.99,
//       "categoryId": "2",
//       "images": [
//         "https://example.com/jeans1.jpg"
//       ],
//       "stock": 75,
//       "rating": 4.7,
//       "createdAt": "2023-10-15T10:30:00Z",
//       "updatedAt": "2023-10-15T10:30:00Z"
//     },
//     {
//       "_id": "301",
//       "name": "Juego de Sábanas",
//       "description": "Algodón egipcio, 600 hilos",
//       "price": 89.99,
//       "categoryId": "3",
//       "images": [
//         "https://example.com/sheets1.jpg",
//         "https://example.com/sheets2.jpg"
//       ],
//       "stock": 40,
//       "rating": 4.6,
//       "createdAt": "2023-10-15T10:35:00Z",
//       "updatedAt": "2023-10-15T10:35:00Z"
//     }
//   ]
// };

// // Servicios simulados
// const getAllCategories = async (): Promise<any[]> => {
//   await new Promise(resolve => setTimeout(resolve, 800));
//   return mockDatabase.categories;
// };

// const getProductsByCategoryId = async (categoryId: string): Promise<any[]> => {
//   await new Promise(resolve => setTimeout(resolve, 600));
//   return mockDatabase.products.filter(product => product.categoryId === categoryId);
// };

// // Componente Sidebar
// const Sidebar = ({categories, selectedCategory, onCategoryPress}: any) => {
//   return (
//     <View style={sidebarStyles.container}>
//       {categories.map((category: any) => (
//         <Text
//           key={category._id}
//           style={[
//             sidebarStyles.categoryItem,
//             selectedCategory?._id === category._id && sidebarStyles.selectedCategory
//           ]}
//           onPress={() => onCategoryPress(category)}>
//           {category.name}
//         </Text>
//       ))}
//     </View>
//   );
// };

// const sidebarStyles = StyleSheet.create({
//   container: {
//     width: 120,
//     backgroundColor: '#f8f8f8',
//     padding: 10,
//   },
//   categoryItem: {
//     padding: 12,
//     marginVertical: 4,
//     borderRadius: 6,
//     color: Colors.text,
//   },
//   selectedCategory: {
//     backgroundColor: Colors.primary,
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// // Componente ProductList
// const ProductList = ({data}: any) => {
//   return (
//     <View style={productListStyles.container}>
//       {data.map((product: any) => (
//         <View key={product._id} style={productListStyles.productCard}>
//           <Text style={productListStyles.productName}>{product.name}</Text>
//           <Text style={productListStyles.productPrice}>${product.price.toFixed(2)}</Text>
//           <Text style={productListStyles.productDescription}>{product.description}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };

// const productListStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   backgroundColor: 'white',
//   },
//   productCard: {
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 8,
//     backgroundColor: '#f9f9f9',
//     borderWidth: 1,
//     borderColor: '#eee',
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: Colors.text,
//     marginBottom: 5,
//   },
//   productPrice: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: Colors.primary,
//     marginBottom: 5,
//   },
//   productDescription: {
//     fontSize: 14,
//     color: Colors.secondary,
//   },
// });

// // Componente CustomHeader (simplificado)
// const CustomHeader = ({title, search}: any) => {
//   return (
//     <View style={headerStyles.container}>
//       <Text style={headerStyles.title}>{title}</Text>
//       {search && <Text style={headerStyles.searchIcon}>🔍</Text>}
//     </View>
//   );
// };

// const headerStyles = StyleSheet.create({
//   container: {
//     height: 60,
//     backgroundColor: Colors.primary,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 15,
//   },
//   title: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   searchIcon: {
//     fontSize: 20,
//     color: 'white',
//   },
// });

// // Componente principal
// const ProductCategories = () => {
//   const [categories, setCategories] = useState<any[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<any>(null);
//   const [products, setProducts] = useState<any[]>([]);
//   const [categoriesLoading, setCategoriesLoading] = useState<boolean>(true);
//   const [productsLoading, setProductsLoading] = useState<boolean>(false);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         setCategoriesLoading(true);
//         const data = await getAllCategories();
//         setCategories(data);
//         if (data && data?.length > 0) {
//           setSelectedCategory(data[0]);
//         }
//       } catch (error) {
//         console.log('Error Fetching Categories', error);
//       } finally {
//         setCategoriesLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async (categoryId: string) => {
//       try {
//         setProductsLoading(true);
//         const data = await getProductsByCategoryId(categoryId);
//         setProducts(data);
//       } catch (error) {
//         console.log("Error Fetching Products", error);
//       } finally {
//         setProductsLoading(false);
//       }
//     }

//     if (selectedCategory?._id) {
//       fetchProducts(selectedCategory?._id);
//     }
//   }, [selectedCategory]);

//   return (
//     <View style={styles.mainContainer}>
//       <CustomHeader title={selectedCategory?.name || 'Categories'} search />
//       <View style={styles.subContainer}>
//         {categoriesLoading ? (
//           <ActivityIndicator size="small" color={Colors.border} />
//         ) : (
//           <Sidebar
//             categories={categories}
//             selectedCategory={selectedCategory}
//             onCategoryPress={(category: any) => setSelectedCategory(category)}
//           />
//         )}

//         {productsLoading ? (
//           <ActivityIndicator
//             size="large"
//             color={Colors.border}
//             style={styles.center}
//           />
//         ) : (
//           <ProductList data={products || []} />
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   subContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   center: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default withCart(ProductCategories);

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
