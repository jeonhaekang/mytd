import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useClickOutSide } from 'utils/hooks'
import DialogStore from '../../../../redux/store/DialogStore'
import styles from './Confirm.module.scss'

const Confirm = (props) => {
  const dispatch = useDispatch()
  const { message, positive_message, negative_message, id, resolve } = props

  const content = useRef(null)

  const removeDialog = () => {
    dispatch(DialogStore.actions.removeDialog(id))
  }

  const positiveHandler = () => {
    resolve(true)
    removeDialog()
  }

  const negativeHandler = () => {
    resolve(false)
    removeDialog()
  }

  useClickOutSide(content, removeDialog)

  return (
    <div className={styles.layout}>
      <div className={styles.content} ref={content}>
        <p className={styles.message}>{message}</p>
        <div className={styles.buttonBox}>
          <button onClick={positiveHandler}>{positive_message || '확인'}</button>
          <button onClick={negativeHandler}>{negative_message || '취소'}</button>
        </div>
      </div>
    </div>
  )
}

export default Confirm
