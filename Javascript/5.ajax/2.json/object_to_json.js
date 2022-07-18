/**
 * JSON : 'J'ava'S'cript 'O'bject 'N'otation
 * Notation : 표기법
 * 
 * 클라이언트와 서버 간의 HTTP 통신을 위한 텍스트 데이터 포맷
 * JS에 종속되지 않는 언어 독립형 데이터 포맷
 * 대부분의 프로그래밍 언어에서 사용 가능
 * 
 * javascript가 java로 변환되는 걸 도와주는 친구
 * 직렬화, 역직렬화
 */

// JSON 작성 방식은 Javascript 객체 작성 방식과 유사함

// JSON 작성 방식 : Key 값 및 문자열은 ""(쌍따옴표만 가능)로 작성해야함, 홑따옴표 불가
// {
//         "title": "노인과 바다",
//         "author": "해밍웨이",
//         "isSold": false,
//         "genre": ["novel", "essay"],
// }

// JS Object
const book = {
    title: "노인과 바다",
    author: "해밍웨이",
    isSold: false,
    genre: ["소설", "경험담"],
};

/**
 * Client 측에서 서버로 데이터(일반적으로 객체)를 전송하기 위해서는 
 * 객체를 문자열화(직렬화, Serialization)해야함
 */

console.log(book);
console.log(JSON.stringify(book)); // JS Object를 JSON 포맷의 문자열로 변환 및 반환(return)
const jsonData = JSON.stringify(book);

console.log(book.title);
console.log(jsonData.title); // undefined
console.log(jsonData.length); // 70
console.log(typeof jsonData); // string
console.log(jsonData[11]); // 인

/**
 * JSON.stringify()는 객체 뿐만 아니라 배열도 JSON 포맷의 문자열로 직렬화함
 * 일반적으로 서버로 보내는 데이터는 한개일 수도 있지만, 여러 개일 수도 있기 때문에
 */

 const books = [
    { id: 1, title: "하농", author: "하농", isSold: false },
    { id: 2, title: "체르니", author: "체르니", isSold: true },
    { id: 3, title: "부르크뮐러", author: "부르크뮐러", isSold: true },
];

// 배열을 JSON 포맷의 문자열로 변환
const jsonData2 = JSON.stringify(books);
console.log(typeof jsonData2, jsonData2);