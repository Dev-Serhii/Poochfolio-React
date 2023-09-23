import React from 'react';
import * as styled from './FAQPage.styled';
import { FAQs } from './FAQPage.config';
import { Helmet } from "react-helmet";

type Props = {};

export const FAQPage: React.FC<Props> = () => {
    return (
        <styled.Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>FAQ | Poochfolio</title>
                <link rel="canonical" href={process.env.PUBLIC_URL + "/faq"} />
                <meta name="description" content="Get answers to your questions about Poochfolio and how it can benefit your business" />
                <meta name="twitter:site" content="@poochfolio" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                name="twitter:title"
                content="FAQ | Poochfolio"
                />
                <meta
                name="twitter:description"
                content="Get answers to your questions about Poochfolio and how it can benefit your business"
                />
                <meta property="og:site_name" content="Poochfolio" />
                <meta property="og:type" content="object" />
                <meta
                property="og:title"
                content="FAQ | Poochfolio"
                />
                <meta property="og:url" content={process.env.PUBLIC_URL + "/faq"} />
                <meta
                property="og:description"
                content="Get answers to your questions about Poochfolio and how it can benefit your business"
                />
            </Helmet>
            <styled.Title>Common Questions</styled.Title>
            <styled.List>
                {FAQs.map((faq, i) => {
                    return (
                        <styled.Item key={i}>
                            <styled.Question>{faq.question}</styled.Question>
                            <styled.Answer>{faq.answer}</styled.Answer>
                        </styled.Item>
                    )
                })}
            </styled.List>
        </styled.Container>
    )
}