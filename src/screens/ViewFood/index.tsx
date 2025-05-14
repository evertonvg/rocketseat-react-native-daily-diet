
import { Container, FlexEnd, Title, Description, SubTitle, DietStatus, DietText, Ball, ContentContainer } from './styles';
import { useCallback, useState } from 'react';
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { StatisticsHeader } from '@components/StatisticsHeader';
import { Button } from '@components/Button';
import { Alert } from 'react-native';

import { navigate } from '@routes/NavigationService';

import { foodsGetbyId } from '@storage/food/foodGetbyId';
import { foodRemove } from '@storage/food/foodRemove'
import { Food } from '@screens/Home';

export function ViewFood() {
    const route = useRoute();
    const { id } = route.params as { id: string };

    const [food,setFood] = useState<Food>()
    const [isLoading, setIsLoading] = useState(false);

    async function fetchFood() {
            try {
                setIsLoading(true);
                const data = await foodsGetbyId(id);
          
                setFood(data);
    
            } catch (error) {
                Alert.alert("Alimento", "Não foi possível carrega os dados do alimento");
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
    

    async function deleteFood(){
        await foodRemove(id)
        navigate("Home")
    }

    const handleNavigateToCreateFood = () =>{
        navigate("CreateFood",{
            headerTitle: 'Editar refeição',
            headerStyle: food?.isInDiet ? 'POSITIVE' : 'NEGATIVE',
            id,
            titleParam:food?.name,
            descriptionParam:food?.description,
            dateParam:food?.date,
            hourParam:food?.hour,
            onDietParam:food?.isInDiet,
            dateHourParam: food?.datehour
        })
    }

    const handleDeleteFood = ()=>{
        Alert.alert('Remover', `Deseja remover a refeição ${food?.name}?`, [{
        text: 'Remover',
        onPress: () => {
          deleteFood()
        },
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ])}

    useFocusEffect(useCallback(() => {
        fetchFood()
    },[]))

    return(
        <Container>
            <StatisticsHeader 
                type={food?.isInDiet ? 'POSITIVE' : 'NEGATIVE'}
                textType='MIDDLE'
                text='Refeição' 
            />
            <ContentContainer>
                <Title>
                    {food?.name}
                </Title>
                <Description>
                    {food?.description}
                </Description>
                <SubTitle>
                    Data e hora
                </SubTitle>
                <Description>
                    {food?.date} às {food?.hour}
                </Description>
                <DietStatus>
                    {food && <Ball variant={food.isInDiet}></Ball>}
                    <DietText>
                        {food?.isInDiet ? 'Dentro da dieta' : 'fora da dieta'}
                    </DietText>
                </DietStatus>
                <FlexEnd/>
                <Button
                    title='Editar Refeição'
                    icon='pencil'
                    onPress={handleNavigateToCreateFood}
                />
                <Button
                    title='Excluir refeição'
                    icon='trash'
                    type='SECONDARY'
                    onPress={handleDeleteFood}
                />
            </ContentContainer>
        </Container> 
    )
}