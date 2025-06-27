/**
 * Trie les .view-item dans #origami-website selon leur data-position (1, 2, 3, ...)
 * et met à jour l'ordre dans le DOM.
 */
export function sortItemsByPosition() {
  const container = document.getElementById('origami-website');
  if (!container) return;

  // Récupère tous les items et trie selon data-position
  const items = Array.from(container.querySelectorAll<HTMLElement>('section.view-item'));
  items.sort((a, b) => {
    const posA = parseInt(a.getAttribute('data-position') || '0', 10);
    const posB = parseInt(b.getAttribute('data-position') || '0', 10);
    return posA - posB;
  });

  // Réinsère les items dans le bon ordre dans le DOM
  items.forEach(item => container.appendChild(item));
}

/**
 * Met à jour les data-position de tous les .view-item dans #origami-website
 * pour qu'ils soient consécutifs (1, 2, 3, ...)
 */
export function updatePositions() {
  const container = document.getElementById('origami-website');
  if (!container) return;

  const items = Array.from(container.querySelectorAll<HTMLElement>('section.view-item'));
  items.forEach((item, idx) => {
    item.setAttribute('data-position', String(idx + 1));
  });
}

/**
 * À appeler après chaque drag & drop pour trier et renuméroter les items.
 */
export function refreshItemsOrder() {

  updatePositions();
  
}

