import { createGlobalStyle } from 'styled-components';
import Theme from './styles/theme'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: ${Theme.colors.dark0}
    }

    body.modal-open {
        max-height: 100vh;
        overflow: hidden;
    }

    * {
        box-sizing: border-box;
        color: ${Theme.colors.light1};
    }

    img {
        max-width: 100%;
    }

    html {
        --scrollbarBG: ${Theme.colors.dark1};
        --thumbBG: ${Theme.colors.dark4};
    }

    body::-webkit-scrollbar {
        width: 11px;
    }
    body {
        scrollbar-width: thin;
        scrollbar-color: var(--thumbBG) var(--scrollbarBG);
    }

    body::-webkit-scrollbar-track {
        background: var(--scrollbarBG);
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--thumbBG) ;
        border-radius: 6px;
        border: 3px solid var(--scrollbarBG);
    }
`;