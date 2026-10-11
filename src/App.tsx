import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Brands from "./pages/Brands"
import NotFound from "./pages/NotFound"
import Brand from "./pages/Brand"
import Sneaker from "./pages/Sneaker"
import Cart from "./pages/Cart"
import Wishlist from "./pages/Wishlist"
import Account from "./pages/Account"
import Womens from "./pages/Womens"
import Mens from "./pages/Mens"
import Sale from "./pages/Sale"
import CartContext from "./store/CartContext"
import { useState, useCallback } from "react"

interface Picture {
  id: string
  url: string
}

interface Sneaker {
  id: string
  name: string
  size: number
  quantity: number
  price: number
  inStock: boolean
  pictures: Picture[]
}

function App() {
  const [cart, setCart] = useState<Sneaker[]>([])

  const onUpdateCart = useCallback((cartItem: Sneaker) => {
    setCart((previousCart) => ({ ...previousCart, cartItem }))
  }, [])

  return (
    <CartContext value={{ cart, onUpdateCart }}>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="sneakers/:sneakerId" element={<Sneaker />} />
          <Route path="brands">
            <Route index element={<Brands />} />
            <Route path="/brands/:brandId" element={<Brand />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="mens" element={<Mens />} />
          <Route path="womens" element={<Womens />} />
          <Route path="account" element={<Account />} />
          <Route path="sale" element={<Sale />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </CartContext>
  )
}

export default App
