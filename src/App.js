import {Route, Routes} from "react-router-dom"

import {route} from "./route/route"
import Dialog from "./view/_common/dialog/Dialog"

const App = () => {
  return (
    <div>
      <Routes>
        {route.map(({path, component}, index) => {
          return <Route key={index} path={path} element={component} />
        })}
      </Routes>
      <Dialog />
    </div>
  )
}

export default App
