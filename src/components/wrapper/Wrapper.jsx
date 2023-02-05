import React, { useState } from 'react';
import { Container } from './styles';

import Inputs from '../../components/inputs/Inputs'
import Button from '../../components/button/Button';
import { FaFacebook, FaGoogle } from 'react-icons/fa'

const Wrapper = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')

    return (
        <Container>
            <div className="wrapper">
                <div className="title">
                    <h1>Entrar</h1>
                </div>

                <div className="text">
                    <span>Se autentifique para ter acesso completo à plataforma</span>
                </div>

                <div className="input-area">
                    <span>{error}</span>
                    <Inputs
                        type='email'
                        id='email'
                        placeholder='E-mail'
                        value={email}
                        onChange={(e) => [setEmail(e.target.value), setError('')]}
                    />
                    <Inputs
                        type='password'
                        id='password'
                        placeholder='Senha'
                        value={senha}
                        onChange={(e) => [setSenha(e.target.value), setError('')]}
                    />
                </div>

                <div className="stay">
                    <Inputs
                        type='checkbox'
                    />
                    <label>Ficar conectado</label>
                </div>

                <div className="btn">
                    <Button
                        text='Entrar'
                    />
                </div>

                <div className="forgot">
                    <a href="#">Esqueci minha senha</a>
                </div>

                <div className="borda"></div>

                <div className="or">
                    <div className="left">
                        <button><FaGoogle id='icon' /></button>
                    </div>

                    <div className="right">
                        <button><FaFacebook id='icon' /></button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Wrapper;