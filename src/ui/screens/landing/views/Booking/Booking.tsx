import React from 'react';
import * as styled from './Booking.styled';
import MOBILE from '../../../../../assets/images/landing/iphone-mobile.png';
import { COLOR } from '../../../../../assets/colors';

import { AiFillCheckCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

type Props = {};


export const Booking: React.FC<Props> = () => {
    const navigate = useNavigate();

    const goSignup = () => {
        navigate('/signup')
    }

    return (
        <styled.Container id="booking">
            <styled.ImageContainer>
                <styled.Image src={MOBILE} alt="booking" />
            </styled.ImageContainer>
            <styled.DescriptionContainer>
                <styled.Description>STOP WORRYING ABOUT VACANCY.</styled.Description>
                <styled.Title><span style={{ color: COLOR.primary0 }}>The Pooch Marketplace</span> has you covered!</styled.Title>
                <styled.List>
                    <styled.IconContainer>
                        <AiFillCheckCircle color={COLOR.primary0} size={24} />
                    </styled.IconContainer>
                    <styled.ListWrap>
                        <styled.ListText>Increase Bookings:</styled.ListText>
                        <styled.ListDescription>Fill your schedule and minimize vacancies.</styled.ListDescription>
                    </styled.ListWrap>
                </styled.List>
                <styled.List>
                    <styled.IconContainer>
                        <AiFillCheckCircle color={COLOR.primary0} size={24} />
                    </styled.IconContainer>
                    <styled.ListWrap>
                        <styled.ListText>Boost Revenue:</styled.ListText>
                        <styled.ListDescription>Grow your business and increase revenue.</styled.ListDescription>
                    </styled.ListWrap>
                </styled.List>
                <styled.List>
                    <styled.IconContainer>
                        <AiFillCheckCircle color={COLOR.primary0} size={24} />
                    </styled.IconContainer>
                    <styled.ListWrap>
                        <styled.ListText>Optimize Operations:</styled.ListText>
                        <styled.ListDescription>Save time and improve efficiency with automated tools.</styled.ListDescription>
                    </styled.ListWrap>
                </styled.List>
                <styled.List>
                    <styled.IconContainer>
                        <AiFillCheckCircle color={COLOR.primary0} size={24} />
                    </styled.IconContainer>
                    <styled.ListWrap>
                        <styled.ListText>Monitor Performance:</styled.ListText>
                        <styled.ListDescription>Track your business's performance with real-time data analytics and reporting tools that help you make informed decisions to maximize your profits.</styled.ListDescription>
                    </styled.ListWrap>
                </styled.List>
                <styled.ListButton onClick={goSignup}>
                    LIST YOUR BUSINESS ON OUR MARKETPLACE
                </styled.ListButton>
            </styled.DescriptionContainer>
        </styled.Container>
    )
}