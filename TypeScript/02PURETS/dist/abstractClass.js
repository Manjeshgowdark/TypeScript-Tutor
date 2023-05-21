"use strict";
class TakePhotoM {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some calculation
        return 8;
    }
}
class Snap extends TakePhotoM {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia implemented");
    }
}
const ph = new Snap("test", "Test", 3);
