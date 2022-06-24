import CompA from "./components/CompA";
import { createContext } from "react";
import "./App.css";

const BioData = createContext();

function App() {
  return (
    <div className="App">
      <BioData.Provider value={"Component C"}>
        <CompA />
      </BioData.Provider>
    </div>
  );
}

export default App;
export { BioData };
