import { Dispatch } from './types';

export async function asyncIncrement(dispatch: Dispatch) {
    dispatch({ type: 'increment' })
    try {
        dispatch({ type: 'increment' })
    } catch (error) {
        dispatch({ type: 'increment' })
    }
}