import Head from 'next/head';
import React from 'react';

const Meta = ({title,keywords,description}) => {
    return (
        <Head>
            
        <title>{title}</title>
        <meta name="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>

  
        </Head>
    );
};

Meta.defaultProps = {
    title: "Kakon Ray",
    keywords:"bangladesh,it,computer",
    description:"Hello My Name Is kakon ray"
}

export default Meta;