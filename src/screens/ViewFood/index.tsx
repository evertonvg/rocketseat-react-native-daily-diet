
import { Container, FlexEnd, Title, Description, SubTitle, DietStatus, DietText, Ball } from './styles';
import { useState } from 'react';
import { StatisticsHeader } from '@components/StatisticsHeader';
import { Button } from '@components/Button';

export function ViewFood() {
    const [isInDiet, setIsInDiet] = useState(true);
    return(
        <Container>
            <StatisticsHeader 
                type='POSITIVE'
                textType='MIDDLE'
                text='Refeição' 
            />
            <Title>
                X-tudo
            </Title>
            <Description>
                Xis completo da lancheria do bairro
            </Description>
            <SubTitle>
                Data e hora
            </SubTitle>
            <Description>
                12/08/2022 às 20:00
            </Description>
            <DietStatus>
                <Ball variant={true}></Ball>
                <DietText>
                    fora da dieta
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