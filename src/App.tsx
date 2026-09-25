import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home"
import SingleProduct from "./pages/SingleProduct"
import Brands from "./pages/Brands"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="sneakers/:sneakerId" element={<SingleProduct />} />
        <Route path="brands" element={<Brands />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
