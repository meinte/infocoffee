export const setLoaded = () => ({
  type: 'LOAD_OK'
})

export const setLoaderror = (text) => ({
  type: 'LOAD_ERROR',
  text
})
