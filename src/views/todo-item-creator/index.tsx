import { useState } from 'react'
import { useSetRecoilState } from 'recoil'

import { todoListState } from '@models'

import { container, input, button } from './index.css'

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const addItem = () => {
    if (!inputValue) return

    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ])
    setInputValue('')
  }

  const onChange = ({target: {value}}) => {
    setInputValue(value)
  }

  return (
    <div className={container}>
      <input className={input} type="text" value={inputValue} onChange={onChange} />
      <button className={button} onClick={addItem}>Add</button>
    </div>
  )
}

// 用于创建唯一 id 的工具函数
let id = 0
function getId() {
  return id++
}