import { createContext, useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"

import { getFromStorage, saveToStorage } from "@utl/storage"
import survivorsList from "@api/survivors.json"

const Survivors = createContext()

export const SurvivorsProvider = ({ children }) => {
  const [list, setList] = useState([])
  const [results, setResults] = useState([])

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
      }}
    >
      {children}
    </Survivors.Provider>
  )
}

SurvivorsProvider.propTypes = { children: PropTypes.node }

export const useSurvivorsContext = () => useContext(Survivors)
