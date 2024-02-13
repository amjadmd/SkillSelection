import LeftComponent from "../LeftComponent/leftComponent.js";
import CenterComponent from "../CenterComponent/centerComponent.js";
import RightComponent from "../RightComponent/rightComponent.js";

function AppContainer() {
  return (
    <div className="school-skills-container">
      <div className="school-skills-app-container left">
        <LeftComponent />
      </div>
      <div className="school-skills-app-container center">
        <CenterComponent />
      </div>
      <div className="school-skills-app-container right">
        <RightComponent />
      </div>
    </div>
  );
}

export default AppContainer;
