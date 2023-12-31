import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';
import { useState } from "react";
import './App.css'





export default function App() {
  
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);

  function addSkill(skillFromtheForm){
    setSkills([
      ...skills,
      skillFromtheForm
    ])
  }



  return (
    <>

      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <hr></hr>
      <NewSkillForm addSkill={addSkill}/>
    </>
  )

  
}


