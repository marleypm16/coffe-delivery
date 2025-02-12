import styled from "styled-components";
import { theme } from "../../styles/globalStyle";

export const Title = styled.h1`
    font-family : ${theme.font.baloo}
    font-weight : ${theme.weight.extraBold};
    font-size : ${theme.fontSIzes.baloo.xl}
`
export const SubTitle = styled(Title)`
  font-size : ${theme.fontSIzes.baloo.l}
`
export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
export const MainContainer = styled.main`
    padding: 0px 50px;
 
`

export const Paragraph = styled.p`
    font-size: ${theme.fontSIzes.roboto.l};
    font-weight: ${theme.weight.regular};
    font-family: ${theme.font.roboto}
`

export const Services = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; /* 2 colunas de tamanho igual */
    grid-template-rows: 1fr 1fr; /* 2 linhas de tamanho igual */
`

export const ParagraphWithImage = styled(Paragraph)`
    display:flex;
    align-items: center;
    gap:10px;
`
interface RoundedProps{
    bgColor?:string
}
export const RoundButton = styled.div<RoundedProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${props => props.bgColor || "Gray"}; /* Cor do botão */
  padding:10px;
  img{
    filter: brightness(0) invert(1);
  }
`;
