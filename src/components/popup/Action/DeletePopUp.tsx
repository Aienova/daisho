import React, { useRef } from 'react';
import { AddItems } from '../../../methods/AddItems';
import { attachAllListeners } from '../../../methods/AttachAllListeners';
import ConfirmPopUp from '../ConfirmPopUp';
import { refreshItemsOrder } from '../../../methods/EditPositionItems';
import closePopUp from './ClosePopUp';



let itemIdToDelete: string | null = null;

export function setItemId(id: string) {
  itemIdToDelete = id;
}

export function getItemId() {
  return itemIdToDelete;
}

const DeletePopUp = () => {
  const popUpRef = useRef<HTMLDivElement>(null);


      const confirmDelete = () => {
        // Récupère la valeur actuelle à chaque rendu
        const itemId = getItemId();
        console.log("element supprimé :" + itemId);
        if (itemId) {
          const elem = document.querySelector(`[data-itemid="${itemId}"]`);
          if (elem) elem.remove();
          // Appelle refreshItemsOrder juste après la suppression
          refreshItemsOrder();
        }
        if (popUpRef.current) {
          popUpRef.current.classList.add('hidden');
        }
        // Remet à zéro la variable globale
        setItemId("");
      };

  const cancelDelete = () => {
    closePopUp(popUpRef);
  };

  React.useEffect(() => {
    AddItems();
    attachAllListeners();
      refreshItemsOrder();
  }, []);

  return (
    <section id="popup-delete" ref={popUpRef} className="popup-container hidden">
      <ConfirmPopUp
        message="Voulez-vous vraiment supprimer cet élément ?"
        onYes={confirmDelete}
        onNo={cancelDelete}
      />
    </section>
  );
};

export default DeletePopUp;

