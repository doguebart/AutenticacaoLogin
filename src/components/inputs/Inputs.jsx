import { Container } from './styles';

const Inputs = (props) => {
    return (
        <Container>
            <input
                type={props.type}
                id={props.id}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </Container>
    )
}

export default Inputs;