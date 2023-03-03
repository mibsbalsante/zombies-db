import { createContext, useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"

import { getFromStorage, saveToStorage } from "@utl/storage"
import survivorsList from "@api/survivors.json"

const Survivors = createContext()

export const SurvivorsProvider = ({ children }) => {
  // data
  const [list, setList] = useState([])
  const [communityList, setCommunityList] = useState([])

  // filtering
  const [results, setResults] = useState([])
  const [search, setSearch] = useState("")
  const [community, setCommunity] = useState("")
  const [infected, setInfected] = useState(false)

  const filterName = people => {
    if (!search) return people

    const searchText = search.toLowerCase()
    return people.filter(({ name }) => name.toLowerCase().includes(searchText))
  }

  const filterCommunity = people => {
    if (!community) return people
    return people.filter(person => person.community === community)
  }

  const filterInfected = people => {
    if (!infected) return people
    return people.filter(person => person.infected)
  }

  const filter = () => {
    let filteredResults = filterInfected(list)
    filteredResults = filterCommunity(filteredResults)
    filteredResults = filterName(filteredResults)

    setResults(filteredResults)
  }

  useEffect(() => {
    filter()
  }, [search, community, infected])

  useEffect(() => {
    const survivors = getFromStorage("survivors") || survivorsList
    saveToStorage(survivors)

    setList(survivors)
    setResults(survivors)
    // removing duplicates and sorting
    setCommunityList(
      [...new Set(survivors.map(({ community }) => community))].sort()
    )
  }, [])

  return (
    <Survivors.Provider
      value={{
        list,
        communityList,
        results,
        search,
        setSearch,
        community,
        setCommunity,
        infected,
        setInfected,
      }}
    >
      {children}
    </Survivors.Provider>
  )
}

SurvivorsProvider.propTypes = { children: PropTypes.node }

export const useSurvivorsContext = () => useContext(Survivors)
