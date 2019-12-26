import React, { useEffect, useState } from 'react';
import { Modal, Input, Button } from 'antd';

const { TextArea } = Input;
const UpdateCardModal = (props: any) => {

    
    const [value, setValue] = useState(props.card.content);
    if (props.card === undefined)
        return null;
    const onOk = (e: any) => {
        const cardupdated = props.card
        cardupdated.content = value;
        props.onOk(e, cardupdated)
    }
    const onChange = (e: any) => {
        setValue(e.target.value);
        console.log(e.target.value)
    }
    const onDelete = (e: any) => {
        props.onDelete(props.card);
    }
    return (
        <div>
            <Modal
                title="Modifier une card"
                visible={props.visible}
                onOk={onOk}
                onCancel={props.onCancel}
            >
                <TextArea rows={4} name='content' value={value} onChange={onChange} />
                <Button type="danger" onClick={onDelete}>Supprimer</Button>
            </Modal>
        </div>
    );
}

export default UpdateCardModal;

