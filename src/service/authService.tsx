// import { create } from 'zustand';
// import { persist, createJSONStorage } from 'zustand/middleware';
// import * as SecureStore from 'expo-secure-store';

// const expoStorage = {
//     setItem: async (key: string, value: string) => {
//         await SecureStore.setItemAsync(key, value);
//     },
//     getItem: async (key: string): Promise<string | null> => {
//         return await SecureStore.getItemAsync(key);
//     },
//     removeItem: async (key: string) => {
//         await SecureStore.deleteItemAsync(key);
//     }
// };

// interface authStore {
//     user: Record<string, any> | null;
//     setUser: (user: any) => void;
//     setCurrentOrder: (order: any) => void;
//     currentOrder: Record<string, any> | null;
//     logout: () => void;
// }

// export const useAuthStore = create<authStore>()(
//     persist(
//         (set) => ({
//             user: null,
//             currentOrder: null,
//             setCurrentOrder: (order) => set({ currentOrder: order }),
//             setUser: (data) => set({ user: data }),
//             logout: () => set({ user: null, currentOrder: null })
//         }),
//         {
//             name: 'auth-storage',
//             storage: createJSONStorage(() => expoStorage)
//         }
//     )
// );

import axios from 'axios'
import { BASE_URL } from './config'
import { tokenStorage } from '@/src/state/storage'
import { useAuthStore } from '@/src/state/authStore'
import { resetAndNavigate } from '@/src/utils/NavigationUtils'
import { appAxios } from './apiInterceptors'

export const customerLogin = async(phone:string)=>{
    try {
        const response = await axios.post(`${BASE_URL}/customer/login`,{phone})
        const { accessToken,refreshToken,customer}=response.data
        tokenStorage.set("accessToken", accessToken)
        tokenStorage.set("refreshToken", refreshToken)
        const {setUser}=useAuthStore.getState()
        setUser(customer)
    } catch (error) {
        console.log("Login Error", error)
    }
}

export const deliveryLogin = async(email: string, password: string)=>{
    try {
        const response = await axios.post(`${BASE_URL}/delivery/login`, { email, password })
        const { accessToken,refreshToken,deliveryPartner}=response.data
        tokenStorage.set("accessToken", accessToken)
        tokenStorage.set("refreshToken", refreshToken)
        const {setUser}=useAuthStore.getState()
        setUser(deliveryPartner)
    } catch (error) {
        console.log("Login Error", error)
    }
}

export const refresh_tokens = async () => {
    try {
        const refershToken = tokenStorage.getString('refreshToken')
        const response = await axios.post(`${BASE_URL}/refresh-token`, {
            refershToken
        })

        const new_access_token = response.data.accessToken
        const new_refresh_token = response.data.refreshToken


        tokenStorage.set('accessToken', new_access_token)
        tokenStorage.set('refreshToken', new_refresh_token)
        return new_access_token;
    } catch (error) {
        console.log("REFRESH TOKEN ERROR", error)
        tokenStorage.clearAll()
        resetAndNavigate("CustomerLogin")
    }
}

export const refetchUser = async (setUser: any) => {
    try {
        const response = await appAxios.get(`/user`)
        setUser(response.data.user)
    } catch (error) {
        console.log("Login Error", error)
    }
}

export const updateUserLocation = async (data: any, setUser: any) => {
    try {
        const response = await appAxios.patch(`/user`, data)
        refetchUser(setUser)
    } catch (error) {
        console.log("update User Location Error", error)
    }
}
