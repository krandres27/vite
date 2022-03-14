import { Todo } from 'src/types'
import sortByDueDate from '@helpers/sortByDuteDate'

const uri = 'https://proxy-be.herokuapp.com'

// Adapters
const todosAdapter = (todos: Todo[]) => {
  const mappedTodos = todos.map((todo) => ({
    ...todo,
    dueDate: todo?.dueDate ? new Date(todo.dueDate) : null,
    overdue: todo?.dueDate
      ? new Date(todo.dueDate).getTime() < new Date().getTime()
      : false,
  }))

  return [
    ...sortByDueDate(mappedTodos.filter((todo) => todo.dueDate)),
    ...mappedTodos.filter((todo) => !todo.dueDate),
  ]
}

export const getTodos = async (): Promise<Todo[]> => {
  try {
    const res = await (await fetch(`${uri}/todos`, { method: 'GET' })).json()
    return todosAdapter(res)
  } catch (err) {
    console.log(err)
    return []
  }
}

export const updateTodo = async (id: string): Promise<void> => {
  try {
    const res = await (
      await fetch(`${uri}/updateTodo?id=${id}`, { method: 'GET' })
    ).json()
    return res
  } catch (err) {
    console.log(err)
    return undefined
  }
}
