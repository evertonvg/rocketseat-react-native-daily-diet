import { Container, Timer, Title, Status } from "./styles";
import { SnackStatus } from "./styles";

type Props =  {
    title?: string;
    time?: string;
    status?: SnackStatus;
    onPress: ()=> void
}

export function SnackItem({title = 'Refeição', time = '00:00', status = true, onPress}: Props) {
  return (
    <Container onPress={onPress}>
      <Timer>{time}</Timer>
      <Title>{title}</Title>
      <Status status={status} />
    </Container>
  );
}   