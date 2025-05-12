import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity` 
  flex:1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text` 
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;





