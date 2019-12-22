import React from 'react';
import { useStore } from '../context/store';
import { useUser } from '../context/user';

const Test: React.FC = (props: any) => {
    const { store, dispatchStore, storeAction } = useStore();
    const { user, dispatchUser, userAction } = useUser();
    return (
        <div>
            <p>username : {user.isConnected}</p>
            <button onClick={() => userAction.setUserName(dispatchUser, 'toto')} >setUsername</button>

            Test Component < div > {`The current count is ${store.count}`}</div >
            <button onClick={() => storeAction.asyncIncrement(dispatchStore)}>Increment count</button>
        </div >
    )
}

export default Test;