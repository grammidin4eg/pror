import React from 'react'
import {Layout} from 'antd';
import {Header} from "../components/Header";
// https://ant.design/components/layout/

export const Home: React.FC = () => {
    const {Footer, Content} = Layout;
    return (
        <Layout>
            <Header/>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
    )
}
