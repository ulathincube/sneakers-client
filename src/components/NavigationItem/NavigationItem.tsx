import styles from "./NavigationItem.module.css"
import { Link } from "react-router"

function NavigationItem({ children }: React.PropsWithChildren) {
  return (
    <li className={styles.wrapper}>
      <Link to="/" className={styles.action}>
        {children}
      </Link>
    </li>
  )
}

export default NavigationItem
