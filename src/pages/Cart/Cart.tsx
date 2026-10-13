import Header from "../../components/Header"
import Footer from "../../components/Footer"
import CartDetails from "../../components/CartDetails"
import useCart from "../../hooks/useCart"
import EmptyList from "../../components/EmptyList"

function Cart() {
  const { cart } = useCart()

  return (
    <>
      <Header />
      {cart.length > 0 ? <CartDetails /> : <EmptyList list="Cart" />}
      <Footer />
    </>
  )
}

export default Cart
