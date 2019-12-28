import { Dispatch } from './types';
import axios from 'axios';


export async function login(dispatch: Dispatch, { email, password }: { email: string, password: string }) {

    try {
        const resp = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/session',
            data: {
                email, password
            }
        });
        dispatch({ type: 'create', error: undefined, payload: { session: resp.data.data, user: undefined } })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: { session: undefined, user: undefined } })
    }
}

export async function register(dispatch: Dispatch, { email, password }: { email: string, password: string }, history: any) {

    try {
        const resp = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/user',
            data: {
                email, password
            }
        });
        dispatch({ type: 'create', error: undefined, payload: { session: resp.data.data.sessions[0], user: undefined } })
        dispatch({ type: 'getUser', payload: { session: resp.data.data.sessions[0], user: resp.data.data }, error: undefined })
        history.push('/')
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: { session: undefined, user: undefined } })
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
        dispatch({ type: 'getUser', error: undefined, payload: { user: resp.data.data } })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: { session: undefined, user: undefined } })
    }
}

export async function loginFlow(dispatch: Dispatch, { email, password }: { email: string, password: string }, history: any) {

    try {
        const session = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/session',
            data: {
                email, password
            }
        });
        dispatch({ type: 'create', payload: { session: session.data.data, user: undefined }, error: undefined })
        try {
            const resp = await axios({
                method: 'get',
                url: 'http://localhost:8080/api/user',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': `Bearer ${session && session.data.data.token}`
                },
            });
            dispatch({ type: 'getUser', payload: { session: session, user: resp.data.data }, error: undefined })
            history.push('/')
        } catch (error) {
            dispatch({ type: 'error', payload: { session: undefined, user: undefined }, error: error.response.data.message })
        }
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: { session: undefined, user: undefined } })
    }
}