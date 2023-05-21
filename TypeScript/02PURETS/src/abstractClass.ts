abstract class TakePhotoM{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        //some calculation
        return 8
    }
}

class Snap extends TakePhotoM{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number){
            super(cameraMode, filter)
        }
        getSepia(): void {
            console.log("Sepia implemented")
        }
}

const  ph  = new Snap("test", "Test",3);