import styles from "./Navigation.module.css"
import NavigationItem from "../NavigationItem"
import { HeartIcon, BackpackIcon, PersonIcon } from "@radix-ui/react-icons"
import useCart from "../../hooks/useCart"

function Navigation() {
  const { cart } = useCart()

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.navigation}>
        <NavigationItem route="/wishlist">
          <HeartIcon className={styles.icon} />
        </NavigationItem>
        <NavigationItem route="/cart">
          <BackpackIcon className={styles.icon} />
          {cart.length > 0 && (
            <span className={styles.count}>{cart.length}</span>
          )}
        </NavigationItem>
        <NavigationItem route="/account">
          <PersonIcon className={styles.icon} />
        </NavigationItem>
      </ul>
    </nav>
  )
}

export default Navigation
