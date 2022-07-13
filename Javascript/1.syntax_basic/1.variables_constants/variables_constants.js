// console.log('하이');
// 한 줄 주석 ( Single line comment )
/* 멀티 라인 주석 ( Multi line comment ) */

/* 
    변수 선언을 위한 키워드의 종류 3가지
    var(variables), let, const(constants, 상수)

    변수를 생성하기 위한 2가지 단계, 과정
    1. 변수의 선언 or 정의(Declaration, Definition)
    2. 변수의 초기화(Initialization)

    Variable Naming Convention(변수 이름 명명 규칙)
    1. Java, JavaScript에서는 camelCase
    2. Python에서는 snake_case
*/

// 변수(Variable), var는 더 이상 사용하지 않음
let userName; // 변수 선언, userName이라는 공간 할당받음, undefined, camelCase
console.log(userName);
userName = 'Yoo'; // 변수의 초기화(Initialization)
console.log(userName);

// 재할당(Reassignment)
userName = 'Why';
console.log(userName);

// 상수(Contstant), 재할당 불가, 처음에만 할당 가능
const allUsers = 20;
console.log(allUsers);

allUsers = 5; // Uncaught TypeError: Assignment to constant variable.
// 상수에 재할당 불가능.
