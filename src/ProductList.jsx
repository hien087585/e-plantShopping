import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import { Link } from 'react-router-dom';

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);

  const plants = [
    {
      id: 1,
      name: 'Snake Plant',
      price: 15,
      image: 'https://via.placeholder.com/150',
      category: 'Air Purifying'
    },
    {
      id: 2,
      name: 'Spider Plant',
      price: 12,
      image: 'https://via.placeholder.com/150',
      category: 'Air Purifying'
    },
    {
      id: 3,
      name: 'Peace Lily',
      price: 18,
      image: 'https://via.placeholder.com/150',
      category: 'Air Purifying'
    },
    {
      id: 4,
      name: 'Aloe Vera',
      price: 10,
      image: 'https://via.placeholder.com/150',
      category: 'Air Purifying'
    },
    {
      id: 5,
      name: 'Boston Fern',
      price: 20,
      image: 'https://via.placeholder.com/150',
      category: 'Air Purifying'
    },
    {
      id: 6,
      name: 'Rubber Plant',
      price: 22,
      image: 'https://via.placeholder.com/150',
      category: 'Air Purifying'
    },

    {
      id: 7,
      name: 'Lavender',
      price: 14,
      image: 'https://via.placeholder.com/150',
      category: 'Medicinal'
    },
    {
      id: 8,
      name: 'Mint Plant',
      price: 8,
      image: 'https://via.placeholder.com/150',
      category: 'Medicinal'
    },
    {
      id: 9,
      name: 'Chamomile',
      price: 11,
      image: 'https://via.placeholder.com/150',
      category: 'Medicinal'
    },
    {
      id: 10,
      name: 'Basil',
      price: 9,
      image: 'https://via.placeholder.com/150',
      category: 'Medicinal'
    },
    {
      id: 11,
      name: 'Rosemary',
      price: 13,
      image: 'https://via.placeholder.com/150',
      category: 'Medicinal'
    },
    {
      id: 12,
      name: 'Thyme',
      price: 10,
      image: 'https://via.placeholder.com/150',
      category: 'Medicinal'
    },

    {
      id: 13,
      name: 'Rose Plant',
      price: 20,
      image: 'https://via.placeholder.com/150',
      category: 'Flowering'
    },
    {
      id: 14,
      name: 'Orchid',
      price: 25,
      image: 'https://via.placeholder.com/150',
      category: 'Flowering'
    },
    {
      id: 15,
      name: 'Sunflower',
      price: 16,
      image: 'https://via.placeholder.com/150',
      category: 'Flowering'
    },
    {
      id: 16,
      name: 'Tulip',
      price: 19,
      image: 'https://via.placeholder.com/150',
      category: 'Flowering'
    },
    {
      id: 17,
      name: 'Daisy',
      price: 12,
      image: 'https://via.placeholder.com/150',
      category: 'Flowering'
    },
    {
      id: 18,
      name: 'Jasmine',
      price: 17,
      image: 'https://via.placeholder.com/150',
      category: 'Flowering'
    }
  ];

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const isInCart = (id) => {
    return cartItems.some(item => item.id === id);
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/plants">Plants</Link> |{' '}
        <Link to="/cart">
          Cart 🛒 ({totalItems})
        </Link>
      </nav>

      <h1>Our Plants</h1>

      {['Air Purifying', 'Medicinal', 'Flowering'].map(category => (
        <div key={category}>
          <h2>{category}</h2>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px'
            }}
          >
            {plants
              .filter(plant => plant.category === category)
              .map(plant => (
                <div
                  key={plant.id}
                  style={{
                    border: '1px solid gray',
                    padding: '10px',
                    width: '200px'
                  }}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    width="150"
                  />

                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>

                  <button
                    onClick={() => dispatch(addItem(plant))}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id)
                      ? 'Added to Cart'
                      : 'Add to Cart'}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
