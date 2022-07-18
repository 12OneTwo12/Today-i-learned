const countValue = document.getElementById('value');

const countButtons = document.querySelectorAll('button');

let count = 0;

const resultcolor = () => { // 변수나 함수 이름지을때 구체적으로, 보면 바로 알아볼 수 있게
    if(count === 0){
    value.style.color = "black";
    } else if ( count > 0 ){
    value.style.color = "green";
    } else if ( count < 0 ){
    value.style.color = "red";
    }}

// countButtons.forEach((button) => { //for each안에 있는 callback 함수
//     // HTMLElement.addEventListener('이벤트 동작', '이벤트 내용')
//     button.addEventListener('click', (event)=>{
//         // console.log(event);
//         const curTarget = event.currentTarget;
//         // console.dir(curTarget); // classList property 확인
        
//         // 어떤 버튼이 클릭되었는지 확인할 수 있는 sign
//         const styles = curTarget.classList[1];
//         // console.log(styles);
//         if(styles === 'increase'){
//             count++ ;
//         } else if ( styles === 'decrease') {
//             count-- ;
//         } else if ( styles === 'reset') {
//             count = 0;
//         }

//         resultcolor();
//         countValue.textContent = count ;
//     });
// }) 내가 한거

countButtons.forEach((button) => { //for each안에 있는 callback 함수
    // HTMLElement.addEventListener('이벤트 동작', '이벤트 내용')
    button.addEventListener('click', (event)=>{
        const curTarget = event.currentTarget;
        
        // 어떤 버튼이 클릭되었는지 확인할 수 있는 sign
        const styles = curTarget.classList[1];

        //nested ternary operator(중첩된 삼항 연산자)
        count = styles !== 'reset' ? (count = styles === 'decrease' ? --count : ++count) : 0;

        //change a countValue color
        let cvColor = '';

        cvColor = count !== 0 ? (cvColor = count > 0 ? 'green' : 'red') : 'grey';

        countValue.textContent = count;
        countValue.style.color =cvColor;

    });
}) // 강사님이 하신거