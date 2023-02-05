import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 1em;

    display: flex;
    align-items: center;
    justify-content: center;


    .wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 25%;
            max-height: 100%;
            padding: 1em;

            border-radius: 4px;
            box-shadow: 0px 3px 5px #999;
            background-color: #fff;

            .title {
                display: flex;
                align-items: center;
                
                h1 {
                    font-size: 30px;
                    color: #2266B3;
                }
            }

            .text {

                span {
                    font-size: 14px;
                    color: #000;
                    opacity: 50%;
                }
            }

            .input-area {
                display: flex;
                flex-direction: column;
                justify-content: center;

                span {
                    margin-top: 1em;

                    font-size: 15px;
                    font-weight: 500;
                    color: red;
                }
            }

            .stay {
                display: flex;
                align-items: center;

                input {
                    margin-right: 0.5em;
                }
                
                label {
                    font-size: 14px;
                    text-transform: capitalize;
                    color: #000;
                    opacity: 70%;
                }
            }

            .btn {
                display: flex;
                justify-content: center;
                margin: 0.5em 0;
            }

            .forgot {
                display: flex;
                flex-direction: column;
                
                a {
                    font-size: 14px;
                    opacity: 70%;
                    color: #2266B3;
                }
            }

            .borda {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 1px;
                width: 100%;
                margin: 1em 0;
                background-color: #CFCFCF;
            }

            .borda::before {
                content: 'OU';
                color: #000;
                font-size: 14px;
                font-weight: 500;
                opacity: 70%;
                padding: 0 0.5em;
                background-color: #fff;
            }

            .or {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                margin-top: 0.5em;

                .left {
                    display: flex;
                    justify-content: center;
                    width: 100%;

                    button {
                        padding: 0.5em;
                        width: 95%;
                        
                        cursor: pointer;
                        font-size: 16px;
                        font-weight: 600;
                        color: #fff;

                        border-radius: 4px;
                        border: none;
                        background-color: #de5246 ;

                        #icon {
                            margin: 0 auto;
                            font-size: 24px;
                        }
                    }

                    button:hover {
                        transition: 0.2s;
                        background-color: #de2223;
                    }
                }

                .right {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    
                    button {
                        padding: 0.5em;
                        width: 95%;
                        
                        cursor: pointer;
                        font-size: 16px;
                        font-weight: 600;
                        color: #fff;

                        border-radius: 4px;
                        border: none;
                        background-color: #2266B3;

                        #icon {
                            margin: 0 auto;
                            font-size: 24px;
                        }
                    }

                    button:hover {
                        transition: 0.2s;
                        background-color: #1133B3;
                    }
                }
            }
        }

    @media screen and (max-width: 1024px) {

        .wrapper {
            width: 50vw; 
        }
    }

    @media screen and (max-width: 768px) {

        .wrapper {
            width: 100vw; 
        }
    }
`