// 배열 작성 방식 [ element, element ];
// element : 배열에 들어갈 요스들(Html의 element가 아님)
const arr = []; // [] 배열을 arr이라는 변수에 할당(저장), [] -> 빈 배열
const arrr = ['나','너','그리고','우리',2,3,7];

// 오른쪽만 달라진다.
// const a = 5;
// const b = 'jeong';
// const c = [];
// const d = button.addEvnlsnr();

console.log(arr);
console.log(arrr);
console.log(arrr[0]);
console.log(arrr[1]);
console.log(arrr[2]);
console.log(arrr[7]);
console.log(arrr.length); // arrr이 가지고 있는 프로퍼티(property, 재산, 소유물, 보라색 글씨)를 조회(refer)
// console.log(ironman.motive); // 아이언맨의 정보 중 모티브 조회 -> 일론 머스크

// 요소의 조회(참조)
console.log(`${arrr[0]},${arrr[4]}`);

// 요소의 추가
// 변수명 [추가할 인덱스 번호, 위치] = 할당할 값(리터럴)
arrr[7] = 'new cookie';
console.log(arrr);

const melonCookie = 'melon cookie';
arrr[8] = melonCookie; // 변수로도 할당 가능
console.log(arrr);

// 요소의 갱신(update)
arrr[7] = 5;
console.log(arrr);

// 요소의 삭제
const fruits = ['apple','orange','kiwi'];
// 1. fruit
// 2. fruits

console.log(fruits);
delete fruits[1]; // 삭제, 희소배열이 만들어지기 때문에 비추
console.log(fruits); // empty같이 요소의 실제 값은 없지만, 공간은 유지된 형태
console.log(fruits[1]); // undefined
console.log(fruits.length); 

const nuts = ['walnut','almond','pinenut'];
nuts.splice(1,1); // () 보고 함수인가보다 생각해야함, 배열의 요소를 수정할 수 있는 splice라는 프로퍼티를 사용 // 1번인덱스 삭제
// ex.  pikachu.attack(); // console.log('백만 볼트!');
console.log(nuts);
console.log(nuts.length);

nuts.splice(1,0,'nie'); // 1번 인덱스에 nie 추가
console.log(nuts);

const neww = [3,4,5,6,7,8,9];
neww.splice(3,2); // 3번 인덱스부터 2개 삭제
console.log(neww);