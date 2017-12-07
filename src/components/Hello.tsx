import * as React from "react"
import styled, { css } from "react-emotion"
export interface HelloProps { compiler: string; framework: string }
export const Hello = (props: any) => (
  <h1 className={props.className}>
    Hello from {props.compiler} and {props.framework}!
  </h1>
)

export const HelloStyled = styled(Hello)`
  background-color: red;
  color: green;
  outline: 1px solid #000;
`
