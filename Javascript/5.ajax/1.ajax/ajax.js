const xhr = new XMLHttpRequest(); // XMLHttpRequest API 로딩

// XMLHttpRequest 객체가 제공하는 메서드를 활용하면 요청 전송 가능

// 요청을 보낼 준비
// xhr.open(요청 메서드, 요청URL 주소)

// GRUD (Create, Read, Update, Delete), 'GET' 서버의 데이터를 조회하고 싶을때
// GET : 데이터 조회, POST: 데이터 추가(등록), PUT,PATCH : 데이터 수정, DELETE : 데이터 삭제 요청
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos')
console.log(`OPENED, ${xhr.readyState}`); // 준비 상태 체크

// 준비 상태(readyState) 프로퍼티가 바뀔 때마다 arrow fn 호출
xhr.onreadystatechange = () => {
    if(xhr.readyState === 2){
        console.log(`HEADERS_RECEIVED ${xhr.readyState}`);
    }

    // 데이터 응답,(로딩) 완료와 같음 == onload
    if(xhr.readyState === 4 && xhr.status === 200) {
        console.log(`LOADING, ${xhr.readyState}`);
        console.log(`response data: ${xhr.responseText}`);
        const responseData = xhr.responseText;
        const parsedData = JSON.parse(responseData);
        console.log(parsedData);
    }
};

xhr.onprogress = () => console.log(`LOADING, ${xhr.readyState}`);
xhr.onload = () => console.log(`DONE, ${xhr.readyState}`);

// 실제 요청 전송
xhr.send();

/**
 * readyState: HTTP 요청의 현재 상태를 가지고 있는 정수값 프로퍼티
 0-(UNSENT) - 초기화 전. open() 호출하기 전.
 1-(OPENED) - 열림.open()을 호출했고, send()는 호출하지 않은 상태
 2-(HEADERS_RECEIVED) - 보냄. send()를 호출했지만 서버로부터 응답은 받지 못한 상태
 3-(LOADING) - 데이터 수신 중. 응답 데이터의 일부를 받고있는 상태
 4-(DONE) - 완료. 응답 데이터를 모두 받은 상태.


 2. status: HTTP 요청에 대한 응답의 성공 여부를 나타내는 값
 ex) 200 (응답 성공), 404(요청실패, 잘못된 경로)

 3. statusText: HTTP 요청에 대한 응답 메시지를 나타내는 문자열
 ex) status가 200일 경우, "OK"

 4. responseType: 응답한 데이터의 타입
 ex) document,json,text,blob

 5. response : HTTP 요청에 대한 응답 몸체 (body)

 이벤트 핸들러와 관련된 프로퍼티
 onreadystatechange: readyState 프로퍼티의 값이 변경된 경우

 메서드
 1. open() : HTTP 요청 초기화(준비단계)
 2. send() : HTTP 요청 실제 전송
 */

 const xhrr = new XMLHttpRequest();

 xhrr.open('GET', 'https://jsonplaceholder.typicode.com/users');
 console.log(`OPENED, ${xhrr.readyState}`);

 xhrr.onreadystatechange = () => {
    if(xhrr.readyState === 2){
        console.log(`HEADERS_RECEIVED ${xhrr.readyState}`);
    }

    // 데이터 응답,(로딩) 완료와 같음 == onload
    if(xhrr.readyState === 4 && xhrr.status === 200) {
        console.log(`LOADING, ${xhrr.readyState}`);
        console.log(`response data: ${xhrr.responseText}`);
        const responseData2 = xhrr.responseText;
        const parsedData2 = JSON.parse(responseData2);
        console.log(parsedData2);
    }
};

xhrr.send();