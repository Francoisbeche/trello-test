import { UserProvider, useUserState, useUserDispatch } from './user';
import { setUserName, login, getUser } from './actions';

function useUser() {
    return { user: useUserState(), dispatchUser: useUserDispatch(), userAction: { setUserName, login, getUser } }
}

export {
    UserProvider,
    useUserState,
    useUserDispatch,
    useUser
}