import { Container, Text } from "./styles";

type Props =  {
    data: string
}

export function Data({data = '00.00.70'}: Props) {
  return (
    <Container>
      <Text>{data}</Text>
    </Container>
  );
}   