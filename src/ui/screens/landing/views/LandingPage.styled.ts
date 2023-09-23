import styled from 'styled-components';
import { COLOR } from '../../../../assets/colors';

export const Container = styled.div`
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