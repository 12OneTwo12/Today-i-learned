// import {불러올 함수명} from '해당 함수를 가지고 있는 파일의 경로'
import { sum, sub, mul, div } from './function.js'; // ./ : 현재 경로
import { number,string,undef,empty } from './function.js'; 
import { number as num, obj, array } from './function.js'; 

console.log(num, obj); // array는 사용하지 않았기 때문에 폰트가 흐림

const x = 10;
const y = 5;

document.getElementById('x').textContent = x;
document.getElementById('y').textContent = y;

document.getElementById('add').textContent = sum(x,y);
document.getElementById('sub').textContent = sub(x,y);
document.getElementById('mul').textContent = mul(x,y);
document.getElementById('div').textContent = div(x,y);
