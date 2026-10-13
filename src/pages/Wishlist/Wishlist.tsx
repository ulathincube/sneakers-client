import Header from "../../components/Header"
import Footer from "../../components/Footer"
import WishlistMenu from "../../components/WishlistMenu"
import useWishlist from "../../hooks/useWishlist"
import EmptyList from "../../components/EmptyList"

function Wishlist() {
  const { wishlist } = useWishlist()

  return (
    <>
      <Header />
      {wishlist.length > 0 ? <WishlistMenu /> : <EmptyList list="Wishlist" />}
      <Footer />
    </>
  )
}

export default Wishlist
