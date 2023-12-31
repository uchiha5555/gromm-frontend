import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import React, { FC, useEffect, useState } from 'react';
import { DatePicker, Modal, Upload, notification } from 'antd';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { LabelContainer, HostModalWrapper, SubmitButton, UploadButton, BannerContainer, BannerOverlay } from './style';
import { Flex, P } from '@/components/basic';
import { GV } from '@/utils/style.util';
import { Icon, Input } from '@/components/custom';
import Image from '@/components/basic/img';
import { UPLOAD_URI } from '@/config';
import { useDispatch, useSelector } from 'react-redux';
import { hostBracket, uploadImage } from '@/actions/bracket';
import { bracketActions } from '@/redux/bracket';

dayjs.extend(customParseFormat);

const HostModal = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state: any) => state.auth);
    const { bracket, visible } = useSelector((state: any) => state.bracket);
    const [formData, setFormData] = useState({
        title: bracket ? bracket.title : '',
        start_date: bracket ? bracket.start_date : '',
        vote_date: bracket ? bracket.vote_date : '',
        details: bracket ? bracket.details : '',
        prizes: bracket ? bracket.prizes : '',
        rules: bracket ? bracket.rules : '',
        max_player: bracket ? bracket.max_player : 0
    });
    const [file, setFile] = useState('');
    const [banner, setBanner] = useState<string | ArrayBuffer | null>(`${UPLOAD_URI}/banner.png`);

    const refreshModal = () => dispatch(bracketActions.setVisible(false));

    const handleImageChange = (file: any) => {
        setFile(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => setBanner(reader.result);
    };
    
    const handleImageRemove = async () => {
        setFile('');
        setBanner(`${UPLOAD_URI}/banner.png`);
    };

    const onSubmit = (e: any) => {
        e.preventDefault();

        if (formData.title === '') {
            notification.warning({ message: 'Warning', description: 'Please input title' });
            return;
        }
        if (formData.start_date === '') {
            notification.warning({ message: 'Warning', description: 'Please input start date' });
            return ;
        }
        if (formData.vote_date === '') {
            notification.warning({ message: 'Warning', description: 'Please input vote date' });
            return;
        }
        if (formData.max_player < 2) {
            notification.warning({ message: 'Warning', description: 'Please input max player number correctly' });
            return;
        }
        if (new Date(formData.start_date).getTime() > new Date(formData.vote_date).getTime()) {
            notification.warning({ message: 'Warning', description: 'Please select date correctly' });
            return;
        }

        Modal.confirm({
            title: 'Are you sure ?',
            content: 'Do you want to save this data ?',
            async onOk() {
                const result = await hostBracket({ ...formData, id: bracket ? bracket.id : null, user: user ? user.id : null });
                if (result.success) {
                    notification.success({ message: 'Success', description: 'Saved successfully' });
                    if (file) {
                        const form = new FormData;
                        form.append('id', result.model._id);
                        form.append('file', file);
                        const upload_result = await uploadImage(form);
                        if (upload_result.success) {
                            dispatch(bracketActions.saveBracket(upload_result.model));
                            setFile('');
                        }
                    } else {
                        dispatch(bracketActions.saveBracket(result.model));
                        setFile('');
                    }
                } else {
                    notification.warning({ message: 'Warning', description: 'Error occurred' });
                }
            }
        })
    }
    
    useEffect(() => {
        setFile('');
        setBanner(`${UPLOAD_URI}/banner.png`);
        setFormData({
            title: bracket ? bracket.title : '',
            start_date: bracket ? bracket.start_date : '',
            vote_date: bracket ? bracket.vote_date : '',
            details: bracket ? bracket.details : '',
            prizes: bracket ? bracket.prizes : '',
            rules: bracket ? bracket.rules : '',
            max_player: bracket ? bracket.max_player : 0
        });
    }, [visible]);

    return (
        <Modal
            open={visible}
            onCancel={() => refreshModal()}
            footer={null}
            closable={false}
            className="custom-modal"
            width={900}
        >
            <HostModalWrapper autoComplete='off' onSubmit={onSubmit}>
                <BannerContainer>
                    <Image
                        src={`${banner}`}
                        alt=""
                        $style={{ w: '100%', h: '10rem', bradius: '0' }}
                    />
                    <BannerOverlay>
                        <Upload
                            onChange={data => handleImageChange(data.file)}
                            beforeUpload={(file, list) => false}
                            showUploadList={false}
                        >
                            <UploadButton color={GV('purple')}>
                                <Icon icon='Replace' />
                            </UploadButton>
                        </Upload>
                        <UploadButton color={GV('red')} onClick={() => handleImageRemove()}>
                            <Icon icon='Remove' />
                        </UploadButton>
                    </BannerOverlay>
                </BannerContainer>
                <Flex $style={{
                    vAlign: 'center',
                    gap: '1rem',
                    w: '100%',
                    queries: {
                        768: {
                            fDirection: 'column'
                        }
                    }
                }}>
                    <Input label="Title" value={formData.title} onChange={(e: any) => setFormData({ ...formData, title: e.target.value })} />
                    <LabelContainer>
                        <P $style={{ size: GV('font-size-6') }}>Start Date</P>
                        <DatePicker
                            value={formData.start_date ? dayjs(formData.start_date, 'YYYY-MM-DD HH:mm:ss') : null}
                            showTime={{ defaultValue: dayjs('00:00:00', 'HH:mm:ss') }}
                            format='YYYY-MM-DD HH:mm:ss'
                            onChange={(value, dateString) => setFormData({ ...formData, start_date: dateString })}
                            className='custom-picker'
                        />
                    </LabelContainer>
                    <LabelContainer>
                        <P $style={{ size: GV('font-size-6') }}>Voting Date</P>
                        <DatePicker
                            value={formData.vote_date ? dayjs(formData.vote_date, 'YYYY-MM-DD HH:mm:ss') : null}
                            showTime={{ defaultValue: dayjs('00:00:00', 'HH:mm:ss') }}
                            format='YYYY-MM-DD HH:mm:ss'
                            onChange={(value, dateString) => setFormData({ ...formData, vote_date: dateString })}
                            className='custom-picker'
                        />
                    </LabelContainer>
                    <Input label="Max Players" type='number' value={formData.max_player} onChange={(e: any) => setFormData({ ...formData, max_player: e.target.value })} />
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