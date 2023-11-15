import React from 'react'
import './SkillListItem.css'

export default function SkillListItem({skill}) {
  return (
    <li className="SkillListItem"
    >
    <div></div>
    <span>{skill.name}</span>
    <span className="level">{skill.level}</span>
    </li>
  )
}
