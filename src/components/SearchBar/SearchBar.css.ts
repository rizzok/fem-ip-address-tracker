import { style } from '@vanilla-extract/css'

export const formCss = style({
  minWidth: '400px',
  display: 'flex',
})

export const inputCss = style({
  width: '100%',
  padding: '10px',
  borderWidth: '1px',
  borderRadius: '10px 0 0 10px',
})

export const buttonCss = style({
  borderWidth: '1px',
  borderRadius: '0 10px 10px 0',
  backgroundColor: 'black',
  color: 'white',
  fontSize: '1rem',
  fontWeight: 'bold',
  width: '10%',
})
