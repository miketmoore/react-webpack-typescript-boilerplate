import * as React from "react"
import * as ReactDOM from "react-dom"

import { Hello, HelloStyled, HelloProps } from "./components/Hello"

const config: HelloProps = {
  compiler: "TypeScript",
  framework: "React"
}
ReactDOM.render(
  <div>
    <Hello {...config} />
    <HelloStyled {...config} />
  </div>,
  document.getElementById("example")
)
