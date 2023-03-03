import { SurvivorsProvider } from "@ctx/Survivors"
import Table from "@cmp/Table"

import "./App.css"

function App() {
  return (
    <SurvivorsProvider>
      <div className="App">
        <Table />
      </div>
    </SurvivorsProvider>
  )
}

export default App
