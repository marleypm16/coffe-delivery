import { Container, InfoBox, InfoItem, Icon, Illustration } from "./styles";
import  MapPin  from "../../assets/icons/Type=map-pin-fill.svg";
import Timer from '../../assets/icons/Type=timer-fill.svg'
import Money from '../../assets/icons/Type=credit-card-regular.svg'
import deliveryIllustration from "../../assets/icons/Illustration.png";

function OrderConfirmed() {
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  return (
    <Container>
      <div>
        <h1>Uhu! <span>Pedido confirmado</span></h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <InfoBox>
          <InfoItem>
            <Icon color="#8047F8">
              <img src={MapPin}  />
            </Icon>
            <div>
              <p>Entrega em <strong>{userData.endereco}, {userData.numero}</strong></p>
              <p>{userData.bairro} - {userData.cidade}, {userData.uf}</p>
            </div>
          </InfoItem>

          <InfoItem>
            <Icon color="#DBAC2C">
              <img src={Timer} alt="" />
            </Icon>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </InfoItem>

          <InfoItem>
            <Icon color="#C47F17">
              <img src={Money} alt="" />
            </Icon>
            <div>
              <p>Pagamento na entrega</p>
              <strong>{userData.paymentMethod}</strong>
            </div>
          </InfoItem>
        </InfoBox>
      </div>

      <Illustration src={deliveryIllustration} alt="Entregador em moto" />
    </Container>
  );
}

export default OrderConfirmed;
