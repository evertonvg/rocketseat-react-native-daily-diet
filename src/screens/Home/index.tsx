
import { Container, Text } from './styles';
import { Button } from '@components/Button';
import { MainHeader } from '@components/MainHeader';
import { StatisticsCard } from '@components/StatisticsCard';
import { useState } from 'react';

export function Home() {
    const [isInDiet, setIsInDiet] = useState(true);
    return(
        <Container>
            <MainHeader />
            <StatisticsCard type={isInDiet} statistic={90.02} />
            <Text>Refeições</Text>
            <Button 
                title="Nova refeição"
                size="LARGE"
                type="SECONDARY"
                icon="plus"
                onPress={() => {console.warn('nova refeição')}} 
            />
        </Container> 
    )
}