import { style, globalStyle } from '@vanilla-extract/css'

export const ul = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  listStyle: 'none',
  padding: 0
})

globalStyle(`${ul} li`, {
  width: 200,
  display: 'flex',
  justifyContent: 'space-between',
  color: 'aliceblue'
})

globalStyle(`${ul} li span`, {
})
