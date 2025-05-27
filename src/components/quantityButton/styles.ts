import styled from "styled-components";
import { theme } from "../../styles/globalStyle";

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