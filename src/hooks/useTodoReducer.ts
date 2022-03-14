import React from 'react'
import { ActionTypes, Todo } from 'src/types'

interface State {
  loadingTodos: boolean
  todos: Todo[]
  updatingTodo: boolean
}

const initialState: State = {
  loadingTodos: false,
  todos: [],
  updatingTodo: false,
}

function reducer(state: State, action: ActionTypes): State {
  switch (action.type) {
    case 'GET_TODOS':
      return {
        ...state,
        loadingTodos: true,
      }

    case 'SET_TODOS':
      return {
        ...state,
        loadingTodos: false,
        todos: action.payload,
      }

    case 'UPDATE_TODO':
      return {
        ...state,
        updatingTodo: true,
      }

    case 'UPDATED_TODO': {
      const todos = state.todos.map((todo: Todo) =>
        todo.id === action.payload ? { ...todo, isComplete: true } : todo
      )
      return {
        ...state,
        updatingTodo: false,
        todos,
      }
    }

    default:
      return state
  }
}

function useTodoReducer() {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return { state, dispatch }
}

export default useTodoReducer
