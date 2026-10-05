import styles from "./MobileMenu.module.css"
import { TextAlignJustifyIcon } from "@radix-ui/react-icons"
import { useState, useEffect } from "react"
import MobileNavigation from "../MobileNavigation"

const container: HTMLElement = document.getElementById("modal")!

function MobileMenu() {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false)

  const onShowNavigation = () => setShowMobileNav(true)

  useEffect(() => {
    if (showMobileNav) {
      container.style.visibility = "visible"
      container.style.display = "flex"
      container.style.pointerEvents = "all"
      document.body.style.overflow = "hidden"
    } else {
      container.style.visibility = "hidden"
      container.style.display = "none"
      container.style.pointerEvents = "none"
      document.body.style.overflow = "visible"
    }
  }, [showMobileNav])

  return (
    <article className={styles.wrapper}>
      <button onClick={onShowNavigation} className={styles.button}>
        <TextAlignJustifyIcon className={styles.icon} />
      </button>
      {showMobileNav && <MobileNavigation />}
    </article>
  )
}

export default MobileMenu
