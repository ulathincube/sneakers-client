import styles from "./CartDetails.module.css"
import CartItem from "../CartItem"

function CartDetails() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.cart}>
        <CartItem />
      </section>
      <aside className={styles.sidebar}>
        <h3 className={styles.title}>Summary</h3>
        <div className={styles.taxes}>
          <dl className={styles.list}>
            <dt className={styles.tag}>Do you have a promo code?</dt>
            <dd className={styles.description}>#Promo</dd>

            <dt className={styles.tag}>Subtotal</dt>
            <dd className={styles.description}>$55</dd>

            <dt className={styles.tag}>Estimated Shipping</dt>
            <dd className={styles.description}>$0.00</dd>

            <dt className={styles.tag}>Estimated Tax</dt>
            <dd className={styles.description}>$0.00</dd>

            <dt className={styles.tag}>Total</dt>
            <dd className={styles.description}>$55</dd>
          </dl>
        </div>

        <div className={styles.actions}>
          <button className={styles.checkout}>Checkout</button>
          <button className={styles.paypal}>Paypal</button>
        </div>
      </aside>
    </main>
  )
}

export default CartDetails
