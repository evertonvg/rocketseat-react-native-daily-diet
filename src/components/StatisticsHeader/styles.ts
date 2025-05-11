import styled, { css } from "styled-components/native";

export const Container = styled.View`
  height: auto;
  padding: 40px 0;
  align-items: center;
  justify-content: center;
  gap: 4px;
  position: relative;
  
  ${({ theme, type = 'NEUTRAL'}) => css`
    background-color: ${ type ==='POSITIVE'  ? theme.COLORS.GREEN_LIGHT : type ==='NEGATIVE'?  theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_500 };
  `};
`;

export const PercentText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    background-color:  ${theme.COLORS.GRAY_100}px;
    text-align: center;
  `};
`
export const DetailText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;	
    background-color:  ${theme.COLORS.GRAY_200}px;
    text-align: center;
  `};
`
export const Middletext = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;	
    background-color:  ${theme.COLORS.GRAY_100}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    text-align: center;
  `};
`

export const ArrowWrapper = styled.View`
  position: absolute;
  top: 40px;
  left: 24px;
`;




