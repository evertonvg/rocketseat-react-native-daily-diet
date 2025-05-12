
import { Data } from '@components/Data';
import { Container, Mask, Text } from './styles';
import { Button } from '@components/Button';
import { MainHeader } from '@components/MainHeader';
import { SnackItem } from '@components/SnackItem';
import { StatisticsCard } from '@components/StatisticsCard';

import { useEffect, useState } from 'react';
import { navigate } from '@routes/NavigationService';
import { FlatList } from 'react-native';
import { Loading } from '@components/Loading';
import { ListEmpty } from '@components/Empty';
import { format, isEqual, startOfDay } from 'date-fns';

export interface Food {
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

    const [foods, setFoods] = useState<Food[]>([
        { name: "Soup", datehour: new Date("2025-02-12T08:55:00"), isInDiet: false, description: "A healthy choice.", date: "12/02/2025", hour: "08:55" },
        { name: "Chicken", datehour: new Date("2024-01-20T07:06:00"), isInDiet: true, description: "A cheat meal.", date: "20/01/2024", hour: "07:06" },
        { name: "Apple", datehour: new Date("2023-11-15T01:56:00"), isInDiet: true, description: "A quick snack.", date: "15/11/2023", hour: "01:56" },
        { name: "Rice", datehour: new Date("2023-11-15T16:51:00"), isInDiet: true, description: "A hearty dinner.", date: "15/11/2023", hour: "16:51" },
        { name: "Burger", datehour: new Date("2023-11-15T05:29:00"), isInDiet: false, description: "A healthy choice.", date: "15/11/2023", hour: "05:29" },
        { name: "Chicken", datehour: new Date("2024-01-20T19:19:00"), isInDiet: true, description: "A quick snack.", date: "20/01/2024", hour: "19:19" },
        { name: "Soup", datehour: new Date("2024-01-20T08:23:00"), isInDiet: false, description: "A quick snack.", date: "20/01/2024", hour: "08:23" },
        { name: "Sushi", datehour: new Date("2023-11-15T11:01:00"), isInDiet: true, description: "A quick snack.", date: "15/11/2023", hour: "11:01" },
        { name: "Soup", datehour: new Date("2024-01-20T09:26:00"), isInDiet: false, description: "A quick snack.", date: "20/01/2024", hour: "09:26" },
        { name: "Cake", datehour: new Date("2022-11-13T13:05:00"), isInDiet: false, description: "A fresh dessert.", date: "13/11/2022", hour: "13:05" },
        { name: "Soup", datehour: new Date("2024-01-20T06:48:00"), isInDiet: true, description: "A fresh dessert.", date: "20/01/2024", hour: "06:48" },
        { name: "Burger", datehour: new Date("2025-02-12T01:27:00"), isInDiet: false, description: "A healthy choice.", date: "12/02/2025", hour: "01:27" },
        { name: "Rice", datehour: new Date("2022-11-13T00:50:00"), isInDiet: true, description: "A healthy choice.", date: "13/11/2022", hour: "00:50" },
        { name: "Sushi", datehour: new Date("2023-11-15T21:58:00"), isInDiet: false, description: "A hearty dinner.", date: "15/11/2023", hour: "21:58" },
        { name: "Burger", datehour: new Date("2025-02-12T07:49:00"), isInDiet: false, description: "A fresh dessert.", date: "12/02/2025", hour: "07:49" }

    ]);
    
   
    useEffect(()=>{

        const f = foods
        setFoods(f.sort((a, b) => b.datehour.getTime() - a.datehour.getTime()))

        let dates = foods.map(item => item.date);
        dates = [...new Set(dates)]
        if(dates.length){
            setDates(dates)
        }else{
            setDates([])
        }

        setTotalFoods(foods.length)

        const foodsOnDiet = foods.filter((food)=>{
            return food.isInDiet
        })

        const percentage = parseFloat((Number(foodsOnDiet.length * 100) / foods.length).toFixed(2));
        setOnDietPercentage(percentage);
        setOnDietCount(foodsOnDiet.length)
        setOutDietCount(totalFoods - foodsOnDiet.length)

        const bestSequence = findLongestInDietSequence(foods);

        setBestSequence(bestSequence)

    },[])

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
            bestSequence
        });
    };
    const handleNavigateToCreateFood = () =>{
        navigate("CreateFood")
    }
    const handleNavigateToViewFood = (title:string,description:string,date:string,hour:string,onDiet:boolean) =>{
        navigate("ViewFood",{
            title,
            description,
            date,
            hour,
            onDiet
        })
    }

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
                                            item.isInDiet
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