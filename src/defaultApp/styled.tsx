

import * as styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 300px);
    grid-column-gap: 10px;
    > button {
        font-size: 35px;
        border-radius: 10px;
        color: #fafafa;
        text-transform: uppercase;
        padding: 60px 30px;

        background: -webkit-linear-gradient(top, #4527a0 0%,#7b1fa2 100%);
    }

    > button:first-child {
        background: linear-gradient(to bottom, #3949ab 0%,#4fc3f7 100%);
    }

    > button:last-child {
        background: linear-gradient(to bottom, #2E7D32 0%,#4DB6AC 100%);
    }
`;