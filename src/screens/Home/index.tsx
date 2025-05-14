import { Container, Mask, Text } from './styles';
import { useCallback, useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';


import { Data } from '@components/Data';
import { Button } from '@components/Button';
import { MainHeader } from '@components/MainHeader';
import { SnackItem } from '@components/SnackItem';
import { StatisticsCard } from '@components/StatisticsCard';
import { Loading } from '@components/Loading';
import { ListEmpty } from '@components/Empty';

import { foodsGetAll } from '@storage/food/foodGetAll';
import { navigate } from '@routes/NavigationService';

import { findLongestInDietSequence } from '@utils/BestSequence';
export interface Food {
    id?:string;
    name: string;
    datehour: Date;
    date: string;
    hour:string;
    isInDiet: boolean;
    description: string;
}

export function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [dates, setDates] = useState<string[]>([]);
    const [onDietPercentage,setOnDietPercentage] = useState<number>(0);
    const [onDietCount,setOnDietCount] = useState<number>(0);
    const [outDietCount,setOutDietCount] = useState<number>(0);
    const [totalFoods,setTotalFoods] = useState<number>(0);
    const [bestSequence,setBestSequence] = useState<number>(0);

    const [foods, setFoods] = useState<Food[]>([]); 

    async function fetchFoods() {
        try {
            setIsLoading(true);
            const data = await foodsGetAll();
   
            setFoods(data);

            let dates = data.map(item => item.date);
            dates = [...new Set(dates)];
            setDates(dates);

            setTotalFoods(data.length);

            const foodsOnDiet = data.filter((food) => food.isInDiet);

            const percentage = data.length 
                ? parseFloat((Number(foodsOnDiet.length * 100) / data.length).toFixed(2)) 
                : 0;

            setOnDietPercentage(percentage);
            setOnDietCount(foodsOnDiet.length);
            setOutDietCount(data.length - foodsOnDiet.length);

            const bestSequence = findLongestInDietSequence(data);
            setBestSequence(bestSequence);

        } catch (error) {
            Alert.alert("Alimentos", "Não foi possível carregar os alimentos");
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleNavigateToDetails = () => { 
        navigate("Details",{
            totalFoods,
            onDietPercentage,
            onDietCount,
            outDietCount,
            bestSequence,
        });
    };
    const handleNavigateToCreateFood = () =>{
        navigate("CreateFood",{
            headerTitle: 'Nova refeição',
            headerStyle: 'NEUTRAL'
        })
    }
    const handleNavigateToViewFood = (id:string) =>{
        navigate("ViewFood",{
            id,
        })
    }

    useFocusEffect(useCallback(() => {
        fetchFoods()
    },[]))

    return(
        <Container>
            <MainHeader />
            <StatisticsCard type={onDietPercentage > 50? true : false} statistic={onDietPercentage} onPress={handleNavigateToDetails}/>
            <Text>Refeições</Text>
            
            <Button 
                title="Nova refeição"
                size="LARGE"
                type="PRIMARY"
                icon="plus"
                onPress={handleNavigateToCreateFood}
            />
            
            {isLoading ? <Loading /> : <>
                <FlatList
                    data={dates}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={({ item }) => (
                        <>
                            <Data data={item}/>
                            <FlatList 
                                data={foods.filter((food)=>{
                                    return food.date == item
                                })}

                                keyExtractor={(item) => item.id || item.name }

                                renderItem={({ item }) => (
                                    <SnackItem
                                        onPress={()=>{handleNavigateToViewFood(
                                            item.id || '',
                                        )}} 
                                        title={item.name}
                                        time={item.hour}
                                        status={item.isInDiet}
                                    />
                                )}
                                contentContainerStyle={foods.length === 0 && { flex: 1 }}
                                
                            />
                        </>
                    )}
                    contentContainerStyle={foods.length === 0 && { flex: 1 }}
                    ListEmptyComponent={() => (
                        <ListEmpty />
                    )}
                />
            </>
              
            }
             
        </Container> 
    )
}