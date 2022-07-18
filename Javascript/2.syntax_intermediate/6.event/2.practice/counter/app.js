let number = document.getElementById('numbersss');

let result = 0;

const color = () => { // 변수나 함수 이름지을때 구체적으로, 보면 바로 알아볼 수 있게
    if(result === 0){
    number.style.color = "black";
    } else if ( result > 0 ){
    number.style.color = "green";
    } else if ( result < 0 ){
    number.style.color = "red";
    }}

const increase = () => { // let보다 const가 나음, 상태가 수정 될만 하면 let으로
    result++ ;
    color();
    number.textContent = `${result}`;
}

const decrease = () => {
    result-- ;
    color();
    number.textContent = `${result}`;
}

const reset = () => {
    result = 0;
    color();
    number.textContent = `${result}`;
}
