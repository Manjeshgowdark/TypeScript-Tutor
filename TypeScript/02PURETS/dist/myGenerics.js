"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
identityFour({
    brand: "GymBottle",
    type: 1
});
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
// Generic Arrow Functions
const getMoreSearchProducts = (products) => {
    //do some database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valueOne, valTwo) {
    return {
        valueOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
