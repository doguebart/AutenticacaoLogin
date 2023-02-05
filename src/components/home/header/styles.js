import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1em;
    width: 100%;

    background-color: #fff;

    .logo {
        width: 60px;
        height: 60px;

        img {
            width: 100%;
        }
    }

    .user {   
        display: flex;
        align-items: center;

        span {
            font-size: 20px;
            font-weight: 500;
            margin-right: 1em;

            strong {
                font-size: 26px;
                color: #2266B3;
            }
        }

        button {
            border: none;
            background-color: transparent;

            #icon {
                cursor: pointer;
                margin-top: 0.5em;
                width: 2em;

                font-size: 20px;
            }
        }
    }
`