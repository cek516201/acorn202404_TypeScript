"use strict";
// test03.ts
/*
    [ array type ]
    
    데이터 type[]  형식으로 만들수 있다.

    number[] , string[], boolean[], object[] ...
*/
(function () {
    // number 배열 
    let nums = [10, 20, 30];
    // string 배열
    let names = ["kim", "lee", "park"];
    nums.push(40);
    //nums.push("kim") //type 이 맞지 않아서 에러가 난다 
    names.push("kim");
    //names.push(40) //type 이 맞지 않아서 에러가 난다. 
    // nums 는 number[] type 이기때문에 num0 는 number type 으로 infer 된다 
    let num0 = nums[0];
    // 숫자는 대입 가능 하지만
    num0 = 99;
    // 다른 type 은 대입할수 없다.
    //num0 = "kim"
    // 혼합(union) 배열
    let anything;
    anything = [10, "kim", "park", 20];
})();
