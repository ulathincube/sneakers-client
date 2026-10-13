import styles from "./CartItem.module.css"
import useCart from "../../hooks/useCart"
import { TrashIcon } from "@radix-ui/react-icons"

interface Props {
  url: string
  name: string
  price: number
  id: string
}

function CartItem({ url, name, price, id }: Props) {
  const { cart, onRemoveFromCart } = useCart()

  const cartItem = cart.find((cartItemObject) => cartItemObject.id === id)

  return (
    <>
      <div className={styles.box}>
        <img className={styles.image} src={url} alt="product photo" />
      </div>
      <div className={styles.name}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>Men's Shoes</p>
        <p className={styles.show}>{cartItem && cartItem.size} / White</p>
        <p className={styles.more}>White</p>
        <p className={styles.size}>
          <span className={styles.sizing}>
            Size {cartItem && cartItem.size}
          </span>
          <span className={styles.quantity}>
            Quantity {cartItem && cartItem.quantity}
          </span>
        </p>
      </div>
      <div className={styles.price}>
        <p className={styles.number}>${price}</p>
        <button onClick={() => onRemoveFromCart(id)} className={styles.delete}>
          <TrashIcon className={styles.icon} />
        </button>
      </div>
    </>
  )
}

export default CartItem
