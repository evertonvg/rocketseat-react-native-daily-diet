import AsyncStorage from '@react-native-async-storage/async-storage';

import { FOOD_COLLECTION } from '@storage/storageConfig';

import {Food} from '@screens/Home'


export async function foodsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(FOOD_COLLECTION);

    const foods: Food[] = storage ? JSON.parse(storage) : [];

      const sortedFoodsByDate = foods.sort((a, b) => {
        const data1 = new Date(b.datehour);
        const data2 = new Date(a.datehour);
        return data1.getTime() - data2.getTime();
      });

    return sortedFoodsByDate;
  } catch (error) {
    throw error;
  }
}