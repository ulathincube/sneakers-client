import styles from "./NavigationItem.module.css"
import { Link } from "react-router"

interface Props extends React.PropsWithChildren {
  route: string
}

function NavigationItem({ children, route }: Props) {
  return (
    <li className={styles.wrapper}>
      <Link to={route} className={styles.action}>
        {children}
      </Link>
    </li>
  )
}

export default NavigationItem
