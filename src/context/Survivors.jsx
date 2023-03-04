import { createContext, useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"

import { getFromStorage, saveToStorage } from "@utl/storage"
import survivorsList from "@api/survivors.json"
import { requestAllImages } from "@api/image"

const Survivors = createContext()

export const SurvivorsProvider = ({ children }) => {
  // data
  const [list, setList] = useState([])
  const [communityList, setCommunityList] = useState([])
  const [selected, setSelected] = useState(null)

  // bing api data
  const [survivorsImages, setSurvivorsImages] = useState([])

  // filtering
  const [results, setResults] = useState([])
  const [search, setSearch] = useState("")
  const [community, setCommunity] = useState("")
  const [infected, setInfected] = useState(false)

  const _filterName = people => {
    if (!search) return people

    const searchText = search.toLowerCase()
    return people.filter(({ name }) => name.toLowerCase().includes(searchText))
  }

  const _setSurvivorsImages = async survivors => {
    const images = await requestAllImages(survivors)
    setSurvivorsImages(images)
    saveToStorage("survivorsImages", images)
  }

  const _filterCommunity = people => {
    if (!community) return people
    return people.filter(person => person.community === community)
  }

  const _filterInfected = people => {
    if (!infected) return people
    return people.filter(person => person.infected)
  }

  const _filter = () => {
    let filteredResults = _filterInfected(list)
    filteredResults = _filterCommunity(filteredResults)
    filteredResults = _filterName(filteredResults)
    setResults(filteredResults)
  }

  useEffect(() => {
    _filter()
  }, [search, community, infected])

  useEffect(() => {
    const survivors = getFromStorage("survivors") || survivorsList
    saveToStorage("survivors", survivors)

    setList(survivors)
    setResults(survivors)

    const survivorsImages = getFromStorage("survivorsImages")
    if (!survivorsImages || survivorsImages.length === 0)
      _setSurvivorsImages(survivors)
    else setSurvivorsImages(survivorsImages)

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
        selected,
        setSelected,
        survivorsImages,
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
