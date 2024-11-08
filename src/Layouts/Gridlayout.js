import styled from 'styled-components';

import {
        onSmallLaptop,
        onLargeMobile,
        onTablet,
        onSmallMobile,
        onMidiumMobile,
        onLargeLaptop,
        onDesktop,
} from '../Assets/other/screenSizes';

export const Grid = styled.div`
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: ${({ $gap }) => $gap || '0px'};
        ${onLargeLaptop} {
                row-gap: ${({ $gap }) => $gap || '0px'};
                column-gap: 0px;
        }
`;

export const GridSection = styled.div`
        grid-column: ${({ $col }) => ($col ? 'auto/span ' + $col : 'auto/span 12')};
        grid-row: ${({ $row }) => ($row ? 'auto/span ' + $row : 'auto/span 1')};
        ${onDesktop} {
        }
        ${onLargeLaptop} {
        }
        ${onSmallLaptop} {
                grid-column: auto/span 12;
        }
        ${onTablet} {
                grid-column: auto/span 12;
        }
        ${onLargeMobile} {
                grid-column: auto/span 12;
        }
        ${onMidiumMobile} {
                grid-column: auto/span 12;
        }
        ${onSmallMobile} {
                grid-column: auto/span 12;
        }
`;
