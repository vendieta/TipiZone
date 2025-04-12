import * as SecureStore from 'expo-secure-store';

export const tokenStorage = {
    set: (key: string, value: string) => {
        SecureStore.setItemAsync(`token-${key}`, value);
    },
    getString: async (key: string): Promise<string | null> => {
        const value = await SecureStore.getItemAsync(`token-${key}`);
        return value ?? null;
    },
    delete: (key: string) => {
        SecureStore.deleteItemAsync(`token-${key}`);
    }
};

export const storage = {
    set: (key: string, value: string) => {
        SecureStore.setItemAsync(`app-${key}`, value);
    },
    getString: async (key: string): Promise<string | null> => {
        const value = await SecureStore.getItemAsync(`app-${key}`);
        return value ?? null;
    },
    delete: (key: string) => {
        SecureStore.deleteItemAsync(`app-${key}`);
    }
};

export const mmkvStorage = {
    setItem: (key: string, value: string) => {
        storage.set(key, value);
    },
    getItem: async (key: string): Promise<string | null> => {
        return await storage.getString(key);
    },
    removeItem: (key: string) => {
        storage.delete(key);
    }
};


// import { MMKV } from 'react-native-mmkv'

// export const tokenStorage = new MMKV({
//     id: 'token-storage',
//     encryptionKey: "some_secret_key"
// })

// export const storage = new MMKV({
//     id: 'my-app-storage',
//     encryptionKey: "some_secret_key"
// })

// export const mmkvStorage = {
//     setItem: (key: string, value: string) => {
//         storage.set(key, value)
//     },
//     getItem: (key: string) => {
//         const value = storage.getString(key)
//         return value ?? null;
//     },
//     removeItem: (key: string) => {
//         storage.delete(key)
//     }
// }