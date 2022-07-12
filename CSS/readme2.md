# CSS
#### [ 2022-07-12 ]  
  
* #### CSS 기본 선택자(CSS Selectors)  
  
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
    
* #### CSS 조합 선택자(CSS Combinator Selectors)
    
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
    
  
* #### CSS 코드 순서(CSS Overriding)  
    
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
  
* #### CSS 적용범위, 명시도 or 구체성(CSS Specificity)  
   
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
  
* #### CSS 상속(CSS Inheritance)  

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
    
