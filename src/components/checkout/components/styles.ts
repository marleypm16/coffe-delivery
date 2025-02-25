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

export const PaymentMethod = styled.button`
    background-color: #E6E5E5;
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border:none;
    font-size: ${theme.fontSIzes.roboto.s};
    font-family:${theme.font.roboto};
`

export const CartItem = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    img {
        width: 64px;
        height: 64px;
        border-radius: 8px;
    }
    h2 {
        font-size: 1.125rem;
        font-weight: 600;
    }
    span {
        font-size: 1.125rem;
        font-weight: 600;
    }
`;