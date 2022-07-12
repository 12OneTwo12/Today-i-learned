# CSS  
#### [ 2022-07-12 ]  
  
## 목차  
 * #### [[ CSS란 ]](#css란)  
 * #### [[ CSS를 적용하는 방법 ]](#css를-적용하는-방법)   
 * #### [[ Inline Style ]](#inline-style)  
 * #### [[ Internal Style ]](#internal-style)  
 * #### [[ External Style ]](#external-style)  
 * #### [[ 한 가지 궁금한 점 ]](#한-가지-궁금한-점)  
 * #### [[ Inline, Internal, External 한번에 보기 ]](#inline-internal-external-한번에-보기)   
 * #### [[ 이어서 보기 ]](#이어서-보기)  
        
--------------------------------------------------------------------------------------------------------------------------------------------------------
  
    어제 작성했던 html 파일이 내가 보던 웹 사이트들에 비해 너무 단조로워 보였다.  
    그러기에 조금 꾸며보고자 했다.  
    어떻게 해야할까.  
    찾아보니 CSS를 이용하면 된다고 한다.  
    그렇다면 CSS는 무엇일까?  
      
* #### CSS란  
    
  ![image url](https://github.com/12OneTwo12/TIL/blob/main/Html/og.jpg?raw=true)
    
      CSS는 Cascading Style Sheets의 약자인데, 마크업 언어가 실제 표시되는 방법을 기술하는 스타일 언어(style sheet language)로, HTML과 XHTML에 주로 쓰이며, XML에서도 사용할 수 있다.  
  간단하게 설명한다면 HTML은 웹사이트에서 화면에 표시되는 정보이며, CSS는 웹 사이트에서 화면에 표시되는 정보 들을 꾸며주는 역할을 한다.  
    
  예를 보면 더 쉽게 이해할 수 있는데 우리가 흔히 이용하는 네이버 웹 사이트에서 css가 없어졌다고 가정해보자.  
  
  ![image url](https://github.com/12OneTwo12/TIL/blob/main/CSS/naverwithoutcss.png?raw=true)  
    
  평소 우리가 보던 네이버와는 사뭇 다른 모습이다.  
  마치 무엇인가 많이 비어있는 것처럼 보이는 별로 손이 잘 안가게 되는 웹 사이트 처럼 생겼다.  
  실제 네이버 사이트와 비교해보면 더욱 잘 느낄 수 있는데                  [참조. [NAVER web site link]](https://www.naver.com/)   
  이처럼 우리의 눈은 이미 CSS를 이용한 웹 사이트들을 항상 겪고 있었다고 볼 수 있다.  
  그렇다면 내가 만든 html에도 적용 해보고자 한다.  
      
  
* #### CSS를 적용하는 방법    
  
  CSS를 적용하는 방법에는 크게 3가지가 있다고 한다.  
    
      *   Inline Style 적용 방식  
       
      *   Internal Style 적용 방식  
        
      *   External Style 적용 방식  
  
  * #### Inline Style  
  
    
      Inline Style이란, HTML 요소 내부에 style 속성을 사용하여 CSS 스타일을 적용하는 방법이다.  
      간단한 예제를 봐서 이해해보자.  
        
      ```html
        <html>
          <body>
            <h1 style="color:blue;">
              이 문장은 Inline Style로 꾸며봤습니다.
            </h1>
          </body>
        </html>
      ```  
        
       실행해본 결과 글씨가 파란색으로 변했다.  
       style이라고 하는 attribute를 지정하여 글씨의 색상을 파란색이라는 값(value)으로 바꾼 것이다.  
       그러나 이번엔 간단한 코드 였기에 바로 가능했지만 문장이 여러개라면 어떻게 해야할까?  
       매번 모든 태그들에 style을 지정해줘야 하는걸까?  
       상상만 해도 여간 불편한게 아닐 것이다. 다른 방법이 없을까?  
       
  * #### Internal Style  
  
       Internal Style 이란, HTML 문서 내의 head 태그에 style 태그를 사용하여 CSS 스타일을 적용하는 방법이다.  
       마찬가지로 예제를 봐서 이해해보자.  
       
       ```html
        <html>
          <head>
            <style>
              .internal{
                  color: blue; 
               }
            </style>
          </head>
          
          <body>
            <h1 class="internal"> 이 문장은 Internal Style로 꾸며봤습니다.</h1>
          </body>
        </html>
       ```  
  
      실행결과 마찬가지로 글씨가 파란색으로 나왔다.  
      h1 태그를 internal이라는 class로 분류하였고,  
      head 태그 안에 style 태그를 사용하여 internal이라고 부르는 class의 글자 색을 파란색으로 바꿔줬다.  
      그렇다면 이것보다 주로 쓰이는 방법도 있을까?  
        
  * #### External Style  
   
      External style을 이용하는 방법은 웹 사이트 전체의 스타일을 하나의 파일에서 변경할 수 있도록 해준다. 외부에 작성된 이러한 스타일 시트 파일은 .css 확장자를 사용하여 저장되고, 스타일을 적용할 웹 페이지의 <head>태그에 <link>태그를 사용하여 외부 스타일 시트를 포함해야만 스타일이 적용된다.  
      마찬가지로 예제를 봐서 이해를 도와보자.  
      css파일과 html파일이 같은 폴더에 있다는 가정하에 진행하도록 하겠다.  
        
      ```html 
        <html>
          <head>
  
            <link rel="stylesheet" href="External Style.css">

          </head>
          <body>
            <h1 id="external"> 이 문장은 External Style로 꾸며봤습니다. </h1>
          </body>
        </html>
      ```  
    
      실행해 보았더니 그 전과는 달리 문장의 색이 변하지 않았다.  
      당연했다. link 태그를 통해 css파일을 호출했지만 나는 아직 External Style.css 라는 css파일을 만들지 않았기 때문이다.  
      html 문서가 있는 폴더에 css파일을 만들어 주고 다음과 같이 적어줬다.  
     
      ```css
        #external{
          color: blue;
          }
      ```  
    
      다시 한번 실행 해보니 이제 정상적으로 글자 색이 변했다.  
      이처럼 CSS파일을 따로 작성하여 html에서 호출해 사용하게 되면 유지보수면에서도, 가독성면에서도 훨씬 나을 것 같다는 생각이 들었다.  
      물론 그렇다고 External Style만 사용하고 그것이 정답이라는 느낌은 아니였다.  
      다른 스타일들도 제각기 적재적소에 사용해야 좋은 프로그램이 될 것같다.  
      
* #### 한 가지 궁금한 점  
    
      그렇다면 class와 id는 무엇이고 .(마침표)와 #은 무엇일까?  
      html의 특정 요소에만 다른 효과를 주고 싶을 때, 해당 요소에 클래스명 또는 아이디값을 할당하여 처리가 가능하다. 클래스(class)와 아이디(id)는 얼핏 보기엔 똑같은 기능을 하는 것 같지만, 알고 보면 이 둘은 차이점을 가지고 있다. 지금 시점에서는 간단하게 우선순위의 차이가 있다 정도로 이해하게 됐다. 명령이 겹치게 됐을 때 id > class > 태그순으로 적용 된다는 차이점을 가지고 있다.  
      그럼 .(마침표)와 #은 무엇일까? 상당히 간단했다.  
      마침표는 class를 호출할때 쓰고, #은 ID를 호출할 때 사용이 되었다.
      알고 보게 되니 위 예제가 더욱 이해가 됐다.  
  
* #### Inline, Internal, External 한번에 보기  
    
    Inline과 Internal 그리고 External을 한번에 볼 수 있는 예제를 준비했다. css파일은 다음과 같다.  

  ```css
    .external{
       color: mediumslateblue; font-size: 50px;
      }
  ```
   
  예제  
    
```html

  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>illine_internal_external</title>
      <style>
          .internal{
              color: crimson; 
              font-size: 40px;
             }
      </style>

         <link rel="stylesheet" href="inline_internal_external.css">

      </head>
      <body>
        <h1>css 스타일 적용 방식(css styling)</h1>
        <hr>

          <p style="color: teal; font-size: 30px;">Inline style로 적용된 css.</p> <!-- 폰트 색상은 teal, 폰트 크기는 30px-->
          <p class="internal">Internal style로 적용된 css.</p> <!-- class선택자 활용, internal이라는 value 지정, 폰트 색상은 crimson, 폰트 크기는 40px-->
          <p class="external">External style로 적용된 css.</p> <!-- css파일에 스타일 적용, 폰트 색상은 mediumslateblue, 폰트 크기는 50px-->
      </body>
</html>  
```  
    
  위 결과를 실행 해보자 결과물은 다음과 같았다.  
    
  ![image url](https://github.com/12OneTwo12/TIL/blob/main/CSS/iie.png?raw=true)  
    
  이처럼 각자 원하는 바대로 실행된 것을 볼 수 있었다.  
  css의 3가지 스타일 적용 방식을 이해 할 수 있는 시간이였다.  
    
* ### [이어서 보기](https://github.com/12OneTwo12/TIL/blob/main/CSS/readme2.md)  
