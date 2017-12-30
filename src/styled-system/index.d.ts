declare module "styled-system" {

  type Color = (obj: {[key:string]:any}, key: string | number, value: any) => any
  const color: Color

  interface ColorProps {
    bg: string
    color: string
  }

  const space: any

  type numberOrString = number | string
  interface SpaceProps {
    m: numberOrString 
    mt: numberOrString
    mr: numberOrString
    mb: numberOrString
    ml: numberOrString
    p: numberOrString
    pt: numberOrString
    pr: numberOrString
    pb: numberOrString
    pl: numberOrString
  }

  export {color, ColorProps, space, SpaceProps}
}
