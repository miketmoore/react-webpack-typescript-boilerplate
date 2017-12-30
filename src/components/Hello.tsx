/// <reference path="../../index.d.ts" />
import * as React from "react"
import styled, { css } from "react-emotion"
import { color } from "styled-system"
import { ColorProps } from "styled-systemb"

interface SectionProps extends ColorProps {}

const Section  = styled<SectionProps,{}>(props => <div {...props} />)`
  ${color};
`

interface HelloProps extends SectionProps {
  children?: any
}
const Hello = ({children,bg,color}:HelloProps) => 
  <Section bg={bg} color={color} children={children} />

export default Hello
