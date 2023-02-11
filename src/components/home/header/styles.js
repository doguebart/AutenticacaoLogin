import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1em;
    width: 100%;

    background-color: transparent;
    border-bottom: 1px solid #444;

    .logo {
        width: 40px;
        height: 40px;

        img {
            width: 100%;
        }
    }

    button {
        border: none;
        background-color: transparent;

        #icon {
            cursor: pointer;
            margin-top: 0.5em;
            width: 2em;

            font-size: 22px;
        }
    }
`