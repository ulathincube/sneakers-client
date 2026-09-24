import styles from "./Header.module.css"
import Logo from "../Logo"
import SearchBar from "../SearchBar"
import Navigation from "../Navigation"

function Header() {
  return (
    <header className={styles.wrapper}>
      <Logo />
      <SearchBar />
      <Navigation />
    </header>
  )
}

export default Header
