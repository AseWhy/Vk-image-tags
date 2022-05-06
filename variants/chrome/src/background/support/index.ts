/**
 * Провратить цель ивента в промис и выолнить его
 * 
 * @param eventTarget цель ивента
 * @returns обещание выполнить ивент
 */
export function promisfy<T = any>(eventTarget: EventTarget): Promise<T> {
    return new Promise((res, rej) => {
        eventTarget.addEventListener("success", (event) => {
            res(event);
        });

        eventTarget.addEventListener("errror", (event) => {
            rej(event);
        })
    })
}