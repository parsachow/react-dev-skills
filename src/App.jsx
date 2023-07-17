import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Dev Skills</h1>
      <SkillList />
      <hr></hr>
      <NewSkillForm />
    </>
  )
}


