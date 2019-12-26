import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { useStore } from '../context/store';
import { useUser } from '../context/user';


import { Skeleton, Switch, Card, Icon, Avatar } from 'antd';
import { withRouter } from 'react-router-dom';

const { Meta } = Card;

const TeamPage = (props: any) => {
    const { store, dispatchStore, storeAction } = useStore();
    const { user } = useUser();

    useEffect(() => {
        console.log("user.session", user.session)
        storeAction.getTeams(dispatchStore, user.session);
    }, []);

    const teams = store.teams.map(function (team) {
        return (
            <TeamCard key={team.id}
                style={{ width: 300, marginTop: 16 }}
                actions={[
                    <Icon type="edit" key="edit" />,
                    <Icon type="delete" key="delete" />,
                ]}
            >
                <div onClick={(e: any) => { e.preventDefault(); console.log('go to team', team.id); props.history.push(`/team/${team.id}`) }}>
                    <Skeleton loading={false} avatar active>
                        <Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title={team.teamName}
                        />
                    </Skeleton>
                </div>
            </TeamCard>);
    })

    return (
        <Container>
            {teams}
        </Container >
    );
};

export default withRouter(TeamPage)

const Container = styled.div`
width:100%;
display: flex;
flex-wrap: wrap;
`;

const TeamCard = styled(Card)`
margin: 10px;
cursor: pointer;
`;
