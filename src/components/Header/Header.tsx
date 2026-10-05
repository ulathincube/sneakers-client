import styles from "./Header.module.css"
import Logo from "../Logo"
import SearchBar from "../SearchBar"
import Navigation from "../Navigation"
import MobileMenu from "../MobileMenu"

function Header() {
  return (
    <header className={styles.wrapper}>
      <Logo />
      <SearchBar />
      <Navigation />
      <MobileMenu />
    </header>
  )
}

export default Header
