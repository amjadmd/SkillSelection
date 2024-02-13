import "../CenterComponent/centerComponent.scss";
import { useDrag } from "react-dnd";
import { CoreSkills, CreativeSkills, SpecialSkills } from "../constant";

function CenterComponent() {
  const SkillSelection = ({ skill ,place}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: "skill",
      item: { id: skill.id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));
    return (
      <span ref={drag} className={`skill ${place}`} >
        {skill?.name}
      </span>
    );
  };
  return (
    <>
      <div className="center-component-heading">Skills Selected</div>
      <div className="component-body-container">
        <div className="center-component-body-container-level">
          <div className="levels-container">
            Core(Level 0)
            <div className="skill-container">
              {CoreSkills?.map((e) => (
                <SkillSelection skill={e} place='core'/>
              ))}
            </div>
          </div>
        </div>
        <div className="center-component-body-container-level">
          <div className="levels-container">
            Special(Level 0)
            <div className="skill-container">
              {SpecialSkills?.map((e) => (
                <SkillSelection skill={e} place='special'/>
              ))}
            </div>
          </div>
        </div>
        <div className="center-component-body-container-level">
          <div className="levels-container">
            Creative(Level 0)
            <div className="skill-container">
              {CreativeSkills?.map((e) => (
                <SkillSelection skill={e} place='creative'/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CenterComponent;
