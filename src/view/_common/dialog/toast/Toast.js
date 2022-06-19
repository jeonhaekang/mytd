import styles from './Toast.module.scss'
import { useDispatch } from 'react-redux'
import DialogStore from 'redux/store/DialogStore'
import { useEffect, useRef } from 'react'

const Toast = (props) => {
  const { message, id, duration } = props
  const dispatch = useDispatch()
  const time = useRef(null)

  const removeDialog = () => {
    dispatch(DialogStore.actions.removeDialog(id))
  }

  useEffect(() => {
    time.current = setTimeout(() => {
      removeDialog()
    }, duration)

    return () => {
      clearTimeout(time.current)
    }
  }, [])

  return <div className={styles.toast}>{message}</div>
}

export default Toast
