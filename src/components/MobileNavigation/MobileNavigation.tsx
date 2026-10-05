import styles from "./MobileNavigation.module.css"
import { createPortal } from "react-dom"
import { Link } from "react-router"
import { CaretRightIcon } from "@radix-ui/react-icons"

const container: HTMLElement = document.getElementById("modal")!

function MobileNavigationChildren() {
  return (
    <div className={styles.overlay}>
      <article className={styles.wrapper}>
        <section>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                <span className={styles.text}>My Account</span>
                <span className={styles.box}>
                  <CaretRightIcon className={styles.icon} />
                </span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                <span className={styles.text}>Wallet</span>
                <span className={styles.box}>
                  <CaretRightIcon className={styles.icon} />
                </span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                <span className={styles.text}>Orders</span>
                <span className={styles.box}>
                  <CaretRightIcon className={styles.icon} />
                </span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                <span className={styles.text}>Offers</span>
                <span className={styles.box}>
                  <CaretRightIcon className={styles.icon} />
                </span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </div>
  )
}

function MobileNavigation() {
  return createPortal(<MobileNavigationChildren />, container)
}

export default MobileNavigation
