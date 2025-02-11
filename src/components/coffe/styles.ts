import styled from "styled-components";
import { theme } from "../../styles/globalStyle";

export const CoffeCard = styled.div`
    border-radius:15px;
    background-color: #F3F2F2;
    width:240px;
    height:320px;
`

export const CoffeDetails = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    text-align:center;
`
export const CoffeCategoryContainer = styled.div`
    display:flex;
    gap:5px;
    margin-top:5px;
`
export const CoffeCategory = styled.span`
    background-color: ${theme.colors.yellow.light}
    color: ${theme.colors.yellow.dark}
    padding:4px 8px;
    border-radius:10px;
    font-weight:${theme.weight.bold};
    margin-top:5px;
    display:inline-block;
    gap:5px;
`
export const CoffeTitle = styled.h3`
    font-family: ${theme.font.baloo}
    font-size: ${theme.fontSIzes.baloo.s}
`

export const CoffeDescription = styled.p`
    font-family: ${theme.font.roboto}
    font-size:${theme.fontSIzes.roboto.s}
    color: #8D8686;
`

export const PriceQuantityContainer = styled.div`
    display:flex;
    justify-content:space-around;
    width:100%;
`

export const Price = styled.span`
    font-family: ${theme.font.baloo};
    display:flex;
    align-items:center;
    gap:5px;
    strong{
        font-size:${theme.fontSIzes.baloo.m}
    }
`

export const QuantityContainer = styled.div`
    display:flex;
    align-items:center;
    gap:5px;

    
    
`

export const Quantity = styled.div`
    background-color: #E6E5E5;
    padding:8px;
    border-radius:10px;
    display:flex;
    gap:3px;
    align-items:center;
    span{
        font-family: ${theme.font.roboto}
        font-size:${theme.fontSIzes.roboto.m}
    }

    button{
        background-color: #E6E5E5;
        border:none;
        display:flex;
        align-items:center;
        cursor:pointer;
        img{
            width:14px;
            height:14px;
        }
        }
`

export const Cart = styled.button`
        background-color: ${theme.colors.purple.dark};
        border:none;
        display:flex;
        align-items:center;
        border-radius:10px;
        padding:8px;
        cursor:pointer;
        img{
            filter: brightness(0) invert(1);
        }
    
`