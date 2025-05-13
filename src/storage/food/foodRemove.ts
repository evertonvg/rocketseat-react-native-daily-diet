import AsyncStorage from '@react-native-async-storage/async-storage';

import { FOOD_COLLECTION } from '@storage/storageConfig';

import { foodsGetAll } from './foodGetAll';
// import { Food } from '@screens/Home';

const isEqual = (obj1: any, obj2: any): boolean => {
  if (typeof obj1 !== typeof obj2) return false;

  if (typeof obj1 !== "object" || obj1 === null || obj2 === null) {
    return obj1 === obj2;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every(key => isEqual(obj1[key], obj2[key]));
};

export async function foodRemove(idFood: string) {
  try {
    const storedFoods = await foodsGetAll();

    const foods = storedFoods.filter((food) => {
          return food.id != idFood
    });

    await AsyncStorage.setItem(FOOD_COLLECTION, JSON.stringify(foods));

  } catch (error) {
    throw error;
  }
}