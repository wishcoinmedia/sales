import React from "react"
import { Switch, Route } from "react-router-dom"

import "./tailwind.output.css"

import Signin from "./components/signin"
import Navbar from "./components/navbar"
import HomePage from "./pages/homepage"
import CustomerPage from "./pages/customers"

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/customers" component={CustomerPage} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </div>
  )
}

export default App
