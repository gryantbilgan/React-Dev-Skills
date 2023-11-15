import React from 'react'
import SkillListItem from './SkillListItem';
// Import SkillListItem component


export default function SkillList({skills}) {
    const skillListItems = skills.map((skill, idx) => <SkillListItem skill={ skill } index={ idx } key={ idx }/>)
  return (
    <ul>
        {skillListItems}
    </ul>
  )
}
