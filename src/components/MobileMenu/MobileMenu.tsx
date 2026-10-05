import styles from "./MobileMenu.module.css"
import { TextAlignJustifyIcon } from "@radix-ui/react-icons"

function MobileMenu() {
  return (
    <article className={styles.wrapper}>
      <button className={styles.button}>
        <TextAlignJustifyIcon className={styles.icon} />
      </button>
    </article>
  )
}

export default MobileMenu
