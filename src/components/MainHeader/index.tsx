import { Container } from "./styles";
import { Image } from "react-native";

export function MainHeader() {
  return (
    <Container>
      <Image
        source={require('@assets/logo.png')} 
        style={{ width: 82,height: 37 }}
        resizeMode="contain"  
      />
      <Image
        source={require('@assets/Ellipse.png')} 
        style={{ width: 40,height: 40 }}
        resizeMode="contain"  
      />
    </Container>
  );
}   