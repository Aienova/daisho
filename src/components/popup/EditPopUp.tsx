import React from "react";
import EditBackgroundColor from "./EditorFields/EditBackgroundColor";

export type PopUpProps = {
  message: string;
  onSubmit: (action: string, value: string) => void;
  onClose: () => void;
};

const EditPopUp: React.FC<PopUpProps> = ({ message, onClose, onSubmit }) => {
  const color = "#00ff00";

  return (
    <EditBackgroundColor
      message={message}
      color={color}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default EditPopUp;