import { StoreProvider, useStoreState, useStoreDispatch } from './store';
import { getTeams, getListByTeamId, getCardByListId, updateCard, deleteCard, addCard } from './actions';

function useStore() {
    return {
        store: useStoreState(), dispatchStore: useStoreDispatch(), storeAction: {
            getTeams,
            getListByTeamId,
            getCardByListId,
            updateCard,
            deleteCard,
            addCard
        }
    }
}

export {
    StoreProvider,
    useStoreState,
    useStoreDispatch,
    useStore
}