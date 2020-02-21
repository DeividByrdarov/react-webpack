import React from "react"
import { render } from "react-dom"

import App from "./App"

import "./styles.scss"

const appEl = document.getElementById("app")

const renderApp = () => render(<App />, appEl)

renderApp()

if (module.hot) {
  const { setLogLevel } = require("../node_modules/webpack/hot/log")
  module.hot.accept("./App", renderApp)
  setLogLevel("warning")
}
