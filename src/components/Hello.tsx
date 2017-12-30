/// <reference path="../styled-system/index.d.ts" />
import * as React from "react"
import styled, { css } from "react-emotion"
import { color, ColorProps, space, SpaceProps } from "styled-system"

interface SectionProps extends ColorProps, SpaceProps {}

const Section  = styled<SectionProps,{}>(props => <div {...props} />)`
  ${color};
  ${space};
`

interface HelloProps extends SectionProps {
  children?: any
}
const Hello = ({children,bg,color,m,p}:HelloProps) => 
  <Section 
    bg={bg} 
    color={color} 
    m={m}
    p={p}
    children={children} />

export default Hello
