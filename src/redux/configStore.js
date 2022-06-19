import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunk from "redux-thunk"
import DialogStore from "./store/DialogStore"

const rootReducer = combineReducers({
  // modules
  dialog_store: DialogStore.reduce,
})

const middlewares = [thunk.withExtraArgument()]

const env = process.env.NODE_ENV

// if (env === "development") {
//   const {logger} = require("redux-logger")
//   middlewares.push(logger)
// }

// DevTool사용 설정
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(applyMiddleware(...middlewares))

let store = () => createStore(rootReducer, enhancer)

export default store()
