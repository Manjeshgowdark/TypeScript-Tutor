"use strict";
// class User{
//     //default will be public
//     email : string
//     name: string
//     //private accessible in the class
//     private readonly city : string = "Bengaluru"
//     constructor(email: string, name:string){
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        //protected can be accessed in same class and sub classes
        this._courseCount = 1;
        this.city = "Bengaluru";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const phoenix = new User("Phoenix@gmail.com", "phoenix");
