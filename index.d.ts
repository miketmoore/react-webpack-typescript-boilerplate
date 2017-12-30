// Type definitions for styled-system
// Project: styled-system
// Definitions by: @mike_t_moore http://miketmoore.com

/*~ This is the module plugin template file. You should rename it to index.d.ts
 *~ and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */
import * as styledSystem from "styled-system"
export as namespace styledSystem

interface ColorProps {
  bg: string
  color: string
}

declare var color

export {color, ColorProps}
