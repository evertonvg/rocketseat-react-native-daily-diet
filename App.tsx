import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native'; 
import {useFonts, NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans';

import theme from './src/theme';

import { Home } from '@screens/Home';


export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular,NunitoSans_700Bold})
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar barStyle='dark-content' backgroundColor="#FAFAFA" translucent />
        {fontsLoaded ? <Home /> : <Textline>carregando...</Textline>}
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  font-family: 'NunitoSans_400Regular';
`;
const Textline = styled.Text`
  flex: 1;
  font-size: 30px;
  padding: 40px;
  text-align: center;
  font-family: 'NunitoSans_400Regular';
`
