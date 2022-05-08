/**
 * Комбинирует классы, возвращает список классов который можно установить как аттрибут className
 * 
 * @param classes список классов
 * @returns сформированная строка
 */
 export function cc(...classes: Array<any>) {
    const result = [ ];

    for(const current of classes.flat()) {
        if(current != null) {
            const trimed = current.trim();

            if(trimed.length != 0) {
                result.push(trimed);
            }
        }
    }

    return result.join(" ");
}

/**
 * Комбинирует через запятую, возвращает список переданных элементов который можно установить как аттрибут
 * 
 * @param items список элементов
 * @returns сформированная строка
 */
export function dd(...items: Array<any>) {
    const result = [];

    for(const current of items) {
        if(current != null) {
            const trimed = current.trim();

            if(trimed.length != 0) {
                result.push(trimed);
            }
        }
    }

    return result.join(",");
}