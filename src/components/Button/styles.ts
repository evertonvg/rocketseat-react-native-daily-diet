import styled, { css } from "styled-components/native";

export type ButtonTypeProps = "PRIMARY" | "SECONDARY";
export type ButtonSizeProps = "LARGE" | "SMALL";

export const Container = styled.TouchableOpacity`
  height: 50px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: block;
  gap: 4px;

  ${({ theme, type = 'PRIMARY', size ="LARGE" }) => css`
    width: ${ size === 'LARGE' ? 'auto' : '190px'};
    margin: ${ size === 'LARGE' ? '0 24px' : '0 auto'};
    border: 1px solid ${theme.COLORS.GRAY_200};
    background-color: ${ type === 'PRIMARY' ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
  `};
`;
export const Title = styled.Text`
  font-size: 16px;
  ${({ theme, type= 'PRIMARY'}) => css`
    font-size:  ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${ type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.BLACK};  
  `};
  text-align: center;
`

export const IconWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;



