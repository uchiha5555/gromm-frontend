import React from "react";
import { Main } from "@/components/layout/main";
import Sidebar from "@/components/layout/sidebar";
import { ConfigProvider } from 'antd';
import { MainWrapper, PublicLayoutWrapper } from "./style";
import { GV } from "@/utils/style.util";
import Header from "@/components/layout/header";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ConfigProvider theme={{ token: { colorPrimary: GV('purple') } }}>
            <PublicLayoutWrapper>
                <Sidebar />
                <MainWrapper>
                    <Header />
                    <Main>
                        {children}
                    </Main>
                </MainWrapper>
            </PublicLayoutWrapper>
        </ConfigProvider>
    )
}

export default PublicLayout;
