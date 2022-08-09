import { style } from '@vanilla-extract/css'

const borderRadius: string = '16px'

export const formCss = style({
  // minWidth: '500px',
  display: 'flex',
})

export const inputCss = style({
  flexGrow: '1',
  padding: '1.1rem 1.5rem',
  borderWidth: '0',
  borderRadius: `${borderRadius} 0 0 ${borderRadius}`,
  color: '#3A3F56',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  ':hover': {
    cursor: 'pointer',
  },
  ':focus-visible': {
    outline: '0',
  },
})

export const buttonCss = style({
  width: '68px',
  borderWidth: '0',
  borderRadius: `0 ${borderRadius} ${borderRadius} 0`,
  backgroundColor: 'black',
  ':hover': {
    backgroundColor: '#3A3F56',
    cursor: 'pointer',
  },
})
