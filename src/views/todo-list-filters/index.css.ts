import { style, globalStyle } from '@vanilla-extract/css'

export const select = style({
  width: 200,
  height: 30,
  border: 'none'
})

globalStyle(`${select} option`, {
  background: '#fff'
})
