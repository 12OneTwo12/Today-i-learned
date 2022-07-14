
let dog = {} // 빈 객체(empty object), 형태를 갖추지 않은 강아지
console.log(dog); // object
console.log(typeof dog);

let doggy = {
    //property : name, favoriteFruit
    // key : name, favoriteFruit
    // value : 'bandi','banana'
    name: 'bandi', 
    favoriteFruit: 'banana',
    bark: function(){
        console.log(`왈왈! ${this.favoriteFruit}가 먹고싶어`);
    }
};

console.log(doggy);

// 프로퍼티 조회(접근)
console.group('doggy start');
console.log(doggy.name); // .(dot) 연산자를 통하여 객체의 프로퍼티에 접근할 수 있음
console.log(doggy.bark);
console.log(doggy.bark());
console.log(doggy[`name`]); // 다른 접근 방법
console.groupEnd();

// 프로퍼티를 동적으로 추가(존재하지 않는 프로퍼티에 값을 할당하면 추가됨)
doggy.age = 2;
console.log(doggy.age);

// 프로퍼티 삭제(delete 연산자)
console.log(doggy);
delete doggy.age;
console.log(doggy);