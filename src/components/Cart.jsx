function Cart({ items, total, onDecrease, onIncrease }) {
  return (
    <aside className="cart">
      <h2 className="cart-title">Cart</h2>

      <ul className="cart-items">
        {items.map((item) => (
          <li className="cart-item" key={item.id}>
            <div className="cart-thumb">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="cart-item-info">
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-price">${item.price}</p>
            </div>
            <div className="qty-controls">
              <button
                className="qty-btn"
                onClick={() => onDecrease(item.id)}
                aria-label={`Decrease quantity of ${item.name}`}
              >
                −
              </button>
              <span className="qty-val">{item.quantity}</span>
              <button
                className="qty-btn"
                onClick={() => onIncrease(item.id)}
                aria-label={`Increase quantity of ${item.name}`}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>

      <p className="cart-total">Total: ${total.toFixed(2)}</p>
    </aside>
  )
}

export default Cart
