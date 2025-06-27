import React, { useState } from 'react';
import type { PopUpProps } from "../EditPopUp";

type EditBackgroundColorProps = PopUpProps & {
  color: string;
};

const EditBackgroundColor: React.FC<EditBackgroundColorProps> = ({
  message,
  color,
  onClose,
  onSubmit
}) => {
  const [currentColor, setCurrentColor] = useState(color);

  return (
    <div className="darkBackground centralizer">
      <div className="popUp">
        <h2>{message}</h2>
        <p>
          <label htmlFor="color">Modifier votre couleur de fond :</label>
          <input
            type="color"
            id="color"
            name="couleur"
            value={currentColor}
            onChange={e => setCurrentColor(e.target.value)}
          />
        </p>
        <button onClick={() => onSubmit("editBackgroundColor", currentColor)}>Valider</button>
        <button onClick={onClose}>Quitter</button>
      </div>
    </div>
  );
};

export default EditBackgroundColor;