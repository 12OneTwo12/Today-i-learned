// DOM 객체

console.log(document); // HTML 전체를 의미, HTML문서에 대한 기본 정보만 출력

console.dir(document); // 조금 더 자세한 정보 조회
// -> document 객체의 프로퍼티 조회가 가능

console.log(window.document);
// window 객체 내부에 document가 하나의 프로퍼티로 존재

console.log(window.document === document); // ture

// DOM 조작
console.log(document.querySelector('h1')); 
// querySelector는 제일 위에 있는 h1 하나만 가져옴, 가독성이 좋지 않다고 함

document.getElementById('main-title');
// id값에 의해 element를 주세요.

console.log(document.getElementById('main-title'));
//getElement를 주로 사용할 것.

const h1 = document.getElementById('main-title');
console.dir(h1.innerText);

console.log(document.getElementsByClassName('list-item'));
const h2 = document.getElementsByClassName('list-item');

// CSS Selector를 통한 조회, 선택자 기호 필수. ex) #, .(dot)
console.log(document.querySelector('#main-title'));
console.log(document.querySelector('.list-item')); // 가장 첫 번째 노드만 가져옴.

console.log(document.querySelectorAll('.list-item')); // NodeList

const h3 = document.getElementById('main-tit');
console.dir(h3.innerText);
// Uncaught TypeError: Cannot read properties of null (reading 'innerText')
// at dom_manipulation.js:36:16