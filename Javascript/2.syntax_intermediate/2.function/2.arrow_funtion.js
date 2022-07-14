/**
 * Arrow funtion
 * 
 * 2015년에 발표된 ECMAScript에서 arrow function을 추가함
 * 익명함수 표현식을 작성하는 새로운 방법
 * 파이썬의 lambda function과 비슷
 * 
 */

// 두 수의 합을 구하는 함수 sum
// 1. 함수 선언문 방식
function sum(a,b){
    return a+b;
}

// 2. 함수 표현식
const sum = function (a,b){
    return a+b;
}

// 3. 화살표 함수
const sum = (a,b) => a+b;

// 화살표 함수의 특징
// 1. 암묵적인 return
// 2. 기존의 함수는 { } 를 사용하고, return 키워드를 줬지만, 
// 화살표 함수는 둘 다 사용하지 않음 ( 코드가 여러 줄일 경우에는 예외 )

// body 부분이 2줄 이상일 경우 { } 및 return 키워드를 추가해야함
const sub = (a,b) => {
    console.log('뺄셈입니다.');
    return a-b;
}

// 파라미터가 1개일 경우에는 () 생략 가능.
const square = x => x * x;
console.log(square(10)); // 100

// 파라미터가 없는 경우에는 ()는 필수

const greeting = () => 'Hello';
console.log(greeting()); // console.log('Hello'); 와 같다.