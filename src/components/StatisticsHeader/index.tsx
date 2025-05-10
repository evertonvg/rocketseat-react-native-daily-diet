import React from "react";
import { Container, ArrowWrapper, PercentText, DetailText } from "./styles";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import { ArrowLeft } from 'phosphor-react-native'
import { CardTypeStyleProps } from "@components/StatisticsCard/styles";

type Props =  {
    statistic: number;
    type?: CardTypeStyleProps;
    back: () => void;
} 

export function StatisticsHeader({statistic, type = true, back, ...rest}: Props) {
  const theme = useTheme();
  
  return (
    <Container type={type} {...rest}>
      <ArrowWrapper>
        <TouchableOpacity onPress={back}>
          <ArrowLeft size={24} color={type ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK } />
        </TouchableOpacity>
      </ArrowWrapper>
      <PercentText>{statistic}%</PercentText>
      <DetailText>
        das refeições dentro da dieta
      </DetailText>
    </Container>
  );
}   