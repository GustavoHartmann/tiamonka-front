import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    font-family: 'Open Sans', sans-serif;
}

button {
    cursor: pointer;
}

button:hover {
    opacity: 0.9;
}

button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
}
`;

export default GlobalStyle;
