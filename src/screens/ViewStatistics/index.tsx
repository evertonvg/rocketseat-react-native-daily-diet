
import { Container, Grid, HalfGrid, FullGrid, Text } from './styles';
import { useState } from 'react';
import { StatisticsHeader } from '@components/StatisticsHeader';
import { CountdownCard } from '@components/CountdownCard';

export function ViewStatistics() {
    const [isInDiet, setIsInDiet] = useState(true);
    return(
        <Container>
            <StatisticsHeader 
                statistic={90.24} 
                type='POSITIVE'
                textType='SMALL'
                text='das refeições dentro da dieta' />
            <Text>
                Estatísticas gerais
            </Text>
            <Grid>
                <FullGrid>
                    <CountdownCard quantity={90.24} text='melhor sequência de pratos dentro da dieta' type='NEUTRAL' />
                    <CountdownCard quantity={9.76} text='refeições registradas' type='NEUTRAL' /> 
                </FullGrid>
                <HalfGrid>
                    <CountdownCard quantity={90.24} text='refeições dentro da dieta' type='POSITIVE' />
                    <CountdownCard quantity={9.76} text='refeições fora da dieta' type='NEGATIVE' />
                </HalfGrid>
            </Grid>
        </Container> 
    )
}