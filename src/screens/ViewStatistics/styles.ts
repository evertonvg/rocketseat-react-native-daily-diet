import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  margin: 0 auto;
  ${({ theme }) => css`
      background-color:  ${theme.COLORS.GRAY_700}px;
  `};
`;
export const Text = styled.Text`
  margin: 20px 0;
  text-align: center;
  ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.BOLD};
      color:  ${theme.COLORS.GRAY_100};
      font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;

export const Grid = styled.View`
  gap: 8px;
  width: calc(100% - 48px);
  margin: 0 24px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const FullGrid = styled.View`
  gap: 18px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  height: 200px;
`
export const HalfGrid = styled.View`
  gap: 18px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`



