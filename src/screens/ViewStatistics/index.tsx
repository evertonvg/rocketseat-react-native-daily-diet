
import { Container, Grid, HalfGrid, FullGrid, Text } from './styles';
import { useState } from 'react';
import { StatisticsHeader } from '@components/StatisticsHeader';
import { CountdownCard } from '@components/CountdownCard';

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@routes/index";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export function ViewStatistics({ navigation }: Props) {
    const [isInDiet, setIsInDiet] = useState(true);

    const handleNavigateToHome = () => {
        console.warn('handleNavigateToHome')
        navigation.navigate("Home");
    };

    return(
        <Container>
            <StatisticsHeader back={handleNavigateToHome} statistic={90.24} type={isInDiet} />
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