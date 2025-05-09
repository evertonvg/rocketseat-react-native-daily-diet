import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  position: relative;
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
`;

export const Mask = styled((LinearGradient))`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100px;
`;
