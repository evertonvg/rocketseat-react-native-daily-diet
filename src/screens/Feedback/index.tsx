import { navigate } from "@routes/NavigationService";
import { Image } from "react-native";
import { B, Container, Description, Title } from "./styles";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";



export function Feedback(){
    const route = useRoute();
    const { isInDiet } = route.params as { isInDiet: boolean };

    const handleNavigateToHome = () =>{
        navigate("Home")
    }
    return (
        <Container>
            { isInDiet && <Title variant={true}>
                Continue assim!
            </Title>}

            { !isInDiet && <Title variant={false}>
                Que pena!
            </Title>}
            
            { isInDiet && <Description>
                Você continua <B>dentro da dieta</B>. Muito bem!
            </Description>}
            { !isInDiet && <Description>
                Você <B>saiu da dieta</B> dessa vez, mas continue se esforçando e não desista!
            </Description>}
            
             { isInDiet && <Image
                source={require('@assets/success.png')} 
                style={{ width: 224,height: 228 }}
                resizeMode="contain"  
                />
             }
             { !isInDiet && <Image
                source={require('@assets/fail.png')} 
                style={{ width: 224,height: 228 }}
                resizeMode="contain"  
                />
             }
            <Button title="Ir para a página Inicial" size="SMALL" onPress={handleNavigateToHome} />
        </Container>
    )
}