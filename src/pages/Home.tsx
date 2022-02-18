import React from 'react'
import {Col, Layout, Row} from 'antd';
import {Header} from "../components/Header";
import {NavLink} from 'react-router-dom';
import './Home.css';
// https://ant.design/components/layout/

export const Home: React.FC = () => {
    const {Footer, Content} = Layout;
    return (
        <Layout>
            <Header/>
            <Content>
                <Row justify={"center"}>
                    <Col className={"course-title"}>
                        <NavLink className={"course-title__link"} to={'/course/react/0/0'}>Курс React JS</NavLink>
                    </Col>
                </Row>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    )
}
