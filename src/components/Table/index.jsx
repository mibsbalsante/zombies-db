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
              <tr key={person.id}>
                <td data-testid="table-name">{person.name}</td>
                <td data-testid="table-birthday">
                  {formatDate(person.birthday)}
                </td>
                <td data-testid="table-phone">{person.phone}</td>
                <td data-testid="table-community">{person.community}</td>
                <td data-testid="table-infected">
                  <input
                    data-testid="table-infected"
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
