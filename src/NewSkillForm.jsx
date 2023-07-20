import { useState } from "react";
import "./NewSkillForm.css"

export default function NewSkillForm({addSkill}) {
    const [skill, setSkill] = useState({
        //intialized state
        name: '',
        level: 3
    })

    const [errorMsg, setErrorMsg] = useState('')

    function handleChange(evt){
        console.log(evt.target.value);

        setSkill({
            ...skill,
            [evt.target.name]: evt.target.value
        })
    }

    function handleSubmit(evt){
        evt.preventDefault();

        if(skill.name === ''){

            return errorMsg('Please fill out all input fields!')

        }

        //if the 'if' statement's condition isn't met, the code below will run, otherwise we will get an error msg for the input field being blank
        addSkill(skill);

        //reset error message if fields are populated
        setErrorMsg('');

        //reset form to values from initialized state
        setSkill({
            name: '',
            level: 3
        })
    }

    return(
        <>
        <span>{errorMsg ? errorMsg : ''}</span>
        
        <form className="NewSkillForm" onSubmit={handleSubmit}>

            <label>Skills</label>
            <input type="text" 
            value={skill.name}
            onChange={handleChange}
            name="name"
            />
            
            <label>Level</label>
            <select value={skill.level} onChange={handleChange} name="level">

                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>

            </select>
                    
            <button>ADD SKILL</button> 
        </form>
        </>
    );

}