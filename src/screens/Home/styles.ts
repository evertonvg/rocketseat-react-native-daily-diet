import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  ${({ theme }) => css`
      background-color:  ${theme.COLORS.GRAY_700}px;
  `};
`;
export const Text = styled.Text`
  text-align: left;
  ${({ theme }) => css`
      color:  ${theme.COLORS.GRAY_100};
      font-size: ${theme.FONT_SIZE.MD}px;
      padding-left: 24px;
      margin-bottom: 8px;
  `};

`

