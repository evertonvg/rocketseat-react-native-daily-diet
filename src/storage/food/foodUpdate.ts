import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';

import { foodsGetAll } from './foodGetAll';
import { FOOD_COLLECTION } from '@storage/storageConfig';

import { Food } from '@screens/Home';

export async function foodCUpdate(updatedFood: Food) {
  try {
    const storedFoods = await foodsGetAll();

    const updateFoods = storedFoods.map((food)=>{
        if(updatedFood.id == food.id){
            return {
                id: updatedFood.id,
                name: updatedFood.name,
                description: updatedFood.description,
                date: updatedFood.date,
                hour: updatedFood.hour,
                isInDiet: updatedFood.isInDiet,
                datehour: updatedFood.datehour
            }
        }
        return food
    })

    const storage = JSON.stringify(updateFoods)
    await AsyncStorage.setItem(FOOD_COLLECTION, storage);
    
  } catch (error) {
    throw error;
  }
}