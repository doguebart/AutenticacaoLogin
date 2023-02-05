import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { MdLogout } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import logo from './assets/doguebartLogo.gif'

import UseAuth from '../../../hooks/UseAuth'

const Header = () => {
    const { sair } = UseAuth()
    const Navigate = useNavigate()

    const [data, setData] = useState()

    useEffect(() => {
        const data = JSON.parse(window.localStorage.getItem('users_bd'))

        if (data) {
            setData(data)
        }
    }, [])

    return (
        <Container>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            {data ?
                <div className="user">
                    <span>Olá <strong>{data[0].nome}</strong></span>
                    <button onClick={() => [sair(), Navigate('/')]}>
                        <MdLogout id='icon' size={26}/>
                    </button>
                </div>
                : null}
        </Container>
    )
}

export default Header;