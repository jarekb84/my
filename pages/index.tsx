/* eslint max-len: 0 */
import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/common/layout';

const Home: NextPage = () => {
    return <Layout pageTitle="Home">
        <div className="home">
            <h1>Home</h1>
            <p className="home__intro">
                Welcome to my resume GitHub pages site.
                This is a SPA built with React, TypeScript, and SASS on top of Next.JS.
            </p>
            <p className="home__journey">
                Beyond showcasing my work, this site also reflects my journey as a software engineer  and my excitement for the evolving landscape of technology, including the transformative potential of AI in development.
            </p>
            <p className="home__closing-statement">
                I'm looking for opportunities where I can combine my hands on coding expertise with these forward looking interests to make a significant impact.
            </p>
            <section className="home__section">
                <h2>Motivations for This Site</h2>
                <ul>
                    <li>
                        Demonstrate how I tackle projects and write applications. (View the
                        {' '}
                        <a href="https://github.com/jarekb84/my" target="_blank" rel="noreferrer">site repository on GitHub</a>
)
                    </li>
                    <li>Store my resume in Git to retain historical changes.</li>
                    <li>Achieve more consistent styling for the resume layout compared to manual tweaks in Google Docs.</li>
                    <li>
                        Utilize the
                        {' '}
                        <a href="https://jsonresume.org" target="_blank" rel="noreferrer">JSON Resume</a>
                        {' '}
standard to structure my resume data.
                    </li>
                    <li>Ensure the resume is easily viewable on any device and printable.</li>
                    <li>Articulate my approach to software development, emphasizing clean code, modern practices, and a proactive, problem solving mindset.</li>
                    <li>Share my enthusiasm for hands on implementation and building robust, effective solutions.</li>
                    <li>Provide a space to explore and discuss emerging technologies, particularly how AI tools can enhance engineering productivity and innovation.</li>
                </ul>
            </section>
            <section className="home__section">
                <h2>What I'm Focused On</h2>
                <p>
                    While this site showcases my foundational skills and past projects, my current focus is on evolving with the tech landscape. I'm keenly interested in:
                </p>
                <ul>
                    <li>
                        <strong>Leveraging AI in Engineering:</strong>
                        {' '}
                        {' '}
                        Exploring how AI Models like ChatGPT/Gemini/Claude can be used in tools like Copilot, RooCode, and other AI-driven assistants to augment the development process, from ideation and coding to testing and deployment.  I'm eager to contribute to teams that embrace these technologies to  build better software, faster.
                    </li>
                    <li>
                        <strong>Platform Engineering & Developer Tools:</strong>
                        {' '}
                        {' '}
                        My passion for efficient and effective development naturally  leads to an interest in platform teams and building tools that empower fellow engineers.
                    </li>
                    <li>
                        <strong>Modern Development Practices:</strong>
                        {' '}
                        {' '}
                        Continuously refining my approach to align with best practices in clean code, robust architecture, and agile methodologies, drawing from a foundation of proactive problem solving and a love for hands-on implementation.
                    </li>
                </ul>
            </section>
            <section className="home__section">
                <h2>AI in My Workflow</h2>
                <p>I actively integrate various AI models and tools to enhance my development process, including:</p>
                <h3>Models & Tools:</h3>
                <ul>
                    <li>ChatGPT</li>
                    <li>Gemini</li>
                    <li>Claude</li>
                    <li>GitHub Copilot</li>
                    <li>Roo Code</li>
                </ul>
                <h3>Key Use Cases:</h3>
                <ul>
                    <li>Using AI to organize and structure voice notes to provide clarity/insight into my own thinking.</li>
                    <li>Streamlining the creation and refinement of Jira stories and development tasks.</li>
                    <li>Generating code suggestions and accelerating boilerplate development.</li>
                    <li>Assisting in AI-powered Pull Request reviews, leveraging team-defined coding standards.</li>
                    <li>Serving as an architectural "pairing partner" for exploring design patterns and solutions.</li>
                    <li>Clarifying technical and non-technical communications for diverse audiences.</li>
                </ul>
            </section>
        </div>
    </Layout>;
};

export default Home;