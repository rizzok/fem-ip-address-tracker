import { createGlobalTheme } from '@vanilla-extract/css'

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
