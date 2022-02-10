import { TodoList } from './views'

import { app } from './App.css'

export const App = () => {
  return (
    <div className={app}>
      <TodoList />
    </div>
  )
}