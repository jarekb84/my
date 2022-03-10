
import React, { FC } from 'react';
import Link from 'next/link';

const Navbar: FC = () => {
    return <>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/resume">
            <a>Resume</a>
        </Link>
    </>;
};

export default Navbar;