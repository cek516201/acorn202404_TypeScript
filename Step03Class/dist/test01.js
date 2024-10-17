"use strict";
// Step03Class/test01.ts
(function () {
    //클래스 
    class Car {
        //생성자 
        constructor(name) {
            this.name = name;
        }
        //메소드 
        drive() {
            console.log(this.name + " 이 달려요!");
        }
    }
    const c1 = new Car("소나타");
    const c2 = new Car("아반떼");
    c1.drive();
    c2.drive();

    // 참고로 알아 두세요.
    // c1 객체가 가지고 있는 drive 라는 함수를 f1 에 담기
    const f1 = c1.drive
    // 호출하면 뭐가 달릴까?
    //f1() this.name 때문에 에러가 난다 
    /*
        객체안에서 this 는 java 와 javascript 는 차이가 있다
        javascript 의 this 는 실제 함수가 호출될때 결정이 된다.
    */

    // this.name 에서 this 가 c2 객체를 가리킬수 있도록 binding 을 해서 변수에 대입하면
    const f2 = c2.drive.bind(c2)
    // f2() 를 호출했을때 정상 동작을 한다.
    f2()
    
})();
