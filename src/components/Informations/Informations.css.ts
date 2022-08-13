import { style } from '@vanilla-extract/css'
import { vars } from '../../style.css'

export const informationsCss = style({
  zIndex: '1000',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  marginTop: '1.5rem',
  padding: '1rem',
  position: 'relative',
  backgroundColor: 'white',
  borderRadius: '16px',
  textAlign: 'center',
})

export const infoDiv = style({
  margin: '12px 0',
})

export const infoLabel = style({
  color: vars.colors.darkGray,
  textTransform: 'uppercase',
  fontSize: '10px',
  letterSpacing: '1px',
  fontWeight: vars.font.weight.bold,
  marginBottom: '5px',
})

export const infoValue = style({
  fontSize: '20px',
  fontWeight: vars.font.weight.medium,
})
