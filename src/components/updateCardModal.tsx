import React, { useState } from 'react';
import { Modal, Input, Button, Icon } from 'antd';
import styled from 'styled-components';
import CardTitle from './CardTitle';

const { TextArea } = Input;
const UpdateCardModal = (props: any) => {
    const [card, setCard] = useState(props.card);
    const [formValue, setformValue] = useState({ name: card.name, content: card.content });
    if (props.card === undefined)
        return null;
    const onOk = (e: any) => {
        props.onOk(e, { ...card, content: formValue.content })
    }
    const onChange = (e: any) => {
        const { name, value } = e.target
        setformValue({
            ...formValue,
            [name]: value
        });
    }

    const onDelete = (e: any) => {
        props.onDelete(props.card);
    }
    const updateName = (name: string) => {
        props.onUpdateName({ ...card, content: formValue.content, name: name })
        setCard({ ...card, content: formValue.content, name: name })
        //props.onOk(null, { ...props.card, content: formValue.content, name: formValue.name })
    }
    return (
        <div>
            <Modal
                title={
                    <CardTitle card={props.card} updateName={updateName} />
                }
                visible={props.visible}
                onOk={onOk}
                onCancel={props.onCancel}
            >
                <p>Dans la liste <ListNameUnderline>{props.list.listName}</ListNameUnderline></p>
                <h3><Icon type="pic-right" /> Description:</h3><br />
                <TextArea rows={8} name='content' value={formValue.content} onChange={onChange} />
                <DeleteButton type="danger" onClick={onDelete}>Supprimer</DeleteButton>
            </Modal>
        </div >
    );
}

export default UpdateCardModal;

const ListNameUnderline = styled.span`
    text-decoration: underline;
`;
const DeleteButton = styled(Button)`
margin-top: 20px;
`;