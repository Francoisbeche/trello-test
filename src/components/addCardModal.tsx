import React, { useState } from 'react';
import { Modal, Input, } from 'antd';

const { TextArea } = Input;
const AddCardModal = (props: any) => {

    const [formValue, setformValue] = useState({ name: '', content: '' });
    const onOk = (e: any) => {

        props.onOk(e, { listId: props.listId, content: formValue.content, name: formValue.name })
        setformValue({ name: '', content: '' });
    }
    const onChange = (e: any) => {
        const { name, value } = e.target
        setformValue({
            ...formValue,
            [name]: value
        });
    }

    return (
        <div>
            <Modal
                title="Créer une card"
                visible={props.visible}
                onOk={onOk}
                onCancel={props.onCancel}
            >
                <Input name='name' value={formValue.name} onChange={onChange} />
                <TextArea rows={4} name='content' value={formValue.content} onChange={onChange} />
            </Modal>
        </div>
    );
}

export default AddCardModal;

