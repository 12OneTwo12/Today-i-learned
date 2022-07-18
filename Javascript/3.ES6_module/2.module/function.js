/**
 * Modular Programming
 * 
 * 코드를 여러 파일로 쪼개서 모듈화시키는 방법
 * 서로 관계가 있는 기능끼리, 파일끼리 서로 module의 형태로 불러와서
 * 필요한 코드만 사용하는 방식
 * 
 * ES6(2015)에서 모듈화를 할 수 있는 import, export라는 키워드 사용
 */

// 함수 sum, sub, mul, div

export function sum(x,y){
    return x+y;
}

export function sub(x,y){
    return x-y;
}

export function mul(x,y){
    return x*y;
}

export function div(x,y){
    return x/y;
}

export const number = 100;
export const string = 'string';
export const undef = undefined;
export const empty = null;

//export를 한번에 작성
const obj = { name: 'Homer' };
const array = ['Bart', 'Lisa', 'Maggie'];

export { obj, array }