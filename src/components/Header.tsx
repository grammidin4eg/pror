import React from 'react';
import {Avatar, Layout, Menu, Typography, Row, Col} from 'antd';
import {UserOutlined} from "@ant-design/icons";

export const Header: React.FC = () => {
    const {Header} = Layout;
    return (
        <Header>
            <Row align={"middle"} gutter={12}>
                <Col>
                    <Typography.Text type="success">ProWeb</Typography.Text>
                </Col>
                <Col flex={"auto"}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Col>
                <Col>
                    <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined />} />
                </Col>
            </Row>
        </Header>
    );
};
