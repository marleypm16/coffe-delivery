import { createContext, ReactNode, useState, useContext } from "react";
import { CoffeInterface } from "../interface/coffeInterface";

interface CoffeCart extends CoffeInterface {
  quantity: number;
}

interface CartContextType {
  cart: CoffeCart[];
  addToCart: (product: CoffeCart) => void;
  removeItem: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;

}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CoffeCart[]>([]);
  const addToCart = (product: CoffeCart) => {
    setCart([...cart, product]);
  };

  const removeItem = (id: number) => {
    setCart(cart.filter((product) => product.id !== id));};


  const increaseQuantity = (id: number) => {
    setCart(cart.map((product) =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    ));
  };

  const decreaseQuantity = (id: number) => {
    setCart(cart
      .map((product) =>
        product.id === id ? { ...product, quantity: product.quantity - 1 } : product
      )
      .filter((product) => product.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cart,removeItem, addToCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider!");
  }
  return context;
};
