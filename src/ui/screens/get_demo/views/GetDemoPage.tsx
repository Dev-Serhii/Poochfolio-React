import React, { useEffect, useState } from 'react';
import * as styled from './GetDemoPage.styled';
import { Checkbox } from '../../@core/Checkbox';
import { petCounts } from './GetDemoPage.config';
import { COLOR } from '../../../../assets/colors';
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from 'react-redux';
import { validateEmail } from '../../../../utils/emailValidate';
import { toast } from 'react-toastify';
import { scheduleDemo } from '../../../api/server/auth';
import { maskPhoneNumber } from '../../../../utils/phoneMask';
import { validatePhone } from '../../../../utils/phoneValidate';

type Props = {};

export const GetDemoPage: React.FC<Props> = () => {
    const loading = useSelector((state: any) => state.auth.loading);
    const dispatch = useDispatch();

    const [boarding, setBoarding] = useState(false);
    const [walking, setWalking] = useState(false);
    const [daycare, setDaycare] = useState(false);
    const [park, setPark] = useState(false);
    const [grooming, setGrooming] = useState(false);
    const [vet, setVet] = useState(false);
    const [mgrooming, setMGrooming] = useState(false);
    const [other, setOther] = useState(false);
    const [training, setTraining] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [complete, setComplete] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLasName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyWebsite, setCompanyWebsite] = useState('');


    const [petCountValue, setPetCountValue] = useState(petCounts[0].value);
    const [petCountLabel, setPetCountLabel] = useState(petCounts[0].label);

    useEffect(() => {
        if (complete) {
            let doc: any = document;
            doc.querySelector('#root').scrollTop = 0;
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    }, [complete]);

    const onSelectPetCount = (option: any) => {
        if(loading) return
        setPetCountValue(option.value);
        setPetCountLabel(option.label);
    };

    const goSchedule = () => {
        if (loading) return

        if (!firstName || !lastName || !companyName || !phone || !email) {
            toast('Please input all required fields', { type: 'error' });
            return
        }

        if (!validatePhone(phone)) {
            toast('Phone number is not valid!', { type: 'error' });
            return
        }

        if (!boarding && !walking && !daycare && !park && !grooming && !vet && !mgrooming && !other && !training) {
            toast('Please choose at least one service!', { type: 'error' });
            return
        }

        if (!confirm) {
            toast('Please confirm your consent!', { type: 'error' });
            return
        }

        var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

        let services: string[] = [];

        if(boarding) {
            services.push("Boarding")
        }
        if(walking) {
            services.push("Walking")
        }
        if(daycare) {
            services.push("Daycare")
        }
        if(park) {
            services.push("Park/Cafe")
        }
        if(grooming) {
            services.push("Grooming")
        }
        if(vet) {
            services.push("Vet & Clinic")
        }
        if(mgrooming) {
            services.push("Mobile Grooming")
        }
        if(other) {
            services.push("Other")
        }
        if(training) {
            services.push("Traning")
        }


        if (validateEmail(email)) {
            scheduleDemo(dispatch, {
                firstName,
                lastName,
                email,
                phoneNumber: phone.replace(phoneRegex, '$1$2$3'),
                companyName,
                companyWebsite,
                numberOfPetsPerDay: petCountValue,
                services: services,
                marketingCommunicationConsent: true
            }).then((res) => {
                setComplete(true)
            }).catch((err) => {
                toast(err, { type: 'error' })
            })
        } else {
            toast("Email is not valid!", { type: 'error' })
        }
    }

    return (
        <styled.Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Get Demo | Poochfolio</title>
                <link rel="canonical" href={process.env.PUBLIC_URL + "/demo"} />
                <meta name="description" content="Request a free demo today" />
                <meta name="twitter:site" content="@poochfolio" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                name="twitter:title"
                content="Get Demo | Poochfolio"
                />
                <meta
                name="twitter:description"
                content="Request a free demo today"
                />
                <meta property="og:site_name" content="Poochfolio" />
                <meta property="og:type" content="object" />
                <meta
                property="og:title"
                content="Get Demo | Poochfolio"
                />
                <meta property="og:url" content={process.env.PUBLIC_URL + "/demo"} />
                <meta
                property="og:description"
                content="Request a free demo today"
                />
            </Helmet>
            {complete ? (
                <>
                    <styled.FormTitle>Confirmation</styled.FormTitle>
                    <styled.Description style={{ color: COLOR.gray2 }}>Thank you for requesting a demo of Poochfolio! Our platform is designed to help pet service businesses like yours increase bookings, grow revenue, and work more efficiently.</styled.Description>
                    <styled.SubDescription>
                        Here's what you can expect from a personalized demo with our team:
                        <br />
                        <br />
                        <span>
                            · An overview of Poochfolio's features and capabilities
                        </span>
                        <br />
                        <span>
                            · A customized walkthrough based on your business needs
                        </span>
                        <br />
                        <span>
                            · A chance to ask questions and provide feedback
                        </span>
                        <br />
                        <br />
                        We can't wait to show you how Poochfolio can transform your pet service business.
                        <br />
                        <br />
                        Our team will be in thouch with you shortly to schedule a demo at a time that works for you.
                    </styled.SubDescription>
                </>
            ) : (
                <>
                    <styled.Title>Revolutionize your pet service business with Poochfolio</styled.Title>
                    <styled.Description>Manage your appointments, clients and finances all in one place, from anywhere</styled.Description>
                    <styled.FormTitle>Schedule a Free Demo</styled.FormTitle>
                    <styled.Form>
                        <styled.Row>
                            <styled.InputWrapper>
                                <styled.Label>First Name*</styled.Label>
                                <styled.Input
                                    placeholder='First Name'
                                    type={'text'}
                                    value={firstName}
                                    onChange={(e) => {
                                        if(loading) return
                                        setFirstName(e.target.value)
                                    }}
                                />
                            </styled.InputWrapper>
                            <styled.InputWrapper>
                                <styled.Label>Last Name*</styled.Label>
                                <styled.Input
                                    placeholder='Last Name'
                                    type={'text'}
                                    value={lastName}
                                    onChange={(e) => {
                                        if(loading) return
                                        setLasName(e.target.value)
                                    }}
                                />
                            </styled.InputWrapper>
                        </styled.Row>
                        <styled.Row>
                            <styled.InputWrapper>
                                <styled.Label>Email Address*</styled.Label>
                                <styled.Input
                                    placeholder='Email Address'
                                    type={'text'}
                                    value={email}
                                    autoComplete="email"
                                    onChange={(e) => {
                                        if(loading) return
                                        setEmail(e.target.value)
                                    }}
                                />
                            </styled.InputWrapper>
                            <styled.InputWrapper>
                                <styled.Label>Phone Number*</styled.Label>
                                <styled.Input
                                    placeholder='123-456-7890'
                                    value={phone}
                                    type={'text'}
                                    onChange={(e) => {
                                        if(loading) return
                                        setPhone(maskPhoneNumber(e.target.value))
                                    }}
                                />
                            </styled.InputWrapper>
                        </styled.Row>
                        <styled.Row>
                            <styled.InputWrapper>
                                <styled.Label>Company Name*</styled.Label>
                                <styled.Input
                                    placeholder='Company Name'
                                    type={'text'}
                                    value={companyName}
                                    onChange={(e) => {
                                        if(loading) return
                                        setCompanyName(e.target.value)
                                    }}
                                />
                            </styled.InputWrapper>
                            <styled.InputWrapper>
                                <styled.Label>Company Website</styled.Label>
                                <styled.Input
                                    placeholder='Company Website'
                                    type={'text'}
                                    value={companyWebsite}
                                    onChange={(e) => {
                                        if(loading) return
                                        setCompanyWebsite(e.target.value)
                                    }}
                                />
                            </styled.InputWrapper>
                        </styled.Row>
                        <styled.Row>
                            <styled.InputWrapper>
                                <styled.Label>How many pets does your business see a day?*</styled.Label>
                                <styled.Drop
                                    options={petCounts}
                                    onChange={onSelectPetCount}
                                    value={petCountLabel}
                                    placeholder="Select an option"
                                    arrowClassName='arrow'
                                />
                            </styled.InputWrapper>
                            <styled.InputWrapper>
                                <styled.Label>What types of the services do you offer?*</styled.Label>
                                <styled.ServiceList>
                                    <styled.ServiceRow>
                                        <Checkbox
                                            id='boarding'
                                            label='Boarding'
                                            onChange={() => {
                                                if(loading) return
                                                setBoarding(prev => !prev)
                                            }}
                                            checked={boarding}
                                        />
                                        <Checkbox
                                            id='walking'
                                            label='Walking'
                                            onChange={() => {
                                                if(loading) return
                                                setWalking(prev => !prev)
                                            }}
                                            checked={walking}
                                        />
                                    </styled.ServiceRow>
                                    <styled.ServiceRow>
                                        <Checkbox
                                            id='daycare'
                                            label='Daycare'
                                            onChange={() => {
                                                if(loading) return
                                                setDaycare(prev => !prev)
                                            }}
                                            checked={daycare}
                                        />
                                        <Checkbox
                                            id='park'
                                            label='Park/Cafe'
                                            onChange={() => {
                                                if(loading) return
                                                setPark(prev => !prev)
                                            }}
                                            checked={park}
                                        />
                                    </styled.ServiceRow>
                                    <styled.ServiceRow>
                                        <Checkbox
                                            id='grooming'
                                            label='Grooming'
                                            onChange={() => {
                                                if(loading) return
                                                setGrooming(prev => !prev)
                                            }}
                                            checked={grooming}
                                        />
                                        <Checkbox
                                            id='vet'
                                            label='Vet & Clinic'
                                            onChange={() => {
                                                if(loading) return
                                                setVet(prev => !prev)
                                            }}
                                            checked={vet}
                                        />
                                    </styled.ServiceRow>
                                    <styled.ServiceRow>
                                        <Checkbox
                                            id='mgrooming'
                                            label='Mobile Grooming'
                                            onChange={() => {
                                                if(loading) return
                                                setMGrooming(prev => !prev)
                                            }}
                                            checked={mgrooming}
                                        />
                                        <Checkbox
                                            id='other'
                                            label='Other'
                                            onChange={() => {
                                                if(loading) return
                                                setOther(prev => !prev)
                                            }}
                                            checked={other}
                                        />
                                    </styled.ServiceRow>
                                    <styled.ServiceRow>
                                        <Checkbox
                                            id='traning'
                                            label='Training'
                                            onChange={() => {
                                                if(loading) return
                                                setTraining(prev => !prev)
                                            }}
                                            checked={training}
                                        />
                                    </styled.ServiceRow>
                                </styled.ServiceList>
                            </styled.InputWrapper>
                        </styled.Row>
                        <styled.Row style={{ marginTop: 20 }}>
                            <Checkbox
                                id='confirm'
                                label='Please check this box to confirm your consent to receive marketing communications from PoochFolio.*'
                                onChange={() => {
                                    if(loading) return
                                    setConfirm(prev => !prev)
                                }}
                                checked={confirm}
                            />
                        </styled.Row>
                        <styled.Button onClick={goSchedule}>Submit</styled.Button>
                    </styled.Form>
                </>
            )}

        </styled.Container >
    )
}