import { Dispatch } from './types';
import axios from 'axios';
export function setUserName(dispatch: Dispatch, userName: string) {
    dispatch({ type: 'create', session: undefined, isConnected: true, error: undefined, user: undefined })
}

export async function login(dispatch: Dispatch, { email, password }: { email: string, password: string }) {

    try {
        const resp = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/session',
            data: {
                email, password
            }
        });
        dispatch({ type: 'create', session: resp.data.data, isConnected: true, error: undefined, user: undefined })
    } catch (error) {
        dispatch({ type: 'error', session: undefined, isConnected: false, error: error.response.data.message, user: undefined })
    }
}

export async function getUser(dispatch: Dispatch, session: any) {

    try {
        const resp = await axios({
            method: 'get',
            url: 'http://localhost:8080/api/user',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
        });
        dispatch({ type: 'getUser', session: session, isConnected: true, error: undefined, user: resp.data.data })
    } catch (error) {
        dispatch({ type: 'error', session: undefined, isConnected: false, error: error.response.data.message, user: undefined })
    }
}