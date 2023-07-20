import SkillListItem from "./SkillListItem";
import "./SkillListItem.css"

export default function SkillList({ skills }) {

    
    return (
        <ul className="SkillList">
            {skills.map((skill, idx) => (
            <SkillListItem skill={skill} key={idx} />
            ))}
            
        </ul>
    )
}