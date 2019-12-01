import { State, Action } from './types';

const Reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'create': {
            return { userName: action.userName }
        }
        case 'update': {
            return { userName: action.userName }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export default Reducer;