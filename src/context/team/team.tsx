import React, { useReducer } from 'react'

import { State, Dispatch, StoreProviderProps } from './types';
import Reducer from './reducer';

const initialState: State = { teams: undefined, error: undefined }

const TeamContext = React.createContext<State | undefined>(undefined)
const TeamDispatchContext = React.createContext<Dispatch | undefined>(undefined)

const TeamProvider = ({ children }: StoreProviderProps) => {
    const [state, dispatch] = useReducer(Reducer, initialState)

    return (
        <TeamContext.Provider value={state}>
            <TeamDispatchContext.Provider value={dispatch}>
                {children}
            </TeamDispatchContext.Provider>
        </TeamContext.Provider>
    )
}

function useTeamState() {
    const context = React.useContext(TeamContext)
    if (context === undefined) {
        throw new Error('useTeamState must be used within a TeamProvider')
    }
    return context
}

function useTeamDispatch() {
    const context = React.useContext(TeamDispatchContext)
    if (context === undefined) {
        throw new Error('useTeamDispatch must be used within a TeamProvider')
    }
    return context
}

export { TeamProvider, useTeamState, useTeamDispatch }