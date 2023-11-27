import React from 'react';
import { jwtDecode } from 'jwt-decode';

import { AvatarContainer, BannerContainer, CustomButton, ProfileContainer, StatusContainer } from './style';
import { Flex, Span } from '@/components/basic';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
    const { hash, pathname, search } = useLocation();
    const token = localStorage.getItem('token');
    const username_by_url = pathname.split('/')[2] || null;

    const user: any = token ? jwtDecode(token) : {};

    return (
        <ProfileContainer>
            <BannerContainer>
                <AvatarContainer />
            </BannerContainer>
            <StatusContainer>
                <Flex $style={{
                    gap: '1.5rem'
                }}>
                    <Flex $style={{
                        fDirection: 'column',
                        vAlign: 'center'
                    }}>
                        <Span>Followers</Span>
                        <Span>1800</Span>
                    </Flex>
                    <Flex $style={{
                        fDirection: 'column',
                        vAlign: 'center'
                    }}>
                        <Span>Following</Span>
                        <Span>1800</Span>
                    </Flex>
                    <Flex $style={{
                        fDirection: 'column',
                        vAlign: 'center'
                    }}>
                        <Span>XP</Span>
                        <Span>15.1K</Span>
                    </Flex>
                    <Flex $style={{
                        fDirection: 'column',
                        vAlign: 'center'
                    }}>
                        <Span>BXP</Span>
                        <Span>1800</Span>
                    </Flex>
                    <Flex $style={{
                        fDirection: 'column',
                        vAlign: 'center'
                    }}>
                        <Span>Tracks</Span>
                        <Span>1800</Span>
                    </Flex>
                    <Flex $style={{
                        fDirection: 'column',
                        vAlign: 'center'
                    }}>
                        <Span>Likes</Span>
                        <Span>26K</Span>
                    </Flex>
                </Flex>
                <CustomButton>{user?.username === username_by_url ? 'Create Post' : 'Follow'}</CustomButton>
            </StatusContainer>
        </ProfileContainer>
    )
}

export default ProfilePage;