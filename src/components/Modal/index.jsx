import { useSurvivorsContext } from "@ctx/Survivors"
import { formatDate } from "@utl/format"
import { ReactComponent as IconClose } from "@fa/xmark.svg"

import styles from "./styles.module.scss"

const Modal = () => {
  const { survivorsImages, selected, setSelected, setUpdatedSurvivor } =
    useSurvivorsContext()

  const handleClose = () => {
    setSelected(null)
  }

  const handleUpdate = (field, value) => {
    const updatedData = { ...selected, [field]: value }
    setSelected(updatedData)
    setUpdatedSurvivor(updatedData)
  }

  const survivorPicture = survivorsImages.find(
    ({ key }) => key === selected?.id
  )

  return (
    selected && (
      <div onClick={handleClose} className={styles.overflow}>
        <div onClick={ev => ev.stopPropagation()} className={styles.modal}>
          <button className={styles.modalClose} onClick={handleClose}>
            <IconClose />
          </button>

          <h2 className={styles.modalTitle}>{selected.name}</h2>

          <img
            className={styles.modalPicture}
            src={survivorPicture?.value}
            alt=""
          />

          <form className={styles.modalForm}>
            <label className={styles.modalFormField}>
              Birthday:
              <input readOnly value={formatDate(selected.birthday)} />
            </label>

            <label className={styles.modalFormField}>
              Phone:
              <input readOnly value={selected.phone} />
            </label>

            <label className={styles.modalFormField}>
              Community:
              <input readOnly value={selected.community} />
            </label>

            <hr />

            <label className={styles.modalFormField}>
              Infected status:
              <input
                className={styles.tableCheckbox}
                type="checkbox"
                checked={selected.infected}
                onChange={() => handleUpdate("infected", !selected.infected)}
              />
            </label>

            <label className={styles.modalFormField}>
              Description:
              <textarea
                value={selected.description}
                onChange={({ target }) =>
                  handleUpdate("description", target.value)
                }
              />
            </label>
          </form>
        </div>
      </div>
    )
  )
}

export default Modal
