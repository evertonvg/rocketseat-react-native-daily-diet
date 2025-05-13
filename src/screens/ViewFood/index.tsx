
import { Container, FlexEnd, Title, Description, SubTitle, DietStatus, DietText, Ball } from './styles';
import { useState } from 'react';
import { useRoute } from "@react-navigation/native";
import { StatisticsHeader } from '@components/StatisticsHeader';
import { Button } from '@components/Button';
import { Alert } from 'react-native';

import { navigate } from '@routes/NavigationService';

import { foodsGetAll } from '@storage/food/foodGetAll';
import { foodRemove } from '@storage/food/foodRemove'

export function ViewFood() {
    const route = useRoute();
    const { id } = route.params as { id: string };
    const { title } = route.params as { title: string };
    const { description } = route.params as { description: string };
    const { date } = route.params as { date: string };
    const { hour } = route.params as { hour: string };
    const { onDiet } = route.params as { onDiet: boolean };
    const { datehour } = route.params as { datehour: Date };

    async function deleteFood(){
        await foodRemove(id)
        navigate("Home")
    }

    const handleNavigateToCreateFood = () =>{
        navigate("CreateFood",{
            headerTitle: 'Editar refeição',
            headerStyle: onDiet ? 'POSITIVE' : 'NEGATIVE',
            id,
            titleParam:title,
            descriptionParam:description,
            dateParam:date,
            hourParam:hour,
            onDietParam:onDiet,
            dateHourParam: datehour
        })
    }

    const handleDeleteFood = ()=>{
        Alert.alert('Remover', `Deseja remover a refeição ${title}?`, [{
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

    return(
        <Container>
            <StatisticsHeader 
                type={onDiet ? 'POSITIVE' : 'NEGATIVE'}
                textType='MIDDLE'
                text='Refeição' 
            />
            <Title>
               {title}
            </Title>
            <Description>
                {description}
            </Description>
            <SubTitle>
                Data e hora
            </SubTitle>
            <Description>
                {date} às {hour}
            </Description>
            <DietStatus>
                <Ball variant={onDiet}></Ball>
                <DietText>
                    {onDiet ? 'Dentro da dieta' : 'fora da dieta'}
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
        </Container> 
    )
}