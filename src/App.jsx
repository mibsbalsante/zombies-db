import { SurvivorsProvider } from "@ctx/Survivors"
import Header from "@cmp/Header"
import Search from "@cmp/Search"
import Table from "@cmp/Table"
import Modal from "@cmp/Modal"

import styles from "./App.module.scss"

function App() {
  return (
    <SurvivorsProvider>
      <div className={styles.app}>
        <Header />
        <Search />
        <Table />
      </div>
      <Modal />
    </SurvivorsProvider>
  )
}

export default App
