import React from "react";
import { Container, ArrowWrapper, PercentText, DetailText, Middletext } from "./styles";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import { ArrowLeft } from 'phosphor-react-native'

import { goBack } from "@routes/NavigationService";

type Props = {
    statistic?: number;
    type?: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL';
    textType: 'SMALL' | 'MIDDLE';
    text? : string
} 

const handlePress = () => {
    goBack();
};

export function StatisticsHeader({statistic, type = 'NEUTRAL', textType, text, ...rest}: Props) {
  const theme = useTheme();

  let RenderedText;
  if (textType === "MIDDLE") {
    RenderedText = <Middletext>{text}</Middletext>;
  } else {
    RenderedText = <DetailText>{text}</DetailText>;
  }
  
  return (
    <Container type={type} {...rest}>
      <ArrowWrapper>
        <TouchableOpacity onPress={handlePress}>
          <ArrowLeft size={24} color={type ==='POSITIVE' ? theme.COLORS.GREEN_DARK : type ==='NEGATIVE' ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_200 } />
        </TouchableOpacity>
      </ArrowWrapper>
      {statistic && <PercentText>{statistic ? statistic : 0}%</PercentText>}
      
      { RenderedText }
      
    </Container>
  );
}   