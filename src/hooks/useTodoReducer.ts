import React from 'react'
import { ActionTypes, Todo } from 'src/types'

interface State {
  loadingTodos: boolean
  todos: Todo[]
}

const initialState: State = {
  loadingTodos: false,
  todos: [],
}

function reducer(state: State, action: ActionTypes): State {
  switch (action.type) {
    case 'GETTING_TODOS':
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

    case 'UPDATING_TODO': {
      const todos = state.todos.map((todo: Todo) =>
        todo.id === action.payload ? { ...todo, isLoading: true } : todo
      )

      return {
        ...state,
        todos,
      }
    }

    case 'UPDATED_TODO': {
      const todos = state.todos.map((todo: Todo) =>
        todo.id === action.payload
          ? { ...todo, isComplete: true, isLoading: false }
          : todo
      )
      return {
        ...state,
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
