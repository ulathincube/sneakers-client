import styles from "./NavigationItem.module.css"

function NavigationItem({ children }: React.PropsWithChildren) {
  return <li className={styles.wrapper}>{children}</li>
}

export default NavigationItem
