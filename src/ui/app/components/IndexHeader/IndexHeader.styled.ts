import styled from 'styled-components';
import { DESKTOP, MOBILE, SMALL_DESKTOP, SMALL_TABLET, TABLET } from '../../../../assets/screen';
import { COLOR } from '../../../../assets/colors';
import { HashLink } from 'react-router-hash-link';

export const Container = styled.div<{
    show: boolean,
    backgroundImage: any
}>`
    display        : flex;
    align-items    : center;
    justify-content: space-between;
    background     : ${COLOR.primary0};
    padding        : 10px 16%;
    position       : fixed;
    width          : 68%;
    z-index        : 10;
    transition     : transform 0.4s;
    transform      : ${({show}) => show ? 'none' : 'translate3d(0, -100%, 0)' };

    @media(max-width: ${DESKTOP}) {
        padding        : 10px 10%;
        width          : 80%;
    }

    @media(max-width: ${TABLET}) {
        padding        : 10px 5%;
        width          : 90%;
    }

    @media(max-width: ${SMALL_DESKTOP}) {
        padding        : 10px 30px;
        width          : calc(100% - 60px);
    }

    @media(max-width: ${MOBILE}) {
        padding        : 10px 10px;
        width          : calc(100% - 20px);
    }

    & > .szh-menu-container > ul {
        margin-top       : 34px !important;
        background-color : ${COLOR.primary0};

        & > li {
            color: white;
            font-family    : 'MuseoSansRouned500';
            font-size      : 16px;
            padding        : 8px 20px;

            &:hover {
                background-color : ${COLOR.primary1};
            }
        }
    }
`;

export const LogoWrapper = styled.a`
`;

export const Logo = styled.img`
    width     : 142px;
    object-fit: contain;
    cursor    : pointer;
`;

export const Link = styled(HashLink)`
    color      : white;
    font-family: 'MuseoSansRouned500';
    font-size  : 15px;
    cursor     : pointer;
    margin     : 0px 10px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    @media(max-width: ${SMALL_DESKTOP}) {
        margin     : 0px 4px;
    }

    @media(max-width: ${SMALL_TABLET}) {
        display: none;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;

`;

export const Button = styled.div`
    display        : flex;
    align-items    : center;
    justify-content: center;
    background     : ${COLOR.primary4};
    border-radius  : 26px;
    color          : ${COLOR.primary0};
    font-family    : 'MuseoSansRouned500';
    font-size      : 15px;
    cursor         : pointer;
    margin         : 0px 10px;
    padding        : 14px 28px;

    &:hover {
        background: ${COLOR.primary1};
    }

    @media(max-width: ${SMALL_DESKTOP}) {
        margin     : 0px 4px;
    }

    @media(max-width: ${SMALL_TABLET}) {
        display: none;
    }
`;

export const Support = styled.div`
    display        : flex;
    flex-direction : row;
    align-items    : center;
    justify-content: center;
    background     : transparent;
    border-radius  : 26px;
    border         : 2px solid white;
    color          : white;
    font-family    : 'MuseoSansRouned500';
    font-size      : 15px;
    cursor         : pointer;
    margin-left    : 10px;
    padding        : 12px 24px;

    &:hover {
        background: ${COLOR.primary1};
    }

    @media(max-width: ${SMALL_DESKTOP}) {
        margin-left: 4px;
    }

    @media(max-width: ${SMALL_TABLET}) {
        margin-right: 20px;
    }
`;

export const SupportLogo = styled.img`
    height      : 20px;
    width       : 24px;
    object-fit  : contain;
    margin-right: 10px;
`;

export const Menu = styled.div`
    display        : none;
    align-items    : center;
    justify-content: center;
    cursor         : pointer;

    @media(max-width: ${SMALL_TABLET}) {
        display        : flex;
    }
`;

export const MenuIcon = styled.img`
    height    : 38px;
    width     : 38px;
    object-fit: contain;
`;

export const ServiceList = styled.div`
    margin-top: -10px;
    padding-left : 14px;

    & > li {
        color          : ${COLOR.primary0};
        font-family    : 'MuseoSansRouned500';
        font-size      : 15px;
        list-style-type: none;
        cursor         : pointer;
        margin-top     : 12px;
    }
`;