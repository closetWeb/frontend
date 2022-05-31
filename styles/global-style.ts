import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { device } from "./theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    html {
        font-size: 11px;
        -webkit-text-size-adjust: none;
        font-display: fallback;
        ${device.tablet}{
            font-size: 10px;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    body {
      font-family: Noto sans-serif, Noto Sans KR;
    }
    a {
      text-decoration: none;
    }
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }
    input {
        border: none;
    }

    .pc-tablet-only {
        display: block;
        ${device.mobile} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
        ${device.tablet}{
            display:block;
        }
    }
    .mobile-only {
        display: none;
        ${device.mobile} {
            display: block;
        }
    }

    
`;