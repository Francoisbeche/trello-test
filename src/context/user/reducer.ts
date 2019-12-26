import { State, Action } from './types';


const Reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'create': {
            return { session: action.session, isConnected: action.isConnected, error: action.error, user:undefined }
        }
        case 'getUser': {
            return { session: action.session, isConnected: action.isConnected, error: action.error, user:action.user }
        }
        case 'error': {
            return { session: action.session, isConnected: action.isConnected, error: action.error, user:undefined }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export default Reducer;