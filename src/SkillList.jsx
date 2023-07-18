import SkillListItem from "./SkillListItem";
import "./SkillListItem.css"

export default function SkillList({ skills }) {
    return (
        <ul className="SkillList">

            {skills.map((sk, idx) => 
            (<SkillListItem skill={sk} key={idx} />))}
         
        </ul>
    );
}