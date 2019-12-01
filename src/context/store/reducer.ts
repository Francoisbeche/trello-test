import { State, Action } from './types';

const Reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'increment': {
            return { count: state.count + 1 }
        }
        case 'decrement': {
            return { count: state.count - 1 }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export default Reducer;