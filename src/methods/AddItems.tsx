import { attachAllListeners } from "./AttachAllListeners";
import { refreshItemsOrder } from "./EditPositionItems";

let listenersAttached = false;

// Utilitaire pour obtenir et incrémenter l'id unique
function getNextItemId(): number {
  const key = "origami-last-itemid";
  const lastId = Number(localStorage.getItem(key)) || 0;
  const nextId = lastId + 1;
  localStorage.setItem(key, String(nextId));
  return nextId;
}

export function configHtmlPreview(html: string): string {
  // Crée un conteneur temporaire pour manipuler le HTML
  const temp = document.createElement("div");
  temp.innerHTML = html.trim();

  // Cherche l'élément parent .view-item
  const viewItem = temp.querySelector(".view-item");
  if (!viewItem) return html; // Si pas trouvé, retourne le HTML d'origine

  // Génère un nouvel id unique
  const itemId = getNextItemId();
  viewItem.setAttribute("data-itemid", String(itemId));

  // Calcule la position (nombre d'items déjà présents + 1)
  const preview = document.getElementById('origami-website');
  let position = 1;
  if (preview) {
    const existingItems = preview.querySelectorAll('.view-item').length;
    position = existingItems + 1;
  }
  viewItem.setAttribute("data-position", String(position));

  const item = viewItem.getAttribute("data-item");

  // Ajoute le panneau d'édition à la fin de .view-item
  const quickEditPanel = document.createElement("div");
  quickEditPanel.className = "center quick-edit-panel";
  quickEditPanel.innerHTML = `
    <span>${item}#${itemId}</span>
    <span class="material-symbols-outlined bluebox clickable" data-action="edit" data-itemid="${itemId}">settings</span>
    <span class="material-symbols-outlined redbox clickable" data-action="delete" data-itemid="${itemId}">delete</span>
    <span class="material-symbols-outlined orangebox clickable" data-action="moveup" data-itemid="${itemId}">keyboard_arrow_up</span>
        <span class="material-symbols-outlined orangebox clickable" data-action="movedown" data-itemid="${itemId}">keyboard_arrow_down</span>
  `;
  viewItem.appendChild(quickEditPanel);

  return temp.innerHTML;
}


export function loadHtmlInPreview(
  path: string,
  afterLoad?: () => void
) {
  fetch(path)
    .then(response => {
      if (!response.ok) throw new Error('Fichier non trouvé');
      return response.text();
    })
    .then(html => {
      const preview = document.getElementById('origami-website');
      if (preview) {
        const dragDrop = document.getElementById('drag-drop-here');
        if (dragDrop) dragDrop.remove();

        const hmtlbuild = configHtmlPreview(html);
        preview.insertAdjacentHTML('beforeend', configHtmlPreview(hmtlbuild));
      }
      if (afterLoad) afterLoad();
    })
    .catch(() => {
      const preview = document.getElementById('origami-website');
      if (preview) preview.innerHTML += "<em>Contenu non disponible.</em>";
    });
}

function togglePreviewBorderEffect(enable: boolean) {
  const preview = document.getElementById('origami-website');
  if (!preview) return;
  if (enable) {
    preview.classList.add('preview-border-animate');
  } else {
    preview.classList.remove('preview-border-animate');
  }
}

export function AddItems() {
  if (listenersAttached) return; // Empêche d'ajouter plusieurs fois les listeners
  listenersAttached = true;

  document.querySelectorAll<HTMLElement>('.draggable').forEach((elem) => {
    elem.setAttribute('draggable', 'true');

    elem.addEventListener('dragstart', (e: DragEvent) => {
      if (!e.dataTransfer) return;
      e.dataTransfer.setData('family', elem.getAttribute('data-family') || '');
      e.dataTransfer.setData('item', elem.getAttribute('data-item') || '');
    });
  });

  const preview = document.getElementById('origami-website');
  if (preview) {
    preview.addEventListener('dragover', (e: DragEvent) => {
      e.preventDefault();
      togglePreviewBorderEffect(true);
    });

    preview.addEventListener('dragleave', () => {
      togglePreviewBorderEffect(false);
    });

    preview.addEventListener('drop', (e: DragEvent) => {
      e.preventDefault();
      togglePreviewBorderEffect(false);
      if (!e.dataTransfer) return;
      const family = e.dataTransfer.getData('family');
      const item = e.dataTransfer.getData('item');
      if (family && item) {
        const path = `/items-family/${family}/${item}.html`;
        loadHtmlInPreview(path, () => {
          attachAllListeners();
        });
        console.log(`Le chemin=${path}`);
      }
      console.log(`Déposé: famille=${family}, item=${item}`);
    });
  }

  refreshItemsOrder();
}