import React, { useState } from 'react';
import { useStore } from '../context/store';
import { useUser } from '../context/user';


import { Skeleton, Switch, Card, Icon, Avatar } from 'antd';

const { Meta } = Card;


const Test: React.FC = (props: any) => {
    const { store, dispatchStore, storeAction } = useStore();
    const { user, dispatchUser, userAction } = useUser();
    const [loading, setLoading] = useState(true);
    return (
        <div>
            <Card
                style={{ width: 300, marginTop: 16 }}
                actions={[
                    <Icon type="setting" key="setting" />,
                    <Icon type="edit" key="edit" />,
                    <Icon type="ellipsis" key="ellipsis" />,
                ]}
            >
                <Skeleton loading={loading} avatar active>
                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title="Card title"
                        description="This is the description"
                    />
                </Skeleton>
            </Card>
        </div >
    )
}

export default Test;

/*
 <p>username : {user.isConnected === false ? "false" : "true"}</p>
            <button onClick={() => userAction.setUserName(dispatchUser, 'toto')} >setUsername</button>

            Test Component < div > {`The current count is ${store.count}`}</div >
            <button onClick={() => storeAction.asyncIncrement(dispatchStore)}>Increment count</button>


            <button onClick={() => userAction.login(dispatchUser, { email: 'francois.beche@epitech.eu', password: 'zouzou100' })}>login</button>
            <button onClick={() => userAction.getUser(dispatchUser, user.session)}>get user</button>
            {user.session && user.session.token}<br/>
            {user.error && user.error}<br />
            {user.user && user.user.email}
*/