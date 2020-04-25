import React from "react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import albumsReducer from "./reducers/albumsReducer"
import "./App.css"
import ListRedux from "./components/ListRedux"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  albumsReducer,
  composeEnhancers(applyMiddleware(thunk))
)

function App() {
  return (
    <Provider store={store} className='App'>
      <ListRedux />
    </Provider>
  )
}

export default App
