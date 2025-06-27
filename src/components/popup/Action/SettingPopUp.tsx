import React, { useRef } from 'react';
import { AddItems } from '../../../methods/AddItems';
import { attachAllListeners } from '../../../methods/AttachAllListeners';
import EditPopUp from '../EditPopUp';
import { refreshItemsOrder } from '../../../methods/EditPositionItems';
import closePopUp from './ClosePopUp';

let itemIdToDelete: string | null = null;

export function setItemId(id: string) {
  itemIdToDelete = id;
}

export function getItemId() {
  return itemIdToDelete;
}



    function editBackgroundColor(color: string) {

            const itemId = getItemId();
            console.log("élément modifié :" + itemId);
            console.log("Nouvelle couleur :" + color);
            if (itemId) {
              const elem = document.querySelector(`.view-item[data-itemid="${itemId}"]`);
                if (elem && elem.firstElementChild) {
                  (elem.firstElementChild as HTMLElement).style.backgroundColor = color;
                }
            }

          }

const SettingPopUp = () => {
  const popUpRef = useRef<HTMLDivElement>(null);

  const confirmEdit = (action: string, value: string) => {
    switch (action) {
      case "editBackgroundColor":
        editBackgroundColor(value);
        break;
    }
    closePopUp(popUpRef);
    setItemId("");
  };

  const cancelEdit = () => {
    closePopUp(popUpRef);
  };

  React.useEffect(() => {
    AddItems();
    attachAllListeners();
    refreshItemsOrder();
  }, []);

  return (
    <section id="popup-edit" ref={popUpRef} className="popup-container hidden">
      <EditPopUp
        message="Modifier votre item:"
        onSubmit={confirmEdit}
        onClose={cancelEdit}
      />
    </section>
  );
};

export default SettingPopUp;