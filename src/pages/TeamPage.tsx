import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { useStore } from '../context/store';
import { useUser } from '../context/user';

import { Card, Icon, Popconfirm } from 'antd';
import { withRouter } from 'react-router-dom';
import TeamTitle from '../components/TeamTitle';

import bg from '../assets/bg.jpg';
import Team from '../models/Team';

const TeamPage = (props: any) => {
    const { store, dispatchStore, storeAction } = useStore();
    const { user } = useUser();
    const [loading, setLoading] = useState(false);
    const [addTeam, setAddTeam] = useState(false)
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

    const createTeam = (teamInfo: any) => {
        storeAction.addTeam(dispatchStore, user.session, new Team({
            "teamName": teamInfo.teamName,
        }));
        setAddTeam(false)
    }
    const displayAddTeam = (e: any) => {
        setAddTeam(true)
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
                <Bg >
                    <Title><TeamTitle team={team} updateName={updateName} /></Title>
                    <BodyClic onClick={(e: any) => { e.preventDefault(); props.history.push(`/team/${team.id}`) }} >

                    </BodyClic>
                </Bg>
            </TeamCard>);
    })

    return (
        <Container>
            {teams}
            {addTeam === false ? <AddListTeam style={{ width: 300 }} bodyStyle={{ padding: 0, lineHeight: '30px', height: 30, paddingLeft: '10px' }}
                onClick={displayAddTeam}>
                <p>Ajouter une team</p>
            </AddListTeam> :
                <CardList
                    bodyStyle={{ padding: 5 }}
                    title={<TeamTitle displayInput={true} placeholder={'Nom de votre Team'} team={{ teamName: "" }} updateName={createTeam} />}
                    style={{ width: 300, marginTop: 16 }}
                    actions={[]}
                >
                </CardList>}
        </Container >
    );
};

export default withRouter(TeamPage)

const BodyClic = styled.div`
width: 100%;
height:100%;
background: red;
background-color: rgba(0, 0, 0, 0.3);
&:hover {
    background-color: transparent;
  }
`;

const AddListTeam = styled(Card)`
align-self:flex-start;
margin-top: 26px;
width: 300px;
flex: 0 0 auto;
cursor:pointer;
background: #F7F3F2;
`;

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
display: block
position: relative;
z-index: 50;
padding-left: 10px;
`;

const Bg = styled.div`
background-image: url(${bg});
height: 200px;
background-position: center;
color: white;
padding-top: 10px;
`


const CardList = styled(Card)`
align-self:flex-start;
padding:0;
background: #F7F3F2;
margin-bottom: 100px;
`;
