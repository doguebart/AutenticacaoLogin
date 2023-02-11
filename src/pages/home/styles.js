import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    .content {
        height: 100%;
        padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        h1 {
            text-align: center;
            font-size: 32px;
            color: #fff;
        }

        button {
            margin-top: 1em;
            padding: 1em;
            width: 30%;

            font-size: 16px;
            font-weight: 600;
            color: #fff;

            border: none;
            border-radius: 6px;
            background-color: #2266B3;
        }
    }

    @media screen and (min-width: 1024px) {
        
        .content {

            button {
                width: 20%;
            }
        }
    }

    @media screen and (min-width: 1728px) {

        .content {

            h1 {
                font-size: 50px;
            }

            button {
                width: 10%;
            }
        }
    }
`