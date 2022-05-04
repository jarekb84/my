import React from 'react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <div className="home">
            <h1>Home</h1>
            <p className="home__intro">
                Welcome to my resume GitHub pages site.
                This is a SPA built with React, TypeScript, and SASS on top of Next.JS.
            </p>
            <div className="home__content">
                <p>There were multiple motivations behind building this site:</p>
                <ul >
                    <li>Demonstrate how I tackle projects and write applications</li>
                    <ul>
                        <li>
                        Checkout the GitHub
                            {' '}
                            <a href="https://github.com/jarekb84/my=" target="_blank" rel="noreferrer">repository</a>
                            {' '}
                        for this site
                        </li>
                    </ul>
                    <li>Store my resume in Git to retain historical changes</li>
                    <li>More consistent styling for the resume layout versus lots of manual tweaks in Google Docs</li>
                    <li>
                    Utilize the
                        {' '}
                        <a href="https://jsonresume.org" target="_blank" rel="noreferrer">JSON Resume</a>
                        {' '}
                    to structure my resume data
                    </li>
                </ul>
            </div>


        </div>
    );
};

export default Home;