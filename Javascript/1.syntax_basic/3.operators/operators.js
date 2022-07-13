console.log(5 + 5);
console.log(5 - 10);
console.log(5 / 2);
console.log(5 * 4);
console.log(10 % 3); // 나눈 나머지값
console.log(4 ** 2); //제곱

// 증감 연산자
let age = 5;

// 후위 연산: 코드의 실행 종료 후 연산이 진행됨
console.log('후위 연산');
console.log(age++);
console.log(age--);
console.log(age);

let adult = 19;
// 전위 연산: 연산 후 코드 실행
console.log('전위 연산');
console.log(++adult);
console.log(--adult);

// 관계 연산자
// console.log(age > 4);
console.log('관계 연산');
let result = age > 4;
console.log(result);
console.log(age <= 3);

// 동등 연산자
console.log('동등 연산');
console.log(1 == 1);
console.log(1 == "1"); // 비교 전에 값이 숫자면 같은 타입으로 변환 후 연산
console.log(1 === "1"); // false, 엄격한 비교(strict), JavaScript feature
console.log(1 !== 2); // 같지 않다.

// 논리 연산자(and, or연산)
console.log('논리 연산');
console.log(true && true);
console.log(5 > 3 && 2 === 2); // and 연산
console.log(5 > 3 || 2 !==2); //or 연산

// 삼항 연산자
console.log('삼항 연산');
let yourAge = 25;
let beverage = (yourAge >= 20) ? 'Soju' : 'coke';
console.log(beverage);

if(yourAge >= 20){
    beverage = 'Soju';
} else {
    beverage = 'coke';
}

// 할당 연산자(우선 순위가 가장 낮음), 변수에 값을 대입할 때 사용하는 연산자
yourAge += 1; // yourAge = yourAge + 1과 동일한 코드
console.log(yourAge);