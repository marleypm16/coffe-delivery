import styled from "styled-components";
import { theme } from "../../styles/globalStyle";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px;
`

export const LocalCartSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

export const LocalPin = styled.div`
    display: flex;
    background-color : #EBE5F9;
    padding: 8px;
    border-radius: 6px;
`
export const Local = styled.p`
    color : #4B2995;
    font-family : ${theme.font.roboto}
    font-size : ${theme.fontSIzes.roboto.s}
    font-weight: ${theme.weight.regular}
`

export const CartButton = styled.button`
    padding: 8px;
    border: none;
    border-radius:6px;
    background-color: ${theme.colors.yellow.light};
`