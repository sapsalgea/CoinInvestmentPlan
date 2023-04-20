import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function SeoHelmet(props) {
    const nowLocation = useLocation();

    return (
        <div>
            <Helmet>
                <title>{props.title}</title>

                <meta name="description" content={props.description} />
                <meta name="keywords" content={props.keywords} />

                <meta property="og:type" content="website" />
                <meta property="og:title" content={props.title} />
                <meta property="og:site_name" content={props.title} />
                <meta property="og:description" content={props.description} />
                <meta property="og:image" content={props.imgsrc} />
                <meta property="og:url" content={`${process.env.PUBLIC_URL}${nowLocation.pathname}`} />

                <meta name="twitter:title" content={props.title} />
                <meta name="twitter:description" content={props.description} />
                <meta name="twitter:image" content={props.imgsrc} />

                <link rel="canonical" href={`${process.env.PUBLIC_URL}${nowLocation.pathname}`} />
                
            </Helmet>
        </div>
    );
}

