import { Todo } from 'src/types'
import { getTodos } from '@api/fetch'

const todos: Todo[] = [
  {
    id: 1,
    description: 'File 2020 Taxes',
    isComplete: true,
    dueDate: new Date('2020-03-10T17:50:44.673Z'),
  },
  {
    id: 2,
    description: 'Fold laundry',
    isComplete: true,
    dueDate: null,
  },
  {
    id: 3,
    description: 'Call Mom',
    isComplete: false,
    dueDate: new Date('2020-06-26T19:00:00.000Z'),
  },
  {
    id: 4,
    description: 'Walk the dog',
    isComplete: false,
    dueDate: null,
  },
  {
    id: 5,
    description: 'Feed the cat',
    isComplete: false,
    dueDate: new Date('2020-06-24T15:45:00.000Z'),
  },
  {
    id: 6,
    description: 'Run LA marathon',
    isComplete: false,
    dueDate: new Date('2021-03-21T13:30:00.000Z'),
  },
]

const originalFetch: (
  input: RequestInfo,
  init?: RequestInit | undefined
) => Promise<Response> = global.fetch

beforeAll(() => {
  global.fetch = jest.fn(() => {
    return { json: () => Promise.resolve(todos) }
  }) as jest.Mock
})

afterAll(() => {
  global.fetch = originalFetch
})

test('getTodos returns an array organized by dueDate and the last items must be the ones without dueDate', async () => {
  const expected: Todo[] = [
    {
      id: 1,
      description: 'File 2020 Taxes',
      isComplete: true,
      dueDate: new Date('2020-03-10T17:50:44.673Z'),
    },
    {
      id: 5,
      description: 'Feed the cat',
      isComplete: false,
      dueDate: new Date('2020-06-24T15:45:00.000Z'),
    },
    {
      id: 3,
      description: 'Call Mom',
      isComplete: false,
      dueDate: new Date('2020-06-26T19:00:00.000Z'),
    },
    {
      id: 6,
      description: 'Run LA marathon',
      isComplete: false,
      dueDate: new Date('2021-03-21T13:30:00.000Z'),
    },
    {
      id: 2,
      description: 'Fold laundry',
      isComplete: true,
      dueDate: null,
    },
    {
      id: 4,
      description: 'Walk the dog',
      isComplete: false,
      dueDate: null,
    },
  ]

  const fetchedTodos: Todo[] = await getTodos()
  expected.forEach((todo: Todo, index: number) =>
    expect(todo.id).toEqual(fetchedTodos[index].id)
  )
})
