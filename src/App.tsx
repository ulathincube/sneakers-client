import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Brands from "./pages/Brands"
import NotFound from "./pages/NotFound"
import Brand from "./pages/Brand"
import Sneaker from "./pages/Sneaker"

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
