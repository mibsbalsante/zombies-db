import { ReactComponent as Icon } from "@fa/biohazard.svg"

import styles from "./styles.module.scss"

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <Icon className={styles.headerIcon} />
      <h1 className={styles.headerTitle}>{"Survivor's List"}</h1>
    </div>
  </header>
)

export default Header
