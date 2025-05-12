
import { Container, FlexEnd, Title, Description, SubTitle, DietStatus, DietText, Ball } from './styles';
import { useState } from 'react';
import { useRoute } from "@react-navigation/native";
import { StatisticsHeader } from '@components/StatisticsHeader';
import { Button } from '@components/Button';
import { hoursToMilliseconds } from 'date-fns';

export function ViewFood() {
    const route = useRoute();
    const { title } = route.params as { title: string };
    const { description } = route.params as { description: string };
    const { date } = route.params as { date: string };
    const { hour } = route.params as { hour: string };
    const { onDiet } = route.params as { onDiet: boolean };


    const [isInDiet, setIsInDiet] = useState(true);
    return(
        <Container>
            <StatisticsHeader 
                type='POSITIVE'
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
            />
            <Button
                title='Excluir refeição'
                icon='trash'
                type='SECONDARY'
            />
        </Container> 
    )
}