import * as React from "react"
import * as ReactDOM from "react-dom"

import { Hello, HelloStyled, HelloProps } from "./components/Hello"

interface ConfigProps extends HelloProps {
    color?: string,
    bg?: string
}

const config: ConfigProps = {
  compiler: "TypeScript",
  framework: "React",
  color: 'yellow',
  bg: 'red'
}
ReactDOM.render(
  <div>
    <Hello {...config} />
    <HelloStyled {...config} />
  </div>,
  document.getElementById("example")
)
