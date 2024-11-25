import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;