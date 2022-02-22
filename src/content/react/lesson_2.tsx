import React from 'react';
import {Divider, Typography} from "antd";
import {CloudDownloadOutlined, FolderAddOutlined, PlaySquareOutlined} from '@ant-design/icons';
import '../content.css'

export const ReactLesson2: React.FC = () => (
    <div>
        <Divider orientation="left">Создаем приложение React</Divider>
        <video controls>
            <source src='https://firebasestorage.googleapis.com/v0/b/pror-77fc8.appspot.com/o/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%B5%D0%BC%20React%20%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5.mp4?alt=media&token=d5763c1e-3cc0-4d3b-a8bf-4f7b0264862f'></source>
        </video>
        <Divider />
        <div className="content">
            <CloudDownloadOutlined /><h3 className='ml'>Необходимые зависимости</h3>
            <p>
            Начнем с того, что установим на компьютер <b>Node.js</b>.</p>
            <p>
            Это программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код). Она позволяет разработчикам создавать всевозможные серверные инструменты и веб-приложения используя язык JavaScript.
            </p>
            <p>
            Перейдем на сайт <a href="https://nodejs.org/en/">nodejs.org</a> и скачаем стабильную версию Node.js. После этого установим ее на компьютер. 
            </p>
            <p>
            Следуйте инструкциям мастера установка.
            </p>  
            <Divider />
            <FolderAddOutlined /><h3 className='ml'>Создание React приложения</h3>          
            <p>
            Давайте создадим React приложение. Есть множество способов это сделать. 
            Но на практике чаще всего используют утилиту <b>create_react_app.</b>
            </p>
        
            <p>
            Запустим консоль и перейдем в папку, в которой будем создавать наш проект. 
            </p>
            <p>
            Создадим проект с именем first-app с помощью утилиты create_react_app. </p>
            <p>
            Для этого введем в консоли: <Typography.Text code>npx create-react-app first-app</Typography.Text>
            </p>
            <p>
                Папку с проектом можно открыть в удобном для Вас редакторе кода. 
                Я в своих видео использую редактор <a href="https://code.visualstudio.com/">VisualStudio Code</a>
            </p>
            <Divider />
            <PlaySquareOutlined /><h3 className='ml'>Запуск приложения</h3>
            <p>Установим все модули приложения с помощью команды <Typography.Text code>npm install</Typography.Text></p>
            <p>Запустить приложение можно с помощью команды <Typography.Text code>npm start</Typography.Text>
            или <Typography.Text code>yarn start</Typography.Text> если вы хотите использовать <b>yarn</b>.
            <p>Установить yarn на компьютер можно с помощью команды <Typography.Text code>npm install -g yarn</Typography.Text></p>
            </p>

        </div>
    </div>
);
