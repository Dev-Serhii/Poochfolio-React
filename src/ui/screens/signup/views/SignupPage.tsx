import React, { useEffect } from 'react';
import * as styled from './SignupPage.styled';
import KEY from '../../../../assets/images/key1.svg';
import DOCUMENT from '../../../../assets/images/document.svg';
import DOCUMENT_ACTIVE from '../../../../assets/images/document-active.svg';
import USER from '../../../../assets/images/user.svg';
import USER_ACTIVE from '../../../../assets/images/user-active.svg';
import AVAILABILITY from '../../../../assets/images/availability.svg';
import AVAILABILITY_ACTIVE from '../../../../assets/images/availability-active.svg';
import { Sign } from './Sign/Sign';
import { CreateProfile } from './CreateProfile';
import { InputListing } from './InputListing';
import { Availability } from './Availability';
import { useSelector } from 'react-redux';
import { Spinner } from '../../@core/Spinner';
import { useLocation } from 'react-router-dom';
import { Waitlist } from './Waitlist';
import { Helmet } from "react-helmet";

type Props = {};

export const SignupPage: React.FC<Props> = () => {
    const currentStep = useSelector((state: any) => state.auth.currentStep);
    const loading = useSelector((state: any) => state.auth.loading);
    const { pathname } = useLocation();

    useEffect(() => {
        let doc: any = document;
        doc.querySelector('.main_component').scrollTop = 0;
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [currentStep, pathname]);

    return (
        <styled.Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>List your business today | Poochfolio</title>
                <link rel="canonical" href={process.env.PUBLIC_URL + "/signup"} />
                <meta name="description" content="Get discovered by pet owners in your area and take your business to the next level with Poochfolio" />
                <meta
                name="twitter:title"
                content="List your business today | Poochfolio"
                />
                <meta
                name="twitter:description"
                content="Get discovered by pet owners in your area and take your business to the next level with Poochfolio"
                />
                <meta property="og:site_name" content="Poochfolio" />
                <meta property="og:type" content="object" />
                <meta
                property="og:title"
                content="List your business today | Poochfolio"
                />
                <meta property="og:url" content={process.env.PUBLIC_URL + "/signup"} />
                <meta
                property="og:description"
                content="Get discovered by pet owners in your area and take your business to the next level with Poochfolio"
                />
            </Helmet>
            <Spinner visible={loading} />
            {currentStep !== 5 && (
                <styled.Header>
                    <styled.Stepper>
                        <styled.Step1>
                            <styled.Icon active={currentStep >= 0}>
                                <img src={KEY} alt="key" />
                            </styled.Icon>
                            <styled.Text>Sign Up</styled.Text>
                        </styled.Step1>
                        <styled.Step2 active={currentStep >= 1}>
                            <styled.Icon active={currentStep >= 1}>
                                <img src={currentStep >= 1 ? USER_ACTIVE : USER} alt="user" />
                            </styled.Icon>
                            <styled.Text>Create Profile</styled.Text>
                        </styled.Step2>
                        <styled.Step3 active={currentStep >= 2}>
                            <styled.Icon active={currentStep >= 2}>
                                <img src={currentStep >= 2 ? DOCUMENT_ACTIVE : DOCUMENT} alt="document" />
                            </styled.Icon>
                            <styled.Text>Input Listing</styled.Text>
                        </styled.Step3>
                        <styled.Step4 active={currentStep >= 3}>
                            <styled.Icon active={currentStep >= 3}>
                                <img src={currentStep >= 3 ? AVAILABILITY_ACTIVE : AVAILABILITY} alt="availability" />
                            </styled.Icon>
                            <styled.Text>Availability</styled.Text>
                        </styled.Step4>
                    </styled.Stepper>
                </styled.Header>
            )}
            <styled.Body waitlist={currentStep === 5}>
                {currentStep === 0 && (
                    <styled.Motion
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        transition={{
                            type: "tween",
                            duration: 0.3
                        }}
                    >
                        <Sign />
                    </styled.Motion>)}
                {currentStep === 1 && (
                    <styled.Motion
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        transition={{
                            type: "tween",
                            duration: 0.3
                        }}
                    >
                        <CreateProfile />
                    </styled.Motion>
                )}
                {currentStep === 2 && (
                    <styled.Motion
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        transition={{
                            type: "tween",
                            duration: 0.3
                        }}
                    >
                        <InputListing />
                    </styled.Motion>)}
                {currentStep === 3 && (
                    <styled.Motion
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        transition={{
                            type: "tween",
                            duration: 0.3
                        }}
                    >
                        <Availability />
                    </styled.Motion>)}
                {currentStep === 5 && (
                    <styled.Motion
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        transition={{
                            type: "tween",
                            duration: 0.3
                        }}
                    >
                        <Waitlist />
                    </styled.Motion>)}
            </styled.Body>
        </styled.Container>
    )
}

