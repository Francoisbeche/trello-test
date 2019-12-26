import { State, Action } from './types';

const Reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'setTeam': {
            return { ...state, teams: action.payload.teams }
        }
        case 'setList': {
            return { ...state, list: action.payload.list }
        }
        case 'setCards': {
            let elem = state.list.findIndex((item) => {
                return item.id === action.payload.listId;
            })
            let tmpList = state.list;
            tmpList[elem].cards = action.payload.cards;
            return { ...state, list: tmpList }
        }
        case 'updateCard': {
            let list = state.list.findIndex((item) => {
                return item.id === action.payload.card.listId;
            })
            let tmpList = state.list;
            let card = tmpList[list].cards.findIndex((item) => {
                return item.id === action.payload.card.id;
            })

            if (list >= 0 && card >= 0) {
                tmpList[list].cards[card] = action.payload.card
                return { ...state, list: tmpList }
            }

        }
        case 'deleteCard': {
            let list = state.list.findIndex((item) => {
                return item.id === action.payload.card.listId;
            })
            let tmpList = state.list;
            let card = tmpList[list].cards.findIndex((item) => {
                return item.id === action.payload.card.id;
            })

            if (list >= 0 && card >= 0) {
                tmpList[list].cards.splice(card, 1)
            }
            return { ...state, list: tmpList }
        }
        case 'addCard': {
            let list = state.list.findIndex((item) => {
                return item.id === action.payload.card.listId;
            })
            let tmpList = state.list;
            if (list >= 0) {
                tmpList[list].cards.push(action.payload.card);
                return { ...state, list: tmpList }
            }

        }
        case 'error': {
            return { ...state, error: action.error }
        }

        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export default Reducer;