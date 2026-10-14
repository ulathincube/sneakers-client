import styles from "./Header.module.css"
import Logo from "../Logo"
import SearchBar from "../SearchBar"
import Navigation from "../Navigation"
import MobileMenu from "../MobileMenu"
import { motion } from "motion/react"

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      className={styles.wrapper}
    >
      <Logo />
      <SearchBar />
      <Navigation />
      <MobileMenu />
    </motion.header>
  )
}

export default Header
