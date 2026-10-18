# Shoe Store — ReactJS Hooks Task

An online shoe store built with **React** and the **`useState`** hook. Users can browse
a collection of shoes on the left and manage a shopping cart on the right.

## Features

- **Display Shoes** — A grid of shoes on the left, each with an image, name, price, and an
  "Add to Cart" button.
- **Shopping Cart** — A cart panel on the right showing each item's thumbnail, name, price,
  and quantity.
- **Add to Cart** — Clicking "Add to Cart" adds the shoe to the cart (or increases its
  quantity if it is already there). Managed with `useState`.
- **Remove from Cart** — The `−` button decreases an item's quantity; when the quantity
  reaches 0 the item is removed from the cart.
- **Cart Total** — The total cost of all items is displayed and updates automatically.

## Tech Stack

- React 18
- Vite
- Plain CSS (no UI library)

## Project Structure

```
shoe-store/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── logo.svg
│   └── shoes/            # shoe illustrations (SVG)
└── src/
    ├── main.jsx
    ├── App.jsx           # holds cart state with useState
    ├── index.css
    ├── components/
    │   ├── Navbar.jsx
    │   ├── ShoeCard.jsx
    │   └── Cart.jsx
    └── data/
        └── shoes.js      # shoe catalogue
```

## State Management (`useState`)

The cart state lives in `App.jsx`:

```jsx
const [cartItems, setCartItems] = useState([])
```

Each cart item is `{ id, name, price, image, quantity }`. Three handlers update it:

- `addToCart(shoe)` — adds a new item or increments an existing one.
- `increaseQuantity(id)` — increments an item's quantity.
- `decreaseQuantity(id)` — decrements the quantity and removes the item at 0.

The total is derived from the state:

```jsx
const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the app in your browser (default: http://localhost:5173/).

## Building for Production

```bash
npm run build
```

The optimized files are output to the `dist/` folder.
