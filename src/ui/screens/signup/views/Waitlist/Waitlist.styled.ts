import styled from 'styled-components';
import { COLOR } from '../../../../../assets/colors';
import { MINI_TABLET, MOBILE, SMALL_TABLET } from '../../../../../assets/screen';

export const Container = styled.div`
    display        : flex;
    align-items    : center;
    justify-content: center;
    flex-direction : column;
    max-width      : 940px;

    @media(max-width: ${SMALL_TABLET}) {
        width          : 90%;
    }

    @media(max-width: ${MINI_TABLET}) {
        width          : 90%;
    }

    @media(max-width: ${MOBILE}) {
        width          : 90%;
    }
`;

export const Form = styled.form`
    display        : flex;
    flex-direction : column;
    width          : 100%;
    margin-top     : 30px;
    border-radius  : 14px;
`;

export const Title = styled.label`
    color      : ${COLOR.primary0};
    font-size  : 56px;
    font-family: 'MuseoSansRouned900';
    text-align : center;
    margin-bottom: 10px;
`;

export const Description = styled.label`
    color      : ${COLOR.gray2};
    font-size  : 15px;
    font-family: 'MuseoSansRouned700';
    text-align : center;
`;

export const Wrapper = styled.div`
    display        : flex;
    align-items    : center;
    justify-content: center;
    margin-top     : 70px;
`;

export const Img = styled.img`
    @media(max-width: ${MINI_TABLET}) {
        width          : 70%;
    }
`;

export const LoginButton = styled.div`
    height    : 46px;
    width     : 100%;
    border-radius: 23px;
    cursor     : pointer;
    background : ${COLOR.primary0};
    color      : white;
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