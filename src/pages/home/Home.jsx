import { Container } from './styles';

import { FaFire } from 'react-icons/fa'

import Header from '../../components/home/header/Header'
import Footer from '../../components/home/footer/Footer'

import UseAuth from '../../hooks/UseAuth';
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const { sair } = UseAuth()
    const Navigate = useNavigate()

    return (
        <Container>
            <Header />

            <div className="content">
                <h1>Parabéns, você está logado <FaFire size={40} color='#2266B3' /></h1>

                <button onClick={() => [sair(), Navigate('/')]}>
                    Sair
                </button>
            </div>

            <Footer />
        </Container>
    )
}

export default Home;