import { useContext } from "react"
import WishlistContext from "../store/WishlistContext"

function useWishlist() {
  return useContext(WishlistContext)
}

export default useWishlist
