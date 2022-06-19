const init_state = {
  dialog: [],
}

const PUSH_DIALOG = 'dialog_store/PUSH_DIALOG'
const REMOVE_DIALOG = 'dialog_store/REMOVE_DIALOG'

export default class DialogStore {
  static actions = {
    pushDialog: (dialog) => ({
      type: PUSH_DIALOG,
      dialog,
    }),
    removeDialog: (dialog_id) => ({
      type: REMOVE_DIALOG,
      dialog_id,
    }),
  }

  static reduce = (state = init_state, action) => {
    switch (action.type) {
      case PUSH_DIALOG:
        const push_dialog_list = [...state.dialog, action.dialog]
        return { dialog: push_dialog_list }
      case REMOVE_DIALOG:
        const remove_dialog_list = state.dialog.filter((dialog) => dialog.id !== action.dialog_id)
        return { dialog: remove_dialog_list }
      default:
        return state
    }
  }
}
