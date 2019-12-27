import React, { useState } from 'react';
import styled from 'styled-components';
import { useStore } from '../context/store';
import { useUser } from '../context/user';
import UpdateCardModal from './updateCardModal';

const ListCard = ({ list, card }: { list: any, card: any }) => {

    const { dispatchStore, storeAction } = useStore();
    const { user } = useUser();
    const [modalVisible, setModalVisible] = useState(false);

    const onOk = (e: any, card: any) => {
        storeAction.updateCard(dispatchStore, user.session, card)
        setModalVisible(false)
    }
    const updateName = (card: any) => {
        storeAction.updateCard(dispatchStore, user.session, card)
    }
    const onCancel = (e: any) => {
        setModalVisible(false)
    }
    const onDelete = (card: any) => {
        storeAction.deleteCard(dispatchStore, user.session, card)
    }
    if (card === undefined){
        return null;
    }


    const onDragStart = (e: any, cardId: any, listId: any) => {
        e.dataTransfer.setData('cardId', cardId)
        e.dataTransfer.setData('listId', listId)
    }
    return (
        <div>
            <UpdateCardModal
                card={card}
                list={list}
                onOk={onOk}
                visible={modalVisible}
                onCancel={onCancel}
                onDelete={onDelete}
                onUpdateName={updateName} />
            <ChildCard
                draggable
                onDragStart={(e: any) => { onDragStart(e, card.id, list.id) }}
                id={card.id}
                onClick={(e: any) => {
                    setModalVisible(true)
                }}>
                {card.name}
            </ChildCard>
        </div>

    );
}


export default ListCard;

const ChildCard = styled.div`
border: 1px solid #F7F3F2;
bordr-radius: 5px;
width: 100%;
margin-bottom: 10px;
padding-left: 10px;
min-height: 30px;
background: white;
line-height: 30px;
cursor: pointer;
`;
