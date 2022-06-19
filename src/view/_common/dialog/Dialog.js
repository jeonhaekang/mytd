import { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { DIALOG_TYPE_ALERT, DIALOG_TYPE_CONFIRM, DIALOG_TYPE_TOAST } from '../../../constant/dialog'
import Alert from './alert/Alert'
import Confirm from './confirm/Confirm'
import Toast from './toast/Toast'

const Dialog = () => {
  const dialog_list = useSelector((state) => state.dialog_store.dialog)


  useLayoutEffect(() => {
    const check = dialog_list.find((dialog) => dialog.type !== DIALOG_TYPE_TOAST)
    if (check) {
      window.document.body.style.overflow = 'hidden'
    } else {
      window.document.body.style.overflow = 'overlay'
    }
  }, [dialog_list])

  return (
    dialog_list.length > 0 && (
      <div>
        {dialog_list.map((dialog, idx) => {
          if (dialog.type === DIALOG_TYPE_ALERT) {
            return <Alert {...dialog} key={dialog.id} />
          } else if (dialog.type === DIALOG_TYPE_CONFIRM) {
            return <Confirm {...dialog} key={dialog.id} />
          } else if (dialog.type === DIALOG_TYPE_TOAST) {
            return <Toast {...dialog} key={dialog.id} />
          }
        })}
      </div>
    )
  )
}

export default Dialog
