import { useSurvivorsContext } from "@ctx/Survivors"
import { formatDate } from "@utl/format"

import styles from "./styles.module.scss"

const Table = () => {
  const { results } = useSurvivorsContext()

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>name</th>
            <th>birthday</th>
            <th>phone</th>
            <th>community</th>
            <th>infected</th>
          </tr>
        </tbody>
        <tbody>
          {results.map(({ name, birthday, phone, community, infected }) => (
            <tr key={name + birthday}>
              <td>{name}</td>
              <td>{formatDate(birthday)}</td>
              <td>{phone}</td>
              <td>{community}</td>
              <td>
                <input type="checkbox" checked={infected} readOnly />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default Table
