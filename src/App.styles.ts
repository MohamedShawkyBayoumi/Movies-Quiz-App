import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './assets/images/BG.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        position: relative;
        background: linear-gradient(
            rgba(0, 0, 0, 0.3), 
            rgba(0, 0, 0, 0.3)
        ), url('${BGImage}');
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: 'Catamaran', sans-serif;
        font-size: 70px;
        text-align: center;
        margin: 20px;
        color: #fff;
    }

    .start, .next {
        cursor: pointer;
        border: 2px solid #ddd;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;
    }
`;