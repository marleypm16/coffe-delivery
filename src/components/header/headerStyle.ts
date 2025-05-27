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
    position: relative;
    border: none;
    border-radius:6px;
    cursor: pointer;
    background-color: ${theme.colors.yellow.light};
`

export const CartTotalItems = styled.span`
    position: absolute;
    top: -7px;
    right: -10px;
    background-color: #b0761b;
    color: white;
    font-size: 14px;
    font-weight: bold;
    padding: 5px 8px;
    border-radius: 50%;
`