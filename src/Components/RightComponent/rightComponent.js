import { useState } from "react";
import "../RightComponent/rightComponent.scss";
import { useDrop, useDrag } from "react-dnd";
import { CoreSkills, CreativeSkills, SpecialSkills } from "../constant";

function RightComponent() {
  const [schoolSkills, setSchoolSkills] = useState([]);
  const [homeSkills, setHomeSkills] = useState([]);

  const addSkill = (data, place) => {
    console.log(data, "dropdata");
    const newData = [
      ...CoreSkills,
      ...CreativeSkills,
      ...SpecialSkills,
    ]?.filter((e) => e.id === data);
    
    if (place === "home") {
      setHomeSkills((prev) => [...prev, ...newData]);
      setSchoolSkills(schoolSkills?.filter((e)=>e.id!==data))
    } else if (place === "school") {
      setSchoolSkills((prev) => [...prev, ...newData]);
      setHomeSkills(homeSkills?.filter((e)=>e.id!==data))
    }
  };

  const removeSkill = (id, place) => {
    if (place === "home") {
      setHomeSkills(homeSkills?.filter((e) => e.id !== id));
    } else if (place === "school") {
      setSchoolSkills(schoolSkills?.filter((e) => e.id !== id));
    }
  };
  const SkillDrop = ({ skill, place }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: "skill",
      item: { id: skill.id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));
    return (
      <div ref={drag}
        className={`skill ${
          CoreSkills?.filter((e) => e.id === skill.id)?.length > 0
            ? "core"
            : SpecialSkills?.filter((e) => e.id === skill.id)?.length > 0
            ? "special"
            : CreativeSkills?.filter((e) => e.id === skill.id)?.length > 0
            ? "creative"
            : ""
        }`}
      >
        {skill?.name}
        <span
          className="close-icon"
          onClick={() => removeSkill(skill?.id, place)}
        >
          x
        </span>
      </div>
    );
  };
  const SchoolSkills = () => {
    const [{ isOver }, drop] = useDrop(() => ({
      accept: "skill",
      drop: (item) => addSkill(item.id, "school"),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));
    return (
      <div className="skill-container" ref={drop}>
        School Priority
        <div className="skill-sub-container">
          {schoolSkills?.map((e) => (
            <SkillDrop skill={e} place={"school"} />
          ))}
        </div>
      </div>
    );
  };
  const HomeSkills = () => {
    const [{ isOver }, drop] = useDrop(() => ({
      accept: "skill",
      drop: (item) => addSkill(item.id, "home"),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));
    return (
      <div className="skill-container" ref={drop}>
        Home Priority
        <div className="skill-sub-container">
          {homeSkills?.map((e) => (
            <SkillDrop skill={e} place={"home"} />
          ))}
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="right-component-heading">Set Skills Priority</div>
      <div className="component-body-container">
        <div className="right-component-body-container-level">
          <SchoolSkills />
        </div>
        <div className="right-component-body-container-level">
          <HomeSkills />
        </div>
      </div>
    </>
  );
}

export default RightComponent;
