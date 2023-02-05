import React, { useState } from 'react'
import { Container } from '../login/styles'
import { Link, useNavigate } from "react-router-dom"
import UseAuth from '../../hooks/UseAuth'

import Inputs from '../../components/inputs/Inputs'
import Button from '../../components/button/Button'

const Cadastro = () => {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [cfsenha, setCfsenha] = useState('')
    const [error, setError] = useState('')
    const Navigate = useNavigate()

    const { cadastro } = UseAuth()

    const handleCadastro = () => {

        if (!nome || !sobrenome || !email || !senha || !cfsenha) {
            setError('Preencha todos os campos para prosseguir')
            return
        } else if (senha !== cfsenha) {
            setError('As senhas não são iguais')
            return
        }

        const res = cadastro(email, senha, nome)

        if(res) {
            setError(res)
            return
        }

        Navigate('/')
    }

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

                    <div className="name-area">
                        <Inputs
                            type='text'
                            id='name'
                            placeholder='Nome'
                            value={nome}
                            onChange={(e) => [setNome(e.target.value), setError('')]}
                        />
                        <Inputs
                            type='text'
                            id='lastName'
                            placeholder='Sobrenome'
                            value={sobrenome}
                            onChange={(e) => [setSobrenome(e.target.value), setError('')]}
                        />
                    </div>

                    <div className="email-area">

                        <Inputs
                            type='email'
                            id='email'
                            placeholder='E-mail válido'
                            value={email}
                            onChange={(e) => [setEmail(e.target.value), setError('')]}
                        />
                    </div>

                    <div className="password-area">

                        <Inputs
                            type='password'
                            id='password'
                            placeholder='Nova senha'
                            value={senha}
                            onChange={(e) => [setSenha(e.target.value), setError('')]}
                        />

                        <Inputs
                            type='password'
                            id='cfpassword'
                            placeholder='Confirme a nova senha'
                            value={cfsenha}
                            onChange={(e) => [setCfsenha(e.target.value), setError('')]}
                        />
                    </div>
                </div>

                <div className="btn">
                    <Button
                        text='Cadastrar'
                        onClick={handleCadastro}
                    />
                </div>

                <div className="forgot">
                    <Link to='/login'>Já tenho uma conta</Link>
                </div>
            </div>
        </Container>
    )
}

export default Cadastro;