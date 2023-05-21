"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "phoenix",
    email: "hitesh@mail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "phoenix", isPaid: false, email: "h@h.com" };
createUser(newUser);
createUser({ name: "phoenix", isPaid: false });
function createCourse() {
    return { name: "reactjs", price: 399 };
}
var myUser = {
    _id: "12345",
    name: "h",
    email: "h%h.com",
    isActive: false
};
