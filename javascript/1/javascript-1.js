let sum = addend => {
    if (typeof(valueOf) === "function") {
        valueOf = 0;
    }

    if (addend !== undefined) {
        valueOf += addend;
        return sum;
    }
    else {
        return valueOf;
    }
};

sum(1)(5);
sum(-2);
console.log(sum(5)(-4)(0)());
sum(-2);
console.log(sum());