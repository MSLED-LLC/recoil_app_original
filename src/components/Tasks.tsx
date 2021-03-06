import React from 'react'
import {Task} from './Task'
import { atom, useRecoilValue } from 'recoil'

export const tasksState = atom<number[]> ({
  key: 'tasks',
  default: [],
})

export const Tasks: React.FC = () => {
  const tasks = useRecoilValue(tasksState)
    return (
        <div>
            {tasks.map(id => (
              <Task id={0} key={id}/>
            ))}
        </div>
    )
}
