import { Todo } from 'src/types'

const sortByDueDate = (targetArray: Todo[]) => {
  return [...targetArray].sort((a, b) =>
    a.dueDate && b.dueDate ? a.dueDate.getTime() - b.dueDate.getTime() : 0
  )
}

export default sortByDueDate
