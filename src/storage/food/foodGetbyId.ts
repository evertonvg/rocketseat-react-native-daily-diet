import AsyncStorage from '@react-native-async-storage/async-storage';

import { FOOD_COLLECTION } from '@storage/storageConfig';

import {Food} from '@screens/Home'

export async function foodsGetbyId(id:string) {
  try {
    const storage = await AsyncStorage.getItem(FOOD_COLLECTION);

    const foods: Food[] = storage ? JSON.parse(storage) : [];

    const food = foods.filter((f)=>{
        return f.id == id
    })

    return food[0];
  } catch (error) {
    throw error;
  }
}