import { Link } from "react-router"
import styles from "./AccountMenu.module.css"

interface Props {
  title: string
  description: string
  url: string
}

function AccountMenuItem({ title, description, url }: Props) {
  return (
    <article className={styles.article}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.container}>
        <Link to={url}>Manage</Link>
      </div>
    </article>
  )
}

function AccountMenu() {
  return (
    <main className={styles.wrapper}>
      <AccountMenuItem title="Account Settings" description="" url="" />
      <AccountMenuItem title="Account Settings" description="" url="" />
      <AccountMenuItem title="Account Settings" description="" url="" />
      <AccountMenuItem title="Account Settings" description="" url="" />
      <AccountMenuItem title="Account Settings" description="" url="" />
      <AccountMenuItem title="Account Settings" description="" url="" />
    </main>
  )
}

export default AccountMenu
