import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { navigationRef } from '@/src/utils/NavigationUtils';
import SplashScreen from '../../app/features/auth/SplashScreen';
import DeliveryLogin from '@/app/features/auth/DeliveryLogin';
import CustomerLogin from '@/app/features/auth/CustomerLogin';
import ProductDashboard from '@/app/features/dashboard/ProductDashboard';
import DeliveryDashboard from '@/app/features/delivery/DeliveryDashboard';
import ProductCategories from '@/app/features/category/ProductCategories';
import ProductOrder from '@/app/features/order/ProductOrder';
import OrderSuccess from '@/app/features/order/OrderSuccess';
import LiveTracking from '@/app/features/map/LiveTracking';
import Profile from '@/app/features/profile/Profile';
import DeliveryMap from '@/app/features/delivery/DeliveryMap';
import HomeLogin from '@/app/features/homeLogin/HomeLogin';

const Stack = createNativeStackNavigator();
const Navigation: FC = () => {
    return (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
        headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="ProductDashboard" component={ProductDashboard} />
        <Stack.Screen name="DeliveryDashboard" component={DeliveryDashboard} />
        <Stack.Screen name="ProductCategories" component={ProductCategories} /> 
        <Stack.Screen name="ProductOrder" component={ProductOrder} />
        <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="LiveTracking" component={LiveTracking} /> 
        <Stack.Screen name="DeliveryMap" component={DeliveryMap} />
        <Stack.Screen
            options={{
                animation: 'fade',
            }}
            name="DeliveryLogin"
            component={DeliveryLogin}
        />
        <Stack.Screen
            options={{
                animation: 'fade',
            }}
            name="HomeLogin"
            component={HomeLogin}
        />
        <Stack.Screen
          options={{
            animation: 'fade',
          }}
          name="CustomerLogin"
          component={CustomerLogin}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;