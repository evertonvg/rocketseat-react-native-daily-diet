import styled, { css, DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
  padding: 24px;
  ${({ theme }: { theme: DefaultTheme }) => css`
    background-color:  ${theme.COLORS.GRAY_700}px;
  `};
`;



