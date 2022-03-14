import React, { useEffect } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { getTodos } from '@api/fetch'
import useTodoReducer from '@hooks/useTodoReducer'
import { Todo } from '../../types'

function TodoList(): JSX.Element {
  const { state, dispatch } = useTodoReducer()

  useEffect(() => {
    dispatch({ type: 'GET_TODOS' })

    async function getData(): Promise<void> {
      const todos: Todo[] = await getTodos()
      dispatch({ type: 'SET_TODOS', payload: todos })
    }

    getData()
  }, [dispatch])

  if (state.loadingTodos) {
    return <FaSpinner className="spin" />
  }

  return <section className="todo-list">{JSON.stringify(state.todos)}</section>
}

export default TodoList
