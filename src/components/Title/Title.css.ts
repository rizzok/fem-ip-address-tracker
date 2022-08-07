import { style } from '@vanilla-extract/css'
import { vars } from '../../style.css'

export const title = style({
  fontFamily: vars.font.family,
  fontSize: '22px',
  fontWeight: vars.font.weight.medium,
  color: 'white',
  margin: '1rem 0',
})
