import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';

import { foodsGetAll } from './foodGetAll';
import { FOOD_COLLECTION } from '@storage/storageConfig';

import { Food } from '@screens/Home';

export async function foodCreate(newFood: Food) {
  try {
    const storedFoods = await foodsGetAll();

    const food = newFood
    const id = uuidv4()
    newFood.id = id

    const storage = JSON.stringify([...storedFoods, newFood])


    await AsyncStorage.setItem(FOOD_COLLECTION, storage);
    
  } catch (error) {
    throw error;
  }
}