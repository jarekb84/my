import React, { FC } from 'react';
import Head from 'next/head';
import Navbar from './navbar/navbar';

interface LayoutProps {
    pageName: string;
}

const Layout: FC<LayoutProps> = ({ children, pageName }) => {
    const title = `Jerry's ${pageName}`;

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