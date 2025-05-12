
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
import { format, startOfDay } from 'date-fns';

export interface Food {
    name: string;
    datehour: Date;
    isInDiet: boolean;
    description: string;
}
export interface DateHour{
    datehour: Date
}


export function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [dates, setDates] = useState<DateHour[]>([
        {datehour: new Date("2025-02-12")},
        {datehour: new Date("2022-11-13")},
        {datehour: new Date("2023-11-15")},
        {datehour: new Date("2024-01-20")}
    ]);
    const [foods, setFoods] = useState<Food[]>([
        { name: "Soup", datehour: new Date("2025-02-12T08:55:00"), isInDiet: false, description: "A healthy choice." },
        { name: "Chicken", datehour: new Date("2024-01-20T07:06:00"), isInDiet: true, description: "A cheat meal." },
        { name: "Apple", datehour: new Date("2023-11-15T01:56:00"), isInDiet: true, description: "A quick snack." },
        { name: "Rice", datehour: new Date("2023-11-15T16:51:00"), isInDiet: true, description: "A hearty dinner." },
        { name: "Burger", datehour: new Date("2023-11-15T05:29:00"), isInDiet: false, description: "A healthy choice." },
        { name: "Chicken", datehour: new Date("2024-01-20T19:19:00"), isInDiet: true, description: "A quick snack." },
        { name: "Soup", datehour: new Date("2024-01-20T08:23:00"), isInDiet: false, description: "A quick snack." },
        { name: "Sushi", datehour: new Date("2023-11-15T11:01:00"), isInDiet: true, description: "A quick snack." },
        { name: "Soup", datehour: new Date("2024-01-20T09:26:00"), isInDiet: false, description: "A quick snack." },
        { name: "Cake", datehour: new Date("2022-11-13T13:05:00"), isInDiet: false, description: "A fresh dessert." },
        { name: "Soup", datehour: new Date("2024-01-20T06:48:00"), isInDiet: true, description: "A fresh dessert." },
        { name: "Burger", datehour: new Date("2025-02-12T01:27:00"), isInDiet: false, description: "A healthy choice." },
        { name: "Rice", datehour: new Date("2022-11-13T00:50:00"), isInDiet: true, description: "A healthy choice." },
        { name: "Sushi", datehour: new Date("2023-11-15T21:58:00"), isInDiet: false, description: "A hearty dinner." },
        { name: "Burger", datehour: new Date("2025-02-12T07:49:00"), isInDiet: false, description: "A fresh dessert." }
    ]);
    
    const adjustToBrazilUTC = (date: Date): Date => {
        const offset = 3 * 60 * 60 * 1000;
        const brasilDate = new Date(date.getTime() - offset);
        return brasilDate;
    };

    const isSameDate = (date1: Date, date2: Date): boolean => {

        console.warn(date1.getDate(),date2.getDate())
        return (
            adjustToBrazilUTC(date1).getFullYear() === adjustToBrazilUTC(date2).getFullYear() &&
            adjustToBrazilUTC(date1).getMonth() === adjustToBrazilUTC(date2).getMonth() &&
            adjustToBrazilUTC(date1).getDate() === adjustToBrazilUTC(date2).getDate()
        );
    };

    useEffect(()=>{
        const d = dates
        setDates(d.sort((a, b) => b.datehour.getTime() - a.datehour.getTime()))

        const f = foods
        setFoods(f.sort((a, b) => b.datehour.getTime() - a.datehour.getTime()))

    },[])


    const handleNavigateToDetails = () => { 
        navigate("Details");
    };
    const handleNavigateToCreateFood = () =>{
        navigate("CreateFood")
    }
    const handleNavigateToViewFood = () =>{
        navigate("ViewFood")
    }

    return(
        <Container>
            <MainHeader />
            <StatisticsCard type={true} statistic={90.02} onPress={handleNavigateToDetails}/>
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
                    keyExtractor={item => format(item.datehour, "dd/MM/yyyy")}
                    renderItem={({ item }) => (
                        <>
                            <Data data={format(startOfDay(item.datehour), "dd/MM/yyyy").replaceAll('/','.')}/>
                            <FlatList 
                            
                                data={foods.filter((food)=>{
                                    isSameDate(food.datehour,item.datehour)
                                })}

                                keyExtractor={item => item.name}
                                renderItem={({ item }) => (
                                    <SnackItem
                                        onPress={handleNavigateToViewFood} 
                                        title={item.name}
                                        time="08:00"
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