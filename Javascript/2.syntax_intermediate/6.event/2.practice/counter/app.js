let number = document.getElementById('numbersss');

let result = 0;

const color = () => { if(result === 0){
    number.style.color = "black";
} else if ( result > 0 ){
    number.style.color = "green";
} else if ( result < 0 ){
    number.style.color = "red";
}}

let increase = () => {
    result++ ;
    color();
    number.textContent = `${result}`;
}

let decrease = () => {
    result-- ;
    color();
    number.textContent = `${result}`;
}

let reset = () => {
    result = 0;
    color();
    number.textContent = `${result}`;
}
