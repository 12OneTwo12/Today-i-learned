/**
 * Destructuring
 * 
 * 구조(배열 or 객체 등 어떠한 자료구조)
 * Destructuring assignment(분해 할당)은 객체의 프로퍼티나 배열을 여러 개의 변수로 분해해주는 것
 * -> 더 간결한 코드의 작성을 도와주는 문법
 * 
 * 1. Object Destructuring
 * 2. Array Destructuring
 */

// 1. Object Destructuring
/*
    book 객체 생성, id는 1, title은 'The Great Gatsby', pudData는 10/04/1925
*/

const book = {
    id : 1,
    title : 'The Great Gatsby',
    pudData : '10/04/1925',
};

// 기존의 방식
// const id = book.id;
// const title = book.title;
// const pudData = book.pudData;

// // Object Destructuring 방식
// const { bookId, bookTitle, bookPubData } = book;
// console.log(bookId, bookTitle, bookPubData); // undefined

// const { id, title, pudData } = book;
// console.log( id, title, pudData );
// console.log(book); // destructuring은 원본 객체를 수정하지 않음

// 다른 이름으로 지정하고 싶은 경우,
const { id: bookId, title: bookTitle, pudData: bookPubData } = book ;
console.log( bookId, bookTitle, bookPubData );

// 중첩된 객체도 destructuring가능
const anotherBook = {
    id : 2,
    title : 'The old man and the sea',
    pubData : '08/09/1952',
    author : {
        firstName : 'Ernest', // 프로퍼티 중첩도 가능
        lastName : 'Hemingway',
    },
};

// const { 
//     id, 
//     title, 
//     pubData, 
//     author : { firstName, lastName } 
// } = anotherBook;

// console.log(firstName, lastName);

// const {
//     author,
//     author : { firstName : myFirstName, lastName : myLastName },
// } = anotherBook;

// console.log(author); // 접근 가능
// console.log(myFirstName, myLastName);

// 2. Array Destructuring : 배열의 요소들을 개별 변수들로 분해
const data = ['1970', '12', '01'];

// JS Array는 순서를 보장받아야하기 때문에 기존 방식에서는 인덱싱을 통해 분해
// const year = data[0];
// const month = data[1];
// const day = data[2];

// Array Destructuring 방식
const [ year, month, day ] = data;
console.log( year, month, day );

// 중첩 배열의 Destructuring
const nestedArray = [1,2,[true, 'hoya'],5];
console.log(nestedArray);

const [one, two, [isTure, userName], five] = nestedArray;
console.log(one, two, isTure, userName, five);

/**
 * movie 객체 생성
 * movieTitle: 'spiderman no way home'
 * movieActor: 객체, firstName: 'Tom', lastName: 'Holland'
 * hashTags: 배열, 'honey fun', 'handsome', 'thrill'
 * 
 * console.log(movieData, movieActor, firstName, tag1, tag2);
 */

const movie = {
    movieTitle : 'spiderman no way home',
    movieActor : { 
        firstName : 'Tom',
        lastName: 'Holland',
     },
    hashTags : [ 'honey fun', 'handsome', 'thrill' ],
}

const {
    movieTitle,
    movieDate = new Date(), // 날짜 관련 객체
    movieActor, //객체만 따로 분해하고 싶을 때
    movieActor : { firstName }, // 내부에서 별도로 Destructuring
    hashTags : [ tag1, tag2 ],
} = movie;

console.log(movieDate, movieActor, firstName, tag1, tag2);