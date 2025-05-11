import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 50px;
  width: 100%; 
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  
  ${({ theme, variant, active }) => css`
    border: 1px solid ${variant === 'POSITIVE' && active ? theme.COLORS.GREEN_DARK : variant === 'NEGATIVE' && active ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_600};
    background-color: ${ 
      variant === 'POSITIVE' && active ? theme.COLORS.GREEN_LIGHT : variant === 'NEGATIVE' && active ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_600
    };
  `};

  margin-bottom: 30px;
`;
export const Title = styled.Text`
  font-size: 16px;
  ${({ theme}) => css`
    font-size:  ${theme.FONT_SIZE.XS}px;
    color: ${ theme.COLORS.GRAY_100};  
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  text-align: center;
`
export const Ball = styled.Text`
  height: 8px;
  width: 8px;
  border-radius: 50px;
   ${({ theme, variant}) => css`
      background-color: ${ 
        variant === 'POSITIVE' ? theme.COLORS.GREEN_DARK :  theme.COLORS.RED_DARK
      };
  `};
`




