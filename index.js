/***
 * EJERCICIO DE JAVASCRIPT #1
 * 1. Implementa una función la cual se comporta como el comando 'uniq-c' de Unix.
 * Este comando toma por entrada una secuencia y devuelve otra secuencia en la cual todos los elementos duplicados 
 * de manera seguida han sido reducido a una única instancia junto con el número de ocurrencias en la secuencia original
 * Ejemplo: 
 * ['a','a','a', 'b','b','c','a','b','c'] --> 
 * [['a',3],['b',2],['c',1],['a',1],['b',1],['c',1]]
 */

function uniqCount(...elements){
    //const {current, cnt} = elementCount
    let current = null;
    let cnt = 0;
    for (let i = 0; i < elements.length; i++) {
        if (elements[i] != current) {
            if (cnt > 0) {
                console.log(current + ' --> ' + cnt);
            }
            current = elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
}
uniqCount('a','a','a', 'b','b','c','a','b','c');

/**EJERCICIO DE JAVASCRIPT #2
 * Para este ejercicio, crearás un método global aplanar. 
 * El método recibe cualquier número de argumentos y los aplana en una sola lista.
 * Si alguno de los argumentos que se le pase es una lista, entonces los ojetos individuales en la secuencia serán aplanados de forma tal que existan al mismo nivel que los otros elementos.
 * Cualquier secuencia o lista anidada, sin importar el nivel de profundidad, deberá ser aplanado en una sola lista.
 * Los siguientes son ejemplos de como esta función sería utilizada y cuál sería el resultado esperado.
 * flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
 * flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']
 */

const arr = [1, 2, [3, 4, [5, 6]]];
const arr2 = ['a', ['b', 2], 3, null, [[4], ['c']]];

function flatDeep(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

console.log(flatDeep(arr, Infinity));
console.log(flatDeep(arr2, Infinity));

/** EJECICIO DE JAVASCRIPT #3
 * Dada una lista de palabras y una palabra compuesta meta, 
 * tu objetivo es encontrar las dos palabras que combinadas forman la palabra meta,
 * devolviendo ambas palabras en el mismo orden en que aparecen en la lista, 
 * y sus respectivos índices en el orden en que deben combinarse para formar la palabra meta.
 * Las palabras en la lista que se recibe pueden repetirse, 
 * pero solo habrá un par único conforma la palabra meta. 
 * Si no hay palabras en la lista que conformen la palabra meta, puedes devolver null.
 * Ejemplos  
 * fn(['super','bow','bowl','tar','get','book','let'], "superbowl")
 * // ['super','bowl',   [0,2]]
 */
 function fn(words, target) {
    for (let i = 0; i < words.length; i++) {    
        for (let ii = 0; ii < words.length; ii++) {
        const m1 = words[i] + words[ii] === target
        const m2 = words[ii] + words[i] === target        
        if (i !== ii && (m1 || m2)) {
            const arr = m1 ? [i, ii] : [ii, i]
            return [words[i], words[ii], arr]
        }
        }    
    }    
        return null
    }
    console.log(fn(['super','bow','bowl','tar','get','book','let'], "superbowl"));

/**
 * EJERCICIO DE JAVASCRIPT #4
 * Se te solicita elevar al cuadrado cada dígito de un número y luego concatenarlos todos juntos.
 * Por ejemplo, si tomamos 9119 y llamamos nuestra función con este número, 
 * la función debería devolver 811181, porque 9 al cuadrado es
 *  81, 1 al cuadrado es 1, 1 al cuadrado es 1 y 9 al cuadrado es 81
 * Ejemplo fn(9119) // 811181
 */
 function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}
console.log(squareDigits(9119))