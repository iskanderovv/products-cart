import { useReducer } from 'react';
import reducer, { initialState } from '../reducer/Reducer';
import AppContext from '../store';

const StateProvider = ({children}) => {
  return (
    <div>
      <AppContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </AppContext.Provider>
    </div>
  )
}

export default StateProvider
