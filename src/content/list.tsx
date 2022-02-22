import React from 'react';
import {ReactLesson1} from "./react/lesson_1";
import {ReactLesson2} from './react/lesson_2';

export type Lesson = {
    id: number;
    name: string;
    component: React.ReactNode
}

export type LessonBlock = {
    id: number;
    name: string;
    lessons: Lesson[];
}

export type Course = {
    id: string;
    name: string;
    blocks: LessonBlock[];
}

export const list: Course[] = [
    {
        id: 'react',
        name: 'Курс ReactJS',
        blocks: [
            {
                id: 0,
                name: 'Общие понятия',
                lessons: [
                    {
                        id: 0,
                        name: 'Что такое React',
                        component: <ReactLesson1 />
                    },
                    {
                        id: 1,
                        name: 'Создаем React приложение',
                        component: <ReactLesson2 />
                    }
                ]
            }
        ]
    }
];

export const getCourse = (id: string): Course | undefined => {
    return list.find((course) => course.id === id);
}

export const getBlock = (course: Course, id: number): LessonBlock | undefined => {
    return course.blocks.find((block) => block.id === id);
}

export const getLesson = (block: LessonBlock, id: number): Lesson | undefined => {
    return block.lessons.find((lesson) => lesson.id === id);
}
