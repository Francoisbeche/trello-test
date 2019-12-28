import React, { useState, useEffect } from 'react';
import { Card, Icon, Popconfirm } from 'antd';
import styled from 'styled-components';
import ListTitle from './ListTitle';
import { useStore } from '../context/store';
import { useUser } from '../context/user';
import ListCard from './listCard';
import CreateCard from './CreateCard';
import CardEntity from '../models/Card';
import ListEntity from '../models/List';

const List = ({ list }: { list: any }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const { store, dispatchStore, storeAction } = useStore();
    const { user } = useUser();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (loading === false) {
            setLoading(true);
            storeAction.getCardByListId(dispatchStore, user.session, list.id as string);
        }
    }, [storeAction, user.session, list.id, dispatchStore, loading]);

    const updateName = (name: string) => {
        storeAction.updateList(dispatchStore, user.session, new ListEntity({ id: list.id, listName: name }));
    }

    const confirm = (e: any) => {
        storeAction.deleteList(dispatchStore, user.session, list);
    }

    const cancel = (e: any) => {
    }


    const createCard = (cardName: any) => {
        storeAction.addCard(dispatchStore, user.session, new CardEntity({
            "listId": list.id,
            "name": cardName
        }))
        setModalVisible(false)
    }

    const cards = () => {
        let tmpList = store.list.find((item) => {
            return item.id === list.id;
        })
        if (tmpList && tmpList.cards !== undefined) {

            return tmpList.cards.map((item) => {
                return <ListCard list={list} card={item} key={item.id}></ListCard>
            })
        }
        return null;
    }
    const onDrop = (ev: any, cat: any) => {
        let cardId = ev.dataTransfer.getData('cardId');
        let listId = ev.dataTransfer.getData('listId');
        const listIndex = store.list.findIndex((list) => {
            return list.id === listId;
        })
        if (listIndex >= 0) {
            const cardData = store.list[listIndex].cards.find((card) => {
                return card.id === cardId;
            })
            if (cardData) {
                storeAction.updateCard(dispatchStore, user.session, {
                    ...cardData,
                    "listId": list.id
                })
            }
        }
        storeAction.moveCardFromlist(dispatchStore, listId, cardId, list.id);
    }
    return (
        <ColumnList>

            <CardList

                bodyStyle={{ padding: 5 }}
                title={<ListTitle list={list} updateName={updateName} />}
                extra={
                    <Popconfirm
                        title="Voulez vous vraiment supprimer cette liste?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Oui"
                        cancelText="Non"
                    >
                        <DeleteIcon type="delete" key="delete" />
                    </Popconfirm>}
                style={{ width: 300, marginTop: 16 }}
                actions={[
                    <Icon type="plus" key="plus" onClick={(e: any) => {
                        setModalVisible(true)
                    }} />,
                ]}
            >
                <div
                    style={{ paddingTop: '15px' }}
                    onDragOver={(e: any) => {
                        e.preventDefault()
                    }}
                    onDrop={(e: any) => {
                        onDrop(e, 'complete');
                    }}>
                    {cards()}
                </div>

                {modalVisible === true && <CreateCard createCard={createCard} />}
            </CardList>
        </ColumnList >
    )
}

export default List;

const DeleteIcon = styled(Icon)`
cursor: pointer;
color: red;
`;


const ColumnList = styled.div`
width: 400px;
display: flex;
flex-wrap: wrap;
margin: 10px;

`;

const CardList = styled(Card)`
align-self:flex-start;
padding:0;
background: #F7F3F2;
`;
