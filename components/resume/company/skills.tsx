import React, { FC } from 'react'

interface SkillsProps {
    skills: string[];
}

const Skills: FC<SkillsProps> = ({ skills }) => {
    return <div>
        <span>{skills.map(skill => {
            return <span key={skill}> {skill} | </span>
        })}
        </span>
    </div>

}

export default Skills