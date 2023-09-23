import React from 'react';
import { HowItWork } from './HowItWork';
import * as styled from './LandingPage.styled';
import { Main } from './Main';
import { Management } from './Management';
import { Booking } from './Booking';
import { PoweredBy } from './PoweredBy';
import { Helmet } from "react-helmet";

type Props = {};

export const LandingPage: React.FC<Props> = () => {
    return (
        <styled.Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>PoochFolio - Boost Bookings and Revenue!</title>
                <link rel="canonical" href={process.env.PUBLIC_URL} />
                <meta name="description" content="The Cloud-based Solution for Your Pet Service Business. Manage Bookings, Payments, and reach a Wider Audience with Customizable Offerings, Secure online Payments, and Real-Time Analytics. Stay Organized with a customized Detailed Dashboard, Customer Database Management, and Canlendar Sync. Get 24/7 Customer Support for Hassle-Free Operations" />
                <meta name="twitter:site" content="@poochfolio" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="PoochFolio - Boost Bookings and Revenue!"
                />
                <meta
                    name="twitter:description"
                    content="The Cloud-based Solution for Your Pet Service Business. Manage Bookings, Payments, and reach a Wider Audience with Customizable Offerings, Secure online Payments, and Real-Time Analytics. Stay Organized with a customized Detailed Dashboard, Customer Database Management, and Canlendar Sync. Get 24/7 Customer Support for Hassle-Free Operations"
                />
                <meta property="og:site_name" content="Poochfolio" />
                <meta property="og:type" content="object" />
                <meta
                    property="og:title"
                    content="PoochFolio - Boost Bookings and Revenue!"
                />
                <meta property="og:url" content={process.env.PUBLIC_URL} />
                <meta
                    property="og:description"
                    content="The Cloud-based Solution for Your Pet Service Business. Manage Bookings, Payments, and reach a Wider Audience with Customizable Offerings, Secure online Payments, and Real-Time Analytics. Stay Organized with a customized Detailed Dashboard, Customer Database Management, and Canlendar Sync. Get 24/7 Customer Support for Hassle-Free Operations"
                />
            </Helmet>
            <Main />
            <Booking />
            <Management />
            <HowItWork />
            <PoweredBy />
        </styled.Container>
    )
}