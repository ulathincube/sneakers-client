import { Link } from "react-router"
import styles from "./AccountMenu.module.css"
import { PersonIcon } from "@radix-ui/react-icons"

interface Props extends React.PropsWithChildren {
  title: string
  description: string
  url: string
}

function AccountMenuItem({ title, description, url, children }: Props) {
  return (
    <article className={styles.article}>
      <figure className={styles.container}>
        <div className={styles.parent}>{children}</div>
        <article className={styles.box}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.container}>
            <Link to={url}>Manage</Link>
          </div>
        </article>
      </figure>
    </article>
  )
}

function AccountMenu() {
  return (
    <main className={styles.wrapper}>
      <AccountMenuItem title="Account Settings" description="" url="">
        <PersonIcon className={styles.icon} />
      </AccountMenuItem>
      <AccountMenuItem title="Account Settings" description="" url="">
        <PersonIcon className={styles.icon} />
      </AccountMenuItem>
      <AccountMenuItem title="Account Settings" description="" url="">
        <PersonIcon className={styles.icon} />
      </AccountMenuItem>
      <AccountMenuItem title="Account Settings" description="" url="">
        <PersonIcon className={styles.icon} />
      </AccountMenuItem>
      <AccountMenuItem title="Account Settings" description="" url="">
        <PersonIcon className={styles.icon} />
      </AccountMenuItem>
      <AccountMenuItem title="Account Settings" description="" url="">
        <PersonIcon className={styles.icon} />
      </AccountMenuItem>
    </main>
  )
}

export default AccountMenu
