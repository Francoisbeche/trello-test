import { State, Action } from './types';


const Reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'create': {
            return { teams: undefined, error: action.error }
        }

        case 'error': {
            return { teams: undefined, error: action.error }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export default Reducer;