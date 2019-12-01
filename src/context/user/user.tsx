import React, { useReducer } from 'react'

import { State, Dispatch, StoreProviderProps } from './types';
import Reducer from './reducer';

const initialState: State = { userName: '' }

const UserContext = React.createContext<State | undefined>(undefined)
const UserDispatchContext = React.createContext<Dispatch | undefined>(undefined)

const UserProvider = ({ children }: StoreProviderProps) => {
    const [state, dispatch] = useReducer(Reducer, initialState)

    return (
        <UserContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    )
}

function useUserState() {
    const context = React.useContext(UserContext)
    if (context === undefined) {
        throw new Error('useUserState must be used within a UserProvider')
    }
    return context
}

function useUserDispatch() {
    const context = React.useContext(UserDispatchContext)
    if (context === undefined) {
        throw new Error('useUserDispatch must be used within a UserProvider')
    }
    return context
}

export { UserProvider, useUserState, useUserDispatch }