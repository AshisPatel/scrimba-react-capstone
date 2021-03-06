import React from "react"
import { Switch, Route } from "react-router-dom"
import { ContextConsumer } from "./context/Context"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/">
            <Photos />
        </Route>
      </Switch>


    </div>
  )
}

export default App
