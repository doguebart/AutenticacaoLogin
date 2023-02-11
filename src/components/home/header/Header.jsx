import React from 'react';
import { Container } from './styles';
import { MdLogout } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import logo from './assets/doguebartLogo.gif'

import UseAuth from '../../../hooks/UseAuth'

const Header = () => {
    const { sair } = UseAuth()
    const Navigate = useNavigate()

    return (
        <Container>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <button onClick={() => [sair(), Navigate('/')]}>
                <MdLogout id='icon' size={26} color='#2266b3' />
            </button>
        </Container>
    )
}

export default Header;