export type ActionTypes =
  | { type: 'GETTING_TODOS' }
  | { type: 'SET_TODOS'; payload: Todo[] }
  | { type: 'UPDATING_TODO'; payload: number }
  | { type: 'UPDATED_TODO'; payload: number }

export interface Todo {
  id: number
  description: string
  isComplete: boolean
  dueDate?: Date | string
  isLoading: boolean
}
