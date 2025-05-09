import styled, { css } from "styled-components/native";

export type SnackStatus = "SUCCESS" | "FAILURE";

export const Container = styled.TouchableOpacity` 
  margin: 0 24px;
  margin-bottom: 8px;
`;

export const Text = styled.Text` 
  padding-right: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    border-right: 1px solid ${theme.COLORS.GRAY_500};
  `};
`;





