import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native'; 
import {useFonts, NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans';
import theme from './src/theme';
import { Routes } from '@routes/index'; 

export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular,NunitoSans_700Bold})
  
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar barStyle='dark-content' backgroundColor="transparent" translucent />
        {fontsLoaded ? <Routes /> : <Textline>carregando...</Textline>}
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  font-family: 'NunitoSans_400Regular';
`;
const Textline = styled.Text`
  flex: 1;
  font-size: 30px;
  padding: 40px;
  text-align: center;
  font-family: 'NunitoSans_400Regular';
`
