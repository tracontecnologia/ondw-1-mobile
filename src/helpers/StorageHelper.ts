import AsyncStorage from '@react-native-async-storage/async-storage';

async function setItem(key: string, value: any) {
  await AsyncStorage.setItem(key, JSON.stringify(value));
}

async function getItem(key: string) {
  const storage = await AsyncStorage.getItem(key);
  return JSON.parse(storage || '{}');
}

async function removeItem(key: string) {
  await AsyncStorage.removeItem(key);
}

export const StorageHelper = {
  setItem,
  getItem,
  removeItem,
};
