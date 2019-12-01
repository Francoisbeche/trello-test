import { UserProvider, useUserState, useUserDispatch } from './user';
import { setUserName } from './actions';

function useUser() {
    return { user: useUserState(), dispatchUser: useUserDispatch(), userAction: { setUserName } }
}

export {
    UserProvider,
    useUserState,
    useUserDispatch,
    useUser
}