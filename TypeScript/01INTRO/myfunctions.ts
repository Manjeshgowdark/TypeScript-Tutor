function addTwo(num: number): number{

    return num + 2
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, 
    isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}


//arrow functions

const getHello = (s: string):string => {
    return ""
}

function consoleError(errmsg: string): void{
    console.log(errmsg)
}

function handleError(errmsg: string): never{
    throw new Error(errmsg)
}


const heros = ["thor", "spiderman", "ironman"]

heros.map((hero): string => {
    return `hero is ${hero}`
})

loginUser("h","h@mail.com")
addTwo(5)
getUpper("hello")
export {}