import { UserProvider, useUserState, useUserDispatch } from './user';
import { setUserName, login, getUser, loginFlow } from './actions';

function useUser() {
    return { user: useUserState(), dispatchUser: useUserDispatch(), userAction: { setUserName, login, getUser, loginFlow } }
}

export {
    UserProvider,
    useUserState,
    useUserDispatch,
    useUser
}