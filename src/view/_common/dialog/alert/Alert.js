import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useClickOutSide } from 'utils/hooks'
import DialogStore from '../../../../redux/store/DialogStore'
import styles from './Alert.module.scss'

const Alert = (props) => {
  const dispatch = useDispatch()
  const { message, positive_message, id } = props

  const content = useRef(null)

  const removeDialog = () => {
    dispatch(DialogStore.actions.removeDialog(id))
  }

  useClickOutSide(content, removeDialog)

  return (
    <div className={styles.layout}>
      <div className={styles.content} ref={content}>
        <p className={styles.message}>{message}</p>
        <button onClick={removeDialog}>{positive_message || '확인'}</button>
      </div>
    </div>
  )
}

export default Alert
