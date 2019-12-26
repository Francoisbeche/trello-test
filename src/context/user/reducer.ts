import { State, Action } from './types';


const Reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'create': {
            return { session: action.payload.session, isConnected: true, error: action.error, user: undefined }
        }
        case 'getUser': {
            return { ...state, isConnected: true, error: action.error, user: action.payload.user }
        }
        case 'error': {
            return { session: undefined, isConnected: false, error: action.error, user: undefined }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export default Reducer;