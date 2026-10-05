import styles from "./MobileNavigation.module.css"
import { createPortal } from "react-dom"
import { Link } from "react-router"

const container: HTMLElement = document.getElementById("modal")!

function MobileNavigationChildren() {
  return (
    <article className={styles.wrapper}>
      <section>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              Profile
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              My Wallet
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              Orders
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              Wishlist
            </Link>
          </li>
        </ul>
      </section>
    </article>
  )
}

function MobileNavigation() {
  return createPortal(<MobileNavigationChildren />, container)
}

export default MobileNavigation
