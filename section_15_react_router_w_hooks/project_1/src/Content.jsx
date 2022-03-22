import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MobX from './MobX';
import ReactJS from './ReactJS'
import Redux from './Redux'
import TypeScript from './Typescript'

const Content = () => {
    return (
        <div>
            <Routes>
                <Route element={<MobX />} path="/mobx" />
                <Route element={<ReactJS />} path="/react" />
                <Route element={<Redux />} path="/redux" />
                <Route element={<TypeScript />} path="/typescript" />
                <Route element={<h1>Główna</h1>} exact path="/" />
            </Routes>
        </div>
    );
}

export default Content;