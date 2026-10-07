import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Brands from "./pages/Brands"
import NotFound from "./pages/NotFound"
import Brand from "./pages/Brand"
import Sneaker from "./pages/Sneaker"
import Cart from "./pages/Cart"
import Wishlist from "./pages/Wishlist"
import Account from "./pages/Account"

function App() {
  return (
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
        <Route path="account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
