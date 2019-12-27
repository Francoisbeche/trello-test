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
                tmpList[list].cards[card] = action.payload.card;
                return { ...state, list: tmpList }
            }
            return state;
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
            return state;

        }
        case 'addList': {
            const tmpList = state.list;
            tmpList.push(action.payload.list);
            return { ...state, list: tmpList }

        }
        case 'updateTeam': {
            const teamIndex = state.teams.findIndex((team) => {
                return team.id === action.payload.id;
            })
            if (teamIndex >= 0) {
                const tmpTeam = state.teams;
                tmpTeam[teamIndex] = action.payload;
                return { ...state, teams: tmpTeam };
            }

            return { ...state };
        }
        case 'deleteTeam': {
            let team = state.teams.findIndex((item) => {
                return item.id === action.payload.team.id;
            })
            let tmpTeams = state.teams;


            if (team >= 0) {
                tmpTeams.splice(team, 1)
            }
            return { ...state, teams: tmpTeams }
        }
        case 'updateList': {
            let list = state.list.findIndex((item) => {
                return item.id === action.payload.list.id;
            })
            let tmpList = state.list;
            if (list >= 0) {
                tmpList[list].listName = action.payload.list.listName

                return { ...state, list: tmpList }
            }
            return state;
        }
        case 'deleteList': {
            let list = state.list.findIndex((item) => {
                return item.id === action.payload.list.id;
            })
            let tmpList = state.list;


            if (list >= 0) {
                tmpList.splice(list, 1)
            }
            return { ...state, list: tmpList }
        }
        case 'error': {
            return { ...state, error: action.error }
        }
        case 'moveCardFromlist': {
            const { oldListId, cardId, destListId } = action.payload;

            const oldListIndex = state.list.findIndex((list) => {
                return list.id === oldListId;
            })
            const destListIndex = state.list.findIndex((list) => {
                return list.id === destListId;
            })
            if (oldListIndex >= 0 && destListIndex >= 0) {
                const cardIndex = state.list[oldListIndex].cards.findIndex((card) => {
                    return card.id === cardId;
                })

                if (cardIndex >= 0) {
                    const card = state.list[oldListIndex].cards[cardIndex];
                    state.list[oldListIndex].cards.splice(cardIndex, 1)
                    state.list[destListIndex].cards.push(card);
                }
            }

            return { ...state };
        }
        case 'cleanStore': {
            return { ...state, list: [] }
        }
        case 'addTeam': {
            const tmpTeam = state.teams;
            tmpTeam.push(action.payload.team);
            return { ...state, team: tmpTeam }
        }
        default: {
            //throw new Error(`Unhandled action type: ${action.type}`)
            return state;
        }
    }
}

export default Reducer;