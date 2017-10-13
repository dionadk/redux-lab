export const addTodo = (item) => {
  return {
    type: 'ADD_ITEM',
    item
  }
}

export const removeTodo = (item) => {
  return {
    type: 'REMOVE_ITEM',
    item
  }
}
