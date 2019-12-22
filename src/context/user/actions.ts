import { Dispatch } from './types';

export function setUserName(dispatch: Dispatch, userName: string) {
    dispatch({ type: 'create', userName: userName, isConnected: true })
}