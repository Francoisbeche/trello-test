import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { useStore } from '../context/store';
import { useUser } from '../context/user';


import { Card, Icon, Popconfirm } from 'antd';
import { withRouter } from 'react-router-dom';
import TeamTitle from '../components/TeamTitle';

import bg from '../assets/bg.jpg';

const TeamPage = (props: any) => {
    const { store, dispatchStore, storeAction } = useStore();
    const { user } = useUser();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (loading === false) {
            setLoading(true);
            storeAction.cleanStore(dispatchStore)
            storeAction.getTeams(dispatchStore, user.session);
        }

    }, [dispatchStore, user.session, storeAction, loading]);


    const updateName = (teamInfo: any) => {
        storeAction.updateTeam(dispatchStore, user.session, teamInfo);
    }

    const deleteTeam = (team: any) => {
        storeAction.deleteTeam(dispatchStore, user.session, team)
    }
    const teams = store.teams.map(function (team) {
        return (
            <TeamCard key={team.id}
                style={{ width: 300, marginTop: 16 }}
                bodyStyle={{
                    padding: 0,
                }}
                actions={[
                    <Icon type="eye" onClick={(e: any) => { e.preventDefault(); props.history.push(`/team/${team.id}`) }} />,

                    <Popconfirm
                        title="Voulez vous vraiment supprimer cette team?"
                        onConfirm={(e: any) => { deleteTeam(team) }}
                        onCancel={() => { }}
                        okText="Oui"
                        cancelText="Non"
                    >
                        <Icon type="delete" key="delete" />
                    </Popconfirm>,
                ]}
            >
                <Bg onClick={(e: any) => { e.preventDefault(); props.history.push(`/team/${team.id}`) }} >

                    
                    <Title><TeamTitle team={team} updateName={updateName} /></Title>

                </Bg>
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

const Title = styled.h3`
color: white;

`;

const Bg = styled.div`
background-image: url(${bg});
height: 200px;
background-position: center;
color: white;
padding-top: 10px;
padding-left:10px;
`