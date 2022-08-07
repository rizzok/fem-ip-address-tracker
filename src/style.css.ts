import { createGlobalTheme, globalStyle } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  minWidth: {
    mobile: '375px',
  },
  colors: {
    veryDarkGray: 'hsl(0, 0%, 17%)',
    darkGray: 'hsl(0, 0%, 59%)',
  },
  font: {
    size: '18px',
    family: "'Rubik', sans-serif",
    weight: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
  },
})

globalStyle('html, body, #root', {
  height: '100%',
  minWidth: vars.minWidth.mobile,
})

globalStyle('body', {
  fontFamily: vars.font.family,
})

globalStyle('#root', {
  display: 'flex',
  flexDirection: 'column',
})
