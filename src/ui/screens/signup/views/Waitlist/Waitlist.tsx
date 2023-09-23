import React from 'react';
import * as styled from './Waitlist.styled';
import { useDispatch } from 'react-redux';
import WAITLIST_IMG from "../../../../../assets/images/waitlist.svg";
import { SET_SIGNUP_STEP } from '../../../../redux/types';

type Props = {
};

export const Waitlist: React.FC<Props> = () => {
    const dispatch = useDispatch();
    
    return (
        <styled.Container>
            <styled.Form>
                <styled.Title>You are on the waitlist!</styled.Title>
                <styled.Description>We will notify you when your account has been approved</styled.Description>
                <styled.Wrapper>
                    <styled.Img src={WAITLIST_IMG} alt="waitlist" />
                </styled.Wrapper>
                <styled.LoginButton onClick={() => {
                    dispatch({
                        type: SET_SIGNUP_STEP,
                        payload: 2
                    })
                }}>Complete Your Listing</styled.LoginButton>
            </styled.Form>
        </styled.Container>
    )
}