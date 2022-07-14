/**
 * 배열 매서드(함수)의 반환 패턴
 *  함수의 다른 표현이라고 일단 생각하자.
 * 
 * 1. 원본의 직접적인 수정(mutator method)
 * 
 */
let fish = ['piranha','koi','nimo(?)','clown-fish'];

// console.log도 하나의 함수였구나 
console.log(typeof fish); // 내가 생각하기엔 array라고 나와야하는데 object라고 나옴
console.group('object의 실체(?) 확인');
console.log('하이');
console.groupEnd();

console.group('object의 실체(?) 확인'); // object는 객체 // 그룹 시작 ( 보기 쉽게 분류하기 위해 )
console.log(Array.isArray(fish)); // isArray : 해당 객체가 배열인지 확인하는 메소드 true / false 값을 반환 
console.groupEnd(); // 그룹 끝

// 1. 원본을 직접 수정하는 mutator methods

// 1. pop() : 원본 배열의 가장 끝에 위치한 요소를 제거, 해당 값을 반환함, 추가 파라미터는 없음
console.group('pop()');
console.log(`제거된 값 : ${fish.pop()}`);
console.log(fish); // 원본이 수정됨
console.groupEnd();

// 2. shift() : 원본 배열의 가장 첫 번째(앞) 요소 제거. pop이 성능이 더 좋음 shift는 뒷 인덱스들이 전부 한칸 씩 앞으로 와야하기 때문
console.group('shift()');
console.log(`제거된 값 : ${fish.shift()}`);
console.log(fish);
console.groupEnd();

// 3. push() : 원본 배열의 가장 끝에 새로운 요소 추가. 추가할 요소 작성
console.group('push()');
console.log(`추가된 후 배열의 길이(length) : ${fish.push('shark')}`);
console.log(fish);
console.groupEnd();

// 4. unshift() : 원본 배열의 가장 앞에서 요소 추가
console.group('unshift()');
console.log(`추가된 후 배열의 길이(length) : ${fish.unshift('whale')}`);
console.log(fish);
console.groupEnd();

// -> shift(), unshift()는 모든 인덱스에 영향을 미침.

// 5. splice() : 정해진 위치에 요소를 추가하거나 제거.
console.group('splice()');

// splice를 이용한 요소 추가.
console.log(fish.splice(1,0,'tuna')); // 2번째 파라미터를 0으로 지정하면 요소를 삭제하지 않고 추가
console.log(fish);

// splice를 이용한 요소 제거.
console.log(`삭제된 요소들은 : ${fish.splice(1,2)}`);
console.log(fish);
console.groupEnd();

// 추가와 제거를 동시에 하는 법
let dessert = ['cake','다쿠아즈','마카롱','식혜','과자','포스틱'];
console.log(dessert);
console.log(`삭제된 항목은 : ${dessert.splice(1,2,'에이스')}이(가) 사라지고 ${dessert[1]}이(가) 추가 됐습니다.`);
console.log(dessert);

// 6. reverse() : 배열의 순서를 역순으로 정렬
console.group();
console.log(fish);
console.log(fish.reverse()); // 역순된 배열
console.log(fish); // 원본 변경.
console.groupEnd();

// 7. fill() : 모든 요소들을 주어진 값으로 전부 덮어씀
console.group('fill()');
console.log(dessert);
console.log(dessert.fill('꼬북칩'));
console.log(dessert);
console.groupEnd();

// 시작과 끝 지점 지정 가능.
console.group('fill2()');
console.log(dessert.fill('짱구',1)); // 1번째 인덱스부터 끝까지
console.log(dessert.fill('흰둥이',1,3)); // 1번째 인덱스부터 3번째 인덱스 -1까지
console.groupEnd();


// 8. sort() : 오름차순 정렬
console.group('sort()');
fish = ['shark', 'whale', 'koi', 'nimo(?)', 'defense'];
console.log(fish.sort()); // abcd 오름차순 정렬
console.log(fish);

// 문자 중에 대문자가 끼어있을 경우
fish = ['Shark', 'whale', 'koi', 'Nimo(?)', 'defense'];
console.log(fish.sort()); //대문자가 소문자보다 정렬 기준이 앞섬.

// 문자에 숫자가 추가되어 있다면?
fish = ['Shark', '2 whale', '53 koi', 'Nimo(?)', 'defense'];
console.log(fish.sort());

// 숫자 > 대문자 > 소문자 > abc

// 숫자 정렬
let numbers = [53,42,33,63,2,87];
console.log(numbers.sort());