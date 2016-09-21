export const LOAD_OK = Symbol('LOAD_OK')
export const LOAD_ERROR = Symbol('LOAD_ERROR')


export const COFFEE_LOADED = (result) => ({
  type: LOAD_OK,
  result
})

export const COFFEE_LOAD_ERROR = (text) => ({
  type: LOAD_ERROR,
  text
})

