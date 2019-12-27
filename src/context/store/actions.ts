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
        dispatch({ type: 'setTeam', payload: { teams: resp.data.data }, error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: undefined })
    }
}

export async function updateTeam(dispatch: Dispatch, session: any, team: any) {
    try {
        const resp = await axios({
            method: 'PUT',
            url: `http://localhost:8080/api/team/update/${team.id}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
            data: team
        });
        dispatch({ type: 'updateTeam', payload: { team: resp.data.data }, error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: undefined })
    }
}

export async function deleteTeam(dispatch: Dispatch, session: any, team: any) {
    try {
        await axios({
            method: 'DELETE',
            url: `http://localhost:8080/api/team/delete/${team.id}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
        });
        dispatch({ type: 'deleteTeam', payload: { team: team }, error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: undefined })
    }
}

export async function addTeam(dispatch: Dispatch, session: any, team: any) {
    try {
        const resp = await axios({
            method: 'POST',
            url: `http://localhost:8080/api/team`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
            data: team
        });

        dispatch({ type: 'addTeam', payload: { team: resp.data.data }, error: undefined })
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
            data: card
        });
        dispatch({ type: 'updateCard', payload: { card: resp.data.data }, error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: undefined })
    }
}

export async function deleteCard(dispatch: Dispatch, session: any, card: any) {
    try {
        await axios({
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

export async function updateList(dispatch: Dispatch, session: any, list: any) {
    try {
        const resp = await axios({
            method: 'PUT',
            url: `http://localhost:8080/api/list/${list.id}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
            data: {
                listName: list.listName
            }
        });
        dispatch({ type: 'updateList', payload: { list: resp.data.data }, error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: undefined })
    }
}

export async function deleteList(dispatch: Dispatch, session: any, list: any) {
    try {
        await axios({
            method: 'DELETE',
            url: `http://localhost:8080/api/list/${list.id}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
        });
        dispatch({ type: 'deleteList', payload: { list: list }, error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: undefined })
    }
}

export async function createList(dispatch: Dispatch, session: any, list: any) {
    try {
        const resp = await axios({
            method: 'POST',
            url: `http://localhost:8080/api/list`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
            data: list
        });

        dispatch({ type: 'addList', payload: { list: resp.data.data }, error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: undefined })
    }
}

export function moveCardFromlist(dispatch: Dispatch, oldListId: string, cardId: string, destListId: string) {
    dispatch({ type: 'moveCardFromlist', payload: { oldListId, cardId, destListId }, error: undefined })
}

export function cleanStore(dispatch: Dispatch) {
    dispatch({ type: 'cleanStore', payload: {}, error: undefined })
}