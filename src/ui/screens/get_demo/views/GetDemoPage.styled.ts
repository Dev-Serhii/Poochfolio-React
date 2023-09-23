import styled from 'styled-components';
import { COLOR } from '../../../../assets/colors';
import { DESKTOP, MINI_TABLET, MOBILE, SMALL_DESKTOP, SMALL_TABLET, TABLET } from '../../../../assets/screen';
import Dropdown from 'react-dropdown';

export const Container = styled.div`
    display        : flex;
    align-items    : center;
    justify-content: center;
    flex-direction : column;
    width          : 68%;
    margin         : auto;
    margin-bottom  : 100px;
    margin-top     : 86px;
    max-width      : 1040px;

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

    @media(max-width: ${SMALL_TABLET}) {
        flex
    }

    @media(max-width: ${MOBILE}) {
        padding        : 10px 10px;
        width          : calc(100% - 20px);
    }
`;

export const Title = styled.div`
    font-family  : 'MuseoSansRouned900';
    font-size    : 60px;
    color        : ${COLOR.primary0};
    margin-top   : 100px;
    text-align   : center;

    @media(max-width: ${TABLET}) {
        font-size    : 50px;
    }

    @media(max-width: ${SMALL_DESKTOP}) {
        font-size    : 44px;
    }

    @media(max-width: ${MINI_TABLET}) {
        font-size    : 38px;
    }
`;

export const Description = styled.div`
    font-family  : 'MuseoSansRouned700';
    font-size    : 22px;
    color        : black;
    margin-top   : 16px;
    text-align   : center;

    @media(max-width: ${MINI_TABLET}) {
        font-size    : 18px;
    }
`;

export const SubDescription = styled.div`
    font-family  : 'MuseoSansRouned500';
    font-size    : 20px;
    color        : ${COLOR.gray2};
    margin-top   : 16px;
    text-align   : center;
    width        : 70%;
    text-align   : left;
    margin-top   : 50px;

    @media(max-width: ${MINI_TABLET}) {
        font-size    : 18px;
    }

    & > span {
        color : ${COLOR.gray4};
    }
`;

export const FormTitle = styled.div`
    font-family  : 'MuseoSansRouned900';
    font-size    : 40px;
    color        : ${COLOR.primary0};
    margin-top   : 100px;
    text-align   : center;

    @media(max-width: ${SMALL_DESKTOP}) {
        font-size    : 36px;
    }

    @media(max-width: ${MINI_TABLET}) {
        font-size    : 30px;
    }
`;


export const Form = styled.form`
    display        : flex;
    flex-direction : column;
    width          : 100%;
    margin-top     : 30px;
    border-radius  : 14px;

    @media(max-width: ${MINI_TABLET}) {
        width          : 90%;
    }

    @media(max-width: ${MOBILE}) {
        width          : 90%;
    }

`;

export const Row = styled.div`
    display       : flex;
    flex-direction: row;
    justify-content: space-between;
    padding       : 0px 100px;

    @media(max-width: ${SMALL_TABLET}) {
        flex-direction: column;
        align-items   : center;
        padding       : 0px
    }

    @media(max-width: ${MINI_TABLET}) {
        flex-direction: column;
    }
`;

export const InputWrapper = styled.div`
    display        : flex;
    flex-direction : column;
    margin         : 14px 0px;
    width          : 48%;

    @media(max-width: ${MINI_TABLET}) {
        width          : 100%;
    }
`;

export const Label = styled.label`
    font-size  : 12px;
    font-family: 'MuseoSansRouned500';
    color      : ${COLOR.gray2};
`;

export const Input = styled.input`
    margin-top: 10px;
    height    : 46px;
    width     : calc(100% - 40px);
    padding   : 0px 20px;
    border-radius: 23px;
    outline   : none;
    color     : ${COLOR.gray4};
    font-size  : 15px;
    font-family: 'MuseoSansRouned500';
    background : transparent;
    border    : 2px solid ${COLOR.primary1};

    &:focus {
        border    : 2px solid ${COLOR.primary0};
    }
`;

export const ServiceRow = styled.div`
    display       : flex;
    flex-direction: row;
    align-items   : center;

    & > label {
        width : 50%;
    }

    @media(max-width: ${MINI_TABLET}) {
        flex-direction: column;
        align-items   : flex-start;
    }
`;

export const ServiceList = styled.div`
    margin-top: 20px;
`;

export const Drop = styled(Dropdown)`
    height        : 46px;
    width         : 100%;
    background    : white;
    border        : 1px solid ${COLOR.primary6};
    border-radius : 23px;
    color         : ${COLOR.gray2};
    font-family   : 'MuseoSansRouned700';
    font-size     : 15px;
    border        : 2px solid ${COLOR.primary1};
    margin-top    : 10px;
    z-index       : 3;
`;

export const Button = styled.div`
    height    : 46px;
    width     : 260px;
    border-radius: 23px;
    cursor     : pointer;
    background : ${COLOR.primary8};
    color      : ${COLOR.primary0};
    font-size  : 15px;
    font-family: 'MuseoSansRouned700';
    display    : flex;
    align-items: center;
    justify-content: center;
    margin-top : 70px;
    max-width  : 550px;
    align-self : center;

    &:hover {
        background : ${COLOR.primary1};
    }
`;