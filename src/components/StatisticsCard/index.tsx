import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import { ArrowButton, CardTypeStyleProps, Container, DetailText, PercentText } from "./styles";
import { ArrowUpRight} from 'phosphor-react-native'

type Props = TouchableOpacityProps & {
    statistic: number;
    type?: CardTypeStyleProps;
}

export function StatisticsCard({ statistic, type = true, ...rest }: Props) {
const theme = useTheme();

  return (
    <Container type={type} onPress={() => {console.log('Card Pressed')}} {...rest}>
        <ArrowButton>
            <ArrowUpRight size={24} color={ type  ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK}/>
        </ArrowButton>
        <PercentText>{statistic}%</PercentText>
        <DetailText>
            {type ? 'das refeições dentro da dieta' : 'das refeições fora da dieta'}
        </DetailText>
    </Container>
  );
}   