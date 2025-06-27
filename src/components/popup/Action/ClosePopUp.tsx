import { setItemId } from "./DeletePopUp";

/**
 * Ferme la popup et réinitialise l'itemId.
 * @param popUpRef - ref React sur la div de la popup
 */
const closePopUp = (popUpRef: React.RefObject<HTMLDivElement | null>) => {
  if (popUpRef.current) {
    popUpRef.current.classList.add('hidden');
  }
  setItemId("");
};

export default closePopUp;