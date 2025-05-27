import styled from "styled-components";
import { theme } from "../../../styles/globalStyle";

export const FormS = styled.form`
    display: flex;
    gap: 24px;

`;
export const LocalizationAndPaymentSection = styled.section`
    flex: 1;
`;

export const OrderSection = styled.section`
    width: 35%;
`;
export const Container = styled.div`
  background: #F3F2F2;
  padding: 24px;
  border-radius: 8px;
  max-width: 640px;
  margin-bottom: 24px;
`;

export const Card = styled.div`
  padding: 24px;
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #737373;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const RemoveButton = styled.button`
  background: #E6E5E5;
  border-radius: 8px;
  padding: 8px;
  border: none;
  color: #574F4D;
  font-size: ${theme.fontSIzes.roboto.s};
  font-family:${theme.font.roboto};
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  img{
    width: 16px;
    height: 16px;
    filter: sepia(100%) saturate(500%) hue-rotate(250deg);

  }
`
interface PaymentMethodProps {
    selected: boolean;
}
export const PaymentMethod = styled.button<PaymentMethodProps>`
    background-color: #E6E5E5;
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border:none;
    border: ${(props) => (props.selected ? "2px solid #7c3aed" : "none")};
    background-color: ${(props) => (props.selected ? "#ede9fe" : "#e5e7eb")};
    color: ${(props) => (props.selected ? "#7c3aed" : "#4b5563")};
    font-size: ${theme.fontSIzes.roboto.s};
    font-family:${theme.font.roboto};
    img{
      filter: sepia(100%) saturate(300%) brightness(70%) hue-rotate(220deg);

    }
`

export const CartItem = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    flex-direction: column;
  
    h2 {
        font-size: 1.125rem;
        font-weight: 600;
    }
    span {
        font-size: 1.125rem;
        font-weight: 600;
    }
`;

export const Item = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    `;

export const Prices = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    font-family: ${theme.font.roboto};
    font-size: ${theme.fontSIzes.roboto.s};
    margin-top: 16px;

    p{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin:0;
    }
    strong{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      font-size: ${theme.fontSIzes.roboto.l};
      }
`;

export const CheckoutButton = styled.button`
    background-color: ${theme.colors.yellow.regular};
    color: #fff;
    padding: 16px;
    border-radius: 8px;
    border: none;
    font-size: ${theme.fontSIzes.roboto.m};
    font-family:${theme.font.roboto};
    cursor: pointer;
    width: 100%;

`;