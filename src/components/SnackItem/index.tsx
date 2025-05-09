import { Container, Timer, Title, Status } from "./styles";
import { SnackStatus } from "./styles";

type Props =  {
    title?: string;
    time?: string;
    status?: SnackStatus;
}

export function SnackItem({title = 'Refeição', time = '00:00', status = 'SUCCESS'}: Props) {
  return (
    <Container>
      <Timer>{time}</Timer>
      <Title>{title}</Title>
      <Status status={status} />
    </Container>
  );
}   