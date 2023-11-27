import React from 'react';
import { Flex, Link, P } from '@/components/basic';
import _ROUTERS from '@/constants/route.constant';
import { ListItemContainer, SidebarContainer, SidebarWrapper } from './style';
import { MenuData } from "@/utils/util";
import Image from '@/components/basic/img';
import Logo from '@/assets/img/logo.png';
import { Icon } from "@/components/custom";
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
    const { hash, pathname, search } = useLocation();

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
                    return (
                        <Link to={data.router} key={key}>
                            <ListItemContainer isActive={(pathname === data.router)}>
                                <Icon icon={'Home'} />
                                <P>{data.text}</P>
                            </ListItemContainer>
                        </Link>
                    );
                })}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;