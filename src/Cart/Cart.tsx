import { CartItem } from "../CartItem/CartItem";
// Types
import { CartItemType } from "../App";
// Styles
import { Wrapper } from "./Cart.styles";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

export const Cart: React.FC<Props> = ({
  cartItems,
  addToCart,
  removeFromCart,
}) => {
  const calcTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calcTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};
