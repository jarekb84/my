import React from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/common/layout';

function MyApp({ Component, pageProps }: AppProps) {
    return <Layout pageName={Component.name}>
        <Component {...pageProps} />
    </Layout>;
}

export default MyApp;