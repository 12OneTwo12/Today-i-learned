/**
 * 반대로 서버가 클라이언트 쪽으로 응답한 JSON 데이터는 문자열 형태.
 * 이 문자열을 JS에서 다시 사용하기 위해서는 문자열 포맷을 다시 JS 전용 객체 리터럴(JS 객체)로 변환해야함
 * -> 문자열 포맷을 객체(object)로 변환, 즉 객체화하는 것을 역직렬화(deserialization)라고 함
 */

// 순수 JS Object
const book = {
    id: 1,
    title: '하농',
    author: '하농',
    isSold: false,
};

// 서버에서 응답한 데이터라고 가정
const responseData = JSON.stringify(book);

// JSON 포맷의 문자열을 JS 객체로 변환(parsing)
const parsedData = JSON.parse(responseData);
console.log(typeof parsedData, parsedData);

// 서버로부터 응답받은 데이터가 문자열화된 배열일 경우, 배열 객체로 변환해줌.
const books = [
    { id: 1, title: "하농", author: "하농", isSold: false },
    { id: 2, title: "체르니", author: "체르니", isSold: true },
    { id: 3, title: "부르크뮐러", author: "부르크뮐러", isSold: true },
];

// 서버에서 응답한 데이터라고 가정.
const responseData2 = JSON.stringify(books);

// JSON 포맷의 문자열을 배열로 변환
const parsedData2 = JSON.parse(responseData2);
console.log(parsedData2);