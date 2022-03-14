import React from 'react'
import { FaSpinner } from 'react-icons/fa'
import { Todo } from 'src/types'

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
            defaultChecked={isComplete}
            checked={isComplete}
            onChange={() => handleTodoUpdate(id)}
          />
        )}
        <span>{description}</span>
      </div>
      <div>
        <span>{dueDate}</span>
      </div>
    </div>
  )
}

export default React.memo(TodoItem)
