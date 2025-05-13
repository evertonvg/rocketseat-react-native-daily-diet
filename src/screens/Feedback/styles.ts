import { SafeAreaView } from "react-native-safe-area-context";
import styled,{ DefaultTheme, css } from "styled-components/native";

export type variantProps = {
  variant: boolean
}
export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Title = styled.Text<variantProps>`
  text-align: center;
  ${({ theme,variant }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color:  ${variant  ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-size: ${theme.FONT_SIZE.XL}px;
`};
`

export const Description = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color:  ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`
export const B = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`
