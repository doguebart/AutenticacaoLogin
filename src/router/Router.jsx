import React from 'react';
import { Routes, Route } from 'react-router-dom'
import UseAuth from '../hooks/UseAuth'

import Home from '../pages/home/Home';

import Login from '../pages/login/Login';
import Cadastro from '../pages/cadastro/Cadastro'

const Private = ({ Item }) => {
    const { logado } = UseAuth()

    return logado > 0 ? <Item /> : <Login />
}

const Router = () => {

    return (
        <Routes>

            <Route path='/' element={<Login />} />
            <Route exact path='/cadastro' element={<Cadastro />} />
            
            <Route exact path='/home' element={<Private Item={Home} />} />


            <Route path='*' element={<Login />} />
        </Routes>
    )
}

export default Router;