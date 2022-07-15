// window 객체
console.log(window); // 최상위 객체

// window소속, 원칙적으로는 window를 접두사로 써서 사용해야함
// window.alert('hi')
// alert('hi')           window는 생략가능

console.log(window.innerWidth); // 현재 window의 너비값
console.log(innerHeight); // 마찬가지로 window는 생략가능

// BOM 객체

// 1. Location object, 현재 문서의 경로(URL)을 나타냄
console.log(location);

// location.assign('https://www.naver.com'); -> 네이버 주소로 이동
// 브라우저를 조작할 수 있음
