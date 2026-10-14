import styles from "./WishlistMenu.module.css"
import { TrashIcon } from "@radix-ui/react-icons"
import useWishlist from "../../hooks/useWishlist"

interface Props {
  id: string
  url: string
  name: string
  price: number
}

function WishlistItem({ url, name, price, id }: Props) {
  const { wishlist, onRemoveFromWishlist } = useWishlist()

  const wishlistItem = wishlist.find(
    (wishlistItemObject) => wishlistItemObject.id === id
  )

  return (
    <>
      <div className={styles.box}>
        <img className={styles.image} src={url} alt="product photo" />
      </div>
      <div className={styles.name}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>Men's Shoes</p>
        <p className={styles.more}>White</p>
        <p className={styles.size}>
          <span className={styles.sizing}>
            Size {wishlistItem && wishlistItem.size}
          </span>
        </p>
      </div>
      <div className={styles.price}>
        <p className={styles.number}>${price}</p>
        <button
          onClick={() => onRemoveFromWishlist(id)}
          className={styles.delete}
        >
          <TrashIcon className={styles.icon} />
        </button>
      </div>
    </>
  )
}

function WishlistMenu() {
  const { wishlist } = useWishlist()
  return (
    <main className={styles.wrapper}>
      <section className={styles.wishlist}>
        {wishlist.length > 0 &&
          wishlist.map((wishlistObject) => (
            <WishlistItem
              id={wishlistObject.id}
              key={wishlistObject.id}
              url={wishlistObject.pictures[0].url}
              name={wishlistObject.name}
              price={wishlistObject.price}
            />
          ))}
      </section>
    </main>
  )
}

export default WishlistMenu
