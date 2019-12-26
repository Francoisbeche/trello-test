import { Dispatch } from './types';
import axios from 'axios';

export async function getTeams(dispatch: Dispatch, session: any) {
    try {
        const resp = await axios({
            method: 'get',
            url: 'http://localhost:8080/api/team',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
        });
        console.log("teams", resp);
        dispatch({ type: 'setTeam', payload: { teams: resp.data.data }, error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: undefined })
    }
}

export async function getListByTeamId(dispatch: Dispatch, session: any, teamId: string) {
    try {
        const resp = await axios({
            method: 'get',
            url: `http://localhost:8080/api/list/${teamId}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
        });
        console.log("list", resp);
        dispatch({ type: 'setList', payload: { list: resp.data.data }, error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: undefined })
    }
}

export async function getCardByListId(dispatch: Dispatch, session: any, listId: string) {
    try {
        const resp = await axios({
            method: 'get',
            url: `http://localhost:8080/api/card/${listId}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
        });
        dispatch({ type: 'setCards', payload: { cards: resp.data.data, listId: listId }, error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: undefined })
    }
}

export async function updateCard(dispatch: Dispatch, session: any, card: any) {
    try {
        const resp = await axios({
            method: 'PUT',
            url: `http://localhost:8080/api/card/update/${card.id}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
            data: {
                content: card.content
            }
        });
        dispatch({ type: 'updateCard', payload: { card: resp.data.data }, error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: undefined })
    }
}

export async function deleteCard(dispatch: Dispatch, session: any, card: any) {
    try {
        const resp = await axios({
            method: 'DELETE',
            url: `http://localhost:8080/api/card/delete/${card.id}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
        });
        dispatch({ type: 'deleteCard', payload: { card: card }, error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: undefined })
    }
}

export async function addCard(dispatch: Dispatch, session: any, card: any) {
    try {
        const resp = await axios({
            method: 'POST',
            url: `http://localhost:8080/api/card`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
            data: card
        });
        dispatch({ type: 'addCard', payload: { card: resp.data.data }, error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: undefined })
    }
}