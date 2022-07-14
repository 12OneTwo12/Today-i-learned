/**
 * JS에서 원시 값(Primitive value)을 제외한 모든 것은 객체(object)
 * 원시값 : 5, 'Yoo'같은 값들
 * 
 * 기본적인 차이는 원시 값은 하나의 값만을 나타내지만,
 * 객체는 다양한 타입의 값들을 하나의 단위로 구성한 복합 자료 구조
 * ex) const arr = ['apple', 5, true, ...];
 * 
 * 객체는 프로퍼티(property, 속성)로 구성된 집합,
 * 프로퍼티는 키(key)와 값(value)으로 구성됨.
 * ex) arr의 프로퍼티 : length, pop()
 * 
 * JS에서 사용할 수 있는 모든 값들은 프로퍼티의 값(value)이 될 수 있음.
 * 함수는 일급 객체이기 때문에 값이 될 수 있고, 따라서 객체의 프로퍼티가 될 수 있음.
 * 
 */


// 객체 리터럴 방식을 활용한 객체 생성
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