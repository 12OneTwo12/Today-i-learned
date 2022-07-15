const headingEl = document.querySelector('h1');
console.log(headingEl);
console.log(typeof headingEl);

console.log(headingEl instanceof HTMLHeadingElement);
console.log(headingEl instanceof Node); // 각각의 element들도 객체기 때문에 프로퍼티로 사용 가능
// element들은 전부 node
console.log(headingEl.firstChild); // text node
// node는 element node와 text node로 이루어져있다고 보면 됨.