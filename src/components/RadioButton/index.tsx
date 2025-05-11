import React from "react";
import { Ball, Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";

type Props = TouchableOpacityProps & {
    title: string;
    variant?: 'POSITIVE' | 'NEGATIVE';
    active: boolean;
}

export function RadioButton({title, variant = 'POSITIVE', active, ...rest }: Props) {
  const theme = useTheme();
  return (
    <Container variant={variant} active={active} {...rest}>
      <Ball variant={variant}></Ball>
      <Title>{title}</Title>
    </Container>
  );
}   