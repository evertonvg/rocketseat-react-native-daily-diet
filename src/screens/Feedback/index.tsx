import { navigate } from "@routes/NavigationService";
import { Image } from "react-native";
import { B, Container, Description, Title } from "./styles";
import { Button } from "@components/Button";



export function Feedback(){
    const handleNavigateToHome = () =>{
        navigate("Home")
    }
    return (
        <Container>
            <Title>
                Continue assim!
            </Title>
            <Description>
                Você continua <B>dentro da dieta</B>. Muito bem!
            </Description>
            <Image
                source={require('@assets/success.png')} 
                style={{ width: 224,height: 228 }}
                resizeMode="contain"  
            />
            {/* <Image
                source={require('@assets/fail.png')} 
                style={{ width: 224,height: 228 }}
                resizeMode="contain"  
            /> */}
            <Button title="Ir para a página Inicial" size="SMALL" onPress={handleNavigateToHome} />
        </Container>
    )
}