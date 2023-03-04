import { useSurvivorsContext } from "@ctx/Survivors"
import { formatDate } from "@utl/format"
// import { useEffect } from "react"

import styles from "./styles.module.scss"

const Modal = () => {
  const { survivorsImages, selected, setSelected } = useSurvivorsContext()

  const handleClose = () => {
    setSelected(null)
  }

  const survivorPicture = survivorsImages.find(
    ({ key }) => key === selected?.id
  )

  return (
    selected && (
      <div onClick={handleClose} className={styles.overflow}>
        <div onClick={ev => ev.stopPropagation()} className={styles.modal}>
          <button onClick={handleClose}>close</button>

          <h2>{selected.name}</h2>

          <img src={survivorPicture?.value} alt="" width="300" />

          <p>
            Birthday: <input readOnly value={formatDate(selected.birthday)} />
          </p>
          <p>
            Phone: <input readOnly value={selected.phone} />
          </p>
          <p>
            Community: <input readOnly value={selected.community} />
          </p>
          <p>
            Infected status:{" "}
            <input
              className={styles.tableCheckbox}
              type="checkbox"
              checked={selected.infected}
              onChange={() => {}}
            />
          </p>

          <hr />

          <p>
            About:{" "}
            <textarea
              value={selected.description}
              onChange={() => {}}
              rows="10"
            />
          </p>
        </div>
      </div>
    )
  )
}

export default Modal
