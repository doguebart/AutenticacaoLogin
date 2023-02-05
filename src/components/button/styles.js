import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
    button {
        cursor: pointer;
        padding: 0.7em;
        width: 100%;

        font-size: 16px;
        font-weight: 600;
        color: #fff;

        border-radius: 4px;
        border: none;
        background-color: #2266B3;

        #icon {
            font-size: 18px;
            margin-left: 0.5em;
        }
    }

    button:hover {
        transition: 0.2s;
        background-color: #1133B3;
    }
`