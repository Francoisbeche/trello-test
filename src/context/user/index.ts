import { UserProvider, useUserState, useUserDispatch } from './user';
import {  login, getUser, loginFlow, register } from './actions';

function useUser() {
    return { user: useUserState(), dispatchUser: useUserDispatch(), userAction: { login, getUser, loginFlow,register } }
}

export {
    UserProvider,
    useUserState,
    useUserDispatch,
    useUser
}