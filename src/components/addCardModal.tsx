import React, { useState } from 'react';
import { Modal, Input,} from 'antd';

const { TextArea } = Input;
const AddCardModal = (props: any) => {

    const [value, setValue] = useState();
    const onOk = (e: any) => {

        props.onOk(e, { listId: props.listId, content: value })
    }
    const onChange = (e: any) => {
        setValue(e.target.value);
        console.log(e.target.value)
    }

    return (
        <div>
            <Modal
                title="Créer une card"
                visible={props.visible}
                onOk={onOk}
                onCancel={props.onCancel}
            >
                <TextArea rows={4} name='content' value={value} onChange={onChange} />
            </Modal>
        </div>
    );
}

export default AddCardModal;

