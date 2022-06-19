import useDialog from '../_common/dialog/useDialog'

const ContainerHome = () => {
  const { alert, confirm, toast } = useDialog()

  const alertEvent = async () => {
    await alert('얼럿 테스트')
  }

  const confirmEvent = async () => {
    if (await confirm('컨펌 테스트')) {
      console.log('확인 누름')
    }
  }

  const toastEvent = () => {
    toast('message',1000)
  }

  return (
    <div>
      <div style={{ marginTop: '500px' }}>home</div>
      <button onClick={alertEvent}>얼럿</button>
      <button onClick={confirmEvent}>컨펌</button>
      <button onClick={toastEvent}>토스트</button>
      <div style={{ marginBottom: '5000px' }}>스크롤</div>
    </div>
  )
}

export default ContainerHome
