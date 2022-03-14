const uri = 'https://proxy-be.herokuapp.com'

export const getTodos = async () => {
  try {
    const res = await (await fetch(`${uri}/todos`, { method: 'GET' })).json()
    return res
  } catch (err) {
    console.log(err)
    return undefined
  }
}

export const updateTodo = async (id: string) => {
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
