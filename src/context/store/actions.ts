import { Dispatch } from './types';
import axios from 'axios';
import Team from '../../models/Team';
import List from '../../models/List';
import Card from '../../models/Card';
import Payload from '../../models/Payload';

const baseURL = 'http://localhost:8080/api';
export async function getTeams(dispatch: Dispatch, session: any) {
    try {
        const resp = await axios({
            method: 'get',
            baseURL: baseURL,
            url: '/team',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
        }).then((resp: any) => {
            return resp.data.data.map((item: any) => {
                return new Team(item);
            })
        });
        dispatch({ type: 'setTeam', payload: new Payload({ teams: resp }), error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: new Payload() })
    }
}

export async function updateTeam(dispatch: Dispatch, session: any, team: Team) {
    try {
        const resp = await axios({
            method: 'PUT',
            baseURL: baseURL,
            url: `team/update/${team.id}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
            data: team
        });

        const teamResp = new Team(resp.data.data);
        dispatch({ type: 'updateTeam', payload: new Payload({ team: teamResp }), error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: new Payload(undefined) })
    }
}

export async function deleteTeam(dispatch: Dispatch, session: any, team: Team) {
    try {
        await axios({
            method: 'DELETE',
            baseURL: baseURL,
            url: `/team/delete/${team.id}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
        });
        dispatch({ type: 'deleteTeam', payload: new Payload({ team: team }), error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: new Payload(undefined) })
    }
}

export async function addTeam(dispatch: Dispatch, session: any, team: Team) {
    try {
        const resp = await axios({
            method: 'POST',
            baseURL: baseURL,
            url: `/team`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
            data: team
        });
        const teamResp = new Team(resp.data.data);
        dispatch({ type: 'addTeam', payload: new Payload({ team: teamResp }), error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: new Payload(undefined) })
    }
}



export async function getListByTeamId(dispatch: Dispatch, session: any, teamId: string) {
    try {
        const resp = await axios({
            method: 'get',
            baseURL: baseURL,
            url: `/list/${teamId}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
        }).then((resp: any) => {
            return resp.data.data.map((item: any) => {
                return new List(item);
            })
        });

        dispatch({ type: 'setList', payload: new Payload({ list: resp }), error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: new Payload(undefined) })
    }
}

export async function getCardByListId(dispatch: Dispatch, session: any, listId: string) {
    try {
        const resp = await axios({
            method: 'get',
            baseURL: baseURL,
            url: `/card/${listId}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
        }).then((resp: any) => {
            return resp.data.data.map((item: any) => {
                return new Card(item);
            })
        });
        dispatch({ type: 'setCards', payload: new Payload({ cards: resp, listId: listId }), error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: new Payload(undefined) })
    }
}

export async function updateCard(dispatch: Dispatch, session: any, card: Card) {
    try {
        const resp = await axios({
            method: 'PUT',
            baseURL: baseURL,
            url: `/card/update/${card.id}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
            data: card
        });
        const cardResp = new Card(resp.data.data);
        dispatch({ type: 'updateCard', payload: new Payload({ card: cardResp }), error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: new Payload(undefined) })
    }
}

export async function deleteCard(dispatch: Dispatch, session: any, card: Card) {
    try {
        await axios({
            method: 'DELETE',
            baseURL: baseURL,
            url: `/card/delete/${card.id}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
        });
        dispatch({ type: 'deleteCard', payload: new Payload({ card: card }), error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: new Payload(undefined) })
    }
}

export async function addCard(dispatch: Dispatch, session: any, card: Card) {
    try {
        const resp = await axios({
            method: 'POST',
            baseURL: baseURL,
            url: `/card`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
            data: card
        });
        const cardResp = new Card(resp.data.data);
        dispatch({ type: 'addCard', payload: new Payload({ card: cardResp }), error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: new Payload(undefined) })
    }
}

export async function updateList(dispatch: Dispatch, session: any, list: List) {
    try {
        const resp = await axios({
            method: 'PUT',
            baseURL: baseURL,
            url: `/list/${list.id}`,
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
        const listResp = new List(resp.data.data);
        dispatch({ type: 'updateList', payload: new Payload({ list: listResp }), error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: new Payload(undefined) })
    }
}

export async function deleteList(dispatch: Dispatch, session: any, list: List) {
    try {
        await axios({
            method: 'DELETE',
            baseURL: baseURL,
            url: `/list/${list.id}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
        });
        dispatch({ type: 'deleteList', payload: new Payload({ list: list }), error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: new Payload(undefined) })
    }
}

export async function createList(dispatch: Dispatch, session: any, list: List) {
    try {
        const resp = await axios({
            method: 'POST',
            baseURL: baseURL,
            url: `/list`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${session && session.token}`
            },
            data: list
        });
        const listResp = new List(resp.data.data);
        dispatch({ type: 'addList', payload: new Payload({ list: listResp }), error: undefined })
    } catch (error) {
        dispatch({ type: 'error', error: error.response.data.message, payload: new Payload(undefined) })
    }
}

export function moveCardFromlist(dispatch: Dispatch, oldListId: string, cardId: string, destListId: string) {
    dispatch({ type: 'moveCardFromlist', payload: new Payload({ oldListId, cardId, destListId }), error: undefined })
}

export function cleanStore(dispatch: Dispatch) {
    dispatch({ type: 'cleanStore', payload: new Payload({}), error: undefined })
}