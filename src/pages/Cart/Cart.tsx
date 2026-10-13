import Header from "../../components/Header"
import Footer from "../../components/Footer"
import CartDetails from "../../components/CartDetails"
import useCart from "../../hooks/useCart"

function Cart() {
  const { cart } = useCart()

  return (
    <>
      <Header />
      <CartDetails />
      <Footer />
    </>
  )
}

export default Cart
