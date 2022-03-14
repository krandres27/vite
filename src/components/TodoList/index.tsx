import React, { useEffect, useCallback } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { getTodos, updateTodo } from '@api/fetch'
import useTodoReducer from '@hooks/useTodoReducer'
import TodoItem from '@components/TodoItem'
import { Todo } from 'src/types'
import classes from './TodoList.module.css'

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

  const getTodoItems = (todoItems: Todo[]): JSX.Element[] => {
    return todoItems.map((item) => (
      <TodoItem todo={item} handleTodoUpdate={handleTodoUpdate} key={item.id} />
    ))
  }

  if (loadingTodos) {
    return <FaSpinner className="spin" />
  }

  return (
    <section className={classes.todolist}>
      {getTodoItems(todos.filter((item) => !item.isComplete))}
      {getTodoItems(todos.filter((item) => item.isComplete))}
    </section>
  )
}

export default TodoList
