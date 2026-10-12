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

const CartContext = createContext<{
  cart: Sneaker[]
  onAddToCart: (cartItem: Sneaker) => void
  onRemoveFromCart: (cartItemId: string) => void
}>({
  cart: [],
  onAddToCart: () => {},
  onRemoveFromCart: () => {},
})

export default CartContext
