import { useDispatch } from 'react-redux'
import DialogStore from '../../../redux/store/DialogStore'
import { DIALOG_TYPE_ALERT, DIALOG_TYPE_CONFIRM, DIALOG_TYPE_TOAST } from '../../../constant/dialog'

const useDialog = () => {
  const dispatch = useDispatch()

  const showDialog = (info) => {
    let _resolve

    const promise = new Promise((resolve, reject) => {
      _resolve = resolve
    })

    const dialog = {
      ...info,
      id: new Date().getTime(),
      resolve: (params) => {
        _resolve(params)
      },
    }

    dispatch(DialogStore.actions.pushDialog(dialog))

    return promise
  }

  const alert = async (message, positive_message) => {
    const info = {
      type: DIALOG_TYPE_ALERT,
      message,
      positive_message,
    }
    return showDialog(info)
  }

  const confirm = (message, positive_message, negative_message) => {
    const info = {
      type: DIALOG_TYPE_CONFIRM,
      message,
      positive_message,
      negative_message,
    }
    return showDialog(info)
  }

  const toast = (message, duration = 3000) => {
    const info = {
      type: DIALOG_TYPE_TOAST,
      message,
      duration,
    }

    showDialog(info)
  }

  return { alert, confirm, toast }
}

export default useDialog
