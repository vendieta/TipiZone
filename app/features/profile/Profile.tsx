import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAuthStore} from '@/src/state/authStore';
import {useCartStore} from '@/src/state/cartStore';
import {fetchCustomerOrders} from '@/src/service/orderService';
import CustomHeader from '@/components/ui/CustomHeader';
import ProfileOrderItem from './ProfileOrderItem';
import CustomText from '@/components/ui/CustomText';
import {Fonts} from '@/src/utils/Constants';
import ActionButton from './ActionButton';
import {storage, tokenStorage} from '@/src/state/storage';
import {resetAndNavigate} from '@/src/utils/NavigationUtils';
import WalletSection from './WalletSection';

const Profile = () => {
  const [orders, setOrders] = useState([]);
  const {logout, user} = useAuthStore();
  const {clearCart} = useCartStore();

  const fetchOrders = async () => {
    const data = await fetchCustomerOrders(user?._id);
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const renderHeader = () => {
    return (
      <View>
        <CustomText variant="h3" fontFamily={Fonts.SemiBold}>
          Your account
        </CustomText>
        <CustomText variant="h7" fontFamily={Fonts.Medium}>
          {user?.phone}
        </CustomText>

        <WalletSection />

        <CustomText variant="h8" style={styles.informativeText}>
          YOUR INFORMATION
        </CustomText>

        <ActionButton icon="book-outline" label="Address book" />
        <ActionButton icon="information-circle-outline" label="About us" />
        {/* <ActionButton
          icon="log-out-outline"
          label="Logout"
          onPress={() => {
            clearCart();
            logout();
            tokenStorage.clearAll();
            storage.clearAll();
            resetAndNavigate('CustomerLogin');
          }}
        /> */}

        <CustomText variant="h8" style={styles.pastText}>
          PAST ORDERS
        </CustomText>
      </View>
    );
  };

  const renderOrders = ({item, index}: any) => {
    return <ProfileOrderItem item={item} index={index} />;
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Profile" />

      <FlatList
        data={orders}
        ListHeaderComponent={renderHeader}
        renderItem={renderOrders}
        keyExtractor={(item: any) => item?.orderId}
        contentContainerStyle={styles.scrollViewContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    padding: 10,
    paddingTop: 20,
    paddingBottom: 100,
  },
  informativeText: {
    opacity: 0.7,
    marginBottom: 20,
  },
  pastText: {
    marginVertical: 20,
    opacity: 0.7,
  },
});

export default Profile;
