import React, { FC } from 'react';

interface SkillsProps {
    skills: string[];
}

const Skills: FC<SkillsProps> = ({ skills }) => {
    return <div className="resume__skills">
        {skills.map(skill => {
            return <span key={skill} className="resume__skills__item">{skill}</span>;
        })}
    </div>;
};

export default Skills;