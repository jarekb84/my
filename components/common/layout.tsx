import React, { FC } from 'react';
import Head from 'next/head';
import Navbar from './navbar/navbar';

const Layout: FC = ({ children }) => {
    return <>
        <Head>            <title>JBX</title>            <meta name="description" content="All about Jerry" />            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main>


            {children}</main>
    </>;
};

export default Layout;