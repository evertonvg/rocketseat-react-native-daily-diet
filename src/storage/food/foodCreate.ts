import 'react-native-get-random-values';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';
import { AppError } from '@utils/AppError';

import { foodsGetAll } from './foodGetAll';
import { FOOD_COLLECTION } from '@storage/storageConfig';

import { Food } from '@screens/Home';

export async function foodCreate(newFood: Food) {
  try {
    const storedFoods = await foodsGetAll();

    newFood.id =  uuidv4()
    const storage = JSON.stringify([...storedFoods, newFood])

    await AsyncStorage.setItem(FOOD_COLLECTION, storage);
    
  } catch (error) {
    throw error;
  }
}