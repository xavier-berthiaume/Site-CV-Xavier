import { useState } from "react";
import "./InfoBox.scss";

interface InfoBoxProps {
  box_name: string,
  box_width: number,
  children: any
};

function InfoBox({box_name, box_width, children} : InfoBoxProps) {

  const [showDetails, setShowDetails] = useState(false);

  const generateWidth = (width: number) => {
    return (
      `
        #${box_name} {
          width: ${width}%;
        }
      ` 
    );
  }

  return (
    <>
      <style>
        {generateWidth(box_width)} 
      </style>
    <div className="info-box" id={box_name}>
      {children}
    </div>
    </>
  );

};

export default InfoBox;
