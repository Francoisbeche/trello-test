import { StoreProvider, useStoreState, useStoreDispatch } from './store';
import { addTeam, cleanStore, getTeams, getListByTeamId, getCardByListId, updateCard, deleteCard, addCard, updateList, deleteList, createList, moveCardFromlist, updateTeam, deleteTeam } from './actions';

function useStore() {
    return {
        store: useStoreState(), dispatchStore: useStoreDispatch(), storeAction: {
            getTeams,
            getListByTeamId,
            getCardByListId,
            updateCard,
            deleteCard,
            addCard,
            updateList,
            deleteList,
            createList,
            moveCardFromlist,
            updateTeam,
            deleteTeam,
            cleanStore,
            addTeam
        }
    }
}

export {
    StoreProvider,
    useStoreState,
    useStoreDispatch,
    useStore
}