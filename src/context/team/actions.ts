import { Dispatch } from './types';
import axios from 'axios';

export function setUserName(dispatch: Dispatch, userName: string) {
    dispatch({ type: 'create', error: undefined, teams: undefined })
}
