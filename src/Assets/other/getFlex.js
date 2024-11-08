import { css } from 'styled-components';

export const getFlex = function (justifyContent = 'center', alignItems = 'center', gap = '0px', direction = 'row') {
        return css`
                display: flex;
                align-items: ${alignItems};
                justify-content: ${justifyContent};
                gap: ${gap};
                flex-direction: ${direction};
        `;
};
