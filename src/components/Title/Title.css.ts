import { style } from '@vanilla-extract/css'
import { vars } from '../../style.css'

export const titleCss = style({
  fontFamily: vars.font.family,
  fontSize: '26px',
  fontWeight: vars.font.weight.medium,
  textAlign: 'center',
  color: 'white',
  margin: '1.5rem 0',
})
