import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeItem } from './CartSlice';
import { Link } from 'react-router-dom';

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (id) => {
    dispatch(
      updateQuantity({
        id: id,
        amount: 1
      })
    );
  };

  const handleDecrease = (id, quantity) => {
    if (quantity === 1) {
      dispatch(removeItem(id));
    } else {
      dispatch(
        updateQuantity({
          id: id,
          amount: -1
        })
      );
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/plants">Plants</Link> |{' '}
        <Link to="/cart">Cart</Link>
      </nav>

      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        cartItems.map(item => (
          <div
            key={item.id}
            style={{
              border: '1px solid gray',
              margin: '10px',
              padding: '10px'
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              width="120"
            />

            <h2>{item.name}</h2>

            <p>Unit Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${item.price * item.quantity}</p>

            <button onClick={() => handleIncrease(item.id)}>
              +
            </button>

            <button
              onClick={() =>
                handleDecrease(item.id, item.quantity)
              }
            >
              -
            </button>

            <button onClick={() => handleRemove(item.id)}>
              Delete
            </button>
          </div>
        ))
      )}

      <h2>Total Cart Amount: ${totalAmount}</h2>

      <button onClick={handleCheckout}>
        Checkout
      </button>

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default CartItem;
