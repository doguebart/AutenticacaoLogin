import styled from 'styled-components';

export const Container = styled.div`
    border-top: 1px solid #444;

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.5em 0;

        span {
            font-size: 14px;
            font-weight: 500;
            color: #CFCFCF;
        }
    }
`