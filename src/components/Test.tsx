import React from 'react';
import { useStore } from '../context/store';
import { useUser } from '../context/user';

const Test: React.FC = (props: any) => {
    const { store, dispatchStore, storeAction } = useStore();
    const { user, dispatchUser, userAction } = useUser();
    return (
        <div>
            <p>username : {user.isConnected === false ? "false" : "true"}</p>
            <button onClick={() => userAction.setUserName(dispatchUser, 'toto')} >setUsername</button>

            Test Component < div > {`The current count is ${store.count}`}</div >
            <button onClick={() => storeAction.asyncIncrement(dispatchStore)}>Increment count</button>


            <button onClick={() => userAction.login(dispatchUser, { email: 'francois.beche@epitech.eu', password: 'zouzou100' })}>login</button>
            <button onClick={() => userAction.getUser(dispatchUser, user.session)}>get user</button>
            {user.session && user.session.token}<br/>
            {user.error && user.error}<br />
            {user.user && user.user.email}
        </div >
    )
}

export default Test;