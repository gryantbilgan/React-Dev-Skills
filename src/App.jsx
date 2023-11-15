import './App.css'
import SkillList from './SkillList'
import NewSkillForm from './NewSkillForm';

const skills = [
  {name: "HTML", level: 3},
  {name: "JS", level: 4},
  {name: "CSS", level: 3},
  {name: "PYTHON", level: 4},
];


export default function App() {

  return (
    <div className="App">
      <h1 className="teal-text">React Dev Skills</h1>
      <SkillList skills={skills}/>
      <hr style={{width: "50vw"}} />
      <NewSkillForm />
    </div>
  )
}

