# Jquery  
  
  #### [ 2022-09-08 ]  
  
  ## 목차  
  * #### [[ JQuery란 ]](#jquery란)  
  * #### [[ 사용방법 ]](#사용방법)  
  * #### [[ AJAX ]](#ajax)  
      
---------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### JQuery란  

  JQuery란 쉽게 말해, 자바스크립트를 더 간편하게 사용하게 해주는 자바스크립트 라이브러리이다.  
  HTML의 DOM 조작과 이벤트 제어, 애니메이션 그리고 Ajax까지 웹 화면을 다루는 라이브러리이다.  
  
  JQuery가 기본적으로 가진 철학은 "write less, do more"로 적게 쓰고 많이 쓰자이다.   
  개발자의 언어로 번역하면 "적은 코드로 많은 일을 하자"가 가장 어울리는 해석이라고 생각된다.   
  JQuery는 다음과 같은 기능을 제공한다.  
    
  - DOM과 관련된 처리를 쉽게 구현 할 수 있다.  
    
  - 규칙성을 가지고 이벤트를 처리 할 수 있다.  
    
  - 애니메이션 효과를 쉽게 만들 수 있다.  
    
  - AJAX 처리 방식을 편리하게 사용 할 수 있다.  

  그 밖에도 jQuery는 작은 양의 코드로도 많은 일을 할 수 있게 설계되어 있어 프로그래머가 아니어도 꽤 이해하기가 쉬운 구문을 가지고 있다.  
    
  * #### Javascript와 jQuery의 차이점을 보기 위한 예시
    
    **Javascript**
    ```javascript
    var titleElements = document.getElementsByClassName("title"); 

    for (var titleElement in titleElements) {
       titleElement.className = titleElement.className + " selected"; 
    }
    ```
    **JQuery**
    ```javascript
    $(".title").addClass("selected");
    ```

  이와 같이 jQuery는 작은 양의 코드로 Javascript로 작성된 많은 양의 코드와 동일한 동작을 할 수 있다.  
    
  설정 방법은 간단하다.  
    
  **CDN (Contents Delivery Network)**
  HTML의 <head></head> 사이에 아래의 코드를 삽입하면 별도의 설치 없이 사용할 수 있다.  
  물론 라이브러리를 받아서 파일의 위치를 지정해줘도 된다.  
  ```javascript
   <script src="https://code.jquery.com/jquery-latest.min.js"></script>
  ```
    
  * #### Jquery의 장점  

    Jquery의 장점에는 많은 것들이 있겠지만 가장 큰 것들은,  
    태그를 선택자로 한번에 선택하는 강력한 방법을 제공하고, 선택자로 선택한 태그를 제어하는 강력한 기능을 제공한다.    
      
* ### 사용방법  

  주된 사용 방법은 다음과 같다.  
  
  ```javascript
  $(“선택자”).함수
  ```
    
  함수는 너무나 많기 때문에 다 다루기는 어렵다.  
  필요할때마다 하나씩 찾아 보는 것이 나을거 같다.  
  
  * #### 선택자  

    선택자를 이용하는 방법은 당연하게도 JS와 같다.  
  
    ```javascript
    $("#태그 아이디")
    $(".태그 클래스")
    $("요소[속성=값]")
    $(this)
    ```
      
  * #### 몇가지 함수  

    몇가지 함수만 조금 알아보자.  
    우선 선택된 선택자의 값을 알아보는 ```val()```함수이다.  
      
    ```javascript
    $(선택자).val()
    ```
    이렇게 사용하면 선택자의 value를 얻을 수 있다.  
      
    다음은 태그의 내부 속성 확인 및 변경이 가능한 ```attr()```함수 이다.  
      
    ```javascript
    $("선택자").attr("src") // 특정 값을 확인
    $("선택자").attr("src", 변경값) // 특정 값을 변경
    $("선택자").attr({……}) // 여러값을 변경
    ```
      
    다음은 css속성 여부 확인 및 변경이 가능한 ```css()```함수 이다.  
      
    ```javascript
    $("선택자").css("backgroundColor") // 특정 값을 확인
    $("선택자").css("backgroundColor", 변경값) // 특정 값을 변경
    $("선택자").css({……}) // 여러값을 변경
    ```
      
    다음은 html 형태로 값을 얻고, html 형태로 문자 변경을 해주는 ```html()```함수 이다.  
      
    ```javascript
    $("선택자").html() // 선택자의 값을 확인
    $("선택자").html("홍길동") // 선택자의 값을 변경
    $("선택자").text("<h2>텍스트</h2>") // 선택자의 값을 순수텍스트로 변경
    ```
      
  * #### JQuery 이벤트 함수  

    한가지 중요한 함수가 있는데, 페이지가 로딩이 완료 되고나면 스크립트를 실행하게 하는 ```document.ready```라는 함수가 있다.  
      
    사용 방법은 마찬가지로 간단하다.  
      
    ```javascript
    $(document).ready(function() {
        // ...
    });
    ```
    이러한 방식으로 사용하면 된다.  
      
    간단한 예로,  
      
    ```javascript
    <script>
        
        $(document).ready(function(){
            
            //js 이벤트 
            let btn = document.getElementById("btn");
            btn.onclick = function() {
                console.log(1);
            }
        });

    </script>

    <button type="button" id="btn">이벤트 등록</button>
    ```

    코드가 이러한 진행 순서라면 ```document.ready```가 선언되지 않았다고 가정하면 btn이라는 아이디를 가진 객체가 아직 없음으로  
    위 코드는 실행되지 않았을 것이다.  
    그러나 ```document.ready```가 선언되면서 코드가 위에 선언되었다고 해도, 페이지를 로딩하고 난 후 적용되기 때문에,  
    문제 없이 코드가 작동한다.  
      
    그리고 역시 JQuery에도 마찬가지로 이벤트 함수들이 있는데,  
    먼저 ```click```부터 살펴보자. 이름에서 알 수 있듯, 클릭 이벤트가 일어났을때 작동하게 하는 함수 이다.  
      
    ```javascript
    $("선택자").click(function(){
    }
    ```
      
* ### AJAX  

  AJAX란 저번에 한번 살펴봤다, 자바스크립트를 이용해서 비동기식으로 서버와 통신하는 것을 이야기하는데,  
  비동기란 여러 일이 동시에 발생한다는 뜻이다.  
  이는 쉽게 생각하면 화면이동 없이 서버와의 통신을 처리한다고 보면된다.  
  서버와 통신할때는 역시 JSON이라는 형식을 사용한다.  
    
  AJAX의 문법 역시 간단하다.  
    
  **AJAX문법**
  ```javascript
  $.ajax({
    속성
  })
  ```
    
  **예시**
  ```javascript
    <script>
        $("#btn2").click(function(){

            console.log(1);

            $.ajax({
                type : "post",
                url : "http://localhost:8181/getJSON",
                data : JSON.stringify({
                    "sno" : 3,
                    "first" : "data",
                    "second" : "data"   
                }),
                contentType : "application/json", // 보낼 데이터에 대한 형식, 타입(producer)
                dataType : "json", // 받을 데이터에 대한 타입, 형식 (json, text, html, xml.... )
                success : function(data){
                    console.log(data);
                    console.log(2);
                },
                error : function(status,err){
                    console.log(status, err);
                }

            })

            console.log(3);

        });

    </script>
  ```
  
  위 실행 순서를 살펴보면 로그에는 1,3,2순으로 남는다.  
  이러하기때문에 비동기라고 부르는 것이다.  
    
  

    
