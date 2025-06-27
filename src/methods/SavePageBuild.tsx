export function SavePageBuilder() {
  const saveButton = document.getElementById('save-button');
  if (!saveButton) return;

  saveButton.addEventListener('click', () => {
    const websiteDiv = document.getElementById('origami-website');
    if (!websiteDiv) return;

    // Clone le contenu pour ne pas modifier le DOM original
    const clone = websiteDiv.cloneNode(true) as HTMLElement;

    // Supprime tous les éléments avec la classe quick-edit-panel
    clone.querySelectorAll('.quick-edit-panel').forEach(el => el.remove());

    // Récupère le HTML nettoyé
    const cleanHtml = clone.innerHTML;

    console.log('HTML nettoyé prêt à être sauvegardé :', cleanHtml);

    // --- Front-end only: propose le téléchargement du fichier ---
    const blob = new Blob([cleanHtml], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.click();
    URL.revokeObjectURL(a.href);

    // --- Si tu as un back-end, tu pourrais envoyer cleanHtml via fetch ici ---
    // fetch('/api/save-html', { method: 'POST', body: JSON.stringify({ html: cleanHtml }) })
  });
}