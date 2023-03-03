import { SurvivorsProvider } from "@ctx/Survivors"
import Header from "@cmp/Header"
import Search from "@cmp/Search"
import Table from "@cmp/Table"

import styles from "./App.module.scss"

function App() {
  return (
    <SurvivorsProvider>
      <div className={styles.app}>
        <Header />
        <Search />
        <Table />
      </div>
    </SurvivorsProvider>
  )
}

export default App
