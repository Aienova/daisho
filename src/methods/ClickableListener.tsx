import { setItemId as setEditItemId } from "../components/popup/Action/SettingPopUp";
  import { setItemId as setDeleteItemId } from "../components/popup/Action/DeletePopUp";
import { refreshItemsOrder } from "./EditPositionItems";
  
  export function clickableListener(clickable:string) {

    let clickableElement = '.clickable[data-action="'+clickable+'"]';

              if (clickable === 'edit' || clickable === 'delete') {
            
            document.querySelectorAll<HTMLElement>(clickableElement).forEach((elem) => {
      elem.addEventListener('click', () => {
                const itemId = elem.getAttribute('data-itemid');
                if (itemId) {

                  // On stocke l'itemId dans la variable globale pour l'utiliser dans DeletePopUp ou SettingPopUp
                  switch (clickable) {
                    case 'edit':  
                      setEditItemId(itemId); // <-- Ici tu stockes l'itemId dans DeletePopUp
                      break;
                    case 'delete': 
                      setDeleteItemId(itemId); // <-- Ici tu stockes l'itemId dans DeletePopUp
                      break;
                  }


                  console.log("On attache l'ID :"+itemId)
                  const popup = document.getElementById("popup-"+clickable);
                  if (popup) {

                          document.querySelectorAll(".popup-container").forEach(function(el) {
                          el.classList.add("hidden");
                          });
                    popup.classList.remove("hidden");
                  }
                }
              });
            });
          }

          else if(clickable === 'movedown' || clickable === 'moveup') {
            
            // Pour le 'movedown', on déplace l'élément vers le bas
            
            document.querySelectorAll<HTMLElement>(clickableElement).forEach((elem) => {
              elem.onclick = () => {
                const itemId = elem.getAttribute('data-itemid');
                if (itemId) {
                  const item = document.querySelector(`[data-itemid="${itemId}"]`);
                  if (item) {

                    // Pour 'movedown', on déplace l'élément vers le bas
                    if (clickable === 'movedown') { 
                    const moveSibling = item.nextElementSibling;

                    if (moveSibling) {
                      item.parentNode?.insertBefore(moveSibling, item);
                    }

                  }

                  if(clickable === 'moveup') {
                    // Pour 'moveup', on déplace l'élément vers le haut
                    const moveSibling = item.previousElementSibling;

                    if (moveSibling) {
                      item.parentNode?.insertBefore(item, moveSibling);
                      
                    }

                  }
              
              

                  refreshItemsOrder();



                  }
                }
   
              };




              

              


            });



          }

            



          }



