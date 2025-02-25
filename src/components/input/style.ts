import styled from "styled-components";
interface InputProps {
    width?: string;
}
export const InputS = styled.input<InputProps>`
    border: 1px solid #E6E5E5;
    border-radius: 5px;
    background-color: #EDEDED;
    padding: 12px;
    margin: 5px;
    width: ${(props: InputProps) => props.width || "100%"};
    font-size: 16px;
`