import React, { userReducer, useContext, useReducer } from 'react';
import reducer from './reducer';
import { DISPLAY_ALERT, CLEAR_ALERT } from './actions';


const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  }
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 3000)
  }

  const values = {
    ...state,
    displayAlert
  }
  return (
    <AppContext.Provider
      value={values}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }