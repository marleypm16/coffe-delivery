
import Header from './components/header/Header'
import coffe from './assets/Imagem.svg'
import cartI from './assets/icons/Type=shopping-cart-fill.svg'
import timerI from './assets/icons/Type=timer-fill.svg'
import packageI from './assets/icons/Type=package-fill.svg'
import coffeI from './assets/icons/Type=coffee-fill.svg'
import { Container, MainContainer, Paragraph, ParagraphWithImage, RoundButton, Services, SubTitle, Title } from './styles/appStyles'
import { theme } from './styles/globalStyle'
import CoffeList from './components/coffelist/CoffeList'

function App() {
  return (
    <>
      <Header/>
      <MainContainer>
        <Container>
          <div>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <Paragraph>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Paragraph>
            <Services>
              <ParagraphWithImage><RoundButton bgColor = {theme.colors.yellow.dark}><img src={cartI} alt="Compra simples e segura" /></RoundButton>Compra simples e segura</ParagraphWithImage>
              <ParagraphWithImage><RoundButton bgColor= '#574F4D'><img src={packageI} alt="Embalagem mantém o café intacto" /></RoundButton>Embalagem mantém o café intacto</ParagraphWithImage>
              <ParagraphWithImage><RoundButton bgColor= {theme.colors.yellow.regular}><img src={timerI} alt="Entrega rápida e rastreada" /></RoundButton>Entrega rápida e rastreada</ParagraphWithImage>
              <ParagraphWithImage><RoundButton bgColor={theme.colors.purple.regular}><img src={coffeI} alt="Café chega fresquinho até você" /></RoundButton>Café chega fresquinho até você</ParagraphWithImage>
            </Services>
          </div>
          <img src={coffe} alt="Encontre o café perfeito" />
        </Container>
        <SubTitle>Nossos Cafés</SubTitle>
        <CoffeList/>
      </MainContainer>
    </>
  )
}

export default App
