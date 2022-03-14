import React from 'react'
import { FaSpinner } from 'react-icons/fa'
import { Todo } from 'src/types'
import { formatDate } from '@helpers/formatDate'

interface TodoItemProps {
  todo: Todo
  handleTodoUpdate: (id: number) => void
}

function TodoItem({ todo, handleTodoUpdate }: TodoItemProps): JSX.Element {
  const { dueDate, description, id, isComplete, isLoading } = todo

  return (
    <div className="todo-item">
      <div>
        {isLoading ? (
          <FaSpinner className="spin" />
        ) : (
          <input
            type="checkbox"
            checked={isComplete}
            onChange={() => handleTodoUpdate(id)}
            disabled={isComplete}
          />
        )}
        <span>{description}</span>
      </div>
      {dueDate && (
        <div>
          <span>{formatDate(dueDate)}</span>
        </div>
      )}
    </div>
  )
}

export default React.memo(TodoItem)
