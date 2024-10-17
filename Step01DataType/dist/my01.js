"use strict";
class Member {
    constructor(num = 0, name = "", isMan = true) {
        this.showInfo2 = () => {
            console.log(`${this.num} ${this.name} ${this.isMan}`);
        };
        this.num = num;
        this.name = name;
        this.isMan = isMan;
    }
    showInfo() {
        console.log(`${this.num} ${this.name} ${this.isMan}`);
    }
}
(function () {
    let d = new Date(1975, 12, 11, 10, 20, 30);
    console.log();
})();
