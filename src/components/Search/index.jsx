import { useSurvivorsContext } from "@ctx/Survivors"

import styles from "./styles.module.scss"

const Search = () => {
  const {
    communityList,
    search,
    setSearch,
    community,
    setCommunity,
    infected,
    setInfected,
  } = useSurvivorsContext()

  return (
    <form className={styles.form}>
      <label className={styles.formField}>
        <strong>Name</strong>
        <input
          data-testid="search-name"
          className={styles.formInput}
          type="text"
          name={search}
          onInput={({ target }) => setSearch(target.value)}
        />
      </label>
      <label className={styles.formField}>
        <strong>Community</strong>
        <select
          className={styles.formInput}
          value={community}
          onChange={({ target }) => setCommunity(target.value)}
        >
          <option value="">All</option>
          {communityList.map(community => (
            <option key={community} value={community}>
              {community}
            </option>
          ))}
        </select>
      </label>
      <label className={styles.formField}>
        <strong>Infected only</strong>
        <input
          data-testid="search-infected"
          className={styles.formInput}
          type="checkbox"
          checked={infected}
          onChange={() => setInfected(!infected)}
        />
      </label>
    </form>
  )
}

export default Search
