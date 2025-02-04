import logo from '../../assets/Logo.svg'
import cart from '../../assets/icons/Type=shopping-cart-fill.svg'
import pin from '../../assets/icons/Type=map-pin-fill.svg'
import { HeaderStyled, LocalPin, LocalCartSection, Local, CartButton } from './headerStyle'

function Header(){
    return(
    <HeaderStyled>
        <img src={logo} alt="Coffe delivery" />
        <LocalCartSection>
          <LocalPin>
            <img src={pin} alt="Local"  />
            <Local>Porto Alegre</Local>
          </LocalPin>
          <CartButton><img src={cart} alt="Carrinho de compras"/></CartButton>
        </LocalCartSection>
      </HeaderStyled>
    )
}

export default Header