# CSS
#### [ 2022-07-12 ]  
  
## 목차  
  * #### [[ 기본 선택자(CSS Selectors) ]](#기본-선택자css-selectors)  
  * #### [[ 조합 선택자(CSS Combinator Selectors) ]](#조합-선택자css-combinator-selectors)  
  * #### [[ 코드 순서(CSS Overriding) ]](#코드-순서css-overriding)  
  * #### [[ 적용범위, 명시도 or 구체성(CSS Specificity) ]](#적용범위-명시도-or-구체성css-specificity)  
  * #### [[ 상속(CSS Inheritance) ]](#상속css-inheritance)  
  * #### [[ Text 폰트 ]](#text-폰트)  
  * #### [[ 크기 단위 ]](#크기-단위)
  * #### [[ HTML Element의 display 속성 2가지 ]](#html-element의-display-속성-2가지)    
  * #### [[ width와 height ]](#width와-height)  
  * #### [[ 박스 모델(CSS Box model) ]](#박스-모델css-box-model)  
-----------------------------------------------------------------------------------------------------------------------------------------
      
        
    
* #### 기본 선택자(CSS Selectors)      
  
  이번에는 CSS의 선택자에 대해 알아보려고 한다. 
  
  선택자란, 말 그대로 선택을 해주는 요소이다. 이를 통해 특정 요소들을 선택하여 스타일을 적용할 수 있게 되는데.  
  저번 시간에 잠깐 알아본 class나 id또한 선택자였다.  
  선택자는 다음과 같이 사용되는데  

![image url](https://github.com/12OneTwo12/TIL/blob/main/CSS/yrkim-140327-selector-04.png?raw=true)  
  
  어떤 종류의 선택자들이 있는 지 살펴보자.  
    
   * #### 전체 선택자(*, Universal Selector)  
  
         전체 선택자는(*, Universal Selector)는 말 그대로 모든 요소를 선택한다.  
           
   * #### 타입 셀렉터(Type Selector)  
     
         타입 선택자(Type Selector)는 h1, p, div, span 등 HTML 요소(Element)를 선택하는 선택자이다.  
     
   * #### 클래스 셀렉터(Class Selector)
     
         저번 시간에 살펴 본 Class를 말한다.  
     
   * #### 아이디 셀렉터(ID selector)
     
         저번 시간에 살펴 본 ID를 말한다.  
       
  선택자들을 한 번에 볼 수 있는 예제를 준비했다.  
      
  ``` html
    <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Selectors</title>
          <link rel="stylesheet" href="simple_selectors.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
           href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap"
            rel="stylesheet"
         />
      </head>
      <body>
          <h1>CSS 기본 선택자(CSS Selectors)</h1>
          <hr />

          <h2>1. 전체 선택자(*, Universal Selector) - 전체 폰트 적용</h2>

          <h2>2. 타입 셀럭터(Type Selector), 해당 타입은 전부 적용됨</h2>

          <p class="class-selector">3. 클래스 셀렉터(Class Selector), 해당 클래스는 전부 적용됨</p>

          <p class="class-selector">Class selector 텍스트</p> 

          <p class="class-selector">Class selector는 중복 적용됨</p>

          <p id="id-selector">4. 아이디 셀렉터(ID selector) </p>

          <p id="id-selector">ID Selector도 중복 적용은 되지만,
              <strong style="color:crimson">
                 <u>
                      한 번만 사용해야함.
                 </u>
              </strong>
         </p>
      </body>
</html>
```  
```css
      .external{
         color: mediumslateblue; font-size: 50px;
      }
```  
  
  예제의 결과물을 보게되면 확실히 선택자가 어떤 일을 하는지 이해할 수 있었다.  
    
* #### 조합 선택자(CSS Combinator Selectors)  
    
  조합 선택자 혹은 결합자란,
      하나의 선택자가 아닌 선택자들을 결합하여 세밀하게 찾을 수 있는 것이 바로 결합자(Combinator)이다. 결합자는 크게 4가지 종류로 볼 수 있다.  
        
    * #### 자손 선택자 ( 'span' 'space key' '/span', Descendant selector)
              A B
              ex).parent .child

              자손 결합자는 A 를 만족하는 요소의 자손(하위) 요소 중 B 를 만족하는 요소를 가르킨다. (A의 자식, A의 자식의 자식, A의 자식의 자식의 자식...) 
              실제로 처음에 많이 사용하고, 웬만한 경우를 모두 처리할 수 있기 때문에 익숙할 것이다. 
              하지만 이것을 위주로 사용하는 습관이 생기면 안 좋은 상황이 발생할 수 있다. 
              그 예로는 본인이 원하지 않았던 자손들에게까지 영향을 끼치는 것이다.  
  
    * #### 자식 선택자 ( 'span' '>' '/span', Child selector)
        
              A > B
              ex) .praent > .child
                
              자식 결합자는 A 를 만족하는 요소의 자식 요소 중 B 를 만족하는 요소를 가르킨다. (A의 자식)
              자손 결합자는 모든 자손들을 가르킨다면, 자식 결합자는 본인의 자식만을 가르킨다.
              본인은 이 결합자를 통해, 추후에 요소들의 관계와 작성된 CSS 목적을 파악하기도 한다.  
  
    * #### 인접 형제(자매) 선택자 ('span''+''/span', Adjacent sibling selector)  
      
              A + B
              ex) h2 + p
                
              인접 형제 결합자는 A 의 바로 즉시 오는 다음 형제 요소를 만족하면서 B 를 만족하는 요소를 가르킨다.
                
    * #### 일반 형제(자매) 선택자 ('span''~''/span', General sibling selector)
    
              A ~ B
              ex) p ~ span
                
              일반 형제 결합자는 A 의 다음 형제 요소를 만족하면서 B 를 만족하는 요소를 가르킨다.  
                
     CSS Combinator Selectors를 모두 활용한 예제를 보면 이해가 쉬울 거 같다.  
       
``` html
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>combinator_selectors</title>
      <link rel="stylesheet" href="combinator_selectors.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <h1>CSS 조합 선택자(CSS Combinator Selectors)</h1>
      <hr />

      <h2>1. 자손 선택자 (<span>'space key'</span>, Descendant selector)</h2>
      <div class="descendent-selector">
        <p>Paragraph element1.</p>
        <p>Paragraph element2.</p>
        <div class="nested-div">
          <p>중첩된 div 내부에 있는 Paragraph element3까지 적용.</p>
        </div>
      </div>

      <p>Paragraph element4</p>
      <p>Paragraph element5</p>

      <h2>2. 자식 선택자 (<span>'>'</span>, Child selector)</h2>

      <div class="child-selector">
        <p>Paragraph element1</p>
        <p>Paragraph element2</p>
        <div class="nested-div">
          <p>중첩된 div 내부에 있는 Paragraph element3까지는 적용되지 않음.</p>
        </div>
        <p>Paragraph element4</p>
      </div>

      <p>Paragraph element5</p>


      <h2>3. 인접 형제(자매) 선택자 (<span>'+'</span>, Adjacent sibling selector)</h2>
      <div class="adjacent-sibling-selector">
          <div>
              <p>Paragraph element1</p>
              <p>Paragraph element2</p>
          </div>

          <p>Paragraph element3</p>
          <p>Paragraph element4</p>
      </div>

      <p>Paragraph element5</p>


      <h2>4. 일반 형제(자매) 선택자 (<span>'~'</span>, General sibling selector)</h2>
      <div class="general-sibling-selector">
          <div>
              <p>Paragraph element1</p>
              <p>Paragraph element2</p>
          </div>

          <p>Paragraph element3</p>
          <p>Paragraph element4</p>
      </div>

      <p>Paragraph element5</p>


    </body>
  </html>
```  
  
```css
/* General, reset.css */
* {
    font-family: "Playfair Display", serif;
}

span{
    color: seagreen;
}

/* 자손 선택자       * 이부분 */ 
.descendent-selector p {
    font-size: 25px;
    color:sienna;
}

/* 자식 선택자 */
.child-selector > p {
    font-size: 30px;
    color: steelblue;
}

.child-selector > .nested-div {
    font-size: 10px;
    color: red;
}

/* 인접 형제(자매) 선택자 */
div + p {
    font-size: 30px;
    color: turquoise;
}

.adjacent-sibling-selector + p {
    font-size: 30px;
    color: tomato;
}

```  
  실행 해보게 되면 그래도 좀더 이해 되는 거 같다. 물론 아직까지 전부 제대로 이해했다고 자랑스럽게 말하긴 어려울 거 같다.  
    
  
* #### 코드 순서(CSS Overriding)  
    
  문득 한가지 궁금한 점이 생겼다.    
  Internal style과 External style을 중복 지정 했을 경우는 어떤 결과가 나올까?  
  Internal로 지정한 결과가 나올까 External로 지정한 결과가 나올까?  
  바로 한번 해보기로 했다.  
    
```html
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS 코드 순서(CSS Overriding)</title>

      <style>
          .internal-vs-external{
              background-color: burlywood;
          }
      </style>
      <link rel="stylesheet" href="overriding.css">
  </head>
  <body>

      <h1>CSS 코드 순서(CSS Overriding)</h1>
      <hr>

      <h2>같은 type으로 중복 지정하였을 경우</h2>
      <p>무슨 색이 될까?</p>

      <h2>Internal vs External style 우선 순위</h2>
      <div class="internal-vs-external">
          <p>Internal vs External style</p>
          -> 가장 나중(아래, 적용하고자 하는 코드와 더 가까운)에 적용된 style이 적용됨.
          internal과 external의 상하 위치 변경
      </div>
  </body>
</html>
```  
```css
  p{
      font-size: 15px;
      color: tomato;
  }

  p{
      color: mediumpurple;
  }

  .internal-vs-external {
      background-color: mediumspringgreen;
  }
 ```  
   
  실험 결과는 가장 나중(아래, 적용하고자 하는 코드와 더 가까운)에 적용된 style이 적용됐다.  
  그렇다면 inline style은 어떨가?  
  결과는 inline의 압승 이였다.  
  이로써 우선순위가 [ inline > 가장 나중(아래, 적용하고자 하는 코드와 더 가까운)에 적용된 style > 나머지 ] 로 확인됐다.  
  이와 같이 어떤 명령을 우선적으로 실행하는 가에 대한 것을 CSS Specificity 라고 한다.  
  
* #### 적용범위, 명시도 or 구체성(CSS Specificity)  
   
  지금까지 내가 알게된 것들을 간단한 예제를 만들어 실험해보고자 한다.  
  이론적인 것을 보는 것보다 결과로 보는게 더욱 직관적으로 이해 할 수 있는 것 같다.  
    
```html
<html lang="en">

  <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>CSS Specificity</title>
      <link rel="stylesheet" href="specificity.css" />
  </head>

  <body>
      <h1>CSS 적용범위, 명시도 or 구체성(CSS Specificity)</h1>
      <hr />

      <p>Universal Selector</p>
      <p>타입 or 태그 선택자(Tag or Type Selector)</p>
      <p class="class-selector">클래스 선택자(Class Selector)</p>
      <p class="class-selector" id="id-selector">아이디 선택자(Id Selector)</p>
      <p class="class-selector" id="id-selector" style="color: blue;">인라인 스타일(Inline style)</p>

  </body>

</html>
```
```css
*{ /* 전체 선택자, Asterisk 기호 */
    color: red;
}

/* 타입, 태그 선택자 */
p{
    font-size: 30px;
    color: orange;
}

/* 클래스 선택자, .(dot)기호를 활용 */
.class-selector{
    color: aqua;
}

/* 아이디 선택자, #(hashtag) 기호 활용 */
#id-selector{
    color: green;
}
```  
  
  결과는 Inline style > Id Selector > Class Selector > Tag or Type Selector > Universal Selector 순이였다. 
  이러한 명시도들을 확인 할 수 있는 사이트또한 따로 있었다.  [ 명시도 계산 ](https://specificity.keegan.st/)
  
* #### 상속(CSS Inheritance)  

  CSS 상속(CSS Inheritance)이란, CSS에도 다른 프로그래밍 언어들처럼 상속(Inheritance)이라는 개념이 있다. 하위 엘리먼트에서 어떤 CSS 속성을 명시하지 않은 경우, 기본적으로 상위 엘리먼트에 적용된 스타일이 하위 엘리먼트에도 적용되는 것을 뜻한다.  
  마찬가지로 예제를 보며 이해해 보자.  
    
```html
<html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="inheritance.css" />
      <title>CSS Inheritance</title>
    </head>
    <body>
      <h1>CSS 상속(CSS Inheritance)</h1>
      <hr />

      <h2>
        상속되는 속성 : 주로 font 관련 속성들이 상속됨(font-style, color,
        text-align(정렬) 등)
      </h2>
      <div class="disney">
        <div class="mickey">미키마우스</div>
        <div class="mini">미니마우스</div>
        <div class="donald">도날드덕</div>
      </div>

      <h2>상속되지 않는 속성 ex) border</h2>
      <p>이 문단 내부에는 <em>강조된 텍스트</em>가 있습니다.</p>

      <h2>강제 상속: inherit</h2>

      <div id="sidebar">
        <h3>sidebar text</h3>
      </div>
    </body>
</html>
```
```css
.disney {
    color: firebrick;
}

p{
    border: dashed 2px;
}

h3{
    color: green;
}

#sidebar{
    color: blue;
}

#sidebar h3 {
    color: inherit; /* 강제로 상속 */
}
```  
  
  마찬가지로 예제를 실행해보니 이해가 쉬웠다.  
  div로 만들어진 분류 아래에 있는 것들은 상위 폴더에 적용된 항목들이 하위 폴더에도 적용 되는 것을 칭한다라고 이해가 됐다.  
  상속되는 속성은 주로 font 관련 속성들이 상속된다.(font-style, color, text-align(정렬) 등)  
  상속되지 않는 속성도 존재하는데 ex)border 강제로 상속할 수 있는 방법또한 있다는 걸 알게 됐다. 강제 상속: inherit  
    
* #### Text 폰트  

  이제 기본적인 것들은 조금은 이해가 된거같다.  
  어제 만들었던 html을 제대로 꾸며보기 위해 default값으로 설정된 폰트가 아니라 따로 폰트를 적용하고자 했다.  
    
    *  문법  
  
                  font-family	글꼴 (굴림, 돋움, …)  
                  font-style	이탤릭체 등의 글꼴의 스타일 지정  
                  font-weight	글자 두께  
                  font-variant	글꼴 변형 (소문자를 대문자로 바꾸는 등의)  
                  font-size	글자 크기  
                  line-height	줄 간격  
                  
    *  폰트 등록  
  
        [ 구글 폰트 사이트 ](https://fonts.google.com/) 에서 마음에 드는 폰트를 찾아 링크를 복사하여 head란에 붙여넣는다.  
 
        ```html
          <head>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Lora:wght@500&display=swap" rel="stylesheet">
          </head>
        ```  
          
        그리고 아래 보이는 CSS rules to specify families 란에 적힌 문구로 호출한다.  
        ex) font-family: 'Lora', serif;  
          
        마찬가지로 예제.  
          
```html
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS Text / Font-family / Units</title>
      <link rel="stylesheet" href="text_font_units.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&family=Oswald&family=Raleway:ital,wght@1,300&display=swap" rel="stylesheet">
  </head>
  <body>
      <h1>CSS Text / Font-family / Units</h1>

      <h2>Text / Font-family</h2>
      <table class="tbl"> <!-- 표 만드는 태그 -->
          <tr> <!-- table row의 줄임 표현, 한 행 -->
              <th>Text</th> <!-- table head의 줄임 표현-->
              <th>Color</th>
              <th>Font-family(style)</th>
          </tr>
          <tr class="browser-color">
              <td>브라우저 기본 폰트 텍스트</td> <!-- table data의 줄임 표현 -->
              <td>red</td>
              <td>Browser default</td>
          </tr>
          <tr class="google-hex">
              <td>Google Web Font 텍스트</td>
              <td>#a52a2a(brown hex color)</td>
              <td>Oswald</td>
          </tr>
          <tr class="google-rgb">
              <td>Google Web Font 텍스트</td>
              <td>RGB(0, 255, 0)</td>
              <td>Fuzzy Bubbles</td>
          </tr>
          <tr class="google-rgba">
              <td>Google Web Font 텍스트</td>
              <td>RGBA(0, 0, 255, 0.4)</td>
              <td>Raleway</td>
          </tr>
      </table>

      <h2>Units</h2>
      <hr><br>

      <div class="px-parent" style="Color:blue">
          px-parent text
          <div class="px-child">
              px-child text
          </div>
      </div>

      <br><hr>
      <!-- em : (Relative to parent element) %와 동일.-->
      <div class="em-parent">
          em-parent text
          <div class="em-child">em-child text</div>
      </div>

      <br><hr>
      <!-- rem : (Relative to root element) 루트에 지정된 폰트사이즈의 크기에 따라 지정.-->
      <div class="rem-parent">
          rem-parent text
          <div class="rem-child">
              rem-child text
          </div>
      </div>
      <br><hr>
  </body>
</html>
```  
```css
html{
    font-size: 22px;
}

table, th, td{

    text-align: center; /*tac 텍스트 중앙으로 정렬 */

    border-collapse: collapse;
    border: 1px solid black; /* 경계선 */

    border-spacing: 10px;
    margin: 0 auto; /* 중앙 정령 */
}

tr, td{
    padding: 10px; /* 안쪽 여백 */
}

.browser-color{
    color: red;
}

.google-hex{
    color: #a52a2a;
    font-family: oswald;
}

.google-rgb{
    color: RGB(0, 255, 0);
    font-family: Fuzzy Bubbles;
}

.google-rgba{
    color: RGBA(0, 0, 255, 0.4);
    font-family: Raleway;
}

.px-parent{
    font-size: 32px;
    /* font-size:16px; browser default px */
}

.px-child{
    font-size: 16px;
}

.em-parent{
    font-size: 3em;
    /* 1em = browser default 값 */
    /* 3em = browser default 300% */
}

.em-child{
    font-size: 0.5em;
    /* 부모의 절반 */
}

.rem-parent{
    font-size: 3rem;
}

.rem-child{
    font-size: 0.5rem;
    /* browser default 값의 절반 */
}
```  
  
  예제 안에 있는 문법들을 하나 씩 보려한다.  
    
  먼저 table은 표를 만들 수 있는 태그이다.  
  th는 table head의 약자이고 td는 table data의 약자다.  
  쉽게 이해하자면 이렇다.  
 
  ![image url](https://github.com/12OneTwo12/TIL/blob/main/CSS/table%20element%20img_2.png?raw=true)  
    
  #a52a2a와 RGB(0, 255, 0), 그리고 RGBA(0, 0, 255, 0.4)는 색을 지정하는 역활을 한다.  
  그렇다면 px,em,rem,%의 차이점은 무엇일까?  
    
* ### 크기 단위  

  * ##### px
    
        px은 우리가 알고 있는 픽셀값이다. 
        우리가 해상도를 지정할 때 1920x1080 로 지정한다면, width(너비)는 1920px이고, height(높이)는 1080px이라는 것이다.
        
  * ##### %  

        %는 사용자가 보이는 화면에서 차지하는 비중입이다. 
        가령 속성값이 70%라면 창이 줄어들든 늘어나든 사용자 입장에서 보이는 화면의 70%만 출력되게 된다. 즉, 부모가 만들어준 공간안에서의 너비 비율로 볼 수 있다.  
        
  * ##### em   

        em단위는 em단위가 있는 곳의 폰트사이즈의 배수이다.
        예를들어 h1의 폰트 속성값이 1.5em, h2의 폰트 속성값이 1.2em, p의 폰트 속성값이 1em이라면, 
        h1의 폰트사이즈는 1.5*16px=24px이고, h2의 폰트사이즈는 1.2*16px=19.2px이며, p의 폰트사이즈는 16px이 되는 것이다. 
        p의 width가 가령 20em이라면, 20*16px=320px이 된다. em은 기준이 되는 값만 수정을 하면 나머지는 비율대로 조정을 해줄 수 있다.
  
  * ##### rem  
  
        rem단위는 문서의 기본값의 배수입니다. em과 비슷하지만 em단위는 em단위가 쓰여진 곳(부모 태그)의 기준값에 따라 달라지지만, 
        rem단위는 문서 전체의 기본값의 배수이므로, 문서 전체의 기준값에 따라 달라진다. 
        만약, 문서 전체의 기준값을 바꿔야 한다면, style에 :root{font-size:16px} 의 코드를 달아주시면 된다. 
        사이트 전체적으로 font-size를 조정해야 한다면 root의 속성값을 변경해주면 된다.  
    
    
* #### HTML Element의 display 속성 2가지   

    HTML에서 display에는 두 가지 속성이 있는데, Block과 Inline이다.  
    block 속성은 무조건 한줄을 점유하고 있는 것을 말하며, 다음 태그는 무조건 줄바꿈이 적용된다. 대표적인 태그는 p와 div가 있다.  
      
    Inline의 대표적인 태그로는 span을 예로 들 수 있는데, text 크기만큼만 공간을 점유하고 줄바꿈을 하지 않는다.  
      
    ![image url](https://github.com/12OneTwo12/TIL/raw/main/Html/laknfglaknglvaekrf.png?raw=true)  
      
    이렇게 말이다.  
        
* #### width와 height    

    width와 height 속성은 각각 가로 길이, 세로 길이를 의미한다.  
    이는 다양하게 활용 될 수 있는데, 위에 말한 div, span에도 활용 될 수 있다.  
    예제를 통해 쉽게 이해해보도록 하겠다.  
      
```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS width / height</title>
    <link rel="stylesheet" href="width.css" />
  </head>
  <body>
    <h1>CSS width / height</h1>
    <hr />
    <div class="width-default">
      <h2>Default width of block / inline element</h2>
      <div style="border: 2px dashed orange">
        div block element이기 때문에 기본적으로 default width 100%를 가지고
        있음.
      </div>
    </div>

    <br />

    <span style="border: 2px dashed brown"
      >span은 inline element이기 때문에 자신의 영역 크기만큼만의 width가
      지정되어 있음.(auto)
    </span>

    <br />
    <div class="width-px">
      <h2>width with px(pixel) units</h2>
      <div style="border: 2px dashed orange">px이 적용된 block element.</div>
      <br />
      <a href="" style="border: 2px dashed brown"
        >px이 적용된 inline element.</a
      >
    </div>

    <div class="width-pct">
      <h2>width with %(percent) units</h2>
      <div style="border: 2px dashed orange">%가 적용된 block element.</div>
      <br />
      <span style="border: 2px dashed brown">%가 적용된 inline element.</span>
    </div>
    <div class="height-default">
      div의 height는 기본 값(auto)으로 content 영역만큼의 크기를 가짐.
  </div>

  <br />
  <div class="height-px">
    <h2>height with px(pixel) units</h2>
    <div>px이 적용된 block element.</div>
  </div>
  
  <br><br><br>
  <div class="height-pct">
    <h2>height with %(percent) units</h2>
    <div>%가 적용된 div</div>
  </div>
  </body>
</html>
```  
```css
.width-default{
    width:80%;
    /* div의 블락은 기본이 100%인데 width를 이용해 길이를 조정 */
}

.width-px{
    width: 300px;
}

.width-pct{
    width:50%;
}
.height-default{
    /* border: 2px solid greenyellow; */
    border-width: 2px;
    border-style: dashed;
    border-color: greenyellow;
}

/* .height-px{
    height: 300px; width: 70%;
    border: 2px dashed skyblue;
} */

html, body{
    /* height: 100%; */
    height: 100vh;
    /* viewport height의 줄임말 */
}

.height-pct{
    border: 2px dashed tomato;
    height: 50%;
}
```  
  
  ![image url](https://github.com/12OneTwo12/TIL/blob/main/CSS/withdhh.png?raw=true)  
    
  그 결과는 이렇다.  
  결과를 보고 코드와 비교해보니 훨씬 이해가 더 쉬워졌다.  
    
* #### 박스 모델(CSS Box model)   

  CSS 박스 모델은 HTML element가 웹 페이지에서 차지하는 공간을 정의한 모델이다.  
  HTML element들은 각각 자신만의 영역을 갖고 있으며, 각 영역은 다시 여러개의 작은 영역으로 나뉜다.  
    
  ![image url](https://github.com/12OneTwo12/TIL/blob/main/CSS/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20(1).png?raw=true)  
    
  각 element는 가운데 실제 element의 내용이 담긴 부분(content), element를 감싸는 경계(border),  
  border와 content 사이의 영역(padding), border 바깥의 영역(margin)으로 구성된다.  
    
  마찬가지로 예제를 통해 코드를 보며 결과물과 비교하여 이해를 보다 쉽게 했다.  
    
```html
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="box_model.css">
      <title>Document</title>
  </head>
  <body>
      <h1>CSS 박스 모델(CSS Box model)</h1>
      <hr />

      <h2>모든 element는 Box 형태의 구조를 가지고 있음.(CDT에서 확인)</h2>
      <br />

      <div class="box">content area</div>

      <a href="https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">MDN</a>
      <a href="https://www.freecodecamp.org/news/css-box-model-explained-with-examples/">Ref</a>
  </body>
</html>
```
```css
/* body{
    border: 1px solid blue;
    padding: 10px;
    margin: 0px;
} */

/* margin=바깥여백 */
/* border=경계선
padding=안쪽여백 */ 

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    /* default value : content-box
       border-box : padding+border+box = width로 계산 */
}

.box{
    width: 300px;
    border: 5px dashed sienna;
    background-color: skyblue;
    font-size: 50px;
    padding: 20px;
}
```  
  
