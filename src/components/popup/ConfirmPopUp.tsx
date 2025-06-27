// ...PopUp.tsx
type PopUpProps = {
  message: string;
  onYes: () => void;
  onNo: () => void;
};

const ConfirmPopUp: React.FC<PopUpProps> = ({ message, onYes, onNo }) => (

  
  <div className="darkBackground centralizer">
    <div className="popUp">
      <h2>{message}</h2>
      <button onClick={onYes}>Oui</button>
      <button onClick={onNo}>Non</button>
    </div>
  </div>

);

export default ConfirmPopUp;