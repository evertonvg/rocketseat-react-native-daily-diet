import { useTheme } from "styled-components/native";
import { CardTypeStyleProps, Container, DetailText, PercentText } from "./styles";


type Props = {
    quantity: number;
    text: string;
    type?: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL';
}

export function CountdownCard({ quantity, text, type}: Props) {
const theme = useTheme();

  return (
    <Container type={type}>
        <PercentText>
          {quantity}
        </PercentText>
        <DetailText>
            {text}
        </DetailText>
    </Container>
  );
}   