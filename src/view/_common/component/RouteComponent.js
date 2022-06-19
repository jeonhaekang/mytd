import {useCallback, useLayoutEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import {PERMISSON_ALL, PERMISSON_LOGIN} from "../../../constant/permission"

const RouteComponent = (props) => {
  const {permission, component: Component, title, description} = props

  const [render, setRender] = useState(false)
  const navigate = useNavigate()

  const loginCheck = () => {
    return true
  }

  const permissionCheck = useCallback(() => {
    if (permission === PERMISSON_ALL) {
      setRender(true)
      return
    }
    if (permission === PERMISSON_LOGIN) {
      if (loginCheck()) {
        setRender(true)
      } else {
        navigate(-1)
      }
    }
  }, [navigate, permission])

  useLayoutEffect(() => {
    window.document.querySelector("title").innerHTML = title || "MYTD"

    if (description) {
      window.document.querySelector("meta[name='description']").content = description
    }

    permissionCheck()
  }, [description, permissionCheck, title])

  return render && <Component />
}

export default RouteComponent
