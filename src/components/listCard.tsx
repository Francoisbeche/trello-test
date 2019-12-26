import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStore } from '../context/store';
import { useUser } from '../context/user';
import UpdateCardModal from './updateCardModal';

const ListCard = ({ list }: { list: any }) => {
    const { store, dispatchStore, storeAction } = useStore();
    const { user } = useUser();
    const [modalVisible, setModalVisiblte] = useState(false);
    const [card, setCard] = useState();
    useEffect(() => {
        storeAction.getCardByListId(dispatchStore, user.session, list.id as string);
    }, []);

    const onOk = (e: any, cardUpdated: any) => {
        console.log("onOk")
        storeAction.updateCard(dispatchStore, user.session, cardUpdated)
        setModalVisiblte(false)
    }
    const onCancel = (e: any) => {
        console.log("onCancel")
        setModalVisiblte(false)
    }
    const cards = () => {
        let tmpList = store.list.find((item) => {
            return item.id === list.id;
        })
        if (tmpList && tmpList.cards !== undefined) {
            return tmpList.cards.map((item) => {
                return <ChildCard onClick={(e: any) => {
                    setCard(item);
                    setModalVisiblte(true)
                }}
                    key={item.id}>{item.content}</ChildCard>
            })
        }
        return null;
    }
    const onDelete = (card: any) => {
        console.log("delete")
        storeAction.deleteCard(dispatchStore, user.session, card);
        setModalVisiblte(false)
    }
    return (
        <div>
            {card && <UpdateCardModal
                card={card}
                onOk={onOk}
                visible={modalVisible}
                onCancel={onCancel}
                onDelete={onDelete} />}
            {cards()}
        </div>
    );
}

export default ListCard;


const ChildCard = styled.div`

width: 100%;
margin-bottom: 10px;
background:grey;
height: 50px;
`;