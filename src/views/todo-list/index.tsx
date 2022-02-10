import { useRecoilValue } from 'recoil'

import { todoListState, filteredTodoListState } from '@models'

import { TodoListStats } from '../todo-list-stats'
import { TodoListFilters } from '../todo-list-filters'
import { TodoItemCreator } from '../todo-item-creator'
import { TodoItem } from '../todo-item'

import { container } from './index.css'

export const TodoList = () => {
  // const todoList = useRecoilValue(todoListState);
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div className={container}>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      
      <TodoItem todoList={todoList}/>
    </div>
  )
}