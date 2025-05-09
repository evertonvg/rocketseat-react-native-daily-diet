import styled, { css } from "styled-components/native";

export type CardTypeStyleProps = boolean;

export const Container = styled.TouchableOpacity`
  width: calc(100% - 48px);
  height: 102px;
  margin: 0 24px;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 8px;
  margin-bottom: 40px;
  

  ${({ theme, type = true }) => css`
    box-sizing: border-box;
    background-color: ${ type ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  `};
`;

export const PercentText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    background-color:  ${theme.COLORS.GRAY_100}px;
  `};
`
export const DetailText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;	
    background-color:  ${theme.COLORS.GRAY_200}px;
  `};
`

export const ArrowButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
  border-radius: 12px;
`



