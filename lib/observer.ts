export const observeDOM = (function(){
    const MutationObserver = globalThis.MutationObserver || globalThis.WebKitMutationObserver;

    return function(obj: HTMLElement | Document, callback: Function){
        if(!obj || obj.nodeType !== 1)
            return; 

        if( MutationObserver ){
            const mutationObserver = new MutationObserver(callback);

            mutationObserver.observe(obj, { childList:true, subtree:true });

            return mutationObserver
        } else if(globalThis.addEventListener){
            obj.addEventListener('DOMNodeInserted', callback as any, false);
            obj.addEventListener('DOMNodeRemoved', callback as any, false);
        }
    }
})()