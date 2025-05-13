import { Container, Mask, Text } from './styles';
import { useCallback, useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { foodsGetAll } from '@storage/food/foodGetAll';
import { Data } from '@components/Data';
import { Button } from '@components/Button';
import { MainHeader } from '@components/MainHeader';
import { SnackItem } from '@components/SnackItem';
import { StatisticsCard } from '@components/StatisticsCard';
import { Loading } from '@components/Loading';
import { ListEmpty } from '@components/Empty';

import { navigate } from '@routes/NavigationService';

export interface Food {
    name: string;
    datehour?: Date;
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

    async function fetchGroups() {
        try {
            setIsLoading(true);
            const data = await foodsGetAll();
   
            const sortedFoods = data.sort((a, b) => {
                const data1 = new Date(b.datehour);
                const data2 = new Date(a.datehour);
                return data1.getTime() - data2.getTime();
            });

            setFoods(sortedFoods);

            let dates = sortedFoods.map(item => item.date);
            dates = [...new Set(dates)];
            setDates(dates);

            setTotalFoods(sortedFoods.length);

            const foodsOnDiet = sortedFoods.filter((food) => food.isInDiet);

            const percentage = sortedFoods.length 
                ? parseFloat((Number(foodsOnDiet.length * 100) / sortedFoods.length).toFixed(2)) 
                : 0;

            setOnDietPercentage(percentage);
            setOnDietCount(foodsOnDiet.length);
            setOutDietCount(sortedFoods.length - foodsOnDiet.length);

            const bestSequence = findLongestInDietSequence(sortedFoods);
            setBestSequence(bestSequence);

        } catch (error) {
            Alert.alert("Alimentos", "Não foi possível carregar os alimentos");
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    const findLongestInDietSequence = (data:Food[]) => {
        let maxSequence = 0;
        let currentSequence = 0;

        data.forEach(item => {
            if (item.isInDiet) {
                currentSequence++;
                maxSequence = Math.max(maxSequence, currentSequence);
            } else {
                currentSequence = 0;
            }
        });

        return maxSequence;
    };

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
        navigate("CreateFood")
    }
    const handleNavigateToViewFood = (title:string,description:string,date:string,hour:string,onDiet:boolean,datehour:Date) =>{
        navigate("ViewFood",{
            title,
            description,
            date,
            hour,
            onDiet,
            datehour,
        })
    }

    // useEffect(()=>{
    //     fetchGroups()
    // },[])
    useFocusEffect(useCallback(() => {
        fetchGroups()
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

                                keyExtractor={(item,index) => index.toString()}
                                renderItem={({ item }) => (
                                    <SnackItem
                                        onPress={()=>{handleNavigateToViewFood(
                                            item.name,
                                            item.description,
                                            item.date,
                                            item.hour,
                                            item.isInDiet,
                                            item.datehour
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
             
            {/* <Mask colors={["rgba(256, 256, 256, 0.1)", "rgba(256, 256, 256, 0.9)"]} /> */}
        </Container> 
    )
}