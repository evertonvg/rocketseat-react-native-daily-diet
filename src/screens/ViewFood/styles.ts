import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type BallProps = {
  variant: boolean
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  margin: 0 auto;
`;
export const ContentContainer = styled.View`
  flex: 1;
  z-index: 1;
  transform: translateY(-20px);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  ${({ theme }) => css`
      background-color:  ${theme.COLORS.GRAY_700};
  `};
`
export const Title = styled.Text`
  text-align: left;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin: 0 24px;
  margin-top: 32px;
  margin-bottom: 10px;
  ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.BOLD};
      color:  ${theme.COLORS.GRAY_100};
      font-size: ${theme.FONT_SIZE.LG}px;
  `};
`;
export const SubTitle = styled.Text`
  text-align: left;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin: 0 24px;
  margin-bottom: 10px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color:  ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XS}px;
  `};
`;

export const Description = styled.Text`
  text-align: left;
  margin: 0 24px;
  margin-bottom: 24px;
  ${({ theme }) => css`
      color:  ${theme.COLORS.GRAY_200};
      font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;

export const DietStatus = styled.View`
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  margin: 0 24px;
  justify-content: center;
  padding: 10px;
  width: 130px;
  gap: 4px;
  ${({ theme }) => css`
      background-color:  ${theme.COLORS.GRAY_600};
  `};
`
export const DietText = styled.Text`
  ${({ theme }) => css`
      color:  ${theme.COLORS.GRAY_100};
      font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;

export const Ball = styled.Text<BallProps>`
  height: 8px;
  width: 8px;
  border-radius: 50px;
   ${({ theme, variant: variant}) => css`
      background-color: ${ 
        variant ? theme.COLORS.GREEN_DARK :  theme.COLORS.RED_DARK
      };
  `};
`

 export const FlexEnd = styled.View`
    flex: 1;
  `



