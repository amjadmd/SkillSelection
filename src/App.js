import "./App.css";
import AppContainer from "./Components/AppContainer/AppContainer.js";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="school-skills-app">
        <AppContainer />
      </div>
    </DndProvider>
  );
}

export default App;
