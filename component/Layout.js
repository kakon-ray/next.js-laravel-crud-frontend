import React from 'react';
import FooterMenue from './FooterMenue';
import HeaderMenue from './HeaderMenue';

const Layout = ({children}) => {
    return (
        <>
            <HeaderMenue/>
             {children}
            <FooterMenue/>
        </>
    );
};

export default Layout;