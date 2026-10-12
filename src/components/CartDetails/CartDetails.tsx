import styles from "./CartDetails.module.css"
import CartItem from "../CartItem"
import useCart from "../../hooks/useCart"

function CartDetails() {
  const { cart } = useCart()

  const total = cart.reduce(
    (accumulator, current) => accumulator + current.price,
    0
  )

  return (
    <main className={styles.wrapper}>
      <section className={styles.cart}>
        {cart.length > 0 &&
          cart.map((cartItemObject) => (
            <CartItem
              id={cartItemObject.id}
              key={cartItemObject.id}
              name={cartItemObject.name}
              url={cartItemObject.pictures[0].url}
              price={cartItemObject.price}
            />
          ))}
      </section>
      {cart.length > 0 && (
        <aside className={styles.sidebar}>
          <h3 className={styles.title}>Summary</h3>
          <div className={styles.taxes}>
            <dl className={styles.list}>
              <dt className={styles.tag}>Do you have a promo code?</dt>
              <dd className={styles.description}>#Promo</dd>

              <dt className={styles.tag}>Subtotal</dt>
              <dd className={styles.description}>${total}.00</dd>

              <dt className={styles.tag}>Estimated Shipping</dt>
              <dd className={styles.description}>$5.00</dd>

              <dt className={styles.tag}>Estimated Tax</dt>
              <dd className={styles.description}>$0.00</dd>

              <dt className={styles.tag}>Total</dt>
              <dd className={styles.description}>${total + 5}.00</dd>
            </dl>
          </div>

          <div className={styles.actions}>
            <button className={styles.checkout}>Checkout</button>
            <button className={styles.paypal}>Paypal</button>
          </div>
        </aside>
      )}
    </main>
  )
}

export default CartDetails
