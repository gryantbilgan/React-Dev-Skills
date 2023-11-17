import './App.css'
import SkillList from './SkillList'
import NewSkillForm from './NewSkillForm';
import { useState } from 'react';

const initialSkills = [
  {name: "HTML", level: 3},
  {name: "JS", level: 4},
  {name: "CSS", level: 3},
  {name: "PYTHON", level: 4},
];


export default function App() {
  const [skills, setSkills] = useState(initialSkills)
  const [showSkills, setShowSkills] = useState(true)

  function addSkill(skill) {
    setSkills([...skills, skill])
  }

  return (
    <div className="App">
      <h1 className="teal-text">React Dev Skills</h1>
      <button onClick={() => setShowSkills(!showSkills)}>{showSkills ? "HIDE" : "SHOW"}</button>
      {showSkills && <SkillList skills={skills}/>}
      <hr style={{width: "50vw"}} />
      <NewSkillForm addSkill={addSkill}/>
    </div>
  )
}

