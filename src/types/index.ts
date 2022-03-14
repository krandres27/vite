export type ActionTypes =
  | { type: 'GETTING_TODOS' }
  | { type: 'SET_TODOS'; payload: Todo[] }
  | { type: 'UPDATING_TODO'; payload: number }
  | { type: 'UPDATED_TODO'; payload: number }

export interface Todo {
  id: number
  description: string
  dueDate: Date | null
  isComplete: boolean
  isLoading?: boolean
  overdue?: boolean
}
