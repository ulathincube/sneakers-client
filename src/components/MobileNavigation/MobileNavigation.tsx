import styles from "./MobileNavigation.module.css"
import { createPortal } from "react-dom"
import { Link } from "react-router"
import { CaretRightIcon, Cross2Icon } from "@radix-ui/react-icons"

const container: HTMLElement = document.getElementById("modal")!

interface Props {
  onHideNavigation: () => void
}

function MobileNavigationChildren({ onHideNavigation }: Props) {
  return (
    <div className={styles.overlay}>
      <article className={styles.wrapper}>
        <button onClick={onHideNavigation} className={styles.close}>
          <Cross2Icon className={styles.icon} />
        </button>
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

function MobileNavigation({ onHideNavigation }: Props) {
  return createPortal(
    <MobileNavigationChildren onHideNavigation={onHideNavigation} />,
    container
  )
}

export default MobileNavigation
