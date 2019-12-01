import React, { useReducer } from 'react'

import { State, Dispatch, StoreProviderProps } from './types';
import Reducer from './reducer';

const initialState: State = { count: 0 }

const StoreContext = React.createContext<State | undefined>(undefined)
const StoreDispatchContext = React.createContext<Dispatch | undefined>(undefined)

const StoreProvider = ({ children }: StoreProviderProps) => {
    const [state, dispatch] = useReducer(Reducer, initialState)

    return (
        <StoreContext.Provider value={state}>
            <StoreDispatchContext.Provider value={dispatch}>
                {children}
            </StoreDispatchContext.Provider>
        </StoreContext.Provider>
    )
}

function useStoreState() {
    const context = React.useContext(StoreContext)
    if (context === undefined) {
        throw new Error('useStoreState must be used within a StoreProvider')
    }
    return context
}

function useStoreDispatch() {
    const context = React.useContext(StoreDispatchContext)
    if (context === undefined) {
        throw new Error('useDispatch must be used within a StoreProvider')
    }
    return context
}

export { StoreProvider, useStoreState, useStoreDispatch }