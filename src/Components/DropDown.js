import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { onSmallLaptop } from '../Assets/other/screenSizes';

export default function DropDown(props) {
        const dropDownRef = useRef();
        const [isDropDownOpened, setIsDropDownOpened] = useState(false);

        const toggle = () => setIsDropDownOpened(!isDropDownOpened);
        const close = () => setIsDropDownOpened(false);

        useEffect(() => {
                function cb(e) {
                        if (!dropDownRef.current.contains(e.target)) close();
                }
                window.addEventListener('click', cb);

                return () => window.removeEventListener('click', cb);
        }, [isDropDownOpened]);

        return (
                <DropDownWrapper $mobile_only={props.$mobile_only} $hidden={props.$hidden} ref={dropDownRef}>
                        <DropDownLabel onClick={toggle}>
                                {(() => {
                                        if (props.img_label) {
                                                return <img alt='ddo' src={props.img_label} width={'40px'} />;
                                        } else if (props.label) {
                                                return props.label;
                                        }
                                })()}
                        </DropDownLabel>
                        <DropDownMenu open={isDropDownOpened}>{props.children}</DropDownMenu>
                </DropDownWrapper>
        );
}

const DropDownWrapper = styled.div`
        position: relative;
        padding: 7px;
        display: ${({ $mobile_only }) => ($mobile_only ? 'none' : 'block')};
        z-index: 10000;

        ${onSmallLaptop} {
                display: ${({ $mobile_only }) => ($mobile_only ? 'block' : 'block')};
        }
`;
const DropDownLabel = styled.div`
        user-select: none;
        cursor: pointer;
`;
const DropDownMenu = styled.div`
        transition: 0.2s ease-in-out;
        position: absolute;
        background-color: #f4f4f4;
        right: 0;
        visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
        opacity: ${({ open }) => (open ? '1' : '0')};
        transform: translateY(${({ open }) => (open ? '20px' : '0px')});
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
`;
