//
import { createContext, useReducer } from 'react'

//
import AppReducer from "./AppReducer";

const initialState = {
  test: "Test data"
}

//
export const GlobalContext = createContext(initialState)

//
export const GlobalProvider = ({ children }) => {

  const [state, dispatch] = useReducer(AppReducer, initialState);

  function editTest(test) {
    dispatch({
      type: "EDIT_TEST",
      payload: test
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        test: state.test,
        editTest
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
