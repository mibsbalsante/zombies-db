import styles from "./styles.module.scss"

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>{"Survivor's List"}</h1>
    </div>
  </header>
)

export default Header
