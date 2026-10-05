import styles from "./Navigation.module.css"
import NavigationItem from "../NavigationItem"
import { HeartIcon, BackpackIcon, PersonIcon } from "@radix-ui/react-icons"

function Navigation() {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.navigation}>
        <NavigationItem route="/wishlist">
          <HeartIcon className={styles.icon} />
        </NavigationItem>
        <NavigationItem route="/cart">
          <BackpackIcon className={styles.icon} />
        </NavigationItem>
        <NavigationItem route="/account">
          <PersonIcon className={styles.icon} />
        </NavigationItem>
      </ul>
    </nav>
  )
}

export default Navigation
