import AsyncStorage from '@react-native-async-storage/async-storage';

import { FOOD_COLLECTION } from '@storage/storageConfig';

import {Food} from '@screens/Home'


export async function foodsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(FOOD_COLLECTION);

    const foods: Food[] = storage ? JSON.parse(storage) : [];

    return foods;
  } catch (error) {
    throw error;
  }
}