export type ActionTypes =
  | { type: 'GET_TODOS' }
  | { type: 'SET_TODOS'; payload: Todo[] }
  | { type: 'UPDATE_TODO' }
  | { type: 'UPDATED_TODO'; payload: number }

export interface Todo {
  id: number
  description: string
  isComplete: boolean
  dueDate: Date | string
}
