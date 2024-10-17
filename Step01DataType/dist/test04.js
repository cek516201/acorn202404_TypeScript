"use strict";
// test04.ts
/*
    [ enum type ]

    - 열거형 type
    - 상수를 정의하는 수고를 덜어준다.
    - 상수 대신에 편리하게 사용할수 있다.
*/
(function () {
    // 무기(Weapon)의 종류를 열거하기
    let Weapon;
    (function (Weapon) {
        Weapon[Weapon["Gun"] = 0] = "Gun";
        Weapon[Weapon["Sword"] = 1] = "Sword";
        Weapon[Weapon["Arrow"] = 2] = "Arrow";
    })(Weapon || (Weapon = {}));
    attack(Weapon.Arrow);
    function attack(w) {
        if (w === Weapon.Gun) {
            console.log("총으로 공격해요!");
        }
        else if (w === Weapon.Sword) {
            console.log("칼로 공격해요!");
        }
        else if (w === Weapon.Arrow) {
            console.log("활로 공격해요!");
        }
    }
})();
