import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import CartItem from "./CartItem";

function Cart() {
  const cart = useSelector(getCart);
  return (
    <div>
      {cart.map((item) => (
        <CartItem cartItem={item} key={item.id} />
      ))}
    </div>
  );
}

export default Cart;
