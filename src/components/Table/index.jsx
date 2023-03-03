import { useSurvivorsContext } from "@ctx/Survivors"
import { formatDate } from "@utl/format"
import { ReactComponent as IconEdit } from "@fa/pen-to-square.svg"

import styles from "./styles.module.scss"

const Table = () => {
  const { setSelected, results } = useSurvivorsContext()

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
            <th></th>
          </tr>
        </tbody>
        <tbody>
          {results.length > 0 ? (
            results.map(person => (
              <tr key={person.name + person.birthday}>
                <td>{person.name}</td>
                <td>{formatDate(person.birthday)}</td>
                <td>{person.phone}</td>
                <td>{person.community}</td>
                <td>
                  <input
                    className={styles.tableCheckbox}
                    type="checkbox"
                    checked={person.infected}
                    readOnly
                  />
                </td>
                <td>
                  <button
                    onClick={() => setSelected(person)}
                    className={styles.tableEdit}
                    title="Edit"
                  >
                    <IconEdit />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className={styles.tableEmpty} colSpan={5}>
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
export default Table
