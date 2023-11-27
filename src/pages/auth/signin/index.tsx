import React, { useState } from 'react';
import { Flex, P, Span } from '@/components/basic';
import { AuthForm, CustomButton, CustomFont, CustomFont1, CustomLine, LetterContainer, MarkBar, Rect, Rect1, SigninContainer, SignupButton, SubmitButton } from './style';
import { Link } from 'react-router-dom';
import { Checkbox, Icon, Input } from '@/components/custom';
import _ROUTERS from '@/constants/route.constant';
import { routerer } from '@/utils/util';
import { GV } from '@/utils/style.util';
import { Modal, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { login } from '@/actions/auth';
import { useDispatch } from 'react-redux';
import { authActions } from '@/redux/auth';

const Signin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isAgree, setAgree] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;
    const onChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e: any) => {
        e.preventDefault();
        Modal.confirm({
            title: 'Are you sure ?',
            content: 'Do you want to login now ?',
            async onOk() {
                const result = await login(formData);
                if (result.success) {
                    localStorage.setItem('token', result.accessToken);
                    dispatch(authActions.setUser({ isAuthenticated: true, user: result.accessToken}));
                    notification.success({ message: 'Success', description: 'Login Success!' });
                    navigate('/');
                } else {
                    notification.warning({ message: 'Warning', description: result.message });
                }
            }
        })
    }

    return (
        <SigninContainer>
            <AuthForm>
                <Flex $style={{ w: '100%', hAlign: 'center' }}>
                    <Flex $style={{ fDirection: 'column', w: '30rem', gap: '1.25rem' }}>
                        <Input value={email} name='email' onChange={onChange} preSide={<Icon icon='User' />} placeholder='Email Address' padding='0.5rem' radius='0.25rem' />
                        <Input type="password" value={password} name='password' onChange={onChange} preSide={<Icon icon='User' />} placeholder='Password' padding='0.5rem' radius='0.25rem' />
                        <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
                        <Flex $style={{ hAlign: 'space-between' }}>
                            <Checkbox isChecked={isAgree} onChange={() => setAgree(!isAgree)} label={<P $style={{ size: GV('font-size-5') }}><CustomFont>Keep me logged in</CustomFont></P>} />
                            <P $style={{ weight: GV('weight-md'), size: GV('font-size-5') }}>Forget Password</P>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex $style={{ vAlign: 'center' }}>
                    <CustomLine />
                    <LetterContainer>Or</LetterContainer>
                    <CustomLine />
                </Flex>
                <Flex $style={{ hAlign: 'center', gap: '1rem', w: '100%' }}>
                    <CustomButton><Icon icon='Google' /><Span $style={{ size: GV('font-size-5') }}>Sign in with Google</Span></CustomButton>
                </Flex>
                <Flex $style={{ vAlign: 'center', gap: '0.25rem', w: '100%', hAlign: 'center' }}>
                    <CustomFont1>Don't have an account? </CustomFont1>
                    <Link to={routerer('_SIGNUP')}><Span $style={{ size: GV('font-size-5'), color: 'purple' }}>SignUp here</Span></Link>
                </Flex>
            </AuthForm>
        </SigninContainer>
    )
}

export default Signin;