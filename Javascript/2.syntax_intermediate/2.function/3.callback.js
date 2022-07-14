// 콜백 함수 - 기본
function greeting(name) {
    console.log(`Hello ${name}`);
}

function userInput(name, callbackFn){
    callbackFn(name); // greeting("Jeong");과 같음.
}

// userInput함수의 인자값으로 greeting 함수를 전달
userInput('Jeong', greeting);

// 쿠팡에서 사과가 도착하길 기다리는 함수 waitCoupang
// 함수의 파라미터 2개
// 첫번째 파라미터 : 쿠팡에서 배송받을 제품, 변수명 pkg
// 두번째 파라미터 : 아주머니에게 전달하는 함수 callbackFn

// 동작
// 1. '쿠팡에서 pkg가 도착했다!'를 출력하는 출력문 작성
// 2. 옆집 아주머니에게 전달하는 함수 호출

// 아주머니에게 전달하는 함수 bringItToNeighbor
// 별도의 파라미터 없음
// 동작 : '옆집 아주머니에게 전달 완료!' 출력하는 출력문 작성

// 출력문은 템플릿 리터럴로 작성

function waitCoupang(pkg,callbackFn){
    console.log(`쿠팡에서 ${pkg}이(가) 도착했다.`);
    callbackFn();
}

function bringItToNeighbor() {

    console.log(`옆집 아주머니에게 전달완료.`);
}

waitCoupang('사과', bringItToNeighbor);

// request 버튼을 마우스로 클릭하는 클릭('click') 이벤트가 발생하였을 때
// 'button cliked!'가 출력되도록 구현
// 어제 했던 이벤트는 'change'

const button = document.querySelector('button');

button.addEventListener('click', ()=>{console.log('button cliked!');})

// button.addEventListener('click',setResult); 이것과 동일

// function setResult(){
//     console.log('button cliked!');
// }
