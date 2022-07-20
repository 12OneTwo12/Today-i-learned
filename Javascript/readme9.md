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
                            <p class="colorful-font">playdata</p>
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
  


 
