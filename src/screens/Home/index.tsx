
import { Data } from '@components/Data';
import { Container, Mask, Text } from './styles';
import { Button } from '@components/Button';
import { MainHeader } from '@components/MainHeader';
import { SnackItem } from '@components/SnackItem';
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
                type="PRIMARY"
                icon="plus"
                onPress={() => {console.warn('nova refeição')}} 
            />
            <Data data="12.08.22"/>
            <SnackItem
                title="Café da manhã"
                time="08:00"
                status="FAILURE"
             />
             <SnackItem
                title="Café da manhã"
                time="08:00"
                status="FAILURE"
             />
             <SnackItem
                title="Café da manhã"
                time="08:00"
                status="FAILURE"
             />
             <SnackItem
                title="Café da manhã"
                time="08:00"
                status="FAILURE"
             />
             <SnackItem
                title="Café da manhã"
                time="08:00"
                status="FAILURE"
             />
             <SnackItem
                title="Café da manhã"
                time="08:00"
                status="FAILURE"
             />
             <SnackItem
                title="Café da manhã"
                time="08:00"
                status="FAILURE"
             />
             <SnackItem
                title="Café da manhã"
                time="08:00"
                status="FAILURE"
             />
             <SnackItem
                title="Café da manhã"
                time="08:00"
                status="FAILURE"
             />
            <Mask colors={["rgba(256, 256, 256, 0.1)", "rgba(256, 256, 256, 0.9)"]} />
        </Container> 
    )
}