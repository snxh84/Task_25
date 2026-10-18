import { useState } from 'react'
import { shoes } from './data/shoes.js'
import Navbar from './components/Navbar.jsx'
import ShoeCard from './components/ShoeCard.jsx'
import Cart from './components/Cart.jsx'

function App() {
  // Cart holds an array of items, each with a quantity. Managed with useState.
  const [cartItems, setCartItems] = useState([])

  // Add a shoe to the cart, or increase its quantity if it is already there.
  const addToCart = (shoe) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === shoe.id)
      if (existing) {
        return prevItems.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...prevItems, { ...shoe, quantity: 1 }]
    })
  }

  // Increase the quantity of an item already in the cart.
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  // Decrease the quantity of an item. Remove it when the quantity reaches 0.
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  // Total cost of all items currently in the cart.
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

  return (
    <div className="page">
      <h1 className="title">Task: (ReactJS) Hooks</h1>

      <div className="site">
        <Navbar />

        <div className="main">
          <section className="shoes-grid">
            {shoes.map((shoe) => (
              <ShoeCard key={shoe.id} shoe={shoe} onAddToCart={addToCart} />
            ))}
          </section>

          <Cart items={cartItems} total={total} onDecrease={decreaseQuantity} onIncrease={increaseQuantity} />
        </div>
      </div>
    </div>
  )
}

export default App
