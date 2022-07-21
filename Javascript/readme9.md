# [ Papago 만들어 보기 ]  
  
  ### [ 2022-07-20 ]  
    
---------------------------------------------------------------------------------------------------------------------------------------------------  
  
  ![image url](https://github.com/12OneTwo12/TIL/blob/main/Javascript/papago.png?raw=true)  
    
  오늘은 이제까지 공부한 것들을 토대로 네이버에서 운영하는 papago웹 사이트를 만들어 보려 한다.  
  우선 감사하게도 네이버에서는 api를 제공해주고 있었음으로 먼저 외관상으로 최대한 비슷하게 만들어 보도록 하겠다.  
  우선 코딩을 시작하기에 앞서 먼저 설계를 하는 것이 용이할것 같다.  
    
  ![image url](https://github.com/12OneTwo12/TIL/blob/main/Javascript/papagomy.png?raw=true)  
    
  먼저 이렇게 sematinc tag를 통해 구역을 나눠 주기로 했다.  
  그리고 언어를 선택하는 토글은 bootstrap의 힘을 빌리도록 했다.  
  몇시간동안 이렇게 저렇게 만져보니 조금 그럴듯한 외모를 가지게 됐다.  
  진심으로 느낀건 그럴듯한 웹사이트를 만드는 게 정말 쉽지 않구나 하는 걸 느꼈다.  
  이것저것 만지기 전에는 뭐부터 해야할지 모르겠고 막상 이것저것 만지면 되는게 하나 없었다.  
  겨우겨우 이정도까지 왔다.  
  
```html
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Papago</title>

    <!-- Bootstrap 설정 코드 -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    
    <!-- Font-awesome 설정 코드 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css" />
    
    <!-- Google web font 설정 코드 -->
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet" />
    
    <link rel="stylesheet" href="style.css">
    <script defer src="app.js"></script>
</head>

<body>
    <!-- sematinc tag, 의미상 구분하기 위한 용도(SEO), div와 같은 역할 -->
    <article>
        <header>
            <div class="Header">
                <div class="Header__main"> <!-- BEM__model-->
                    <h1 class="Header__main__logo">
                        <a href="http://www.google.com">
                            <img src="https://papago.naver.com/97ec80a681e94540414daf2fb855ba3b.svg" alt="papagpo logo">
                        </a>
                    </h1>
                    <ul class="Header__main__menu">
                        <li><a href="">웹사이트 번역</a></li>
                        <li><a href="">GYM</a></li>
                        <li><a href="https://dict.naver.com/">사전</a></li>
                    </ul>
                </div>
                <div class="Header__sub">
                    <div class="Header__sub__icons">
                        <div class="Header__sub__icon">
                            <i class="far fa-window-restore fa-lg"></i>
                        </div>
                        <div class="Header__sub__icon">
                            <i class="far fa-star fa-lg"></i>
                        </div>
                        <div class="Header__sub__icon">
                            <i class="fas fa-sliders-h fa-lg fa-rotate-90"></i>
                        </div>
                    </div>
                    <div class="Header__sub__profile">
                        <div class="Header__sub__profile__image">
                            <i class="fas fa-user-astronaut fa-lg"></i>
                        </div>
                        <div class="Header__sub__profile__username">
                            <p class="colorful-font">Menu</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <div class="Card">
                <div class="Card__header"> 
                    <select class="form-select"
                    style="width: auto"
                    aria-label="Default select example" name="" id="">
                        <option selected>자동 언어감지</option>
                        <option value="ko">한국어</option>
                        <option value="en">English</option>
                        <option value="ja">日本語</option>
                    </select>
                </div>
                <div class="Card__body">
                    <div style="border-bottom: 1px solid #21dc6d;"></div>
                    <div class="Card__body__textarea">
                        <textarea class="Card__body__content" id='upplace' placeholder="번역할 텍스트를 입력하세요" autofocus></textarea>
                    </div>
                </div>
            </div>
            <div class="Card">
                <div class="Card__header">
                    <select class="form-select"
                    style="width: auto"
                    aria-label="Default select example" name="" id="">
                        <option>언어 선택</option>
                        <option value="ko">한국어</option>
                        <option value="en" selected>English</option>
                        <option value="ja">日本語</option>
                    </select>
                </div>
                <div class="Card__body">
                    <div style="border-bottom: 0.5px solid #ADB5BD;"></div>
                    <div class="Card__body__textarea">
                        <textarea class="Card__body__content" id="downplace"></textarea>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <hr>
            <div class="Footer">
                <p class="Footer__corp">&copy; 2022 Company, Inc</p>

                <!-- ul.footer__sns>li*3>i -->
                <ul class="Footer__sns">
                    <li><i class="fab fa-facebook fa-lg"></i></li>
                    <li><i class="fab fa-instagram fa-lg"></i></li>
                    <li><i class="fab fa-discord fa-lg"></i></li>
                </ul>

                <!-- footer__menu라는 class명으로 Home, Features, Pricing, FAQs, About으로
                구성된 li태그 <a>가 중첩되어 있도록. -->

                <!-- ul.Footer__menu>li*5>a -->
                <ul class="Footer__menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        </footer>
    </article>
</body>
</html>
```  
  
  정리해서 올리기도 빡셀만큼 힘이 빠졌다.  
  다음은 css 파일이다.  
    
```css
/* reset.css */
textarea::-webkit-placeholder {
    font-size: 70%;
}

textarea::-moz-placeholder {
    font-size: 70%;
}

textarea::-ms-placeholder {
    font-size: 70%;
}

textarea::placeholder {
    font-size: 70%;
}


html,
body {
    box-sizing: border-box;
    font-family: 'Nanum Gothic', 'sans-serif';
    font-weight: 700;
}

ul {
    list-style: none;
    margin: 0;
}

a,
a:link,
a:visited,
a:active,
a:hover {
    text-decoration: none;
    color: #212529;
}


textarea {
    border: none;
    resize: none;
}

hr {
    margin-top: 0;
}

/* General */

i {
    color: #6c757d;
}

body {
    height: 100vh;
    /* position: relative; */
}

article {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 100%;
}

header {
    height: 20vh;
}

section {
    display: flex;
    flex-grow: 1;
    height: 60vh;
    justify-content: center;
}

header,
section,
footer {
    flex-shrink: 0;
}

/* hr {} */

/* Header */
.Header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 60px;
    padding: 10px 0;
}

.Header__main {
    display: flex;
    align-items: center;
}

.Header__main__menu {
    display: flex;
    margin-left: 20px;
}

.Header__main__menu li {
    margin: 6px;
    font-size: 1rem;
}

.Header__sub {
    display: flex;
}

.Header__sub__icons {
    display: flex;
    align-items: center;
    margin-right: 10px;
}

.Header__sub__icon {
    margin: 10px;
}

.Header__sub__profile {
    display: flex;
    align-items: center;
    margin-left: 14px;
}

.Header__sub__profile__username {
    margin-left: 10px;
    font-size: 1.2rem;
}

/* Dynamic color */
.colorful-font,
.Header__sub__profile__image i {
    margin: 0;
    color: #313131;
    font-weight: bold;
    -webkit-animation: colorchange 10s infinite alternate;
    animation: colorchange 10s infinite alternate;
}

@-webkit-keyframes colorchange {
    0% {
        color: blue;
    }

    10% {
        color: #8e44ad;
    }

    20% {
        color: #1abc9c;
    }

    30% {
        color: #d35400;
    }

    40% {
        color: blue;
    }

    50% {
        color: #34495e;
    }

    60% {
        color: blue;
    }

    70% {
        color: #2980b9;
    }

    80% {
        color: #f1c40f;
    }

    90% {
        color: #2980b9;
    }

    100% {
        color: pink;
    }
}

@keyframes colorchange {
    0% {
        color: blue;
    }

    10% {
        color: #8e44ad;
    }

    20% {
        color: #1abc9c;
    }

    30% {
        color: #d35400;
    }

    40% {
        color: blue;
    }

    50% {
        color: #34495e;
    }

    60% {
        color: blue;
    }

    70% {
        color: #2980b9;
    }

    80% {
        color: #f1c40f;
    }

    90% {
        color: #2980b9;
    }

    100% {
        color: pink;
    }
}

/* Section, Card */

.Card {
    display: flex;
    flex-direction: column;
    width: 30vw;
    align-items: center;
    height: 40vh;
    margin: 0 20px;
    border: 1px solid #ADB5BD;
}

.Card:first-child {
    border: 1px solid #21dc6d;
}

.Card__header {
    margin-top: 20px;
}

.Card__body {
    width: 100%;
    height: 50%;
    margin-top: 20px;
    flex: 1 1 auto;
}

.Card__body__textarea {
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    padding: 10px;
}

.Card__body__content {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 100%;
}

.Card__body__content:focus {
    outline: 0.5px #f8f9fa;
}


/* Footer */
.Footer {
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
}

.Footer__sns {
    display: flex;
}

.Footer__sns li {
    margin: 0 10px;
}

.Footer__menu {
    display: flex;
}

.Footer__menu li {
    margin: 0 10px;
}

/* Bootstrap */
.form-select:focus {
    border-color: #21dc6d;
    box-shadow: 0 0 0 0.25rem rgb(33 220 109 / 25%);
}
```  
  
![image url](https://github.com/12OneTwo12/TIL/blob/main/Javascript/papago3.png?raw=true)  
  
  결과는 다음과 같다.  
  그래도 조금 그럴싸 한거같다.  
  내심 뿌듯했다.  
  이제 텍스트를 입력했을 때, 번역된 결과도 나오게 만들어야한다.  
  node.js를 통해 네이버 번역 서버와 통신할수 있는 백엔드단도 만들어준다.  
  
```javascript
const textAreaArray = document.getElementsByClassName('Card__body__content');
console.log(textAreaArray);

// 변수 네이밍 컨벤션, 도메인과 관련된 용어를 정의

// source : 번역할 텍스트와 관련된 명칭
// target : 번역된 결과와 관련된 명칭

// 배열 구조 분해 할당 문법(destructuring)
// sourceTextArea, targetTextArea
const [sourceTextArea, targetTextArea] = textAreaArray;
// sourceSelect, targetSelect

const [sourceSelect, targetSelect] = document.getElementsByClassName('form-select');
console.log(targetSelect);
// 출력문으로 각 element들을 잘 가져왔는지 확인

// 번역하고자 하는 언어의 타입(ko? en?, ja?)
let targetLanguage = 'en';

// 어떤 언어로 번역할지 선택하는 target selectbox의 선택지 값이 바뀔 때마다 이벤트가 발생, 각 언어별 영문기호? ko, en, ja
// 이벤트 코드 작성,


targetSelect.addEventListener('change', () => {
    console.log(targetSelect.selectedIndex);
    const selectedIndex = targetSelect.selectedIndex;
    targetSelect.options[selectedIndex].value; // ko,en,ja
});


// sourceTextArea에 입력된 값을 콘솔에 출력 
// keydown, keyup, chage, ---

let debouncer;

sourceTextArea.addEventListener('input', (event) => {

    if (debouncer) { // debouncer 변수에 값이 있으면 ture, 값이 없으면 false
        clearTimeout(debouncer); //
    }

    // setTimeout(콜백함수, 지연시킬 시간)
    // 콜백함수 : 지연된 시간 후에 동작할 코드
    debouncer = setTimeout(() => {
        const text = event.target.value // sourceTextArea에 입력한 값

        if (text) {
            // ajax 기술, new XMLHttpRequest();

            const xhr = new XMLHttpRequest();

            const url = '/detectLangs'; // node 서버의 특정 url 주소

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {


                    // 최종적으로 papago가 번역해준 번역된 텍스트 결과를 받는 부분(추후 작성) - 서버의 응답 결과를 확인하는 부분
                    // 서버의 응답 결과를 확인하기 위해서는 responseText(응답에 포함된 텍스트) 프로퍼티를 사용하면 됨
                    const responseData = xhr.responseText;
                    const parsedData = JSON.parse(JSON.parse(responseData));

                    const result = parsedData.message.result;

                    // 번역된 텍스트를 결과 화면에 보여줌
                    targetTextArea.value = result.translatedText ;
                    const options = sourceSelect.options;
        
                    for (let i = 0; i < options.length; i++) {
                        if(options[i].value === result['srcLangType']) {
                            sourceSelect.selectedIndex = i;
                        }
                    }
                }
            }

            // 요청 준비
            xhr.open('POST', url);

            // 요청을 보낼 때 동봉할 객체
            const requestData = {
                text, // text: text,
                targetLanguage, // targetLanguage: targetLanguage
            };

            // 클라이언트가 서버에게 보내는 요청 데이터의 형식이 json 형식임을 명시
            xhr.setRequestHeader('Content-type', 'application/json'); // Header : 제품의 설명서

            // ?? 보내기 전에 해야 할 일, JS Object를 JSON으로 변환
            const jsonData = JSON.stringify(requestData);

            // 실제 요청 전송
            xhr.send(jsonData);
        } else {
            alert('텍스트를 입력하세요');
        }
    }, 3000); //setTimeout()은 timerID를 반환함

});
```
 
```javascript
const { query } = require("express");
const express = require("express"); // express 패키지를 import

const app = express();

const clientId = 'arx05KowxOooN5Xw155d';
const clientSecret = '2zxdUmwwa6';

// nodejs 서버가 또 다른 Client가 되어 Naver Papago Server에 요청(request)을 보내기 위해 사용 - request 패키지
const request = require('request');

// express의 static 미들웨어 활용
app.use(express.static('public')); // express한테 static 파일들의 경로가 어디에 있는지 명시

// express의 json 미들웨어 활용
app.use(express.json());

// console.log(`현재 파일명 ${__filename}`);
// console.log(`현재 파일이 위치한 경로: ${__dirname}`);

// root url: 127.0.0.1:3000/
// root url경로로 요청이 들어왔을 때 호출될 콜백함수.
// 콜백함수는 2개의 인수(arguments)를 받음, 1. request(줄여서 req), response(res)
app.get('/', (req, res) => {
    // res.send('응답 완료!'); 동작 확인.

    // root url, 즉 메인 페이지로 접속했을 때 우리가 만든 Node 서버는 papago의 메인 화면인 index.html을 응답해야함
    res.sendFile(__dirname, 'index.html');
}); 

// papago 언어 감지 요청 전체 코드
// detectlangs 경로로 요청했을 때
app.post('/detectLangs', (req, res) => {
    // console.log(req.body);
    // console.log('detectLangs 경로로 호출됨');

    // text라는 프로퍼티로 받은 값은 query라는 이름의 변수로 할당, targetLanguage는 동일한 변수명으로 할당
    // ??? 객체 디스트럭쳐링 써서 한 줄로 작성

    const {text: query, targetLanguage} = req.body;

    console.log(query); // 입력한  텍스트 
    console.log(targetLanguage);

    const url = 'https://openapi.naver.com/v1/papago/detectLangs';
    
    const options = { // options라는 객체 생성
        url: url,
        form: {
            query: query
        }, // from이라는 이름의 프로퍼티는 {}(opject) 즉, 객체를 값으로 가지고 있음
        headers: {
            'X-Naver-Client-Id': clientId,
            'X-Naver-Client-Secret': clientSecret,
        }
    }

    // 실제 언어감지 서비스 요청 부분
    // optiongs라는 변수에 요청 전송 시 필요한 데이터 및 주소를 동봉
    // () => {} : 요청에 따른 응답 정보를 확인
    request.post(options, (error, response, body) => { // request 객체가 가지고 있는 post() 메서드 활용
        if (!error && response.statusCode === 200) { // 응답이 성공적으로 완료 되었을 경우
            const parsedData = JSON.parse(body); // JSON.parse() : String -> JS object로 변환(파싱, parsing)
            console.log(typeof parsedData, parsedData);

            // papago 번역 url('/translate')로 redirect(재요청, 내부적으로 요청).
            res.redirect(`translate?lang=${parsedData['langCode']}&targetLanguage=${targetLanguage}&query=${query}`);

        } else { // 응답이 실패하였을 경우
            console.log(`error = ${response.statusCode}`);
        }

    }); 
});

// papago 번역 요청 전체 코드
app.get('/translate', (req, res) => {
    const url = 'https://openapi.naver.com/v1/papago/n2mt';

    // 서버에 보낼 데이터, 객체 형태로 작성
    const options = {
        url, // url: url과 같다
        form: { // 서버로 보낼 파라미터(source, target, text)를 넣는 부분
            source: req.query['lang'], // 작성한 언어 코드
            target: req.query['targetLanguage'], // 번역하고자하는 언어의 코드
            text: req.query['query'], // 번역하고자하는 텍스트
        },
        headers: {
            'X-Naver-Client-Id': clientId,
            'X-Naver-Client-Secret': clientSecret,
        },
    };

    // 실제 번역 요청 전송부분
    request.post(options, (error, response, body) => {
        if (!error && response.statusCode === 200) { 
            // const parsedData = JSON.parse(body); // JSON.parse() : String -> JS object로 변환(파싱, parsing)
            // console.log(parsedData);
            res.json(body); // front에 해당하는 app.js에 응답 데이터를 json형태로 파싱하여 전송
            // -> json() : JSON.stringify()가 적용된 메서드
        } else { 
            console.log(`error = ${response.statusCode}`);
        }
    });
});

// 서버가 실행되었을 때 몇 번 포트에서 실행시킬 것인지
app.listen(3000, () => console.log('http://127.0.0.1:3000/ app listening on port 3000'));
```  
  
  솔직히 이번은 그저 강사님을 따라가기 바빴다.  
  제대로 이해하지 못한 부분이 더 많았기 때문에 혼자 천천히 읽어 내려가며 이해볼수 있도록 해야겠다.  
  
