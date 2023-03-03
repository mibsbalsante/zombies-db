import { createContext, useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"

import { getFromStorage, saveToStorage } from "@utl/storage"
import survivorsList from "@api/survivors.json"

const Survivors = createContext()

export const SurvivorsProvider = ({ children }) => {
  const [search, setSearch] = useState("")
  const [list, setList] = useState([])
  const [results, setResults] = useState([])

  const filter = text => {
    if (!text) setResults(list)

    const searchText = text.toLowerCase()
    const filteredResults = list.filter(({ name }) =>
      name.toLowerCase().includes(searchText)
    )
    setResults(filteredResults)
  }

  const updateSearch = text => {
    setSearch(text)
    filter(text)
  }

  useEffect(() => {
    const survivors = getFromStorage("survivors") || survivorsList
    setList(survivors)
    setResults(survivors)
    saveToStorage(survivors)
  }, [])

  return (
    <Survivors.Provider
      value={{
        list,
        results,
        search,
        updateSearch,
      }}
    >
      {children}
    </Survivors.Provider>
  )
}

SurvivorsProvider.propTypes = { children: PropTypes.node }

export const useSurvivorsContext = () => useContext(Survivors)
