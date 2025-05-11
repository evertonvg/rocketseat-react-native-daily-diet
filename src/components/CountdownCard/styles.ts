import styled, { css } from "styled-components/native";

export type CardTypeStyleProps = boolean;

export const Container = styled.View`
  width: 100%;
  flex: 1;
  height: 89px;
  align-items: center;
  justify-content: center; 
  position: relative;
  border-radius: 8px;
  padding: 16px;
  
  ${({ theme, type = 'NEUTRAL' }) => css`
    background-color: ${theme.COLORS.GRAY_600};
    box-sizing: border-box;
    background-color: ${ type ==='NEGATIVE' ?theme.COLORS.RED_LIGHT : type ==='POSITIVE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.GRAY_600};
  `};
`;

export const PercentText = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    background-color:  ${theme.COLORS.GRAY_100}px;
  `};
`
export const DetailText = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;	
    background-color:  ${theme.COLORS.GRAY_200}px;
  `};
`





