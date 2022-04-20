
import React, { FC } from 'react';
import Link from 'next/link';

const Navbar: FC = () => {
    return <nav className="navbar">
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/resume">
            <a>Resume</a>
        </Link>
    </ nav>;
};

export default Navbar;