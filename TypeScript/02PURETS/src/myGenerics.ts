const score: Array<number> = []
const names:Array<string> = []


function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any): any{
    return val
}

function identityThree<Type>(val: Type): Type{
    return val
}

function identityFour<T>(val: T): T{
    return val
}

interface Bottle{
    brand: string,
    type: number,
}

identityFour<Bottle>({
    brand:"GymBottle",
    type: 1
})

function getSearchProducts<T>(products: T[]): T{
    // do some database operations
    const myIndex = 3
    return  products[myIndex]
}

// Generic Arrow Functions

const getMoreSearchProducts = <T>(products: T[]): T => {
    //do some database operations
    const  myIndex = 4
    return products[myIndex]
}

interface Database{
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valueOne: T, valTwo: U):object{
    return{
        valueOne,
        valTwo
    }
}

// anotherFunction(3,{})

interface Quiz{
    name:  string,
    type: string,
}

interface Course{
    name: string,
    author: string,
    subject: string,
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}






