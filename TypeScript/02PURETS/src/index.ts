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

class User{
    //protected can be accessed in same class and sub classes
    protected _courseCount = 1;
 readonly city : string = "Bengaluru"
    constructor(
        public email: string, 
        public name:string){
        
    }

    private deleteToken(){
        console.log("Token deleted");
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courseCount
    }

    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User{
    isFamily: boolean = true
    changeCourseCount(){
      this._courseCount = 4
    }
}


const phoenix = new User("Phoenix@gmail.com","phoenix")




