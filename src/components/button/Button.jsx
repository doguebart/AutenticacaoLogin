import { Container } from './styles';

const Button = (props) => {
    return (
        <Container>
            <button>{props.text}</button>
        </Container>
    )
}
export default Button;