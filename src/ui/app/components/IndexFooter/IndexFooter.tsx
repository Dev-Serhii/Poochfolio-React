import React, { useState } from 'react';
import * as styled from './IndexFooter.styled';
import LOGO from "../../../../assets/images/Logo.svg"
import GOOGLEPLAY from "../../../../assets/images/google-play.png"
import APPLESTORE from "../../../../assets/images/app-store.png"
import { AiFillLinkedin } from 'react-icons/ai';
import { validateEmail } from '../../../../utils/emailValidate';
import { toast } from 'react-toastify';
import { subscribe } from '../../../api/server/auth';
import { useDispatch } from 'react-redux';

type Props = {};

export const IndexFooter: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');

    const goApple = () => {
        window.open('https://apps.apple.com/us/app/pooch-marketplace/id6443412253', '_blank');
    }

    const goGoogle = () => {
        window.open('https://play.google.com/store/apps/details?id=com.poochmobile&pli=1', '_blank');
    }
    
    const goSubscribe = () => {
        if(validateEmail(email)) {
            subscribe(dispatch, { email })
            .then((res) => {
                setEmail('');
                if(res?.subscribed) {
                    toast('Successfully subscribed!', { type: 'success' });
                } else {
                    toast('Something went wrong. Please try again!', { type: 'error' });
                }
            })
            .catch((err) => {
                toast(err, { type: 'error' })
            })
        } else {
            toast("Email is not valid!", { type: 'error' })
        }
    }

    return (
        <styled.Container>
            <styled.MainContainer>
                <styled.LogoContainer>
                    <styled.LogoImage src={LOGO} alt="app-logo" />
                    <styled.Text>319 North Venice Blvd. Venice, CA 90291</styled.Text>
                    <styled.Text>info@poochapp.com</styled.Text>
                    <styled.Name>Pooch Marketplace</styled.Name>
                    <styled.LogoWrapper>
                        <styled.AppLogo src={APPLESTORE} alt="apple-store" onClick={goApple} />
                        <styled.AppLogo src={GOOGLEPLAY} alt="google-play" onClick={goGoogle} />
                    </styled.LogoWrapper>
                </styled.LogoContainer>
                <styled.ListContainer>
                    <styled.Property>FEATURES</styled.Property>
                    <styled.Linear />
                    <ul>
                        <li>Cloud-based platform for managing your pet service business from anywhere</li>
                        <li>Online booking system for easy appointment scheduling</li>
                        <li>Customizable service offerings and pricing</li>
                        <li>Secure online payment processing</li>
                        <li>Online parketplace to reach a wider audience</li>
                        <li>Detailed dashboard for simplified business operations</li>
                        <li>Customer database management</li>
                        <li>Calendar sync for wasy appointment tracking</li>
                        <li>Real-time reporting and analytics for business insights</li>
                        <li>24/7 customer support</li>
                    </ul>
                </styled.ListContainer>
                <styled.ListContainer>
                    <styled.Property>PET SERVICE BUSINESSES</styled.Property>
                    <styled.Linear />
                    <ul>
                        <li>Pet grooming, mobile groomers bathing services</li>
                        <li>Veterinarian clinics and animal hospitals</li>
                        <li>Dog walking and pet sitting services</li>
                        <li>Dog boarding and daycare facilities</li>
                        <li>Pet-friendly hotels and accommodations</li>
                        <li>Pet adoption and rescue services</li>
                        <li>Pet transportation services</li>
                        <li>Pet photographers and videographers</li>
                        <li>Pet waste removal and cleanup services</li>
                        <li>Pet trainers and behaviorists</li>
                        <li>Pet hospice and end-of-life care providers</li>
                        <li>Pet-friendly event planning and coordination</li>
                        <li>More...</li>
                    </ul>
                </styled.ListContainer>
                <styled.ListContainer>
                    <styled.Property>STAY CONNECTED</styled.Property>
                    <styled.Linear />
                    <styled.SubsribeContainer>
                        <label>Ge access to content that will help you run your pet-care business.</label>
                        <styled.Subscribe>
                            <styled.SubscribeInput
                                placeholder='Email Address'
                                onChange={(e) => { setEmail(e.target.value) }}
                                value={email}
                            />
                            <styled.SubscribeButton onClick={goSubscribe}>Subscribe</styled.SubscribeButton>
                        </styled.Subscribe>
                    </styled.SubsribeContainer>
                </styled.ListContainer>
            </styled.MainContainer>
            <styled.Footer>
                <styled.PrivacyContainer>
                    <a
                        href="https://app.termly.io/document/privacy-policy/c20e24ba-36fe-40cc-879e-6c1a3143a5dc"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Licensing
                    </a>
                    |
                    <a
                        href="https://app.termly.io/document/privacy-policy/c20e24ba-36fe-40cc-879e-6c1a3143a5dc"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Privacy Policy
                    </a>
                </styled.PrivacyContainer>
                <styled.Label>© 2022 POOCH TECHNOLOGIES INC © POOCHFOLIO LLC</styled.Label>
                <styled.SocialContainer>
                    <a
                        href="https://www.linkedin.com/company/poochfolio/?viewAsMember=true"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiFillLinkedin color='white' />
                    </a>
                </styled.SocialContainer>
            </styled.Footer>
        </styled.Container>
    )

}