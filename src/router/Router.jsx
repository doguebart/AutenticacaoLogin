import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Login from '../pages/login/Login';
import Cadastro from '../pages/cadastro/Cadastro'

const Router = () => {
    
    return(
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
        </Routes>
    )
}

export default Router;