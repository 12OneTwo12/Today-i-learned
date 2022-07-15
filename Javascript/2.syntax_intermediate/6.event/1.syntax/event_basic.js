// 2. Event Handler property 방식 - HTML과 js를 분리
const evPropButton = document.getElementById("btn-ev-prop");
console.dir(evPropButton);

evPropButton.onclick = () => {console.log('button clicked by event property');}

console.log(evPropButton.onclick); // 이벤트핸들러 프로퍼티에 등록된 것 확인

// 하나의 이벤트밖에 등록 불가
evPropButton.onclick = () => console.log('버튼 눌려짐');

// 3. addEventListener method 방식
const addEvent = document.getElementById('btn-add-ev-lsnr');

// 함수 선언문 방식으로 작성
function buttonHandler2() {
    console.log('double clicked');
}

function buttonHandler1() {
    console.log('one clicked');
}

addEvent.addEventListener('click', buttonHandler1)
addEvent.addEventListener('dblclick', buttonHandler2);

// 화살표 함수로 작성
const buttonHandler3 = () => {
    console.log('mouserover');
}

// 버튼에 마우스를 올렸을 때 동작하는 이벤트 작성

addEvent.addEventListener('mouseover', buttonHandler3);

// function은 함수 선언 const는 객체 선언
addEvent.addEventListener('mouseover', () => { 
    console.log('mouserover');
}) // 화살표 함수를 콜백 함수 파라미터에 작성


// 이벤트 핸들러의 제거, 콜백함수의 파라미터로 직접 익명함수를 작성하면 제거 불가.

// 2. Event handler property방식에서의 이벤트 제거
console.log(evPropButton.onclick); // 현재 onclick 프로퍼티에 등록된 이벤트
evPropButton.onclick = null; // null 할당으로 프로퍼티값 초기화

// 3. addEventListener 방식의 이벤트 제가
addEvent.removeEventListener('dblclick', buttonHandler2)
// 익명함수는 참조할 수 없어서 제거 불가.