function ShoeCard({ shoe, onAddToCart }) {
  return (
    <div className="shoe-card">
      <div className="shoe-image-wrap">
        <img src={shoe.image} alt={shoe.name} />
      </div>
      <div className="shoe-info">
        <h3 className="shoe-name">{shoe.name}</h3>
        <p className="shoe-price">${shoe.price}</p>
        <button className="add-btn" onClick={() => onAddToCart(shoe)}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ShoeCard
