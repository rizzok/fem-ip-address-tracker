import { style } from '@vanilla-extract/css'
import { vars } from '../../style.css'

export const title = style({
  fontFamily: vars.font.family,
  fontSize: vars.font.size,
  // fontWeight: vars.font.weight,
})
