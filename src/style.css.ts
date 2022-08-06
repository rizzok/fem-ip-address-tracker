/*
// Layout

- Mobile: 375px
- Desktop: 1440px

// Colors

- Very Dark Gray: hsl(0, 0%, 17%)
- Dark Gray: hsl(0, 0%, 59%)

// Typography

// Body Copy

- Font size (text input): 18px

// Font

- Family: [Rubik](https://fonts.google.com/specimen/Rubik)
- Weights: 400, 500, 700
*/

import { createTheme } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
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
  },
})
