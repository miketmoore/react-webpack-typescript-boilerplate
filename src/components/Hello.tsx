import * as React from "react"
import styled, { css } from "react-emotion"
import { color, space } from "styled-system"

interface SpaceProps {
  m: number | string
  p: number | string
}

interface ColorProps {
  bg: string
  color: string
}

interface SectionProps extends SpaceProps, ColorProps {}

const Section  = styled<SectionProps,{}>(props => <div {...props} />)`
  ${space};
  ${color};
`

interface HelloProps extends SectionProps {
  children?: any
}
const Hello = ({children,m,bg,color,p}:HelloProps) => 
  <Section m={m} bg={bg} color={color} p={p} children={children} />

export default Hello
