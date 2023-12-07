import { DatePicker, Modal } from 'antd';
import React, { FC, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface HostModalType {
    visible: boolean,
    setVisible: (value: any) => void
}

const HostModal: FC<HostModalType> = ({ visible, setVisible }) => {
    const refreshModal = () => {
        setVisible(false);
    }
    const [formData, setFormData] = useState({
        startDate: '',
        votingDate: '',
        details: '',
        prizes: '',
        rules: '',
        max_players: 0
    });

    return (
        <Modal
            open={visible}
            onCancel={() => refreshModal()}
            footer={null}
            closable={false}
            className="custom-modal"
        >
            <DatePicker showTime onChange={(value, dateString) => setFormData({ ...formData, startDate: dateString })} />
            <DatePicker showTime onChange={(value, dateString) => setFormData({ ...formData, votingDate: dateString })} />
            <CKEditor editor={ClassicEditor} data="" onChange={(event, editor) => {
                const data = editor.getData();
                console.log(data);
            }}/>

        </Modal>
    )
}

export default HostModal