import React, { FC } from 'react';
import Head from 'next/head';
import Navbar from './navbar/navbar';

interface LayoutProps {
    pageTitle: string;
}

const Layout: FC<LayoutProps> = ({ children, pageTitle }) => {
    const title = `Jerry's ${pageTitle}`;

    return <>
        <Head>
            <title>{title}</title>
            <meta name="description" content="All about Jerry" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main>{children}</main>
    </>;
};

export default Layout;