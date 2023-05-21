let score: number | string = 33

score = 44 

score = "55"

type User2 = {
    name: string;
    id: number;
}

type Admin1 = {
    username : string;
    id: number
}

let phoenix : User2 | Admin1 = {name: "phoenix", id: 334}

phoenix = {username: "hc", id: 334}

const data:  number[] = [1,2,3]
const data2: string[] = ["1","2","3"]
const data3: (number | string)[] = ["1",2]

let pi: 3.14 = 3.14

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"

