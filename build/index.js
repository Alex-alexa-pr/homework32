"use strict";
function getDiff(firstValue, secondValue) {
    if (firstValue === secondValue) {
        return { amount: 0, array: [] };
    }
    const firstValueArray = [...firstValue];
    const secondValueArray = [...secondValue];
    const diff = firstValueArray
        .filter((c) => !secondValueArray.includes(c))
        .concat(secondValueArray.filter((c) => !firstValueArray.includes(c)));
    return { amount: diff.length, array: diff };
}
console.log(getDiff("abc", "abcd")); // { amount: 1, array: ['d'] }
console.log(getDiff("abcd", "cdfe")); // { amount: 4, array: ['a', 'b', 'f', 'e'] }
console.log(getDiff("abc", "wbbcc")); // { amount: 2, array: ['a', 'w'] }
console.log(getDiff("abc", "abc")); // { amount: 0, array: [] } 
