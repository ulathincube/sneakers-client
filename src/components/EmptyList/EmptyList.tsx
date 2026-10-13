import styles from "./EmptyList.module.css"
import { Link } from "react-router"

interface Props {
  list: string
}

function EmptyList({ list }: Props) {
  return (
    <main className={styles.wrapper}>
      <h2 className={styles.title}>Your {list} is currently empty</h2>
      <Link to="/">Start Shopping</Link>
    </main>
  )
}

export default EmptyList
