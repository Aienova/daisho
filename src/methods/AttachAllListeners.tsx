import { clickableListener } from "./ClickableListener";


export function attachAllListeners() {
    
    clickableListener('edit');
    clickableListener('delete');
    clickableListener('moveup');
    clickableListener('movedown');  
}