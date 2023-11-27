import React from 'react';
import { Flex, Link, P } from '@/components/basic';
import _ROUTERS from '@/constants/route.constant';
import { ListItemContainer, SidebarContainer, SidebarWrapper } from './style';
import { MenuData } from "@/utils/util";
import Image from '@/components/basic/img';
import Logo from '@/assets/img/logo.png';
import { Icon } from "@/components/custom";
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { notification } from 'antd';

const Sidebar = () => {
    const navigate = useNavigate();
    const { isAuthenticated, user } = useSelector((state: any) => state.auth);
    const { hash, pathname, search } = useLocation();

    const handleRoute = (router: string) => {
        if (isAuthenticated) {
            if (router === '/profile') {
                navigate(router + '/' + user.username);
            } else {
                navigate(router);
            }
        }
        else if (router !== '/') {
            notification.warning({ message: 'Warning', description: 'Please login!' });
        }
    }

    return (
        <SidebarContainer>
            <SidebarWrapper>
                <Flex $style={{
                    hAlign: 'center',
                    vAlign: 'center'
                }}>
                    <Link to="/">
                        <Image src={Logo} alt="No Logo" $style={{
                            w: '10rem',
                            h: '3rem',
                            bradius: '0'
                        }} />
                    </Link>
                </Flex>
                {MenuData.map((data, key) => {
                    if (data.router === '/' || isAuthenticated) {
                        return (
                            <Link to='#' key={key}>
                                <ListItemContainer isActive={(pathname === data.router)} onClick={() => handleRoute(data.router)}>
                                    <Icon icon={'Home'} />
                                    <P>{data.text}</P>
                                </ListItemContainer>
                            </Link>
                        );
                    }
                })}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;