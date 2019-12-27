import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { useStore } from '../context/store';
import { useUser } from '../context/user';

import { useParams } from 'react-router-dom';

import List from '../components/List';
import { Card } from 'antd';
import ListTitle from '../components/ListTitle';

import body from '../assets/body.jpg';

const ListPage = (props: any) => {
    const { store, dispatchStore, storeAction } = useStore();
    const { user } = useUser();
    let { idTeam } = useParams();
    const [loading, setLoading] = useState(false);
    const [addList, setAddList] = useState(false)
    useEffect(() => {
        if (loading === false) {
            setLoading(true);
            storeAction.getListByTeamId(dispatchStore, user.session, idTeam as string);
        }
    }, [store.list, idTeam, storeAction, user.session, dispatchStore, loading]);

    const list = store.list.map(function (list) {
        return (<List key={list.id} list={list} />);
    })

    const createList = (name: string) => {
        storeAction.createList(dispatchStore, user.session, {
            "listName": name,
            "teamId": idTeam
        });
        setAddList(false)
    }

    const displayAddCard = (e: any) => {
        setAddList(true)
    }
    return (
        <Container>
            {list}
            {addList === false ? <AddListCard style={{ width: 300 }} bodyStyle={{ padding: 0, lineHeight: '30px', height: 30, paddingLeft: '10px' }}
                onClick={displayAddCard}>
                <p>Ajouter une liste</p>
            </AddListCard> :


                <ColumnList>

                    <CardList
                        bodyStyle={{ padding: 5 }}
                        title={<ListTitle displayInput={true} placeholder={'Nom de votre liste'} list={{ listname: "" }} updateName={createList} />}
                        style={{ width: 300, marginTop: 16 }}
                        actions={[]}
                    >
                    </CardList>
                </ColumnList>
            }
        </Container >
    );
};

export default ListPage

const ColumnList = styled.div`
width: 400px;
display: flex;
flex-wrap: wrap;
margin: 10px;
margin-bottom:150px;
`;

const Container = styled.div`
display: flex;
flex-wrap: no-wrap;
align-item: flex-start;
position: absolute;
bottom:0;
padding-top:30px;
height: 100%;
white-space:nowrap;
background-image: url(${body});
background-repeat: repeat;
overflow:scroll;
overflow-x: hidden;
padding-bottom: 100px;
min-width: 100%;
`;

const AddListCard = styled(Card)`
align-self:flex-start;
margin-top: 26px;
width: 300px;
flex: 0 0 auto;
cursor:pointer;
background: #F7F3F2;
`;
const CardList = styled(Card)`
align-self:flex-start;
padding:0;
background: #F7F3F2;
margin-bottom: 100px;
`;


