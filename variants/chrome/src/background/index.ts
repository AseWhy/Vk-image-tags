import { observeDOM } from "../../../../lib/observer";
import pages from "./pages";

let lastPage = null;
let lastFound = null;

function isHidden(el: any) {
    return (window.getComputedStyle(el)?.display === 'none') || el.offsetParent == null;
}

observeDOM(document.body, () => {
    let newPage = null;
    let newFound = null;

    for(const page of pages) {
        const found = document.querySelector<HTMLDivElement>(page[0]);

        if(found != null && !isHidden(found)) {
            newPage = page;
            newFound = found;
            
            break;
        }
    }

    if(lastFound != null && isHidden(lastFound)) {
        lastFound = null;
        lastPage = null;
    }

    try {
        if(newPage != null && newPage[1] != null) {
            newPage[1].call(null);
        }
    } finally {
        lastPage = newPage;
        lastFound = newFound;
    }
});