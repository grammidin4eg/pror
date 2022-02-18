import React from 'react'
import { useParams } from "react-router-dom";
import {Layout, Menu, Breadcrumb} from 'antd';
import {BulbOutlined} from '@ant-design/icons';
import {Header} from "../components/Header";
import {getCourse, getBlock, getLesson} from '../content/list'

type CourseUrlParam = {
    name: string;
    block: number;
    lesson: number;
}

export const Course: React.FC = () => {
    const {SubMenu} = Menu;
    const {Content, Sider} = Layout;
    const urlParams = useParams();
    const params: CourseUrlParam = {
        name: urlParams.name || '',
        block: urlParams.block ? parseInt(urlParams.block, 10) : 0,
        lesson: urlParams.lesson ? parseInt(urlParams.lesson, 10) : 0,
    };
    
    if (!params.name) {
        return <div>Not found</div>
    }

    const course = getCourse(params.name);

    if (!course) {
        return <div>Not found</div>
    }

    const block = getBlock(course, params.block);

    if (!block) {
        return <div>Not found</div>
    }

    const lesson = getLesson(block, params.lesson);

    return (
        <Layout>
            <Header/>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[String(params.lesson)]}
                        defaultOpenKeys={[String(params.block)]}
                        style={{height: '100%', borderRight: 0}}
                    >
                        {course.blocks.map((block) => (
                            <SubMenu key={block.id} icon={<BulbOutlined />} title={block.name}>
                                {block.lessons.map((lesson) => (
                                    <Menu.Item key={lesson.id}>{lesson.name}</Menu.Item>
                                ))}
                            </SubMenu>    
                        ))}
                    </Menu>
                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>{course.name}</Breadcrumb.Item>
                        <Breadcrumb.Item>{block.name}</Breadcrumb.Item>
                        <Breadcrumb.Item>{lesson?.name}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {lesson?.component}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}
