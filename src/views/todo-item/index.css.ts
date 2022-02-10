import { style, globalStyle } from '@vanilla-extract/css'

export const container = style({
  width: 200,
  maxHeight: 300,
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  alignItems: 'center',
  overflow: 'auto'
})

export const input = style({
  width: 160,
  height: 30,
  padding: '0 10px',
  boxSizing: 'border-box',
  background: 'peachpuff',
  color: 'darkcyan',
  border: 'none'
})

export const button = style({
  width: 20,
  height: 20,
  border: 'none',
  background: 'yellowgreen',
  color: '#fff'
})
