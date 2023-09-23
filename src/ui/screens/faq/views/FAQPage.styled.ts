import styled from 'styled-components';
import { COLOR } from '../../../../assets/colors';
import { SMALL_TABLET } from '../../../../assets/screen';

export const Container = styled.div`
    display        : flex;
    align-items    : center;
    justify-content: center;
    flex-direction : column;
    padding-top    : 86px;
    padding-bottom : 100px;
    margin         : auto;
`;

export const Title = styled.div`
    font-family  : 'MuseoSansRouned900';
    font-size    : 42px;
    color        : ${COLOR.primary0};
    margin-top   : 100px;
    margin-bottom: 80px;
    text-align   : center;
`;

export const List = styled.div`
    max-width     : 840px;
    display       : flex;
    flex-direction: column;

    @media(max-width: ${SMALL_TABLET}) {
        width     : 86%;
        max-wdith : 86%;
    }
`;

export const Item = styled.div`
    display       : flex;
    flex-direction: column;
    margin-top    : 32px;
    border-bottom : 1px solid ${COLOR.primary1};
    padding-bottom: 16px;
`;

export const Question = styled.label`
    font-size    : 24px;
    font-family  : 'MuseoSansRouned900';
    color        : ${COLOR.primary0};
`;

export const Answer = styled.label`
    margin-top   : 20px;
    font-size    : 16px;
    font-family  : 'MuseoSansRouned500';
    color        : ${COLOR.gray4};
`;