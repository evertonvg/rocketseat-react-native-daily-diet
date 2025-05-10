import styled, { css } from "styled-components/native";

export type ButtonTypeProps = "PRIMARY" | "SECONDARY";
export type ButtonSizeProps = "LARGE" | "SMALL";

export const Container = styled.View`
  height: 168px;
  align-items: center;
  justify-content: center;
  gap: 4px;
  position: relative;
  
  ${({ theme, type = true}) => css`
    background-color: ${ type  ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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


export const ArrowWrapper = styled.View`
  position: absolute;
  top: 56px;
  left: 24px;
`;



