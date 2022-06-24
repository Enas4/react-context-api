import { useContext } from "react";
import { BioData } from "../App";

function CompC() {
  const context = useContext(BioData);
  return (
    <div className="CompC">
      <h1>This is {context}</h1>
    </div>
  );
}

export default CompC;
