import React, { useEffect, useCallback } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { getTodos, updateTodo } from '@api/fetch'
import useTodoReducer from '@hooks/useTodoReducer'
import TodoItem from '@components/TodoItem'
import { Todo } from '../../types'

function TodoList(): JSX.Element {
  const { state, dispatch } = useTodoReducer()
  const { loadingTodos, todos } = state

  useEffect(() => {
    dispatch({ type: 'GETTING_TODOS' })

    async function getData(): Promise<void> {
      const fetchedTodos: Todo[] = await getTodos()
      dispatch({ type: 'SET_TODOS', payload: fetchedTodos })
    }

    getData()
  }, [dispatch])

  const handleTodoUpdate = useCallback(
    async (todoId: number): Promise<void> => {
      dispatch({ type: 'UPDATING_TODO', payload: todoId })
      await updateTodo(`${todoId}`)
      dispatch({ type: 'UPDATED_TODO', payload: todoId })
    },
    [dispatch]
  )

  if (loadingTodos) {
    return <FaSpinner className="spin" />
  }

  return (
    <section className="todo-list">
      {todos.map((item) => (
        <TodoItem
          todo={item}
          handleTodoUpdate={handleTodoUpdate}
          key={item.id}
        />
      ))}
    </section>
  )
}

export default TodoList