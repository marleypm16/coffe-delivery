import logo from '../../assets/Logo.svg'
import cartI from '../../assets/icons/Type=shopping-cart-fill.svg'
import pin from '../../assets/icons/Type=map-pin-fill.svg'
import { HeaderStyled, LocalPin, LocalCartSection, Local, CartButton, CartTotalItems } from './headerStyle'
import { useCart } from '../../context/cartContext'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Header(){
  const {cart} = useCart()
  const navigate = useNavigate()
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const handleCart = () => {
    if(cart.length === 0){
      alert('Seu carrinho está vazio')
      return
    }
    navigate('/checkout')
  }
  const getLocal =  () => {
    navigator.geolocation.getCurrentPosition(async(position) => {
      const {latitude, longitude} = position.coords
                        const response = await fetch(
                            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                        );
                        const data = await response.json();
                       setCity(data.address.city || data.address.town || data.address.village);
                       setState(data.address.state);
    })
  }
  useEffect(() => {
    getLocal()
  }, [])
    return(
    <HeaderStyled>
      <Link to="/"><img src={logo} alt="Coffe delivery" /></Link>
        <LocalCartSection>
          <LocalPin>
            <img src={pin} alt="Local"  />
            <Local>{city},{state}</Local>
          </LocalPin>
          <CartButton onClick={handleCart}>
            <CartTotalItems>{cart.length}</CartTotalItems>
            <img src={cartI} alt="Carrinho de compras"/>
          </CartButton>
        </LocalCartSection>
      </HeaderStyled>
    )
}

export default Header