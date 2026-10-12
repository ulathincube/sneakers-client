import { createContext } from "react"

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

const WishlistContext = createContext<{
  wishlist: Sneaker[]
  onAddToWishlist: (wishlistItem: Sneaker) => void
  onRemoveFromWishlist: (wishlistId: string) => void
}>({
  wishlist: [],
  onAddToWishlist: () => {},
  onRemoveFromWishlist: () => {},
})

export default WishlistContext
