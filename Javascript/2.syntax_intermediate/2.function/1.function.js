// 기본적인 함수 정의,
// 함수 작성 방식 첫 번째, 함수 선언문 방식

// 함수키워드,  함수명(Parameter 파라미터) {}
function haha(a,b) {// 두 수의 덧셈 함수
    const result = a + b; // 임시 변수
    return result // 안쪽에 log를 넣어서 출력도 가능
    // return a + b; 
} // 이렇게까지 하면 함수를 만든것.

// 함수 호출(call)
haha(2,4);

console.log(haha(2,4));

let hahaha = haha(4,8);
console.log(hahaha);

// 두 수의 곱셈 결과를 반환하는 함수, multiply

function multyply(c,d) { // 함수 선언부
    
    // 그 외 다른 코드들, 함수 구현부(몸체)
    return c*d 
}

console.log(multyply(78,215));

// Javascript feature
// 함수 역시 하나의 값(value)으로 취급될 수 있음 = 함수도 값이니 변수에 담을 수 있다.
// 함수 작성 방식 두 번째, 함수 표현식
// 함수를 하나의 값으로써 변수에 할당 가능
const div = function division(a,b){
    return a / b;
}

console.log(div(4,2));
console.log(div); // 함수 자체가 출력

// ES6 문법, 화살표 함수(Arrow function)
// 함수 작성 방식 세 번째, 화살표 함수
// function 키워드 대신 화살표(arrow)를 사용하여 좀 더 간략하게 표현
// 기본 형태 () => {}
(a,b) => { return a - b;} // 익명 함수, 이름을 여기다 써주면 에러남
const sub = (c,d) => { return c - d; } // 변수에 익명 함수를 담으면 됨.
const subb = (e,f) => e*f; // 코드가 한줄이면 {}, return 생략 가능
console.log(sub(5,3));

// 파라미터이 없는 함수, () 작성해야함
const greeting = () => console.log('안녕하세요');
greeting();

// 즉시 실행 함수 - 함수 정의와 동싱에 실행되는 함수, 한 번만 실행되고 다시 호출 불가.
const res = (function () {
    const a = 5;
    const b = 10;
    return a*b;
}());

console.log(res);