declare module "styled-system" {

  type Color = (obj: {[key:string]:any}, key: string | number, value: any) => any
  const color: Color

  interface ColorProps {
    bg: string
    color: string
  }

  const space: any

  interface SpaceProps {
    m: number | string
    p: number | string
  }

  export {color, ColorProps, space, SpaceProps}
}
