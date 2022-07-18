# Javascript  
  
  #### [ 2022-07-15 ]  
    
## 목차  
  * #### [[ 렌더링이란 ]](#렌더링이란)
  * #### [[ node란 무엇인가 ]](#node란-무엇인가)
  * #### [[ Javascript Web API ]](#javascript-web-api)
  * #### [[ Javascript 이벤트(Javascript Event) 추가와 제거 ]](#javascript-이벤트javascript-event-추가와-제거)  
  * #### [[ 이어서 보기 ]](#이어서-보기)  
  * #### [[ 돌아가기 ]](#돌아가기)  
    
      
-----------------------------------------------------------------------------------------------------------------------------------------------------    
   
* ### 렌더링이란  

  렌더링이란 논리적인 문서의 표현식을 그래픽 표현식으로 변형시키는 과정이다.     
  HTML,CSS, 자바스크립트 등 개발자가 작성한 문서가 브라우저에서 출력되는 과정을 말합니다.  
  사용자가 브라우저를 통해 웹 사이트에 접속하면, 서버로 부터 HTML, CSS 등 웹 사이트에 필요한 리소스를 다운로드 받습니다.   
  브라우저가 페이지를 렌더링 하려면 먼저 HTML 코드는 DOM, CSS는 CSSOM 트리를 생성해야합니다.  
  렌더링 과정은 다음과 같이 크게 2단계를 거쳐 이뤄집니다.
  
  1) DOM 요소와 스타일에 기반을 둔 레이아웃 계산  
  2) 계산된 요소의 화면 표현  
    
  그렇다면 DOM이란 무엇일까?  
    
      DOM은 Document Object Model의 약자이다. 직역하자면 문서 객체 모델이라고 한다.  
      웹 서비스 개발은 브라우저와 밀접한 관련이 있다. 모든 서비스는 사실 웹 브라우저를 바탕으로 실행이 되기 때문이다.    
      이 브라우저와 관련된 객체들의 집합을 브라우저 객체 모델(BOM: Browser Object Model)이라고 부르는데,       
      이 브라우저 객체 모델(BOM)을 이용해서 Browser와 관련된 기능들을 구성한다. DOM은 이 BOM  중의 하나이다.   
      브라우저 객체 모델(BOM)의 최상위 객체는 window라는 객체이다. DOM은 이 window 객체의 하위 객체이기도 하다.  
        
  ![image url](https://github.com/12OneTwo12/TIL/blob/main/Javascript/1_5IGcw4wzFutYn82PePUNag.jpg?raw=true)  
    
  문서 객체란 것이 무엇일까? 문서 객체란 html이나 body같은 html문서의 태그들을 JavaScript가 이용할 수 있는 객체(object)로 만들면 그것을 문서 객체라고 한다.   
  DOM은 넓은 의미로 웹 브라우저가 HTML 페이지를 인식하는 방식을 의미한다. 조금 좁은 의미로 본다면 document 객체와 관련된 객체의 집합을 의미할 수도 있다.  
  이제 DOM을 보게 되면 웹 브라우저가 html 페이지를 인식하는 방식을 이야기 하거나 문서 객체(document object)와  
  관련된 객체의 집합에 관한 이야기라는 것을 쉽게 추측할 수 있다.  
    
* ### node란 무엇인가    
  
  HTML문서에 관한 모든 것을 담고 있는, 계층적 정보 단위를 말한다.  
  HTML DOM은 노드(node)라고 불리는 계층적 단위에 정보를 저장하고 있다.  
  HTML DOM은 이러한 노드들을 정의하고, 그들 사이의 관계를 설명해준다.  
  아래 사진을 보며 조금 더 이해해보자.  
     
  ![image url](https://github.com/12OneTwo12/TIL/blob/main/Javascript/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C1515151515151551%20(2).png?raw=true)  
    
  element들은 전부 node인데, node는 element node와 text node로 이루어져있다고 보면 된다.  
  element node는 html이나 body,div,h1 이런것들을 의미하고 text node는 그 외 모든 텍스트를 의미한다고 보면 된다.  
    
* ### Javascript Web API

  API란 무엇일까, API란 Application Programming Interface(애플리케이션 프로그램 인터페이스)의 줄임말이다.  
  API는 손님(프로그램)이 주문할 수 있게 메뉴(명령 목록)를 정리하고, 주문(명령)을 받으면 요리사(응용프로그램)와 상호작용하여 요청된 메뉴(명령에 대한 값)를 전달합니다.  
  쉽게 말해, API는 프로그램들이 서로 상호작용하는 것을 도와주는 매개체로 볼 수 있습니다.  
    
  ![image url](https://github.com/12OneTwo12/TIL/blob/main/Javascript/API-%EC%89%BD%EA%B2%8C-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0.png?raw=true)  
    
    API의 역할은?  
      
  1. API는 서버와 데이터베이스에 대한 출입구 역할을 한다.  

      데이터베이스에는 소중한 정보들이 저장되는데, 모든 사람들이 이 데이터베이스에 접근할 수 있으면 안 된다.   
      API는 이를 방지하기 위해 우리가 가진 서버와 데이터베이스에 대한 출입구 역할을 하며, 허용된 사람들에게만 접근성을 부여해준다.  
       
  2. API는 애플리케이션과 기기가 원활하게 통신할 수 있도록 한다.  

      여기서 애플리케이션이란 우리가 흔히 알고 있는 스마트폰 어플이나 프로그램을 말한다.   
      API는 애플리케이션과 기기가 데이터를 원활히 주고받을 수 있도록 돕는 역할을 한다.  
       
  3. API는 모든 접속을 표준화한다.  

      API는 모든 접속을 표준화하기 때문에 기계/ 운영체제 등과 상관없이 누구나 동일한 액세스를 얻을 수 있다.  
      쉽게 말해, API는 범용 플러그처럼 작동한다고 볼 수 있다.  
     
       
* ### Javascript 이벤트(Javascript Event) 추가와 제거  

  전에 살펴봤듯이 이벤트(event)란 웹 브라우저가 알려주는 HTML 요소에 대한 사건의 발생을 의미한다.  
  User가 브라우저를 통해 주는 신호들은 이벤트가 될 수 있는데, 예를 들어 클릭이나 키보드 입력, 마우스의 이동 등 을 이야기한다.  
  이벤트를 추가하는 방법에는 여러가지가 있는데 하나씩 살펴보자.  
    
   * #### Event Handler attribute (이벤트 핸들러 어트리뷰트 방식)  

      ```html
      <h3>Event Handler attribute</h3>
      <button onclick="display()">clike me</button>
      <script>
          function display() {
              console.log('button clicked!');
          }
      </script>
      ```  
        
   * #### Event Handler property 방식  

      ```html
      <h3>Event Handler attribute</h3>
      <button id="btn-ev-prop">click me</button>
      ```  
      ```javascript
      const evPropButton = document.getElementById("btn-ev-prop");
      evPropButton.onclick = () => {console.log('button clicked by event property');}
      // 하나의 이벤트밖에 등록 불가
      evPropButton.onclick = () => console.log('버튼 눌려짐');
      ```
        
   * #### addEventListener method 방식  

      ```html
      <h3>addEventListener method way</h3>
      <button id="btn-add-ev-lsnr">click me</button>
      ```
      ```javascript
      // 함수 선언문 방식으로 작성
      function buttonHandler2() {
          console.log('double clicked');
      }

      function buttonHandler1() {
          console.log('one clicked');
      }

      addEvent.addEventListener('click', buttonHandler1)
      addEvent.addEventListener('dblclick', buttonHandler2);

      // 화살표 함수로 작성
      const buttonHandler3 = () => {
          console.log('mouserover');
      }

      // 버튼에 마우스를 올렸을 때 동작하는 이벤트 작성

      addEvent.addEventListener('mouseover', buttonHandler3);

      // function은 함수 선언 const는 객체 선언
      addEvent.addEventListener('mouseover', () => { 
          console.log('mouserover');
      }) // 화살표 함수를 콜백 함수 파라미터에 작성
      ```  
        
      이제 제거하는 방법을 알아보자.  다만 이벤트 핸들러의 제거는 콜백함수의 파라미터로 직접 익명함수를 작성하면 제거가 불가하다.  
        
   * #### Event handler property방식에서의 이벤트 제거  

      ```javascript
      console.log(evPropButton.onclick); // 현재 onclick 프로퍼티에 등록된 이벤트
      evPropButton.onclick = null; // null 할당으로 프로퍼티값 초기화
      ```  
        
   * #### addEventListener 방식의 이벤트 제거  

      ```javascript
      addEvent.removeEventListener('dblclick', buttonHandler2)
      ```  
         
* #### 이어서 보기  
#### [ Link ](https://github.com/12OneTwo12/TIL/blob/main/Javascript/readme7.md)  

* #### 돌아가기 
#### [ Link ](https://github.com/12OneTwo12/TIL) 
