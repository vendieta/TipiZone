import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '@/src/utils/Constants';
import {useAuthStore} from '@/src/state/authStore';
import DeliveryHeader from '@/components/delivery/DeliveryHeader';
import TabBar from '@/components/delivery/TabBar';
// import Geolocation from '@react-native-community/geolocation';
// import {reverseGeocode} from '@/src/service/mapService';
import {fetchOrders} from '@/src/service/orderService';
import DeliveryOrderItem from '@/components/delivery/DeliveryOrderItem';
import CustomText from '@/components/ui/CustomText';
import withLiveOrder from './withLiveOrder';

const mockOrders = [
  {
    orderId: "ORD-2023-001",
    items: [
      {
        _id: 1,
        item: { name: "Hamburguesa Clásica", price: 8.99 },
        count: 2
      },
      {
        _id: 2,
        item: { name: "Papas Fritas Grandes", price: 4.50 },
        count: 1
      },
      {
        _id: 3,
        item: { name: "Refresco de Cola", price: 2.50 },
        count: 2
      }
    ],
    deliveryLocation: {
      address: "Calle Principal 123, Ciudad, Piso 4A",
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    totalPrice: 24.98,
    createdAt: "2023-05-15T14:30:00Z",
    status: "confirmed"
  },
  {
    orderId: "ORD-2023-002",
    items: [
      {
        _id: 4,
        item: { name: "Pizza Margarita", price: 12.99 },
        count: 1
      },
      {
        _id: 5,
        item: { name: "Ensalada César", price: 7.50 },
        count: 1
      }
    ],
    deliveryLocation: {
      address: "Avenida Central 456, Residencial Las Flores, Casa 12",
      coordinates: { lat: 40.7145, lng: -74.0082 }
    },
    totalPrice: 20.49,
    createdAt: "2023-05-15T12:45:00Z",
    status: "completed"
  },
  {
    orderId: "ORD-2023-003",
    items: [
      {
        _id: 6,
        item: { name: "Sushi Variado (30 piezas)", price: 18.99 },
        count: 1
      },
      {
        _id: 7,
        item: { name: "Sopa Miso", price: 3.99 },
        count: 1
      }
    ],
    deliveryLocation: {
      address: "Boulevard Este 789, Edificio Torre Azul, Apt 302",
      coordinates: { lat: 40.7132, lng: -74.0037 }
    },
    totalPrice: 22.98,
    createdAt: "2023-05-14T19:15:00Z",
    status: "completed"
  },
  {
    orderId: "ORD-2023-004",
    items: [
      {
        _id: 8,
        item: { name: "Pasta Carbonara", price: 11.50 },
        count: 2
      },
      {
        _id: 9,
        item: { name: "Vino Tinto (copa)", price: 6.00 },
        count: 2
      }
    ],
    deliveryLocation: {
      address: "Callejón del Arte 321, Loft 5",
      coordinates: { lat: 40.7150, lng: -74.0100 }
    },
    totalPrice: 35.00,
    createdAt: "2023-05-14T20:30:00Z",
    status: "confirmed"
  },
  {
    orderId: "ORD-2023-005",
    items: [
      {
        _id: 10,
        item: { name: "Ensalada Griega", price: 8.50 },
        count: 1
      },
      {
        _id: 11,
        item: { name: "Hummus con Pan Pita", price: 6.50 },
        count: 1
      },
      {
        _id: 12,
        item: { name: "Agua Mineral", price: 1.50 },
        count: 2
      }
    ],
    deliveryLocation: {
      address: "Plaza Mayor 654, Local 8",
      coordinates: { lat: 40.7118, lng: -74.0075 }
    },
    totalPrice: 18.00,
    createdAt: "2023-05-15T13:20:00Z",
    status: "confirmed"
  }
];

const DeliveryDashboard = () => {
  const {user, setUser} = useAuthStore();
  const [selectedTab, setSelectedTab] = useState<'available' | 'delivered'>(
    'available',
  );
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  // const updateUser = () => {
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       const {latitude, longitude} = position.coords;
  //       reverseGeocode(latitude, longitude, setUser);
  //     },
  //     err => console.log(err),
  //     {
  //       enableHighAccuracy: false,
  //       timeout: 15000,
  //     },
  //   );
  // };

  // useEffect(() => {
  //   updateUser();
  // }, []);

  const fetchData = async () => {
    setData([]);
    setRefreshing(true);
    setLoading(true);
    const data = mockOrders;
    setData(data);
    setRefreshing(false);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [selectedTab]);

  const renderOrderItem = ({item, index}: any) => {
    return <DeliveryOrderItem index={index} item={item} />;
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <DeliveryHeader name={'alejandro'} email={'kafjakjdflkj'} />
        {/* <DeliveryHeader name={user?.name} email={user?.email} /> */}
      </SafeAreaView>
      <View style={styles.subContainer}>
        <TabBar selectedTab={selectedTab} onTabChange={setSelectedTab} />

        <FlatList
          data={data}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={async () => await fetchData()}
            />
          }
          ListEmptyComponent={() => {
            if (loading) {
              return (
                <View style={styles.center}>
                  <ActivityIndicator color={Colors.secondary} size="small" />
                </View>
              );
            }
            return (
              <View style={styles.center}>
                <CustomText>No Orders found yet!</CustomText>
              </View>
            );
          }}
          renderItem={renderOrderItem}
          keyExtractor={item => item.orderId}
          contentContainerStyle={styles.flatlistContaienr}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
    paddingTop: 20
  },
  subContainer: {
    backgroundColor: Colors.backgroundSecondary,
    flex: 1,
    padding: 6,
  },
  flatlistContaienr: {
    padding: 2,
  },
  center: {
    flex: 1,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withLiveOrder(DeliveryDashboard)
