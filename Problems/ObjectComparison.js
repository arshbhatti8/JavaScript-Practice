function isEqual(a, b) {
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);

    if (aProps.length !== bProps.length) {
        return false
    }

    for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i];

        if (a[propName] !== b[propName]) {
            return false
        }
    }
    return true;
}

let a = {
    a: 1,
    b: 2,
    c: 3
};

let b = {
    a: 1,
    b: 2,
    c: 3
};

console.log(isEqual(a, b));

