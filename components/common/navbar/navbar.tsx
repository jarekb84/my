
import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
    {
        href: '/',
        title: 'Home',
    },
    {
        href: 'https://github.com/jarekb84/my',
        title: 'GitHub',
        target: '_blank',
        rel: 'noreferrer',
    },
    {
        href: '/resume',
        title: 'Resume',
    },
];

const Navbar: FC = () => {
    const { asPath } = useRouter();

    return (
        <nav className="navbar status">
            {links.map(({ href, title, target, rel }) => {
                return (
                    <Link
                        href={href}
                        key={href}
                        className={`navbar__link ${asPath === href ? 'navbar__link--active' : ''}`}
                        target={target}
                        rel={rel}>

                        {title}

                    </Link>
                );
            })}
        </nav>
    );
};

export default Navbar;