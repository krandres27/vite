import React from 'react'
import { FaSpinner } from 'react-icons/fa'
import { Todo } from 'src/types'
import { formatDate } from '@helpers/formatDate'
import classes from './TodoItem.module.css'

interface TodoItemProps {
  todo: Todo
  handleTodoUpdate: (id: number) => void
}

function TodoItem({ todo, handleTodoUpdate }: TodoItemProps): JSX.Element {
  const { dueDate, description, id, isComplete, isLoading, overdue } = todo

  return (
    <div
      className={`${classes.todoItem} ${overdue ? classes.overdue : ''} ${
        isComplete ? classes.completed : ''
      } animate__animated animate__fadeInRight`}
    >
      <div className={classes.checkboxContainer}>
        {isLoading ? (
          <FaSpinner className={`${classes.spinner} spin`} />
        ) : (
          <div className={classes.checkboxContainer}>
            <input
              type="checkbox"
              checked={isComplete}
              onChange={() => handleTodoUpdate(id)}
              disabled={isComplete}
            />
          </div>
        )}
        <span className={classes.description}>{description}</span>
      </div>
      {dueDate && (
        <div className={classes.dueDateContainer}>
          <span>{formatDate(dueDate)}</span>
        </div>
      )}
    </div>
  )
}

export default React.memo(TodoItem)
