import { useDispatch, useSelector } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeItem
} from './CartSlice';
import { Link } from 'react-router-dom';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/plants"> Plants</Link> |
        <Link to="/cart"> Cart</Link>
      </nav>

      <h1>Shopping Cart</h1>

      {cartItems.map(item => (
        <div key={item.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
          <img src={item.image} alt={item.name} width="100" />
          <h3>{item.name}</h3>
          <p>Unit Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}

      <h2>Total Cart Amount: ${totalAmount}</h2>

      <button onClick={() => alert('Coming Soon')}>Checkout</button>

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default CartItem;
