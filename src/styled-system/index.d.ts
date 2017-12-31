// Type definitions for styled-system
// Project: styled-system
// Definitions by: Michael T. Moore http://miketmoore.com

declare module "styled-system" {

  /**
   * color
   */
  export function color(obj: {[key:string]:any}, key: string | number, value: any): any

  export interface ColorProps {
    bg?: string
    color?: string
  }

  /**
   * space
   */
  export function space (props:{[key:string]:any}): Array<number | string>

  export interface SpaceProps {
    m?: number | string 
    mt?: number | string
    mr?: number | string
    mb?: number | string
    ml?: number | string
    mx?: number | string
    my?: number | string
    p?: number | string
    pt?: number | string
    pr?: number | string
    pb?: number | string
    pl?: number | string
    px?: number | string
    py?: number | string
  }
}
