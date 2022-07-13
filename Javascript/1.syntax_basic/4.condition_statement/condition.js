let shoppingDone = false; // 쇼핑 진행 여부
let childsAllowance; // 내 용돈

if(shoppingDone === true){ // 엄마의 쇼핑을 도와줬으면, 용돈을 더 받을 수 있다.
    childsAllowance = 10;
} else {
    childsAllowance = 5; // 쇼핑을 도와주지 않아서 조금 밖에 못 받았다.
}


console.log(`내 용돈은 ? ${childsAllowance} 달라!`);

// =========================================
// 1. if-sles
// let monster = '리자몽';
// if(monster === '리자몽'){
//     console.log('일단 백만볼트 쓰고, 몸통 박치기 1,000회 실시');
// } else {
//     console.log('백만 볼트!!'); // 웅이 사망
// }

// 2. else if
// let monster = '거북왕';
// if (monster === '리자몽'){
//     console.log('119 신고');
// } else if (monster === '거북왕') {
//     console.log('도망');
// } else { // else if는 if와 else 사이에만 작성 가능
//     console.log('백만 볼트');
// }

// 3. 조건의 중첩(Nesting)
// let monster = '거북왕';
// let physical = '작고 귀여움';

// if (monster === '거북왕'){
//     if(physical === '작고 귀여움'){
//         console.log('싸운다');
//     } else {
//         console.log('run away');
//     }
// } 
// 중첩을 할 수록 가독성이 떨어지기 때문에 웬만하면 안한다고 함

// == cookie
const select = document.querySelector('select'); // 제어하기 위해 자바 스크립트로 가져옴
console.log(select);

const paragraph = document.querySelector('p');
console.log(paragraph);

select.addEventListener('change', setResult);
// select.이벤트를 감지하는 도구? 담당자(어떤 이벤트, 어떤 동작을 하라);

// setResult는 함수

// function setResult(){
//     console.log('값이 바뀌었다!');
// }

function setResult(){
    const choice = select.value;
    console.log(choice);
     
    if(choice === 'one'){// 값이 1번이면,
        paragraph.textContent = '굶어 죽음';
    } else if (choice === 'two') {// 값이 2번일 경우
        paragraph.textContent = '고소 당함';
    } else { // 값이 1번이나 2번이 아닐 경우(3번일 경우)
        paragraph.textContent = '응답 없음';
    }
 }