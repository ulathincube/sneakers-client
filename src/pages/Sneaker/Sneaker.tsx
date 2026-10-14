import styles from "./Sneaker.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useParams } from "react-router"
import { useQuery } from "@tanstack/react-query"
import { getSneaker } from "../../services/sneaker"
import { useState } from "react"
import MobileProduct from "../../components/MobileProduct"
import DesktopProduct from "../../components/DesktopProduct"
import useCart from "../../hooks/useCart"
import useWishlist from "../../hooks/useWishlist"
import Loader from "../../components/Loader"

interface Picture {
  id: string
  url: string
}

interface Item {
  id: string
  name: string
  size: number
  quantity: number
  price: number
  inStock: boolean
  pictures: Picture[]
}

function Sneaker() {
  const { sneakerId } = useParams()
  const [size, setSize] = useState<string>("")
  const [gender, setGender] = useState<string>("")
  const { onAddToCart } = useCart()
  const { onAddToWishlist } = useWishlist()

  const { isPending, isError, error, data } = useQuery({
    queryKey: ["getSneaker", sneakerId],
    queryFn: () => getSneaker(sneakerId!),
  })

  if (isPending) return <Loader />
  if (isError) return <div>{error.message}</div>

  const onAddToCartHandler = () => {
    const cartItem: Item = {
      id: data.data.id,
      name: data.data.name,
      size: 6,
      quantity: 1,
      price: data.data.price,
      pictures: data.data.pictures,
      inStock: true,
    }

    onAddToCart(cartItem)
  }

  const onAddToWishlistHandler = () => {
    const wishlistItem: Item = {
      id: data.data.id,
      name: data.data.name,
      size: 6,
      quantity: 1,
      price: data.data.price,
      pictures: data.data.pictures,
      inStock: true,
    }

    onAddToWishlist(wishlistItem)
  }

  const onChangeGender = (newGender: string) => {
    setGender(newGender)
  }

  const onChangeSize = (newSize: string) => {
    setSize(newSize)
  }

  return (
    <>
      <Header />
      <DesktopProduct
        pictures={data.data.pictures}
        name={data.data.name}
        price={data.data.price}
        gender={gender}
        onChangeGender={onChangeGender}
        size={size}
        onChangeSize={onChangeSize}
        onAddToCart={onAddToCartHandler}
        onAddToWishlist={onAddToWishlistHandler}
      />
      <MobileProduct
        price={data.data.price}
        product={data.data.name}
        images={data.data.pictures}
      />
      <Footer />
    </>
  )
}

export default Sneaker
