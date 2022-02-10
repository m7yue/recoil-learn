import { useRecoilValue } from 'recoil'

import { todoListStatsState } from '@models'

import { ul } from './index.css'

export const TodoListStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <ul className={ul}>
      <li><span>total items:</span>{totalNum}</li>
      <li><span>items completed:</span>{totalCompletedNum}</li>
      <li><span>items not completed:</span>{totalUncompletedNum}</li>
      <li><span>percent completed:</span>{formattedPercentCompleted}</li>
    </ul>
  );
}