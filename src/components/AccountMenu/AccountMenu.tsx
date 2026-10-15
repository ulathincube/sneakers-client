import { Link } from "react-router"
import styles from "./AccountMenu.module.css"
import {
  PersonIcon,
  IdCardIcon,
  ReaderIcon,
  CardStackMinusIcon,
  HeartIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons"

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
            <Link className={styles.link} to={url}>
              Manage
            </Link>
          </div>
        </article>
      </figure>
    </article>
  )
}

function AccountMenu() {
  return (
    <main className={styles.wrapper}>
      <AccountMenuItem title="Account" description="" url="">
        <PersonIcon className={styles.icon} />
      </AccountMenuItem>
      <AccountMenuItem title="Billing" description="" url="">
        <IdCardIcon className={styles.icon} />
      </AccountMenuItem>
      <AccountMenuItem title="Orders" description="" url="">
        <ReaderIcon className={styles.icon} />
      </AccountMenuItem>
      <AccountMenuItem title="Credit" description="" url="">
        <CardStackMinusIcon className={styles.icon} />
      </AccountMenuItem>
      <AccountMenuItem title="My Lists" description="" url="">
        <HeartIcon className={styles.icon} />
      </AccountMenuItem>
      <AccountMenuItem title="Support" description="" url="">
        <QuestionMarkCircledIcon className={styles.icon} />
      </AccountMenuItem>
    </main>
  )
}

export default AccountMenu
