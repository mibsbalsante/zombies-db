import { useSurvivorsContext } from "@ctx/Survivors"

import styles from "./styles.module.scss"

const Search = () => {
  const { search, updateSearch } = useSurvivorsContext()

  return (
    <form className={styles.form}>
      <input
        placeholder="Search by Name"
        type="text"
        name={search}
        onInput={({ target }) => updateSearch(target.value)}
      />
    </form>
  )
}

export default Search
