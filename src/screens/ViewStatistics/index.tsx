
import { Container, Grid, HalfGrid, FullGrid, Text } from './styles';
import { useEffect, useState } from 'react';
import { StatisticsHeader } from '@components/StatisticsHeader';
import { CountdownCard } from '@components/CountdownCard';
import { useRoute } from "@react-navigation/native";

export function ViewStatistics() {
    const route = useRoute();
    const { onDietPercentage } = route.params as { onDietPercentage: number };
    const { totalFoods } = route.params as { totalFoods: number };
    const { onDietCount } = route.params as { onDietCount: number };
    const { outDietCount } = route.params as { outDietCount: number };
    const { bestSequence } = route.params as { bestSequence: number };

    return( 
        <Container>
            <StatisticsHeader 
                statistic={onDietPercentage} 
                type={onDietPercentage > 50 ? 'POSITIVE' : 'NEGATIVE'}
                textType='SMALL'
                text='das refeições dentro da dieta' />
            <Text>
                Estatísticas gerais
            </Text>
            <Grid>
                <FullGrid>
                    <CountdownCard quantity={bestSequence} text='melhor sequência de pratos dentro da dieta' type='NEUTRAL' />
                    <CountdownCard quantity={totalFoods} text='refeições registradas' type='NEUTRAL' /> 
                </FullGrid>
                <HalfGrid>
                    <CountdownCard quantity={onDietCount} text='refeições dentro da dieta' type='POSITIVE' />
                    <CountdownCard quantity={outDietCount} text='refeições fora da dieta' type='NEGATIVE' />
                </HalfGrid>
            </Grid>
        </Container> 
    )
}