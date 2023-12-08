import { DatePicker, Modal, Upload, notification } from 'antd';
import React, { FC, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { LabelContainer, HostModalWrapper, SubmitButton, UploadButton, BannerContainer, BannerOverlay } from './style';
import { Flex, P } from '@/components/basic';
import { GV } from '@/utils/style.util';
import { Icon, Input } from '@/components/custom';
import Image from '@/components/basic/img';
import { UPLOAD_URI } from '@/config';
import { useDispatch, useSelector } from 'react-redux';

interface HostModalType {
    visible: boolean,
    setVisible: (value: any) => void
}

const HostModal: FC<HostModalType> = ({ visible, setVisible }) => {
    const { user } = useSelector((state: any) => state.auth);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        startDate: '',
        votingDate: '',
        details: '',
        prizes: '',
        rules: '',
        max_players: ''
    });

    const [banner, setBanner] = useState<string | ArrayBuffer | null>(`${UPLOAD_URI}/banner.png`);

    const handleImageChange = (file: any, flag: number) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => setBanner(reader.result);
    };
    
    const handleImageRemove = async (flag: number) => {
        // const result = await removeImage({ id: user.id, flag });
        // if (result.success) {
        //     localStorage.setItem('token', result.accessToken);
        //     notification.success({ message: 'Success', description: 'Removed successfully' });
        //     setBanner
        // } else {
        //     notification.warning({
        //     message: 'Warning',
        //     description: 'Oops, it has some problem.',
        //     });
        // }
    };

    const beforeUpload = async (file: any, fileList: any[], flag: number) => {
        const form = new FormData();
        form.append('file', file);
        form.append('id', user.id);
        form.append('flag', `${flag}`);
        // const result = await uploadImage(form);
        // if (result.success) {
        //     localStorage.setItem('token', result.accessToken);
        //     notification.success({ message: 'Success', description: 'Uploaded successfully' });
        //     dispatch(authActions.setUser({ isAuthenticated: true, user: result.accessToken }));
        // } else {
        //     notification.warning({
        //         message: 'Warning',
        //         description: 'Oops, it has some problem.',
        //     });
        // }

        return false;
    };
    const refreshModal = () => {
        setVisible(false);
    }

    return (
        <Modal
            open={visible}
            onCancel={() => refreshModal()}
            footer={null}
            closable={false}
            className="custom-modal"
            width={900}
        >
            <HostModalWrapper>
                <BannerContainer>
                    <Image
                        src={`${banner}`}
                        alt=""
                        $style={{ w: '100%', h: '10rem', bradius: '0' }}
                    />
                    <BannerOverlay>
                        <Upload
                            onChange={data => handleImageChange(data.file, 2)}
                            beforeUpload={(file, list) => beforeUpload(file, list, 2)}
                            showUploadList={false}
                        >
                            <UploadButton color={GV('purple')}>
                                <Icon icon='Replace' />
                            </UploadButton>
                        </Upload>
                        <UploadButton color={GV('red')} onClick={() => handleImageRemove(2)}>
                            <Icon icon='Remove' />
                        </UploadButton>
                    </BannerOverlay>
                </BannerContainer>
                <Flex $style={{ vAlign: 'center', gap: '1rem' }}>
                    <LabelContainer>
                        <P $style={{ size: GV('font-size-6') }}>Start Date</P>
                        <DatePicker showTime onChange={(value, dateString) => setFormData({ ...formData, startDate: dateString })} className='custom-picker' />
                    </LabelContainer>
                    <LabelContainer>
                        <P $style={{ size: GV('font-size-6') }}>Voting Date</P>
                        <DatePicker showTime onChange={(value, dateString) => setFormData({ ...formData, votingDate: dateString })} className='custom-picker' />
                    </LabelContainer>
                    <Input label="Max Players" value={formData.max_players} onChange={(e: any) => setFormData({ ...formData, max_players: e.target.value })} />
                </Flex>
                <LabelContainer>
                    <P $style={{ size: GV('font-size-6') }}>Details</P>
                    <CKEditor
                        editor={ClassicEditor}
                        data={formData.details}
                        onChange={(event, editor) => setFormData({ ...formData, details: editor.getData() })}
                        onReady={(editor: any) => editor.editing.view.change((writer: any) => writer.setStyle('height', '200px', editor.editing.view.document.getRoot()))}
                    />
                </LabelContainer>
                <LabelContainer>
                    <P $style={{ size: GV('font-size-6') }}>Prizes</P>
                    <CKEditor
                        editor={ClassicEditor}
                        data={formData.prizes}
                        onChange={(event, editor) => setFormData({ ...formData, prizes: editor.getData() })}
                        onReady={(editor: any) => editor.editing.view.change((writer: any) => writer.setStyle('height', '200px', editor.editing.view.document.getRoot()))}
                     />
                </LabelContainer>
                <LabelContainer>
                    <P $style={{ size: GV('font-size-6') }}>Rules</P>
                    <CKEditor 
                        editor={ClassicEditor} 
                        data={formData.rules} 
                        onChange={(event, editor) => setFormData({ ...formData, rules: editor.getData() })} 
                        onReady={(editor: any) => editor.editing.view.change((writer: any) => writer.setStyle('height', '200px', editor.editing.view.document.getRoot()))}
                    />
                </LabelContainer>
                <Flex $style={{ hAlign: 'flex-end' }}>
                    <SubmitButton type="submit">Save</SubmitButton>
                </Flex>
            </HostModalWrapper>
        </Modal>
    )
}

export default HostModal