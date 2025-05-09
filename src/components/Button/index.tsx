import React from "react";
import { Container, Title, IconWrapper, ButtonSizeProps, ButtonTypeProps } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Plus, PencilSimpleLine, Trash } from 'phosphor-react-native'

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeProps;
    size?: ButtonSizeProps;
    icon?: 'plus' | 'pencil' | 'trash';
}

export function Button({title, type = 'PRIMARY', size="LARGE", icon, ...rest }: Props) {
  const theme = useTheme();
  return (
    <Container type={type} size={size} {...rest}>
      {icon && (
        <IconWrapper>
          {icon === 'plus' && <Plus size={24} color={type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_200 } />}
          {icon === 'pencil' && <PencilSimpleLine size={24} color={type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_200 } />}
          {icon === 'trash' && <Trash size={24} color={type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_200 } />}
        </IconWrapper>
      )}
      <Title type={type} size={size}>{title}</Title>
    </Container>
  );
}   