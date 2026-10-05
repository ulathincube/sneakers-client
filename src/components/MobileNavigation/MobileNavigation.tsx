import styles from "./MobileNavigation.module.css"
import { createPortal } from "react-dom"

const container: HTMLElement = document.getElementById("modal")!

function MobileNavigationChildren() {
  return (
    <article className={styles.wrapper}>
      <section>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
        repellendus dolorum qui cupiditate praesentium tenetur porro rem, modi
        quisquam non, sunt magni incidunt corporis nulla minus expedita. Impedit
        laborum fugiat architecto nisi, consectetur exercitationem ratione sint
        reprehenderit quis in alias facilis officiis suscipit voluptatibus
        dolores vel beatae deleniti atque sunt.``
      </section>
    </article>
  )
}

function MobileNavigation() {
  return createPortal(<MobileNavigationChildren />, container)
}

export default MobileNavigation
