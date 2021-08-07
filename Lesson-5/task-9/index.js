function findDivCount (a, b, n) {
    let result = 0;
    for ( let index = a; index <= b; index += 1) {
        if ( index % n === 0)
        result += 1;
    }
    return result;
}

console.log(findDivCount(1,100,2));