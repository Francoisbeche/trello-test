import { StoreProvider, useStoreState, useStoreDispatch } from './store';
import { asyncIncrement } from './actions';

function useStore() {
    return { store: useStoreState(), dispatchStore: useStoreDispatch(), storeAction: {asyncIncrement} }
}

export {
    StoreProvider,
    useStoreState,
    useStoreDispatch,
    useStore
}