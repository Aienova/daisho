export function attachListener(
  selector: string,
  action: string,
  callback: (itemId: string, elem: HTMLElement) => void
) {
  document.querySelectorAll<HTMLElement>(selector).forEach((elem) => {
    if (elem.getAttribute('data-action') === action) {
      elem.addEventListener('click', () => {
        const itemId = elem.getAttribute('data-itemid');
        if (itemId) {
          callback(itemId, elem);
        }
      });
    }
  });
}