import { useCallback, useEffect } from 'react'



export const useClickOutSide = (ref, action) => {
  const clickEventHandler = useCallback(
    (e) => {
      const { current: el } = ref
      el && !el.contains(e.target) && action()
    },
    [action, ref]
  )

  useEffect(() => {
    window.addEventListener('click', clickEventHandler)

    return () => window.removeEventListener('click', clickEventHandler)
  }, [clickEventHandler])
}
