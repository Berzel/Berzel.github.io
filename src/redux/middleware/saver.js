const saver = store => next => action => {
  const result = next(action)
  localStorage.setItem('redux-store', JSON.stringify(store.getState()))
  return result
}

export default saver