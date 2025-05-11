import { SafeAreaView } from "react-native-safe-area-context";
import styled,{ DefaultTheme, css } from "styled-components/native";


export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const Form = styled.View`
  margin: 0 24px;
  padding-top: 40px;
  flex: 1;
`
export const FormItem = styled.View`
  margin-bottom: 20px;
  width: 100%;
`
export const FormRow = styled.View`
  flex-direction: row;
  gap: 20px;
`
export const FormRowItem = styled.View`
  flex: 1;
  margin-bottom: 20px;
`
export const Label = styled.Text`
  text-align: left;
  margin-bottom: 8px;
  ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.BOLD};
      color:  ${theme.COLORS.GRAY_200};
      font-size: ${theme.FONT_SIZE.SM}px;
  `};
  `

  export const Input = styled.TextInput`
    border-radius: 6px;
    height: 40px;
    ${({ theme }) => css`
      color:  ${theme.COLORS.GRAY_100};
      border: 1px solid ${theme.COLORS.GRAY_500};
  `};
  `

  export const DateInput = styled.TouchableOpacity`
    border-radius: 6px;
    padding: 0 12px;
    align-items: start;
    justify-content: center;
    height: 40px;
    ${({ theme }) => css`
      color:  ${theme.COLORS.GRAY_100};
      border: 1px solid ${theme.COLORS.GRAY_500};
  `};
  `
  export const TextDateHour = styled.Text`

  `

  export const TextArea = styled.TextInput`
    border-radius: 6px;
    height: 120px;
    ${({ theme }) => css`
      color:  ${theme.COLORS.GRAY_100};
      border: 1px solid ${theme.COLORS.GRAY_500};
  `};
  `

  export const FlexEnd = styled.View`
    flex: 1;
  `
