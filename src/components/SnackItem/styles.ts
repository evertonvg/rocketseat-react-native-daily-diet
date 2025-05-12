import styled, { css } from "styled-components/native";

export type SnackStatus = boolean;

export const Container = styled.TouchableOpacity` 

  height: 50px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 24px;
  padding: 10px;
  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_500};`};
  margin-bottom: 6px;
`;

/* 
  ${({ theme, type = 'PRIMARY', size ="LARGE" }) => css`
    width: ${ size === 'LARGE' ? 'auto' : '190px'}; */
    /* margin: ${ size === 'LARGE' ? '0 24px' : '0 auto'}; */
    /* border: 1px solid ${theme.COLORS.GRAY_200};
    background-color: ${ type === 'PRIMARY' ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
  `}; */


export const Timer = styled.Text` 
  padding-right: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    border-right: 1px solid ${theme.COLORS.GRAY_500};
  `};
`;

export const Title = styled.Text` 
  flex: 1;
  padding: 0 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;

export const Status = styled.Text` 
  width: 14px;
  height: 14px;
  border-radius: 50px;
  ${({ theme, status }) => css`
    background-color: ${ status ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT}
  `};
`;




