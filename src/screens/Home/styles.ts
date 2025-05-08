import { SafeAreaView } from "react-native-safe-area-context";
import styled,{ DefaultTheme } from "styled-components/native";


export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.primary};
  flex: 1;
  padding: 24px;
`;
