import { style, globalStyle } from '@vanilla-extract/css'

export const container = style({
  width: 200,
  display: 'flex',
  justifyContent: 'space-between'
})

export const input = style({
  width: 160,
  height: 30,
  padding: '0 10px',
  boxSizing: 'border-box',
  border: 'none'
})

export const button = style({
  width: 30,
  height: 30,
  padding: 4,
  border: 'none',
  background: 'yellowgreen',
  color: '#fff'
})
