import styled from "styled-components";
import { theme } from "../../styles/globalStyle";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  max-width: 1100px;
  margin: 0 auto;

  h1 {
    color: #DBAC2C;;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }


  p {
    color: #574F4D;
`;

export const InfoBox = styled.div`
  border: 1px solid transparent;
  border-radius: 6px 36px;
  padding: 2rem;
  margin-top: 2rem;
  width: 100%;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(45deg, #DBAC2C, #8047F8) border-box;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  font-size: ${theme.fontSIzes.roboto.s};
  font-family:${theme.font.roboto};

  p {
    margin: 0;
  }
`;

export const Icon = styled.div<{ color: string }>`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0.5rem;
  background: ${(props) => props.color};
  color: white;
`;

export const Illustration = styled.img`
  width: 400px;
`;
