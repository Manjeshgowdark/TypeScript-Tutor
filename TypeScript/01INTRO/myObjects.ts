const User = {
    name: "phoenix",
    email: "hitesh@mail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}

let newUser = {name: "phoenix", isPaid: false, email:"h@h.com"}

createUser(newUser)

createUser({name: "phoenix", isPaid: false})


function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399}
}

// type User = {
//     name: string;
//     email: string;
//     isActive : boolean;
// }

// function createUser1(user : User): User{
//     return {name: "", email: "", isActive: true}
// }

type User1 = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditcardDetails?: number
}

let myUser: User1 = {
    _id: "12345",
    name: "h",
    email: "h%h.com",
    isActive: false
}
 


export{}