import { State, Action } from './types';


const Reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'create': {
            return { userName: "",isConnected: action.isConnected }
        }
        case 'update': {
            return {  userName: "",isConnected: action.isConnected }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export default Reducer;