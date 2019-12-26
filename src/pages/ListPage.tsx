import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { useStore } from '../context/store';
import { useUser } from '../context/user';


import { Skeleton, Switch, Card, Icon, Avatar } from 'antd';
import { useParams } from 'react-router-dom';
import ListCard from '../components/listCard';
import AddCardModal from '../components/addCardModal';

const ListPage = (props: any) => {
    const { store, dispatchStore, storeAction } = useStore();
    const { user } = useUser();
    let { idTeam } = useParams();
    const [list, setList] = useState();
    const [modalVisible, setModalVisiblte] = useState(false);

    useEffect(() => {
        storeAction.getListByTeamId(dispatchStore, user.session, idTeam as string);
    }, []);

    const teams = store.list.map(function (list) {
        return (
            <RowList key={list.id}>
                <Listard key={list.id}
                    style={{ width: 300, marginTop: 16 }}
                    actions={[
                        <Icon type="plus" key="plus" onClick={(e:any) =>{
                            setList(list)
                            setModalVisiblte(true)
                        }} />,
                    ]}
                >
                    {list.listName}
                    <ListCard list={list} />
                </Listard>
            </RowList>
        );
    })

    const onOk = (e: any, card:any) => {
        console.log("onOk")
        storeAction.addCard(dispatchStore, user.session, card)
        setModalVisiblte(false)
    }
    const onCancel = (e: any) => {
        console.log("onCancel")
        setModalVisiblte(false)
    }
    return (
        <Container>
           {list && <AddCardModal
                listId={list.id}
                onOk={onOk}
                visible={modalVisible}
                onCancel={onCancel} /> } 
            {teams}
        </Container >
    );
};

export default ListPage

const Container = styled.div`
width:100%;
display: flex;
flex-wrap: wrap;
align-item: flex-start
`;

const RowList = styled.div`
width: 400px;
display: flex;
flex-wrap: wrap;
`;

const Listard = styled(Card)`
align-self:flex-start
`;
