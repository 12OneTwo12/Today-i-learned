# HTML 
#### [2022-07-11]  
  
### 목차  
------------------------------------------------------------------------------------------------------------------------------------------------  
  
  * #### [[ HTML이란 ]](#html이란)  
  * #### [[ 학습 ]](#학습)  
  * #### [[ 실습 ]](#실습)
  * #### [[ 완성 ]](#완성)  
  * #### [[ 느낀 점 ]](#느낀-점)  
  * #### [[ 돌아가기 ]](#돌아가기)  
      

----------------------------------------------------------------------------------------------------------------------------------------------------
 ## HTML이란       
    
  HTML은 Hyper Text Markup Language 약어로 HyperText 기능을 가진 문서를 만드는 언어이다.  
  솔직히 처음엔 무슨말인지 이해를 못했다.  
  많은 Web site에서 사용된다고 하는데 일단 HyperText라는 기능이 무엇인지조차 모르니 일단 찾아보기로 했다.  
    
  * #### HyperText
    
    Hyper의 뜻은 '뛰어넘다', '초월하다'라는 의미를 가지고 있다.  
    HyperText란 말 그대로 텍스트를 뛰어 넘는다, 문자를 뛰어 넘는다. 라는 의미를 가지고 있다.  
    나, 아니 우리는 이미 HyperText라는 개념에 익숙했다.  
    단순히 익숙하다는 말을 넘어서 일상처럼 사용하고 있었다.  
    우리가 웹서핑을 하다 자연스레 문자를 클릭하여 링크를 타고 들어가는 기능들을 HyperText라고 부르고 있었다.  
    그렇게 알게되니 바로 이해하게 됐다.  
      
  * #### HyperLink  
    
    HyperText라는 단어의 뜻을 알고나니 HyperLink도 쉽게 이해할 수 있었다.  
    이제는 단순히 텍스트를 넘어 링크를 타고 가는것 뿐만 아닌  
    이미지나 다른 매체를 통해서도 넘어갈 수 있게 되면서 생긴 단어인듯 하다.
    
  * #### Markup Language
    
    그렇다면 Markup Language는 무슨말일까.  
    Markup은 표시하다 라는 뜻을 가지고있다.  
    Mark, 즉 어딘가에 표시를 해두는 것을 뜻하는데  
    제목이 어디서부터 어디까지인지, 본문은 어디서부터 어디까지인지, 어떠한 정보들을 보기쉽고 이해하기 쉽게 구조적으로 표현할 수 있는 언어라는 뜻이라고 한다.  

## 학습
   
  * #### Tag  
      
    태그(Tag)는 < > 기호로 구성된다. 이러한 태그는 100 개 이상이 존재하며, 각각의 역할과 문법에 맞게 사용해야 한다.  
    일반적으로 태그는 작성한 텍스트의 앞 뒤에 모두 작성하여 시작과 끝을 입력해줘야 하는데,  
    < >처럼 시작하는 태그는 Opening tag라고 하고,  
    </ >처럼 태그 내부에 /가 있는 태그를 Closing tag라고 한다.  
      
    태그를 보면 src, alt와 같은 별도의 속성(attribute)를 지정할 수 있는 태그들이 있다.  
    ![image url](https://github.com/12OneTwo12/TIL/blob/main/Html/Untitled.png?raw=true)  
    이러한 태그들을 element(요소)라고 부르기도 한다.  
  
## 실습  
  
  백문이 불여일견, 이론적으로 공부하는 것도 좋지만 한번 해보는 것이 더 큰 경험이 될거같다.  
   
  처음만들어 본것은 메모장을 통해 Index.html 파일을 만들어봤는데, 내용은 다음과 같았다.  
      
      
``` html
<html>
  <body>
    안녕하세요
  </body>
</html>
```  
  
  실행결과는 만족스러웠다.  
  브라우저를 통해 실행해보니 안녕하세요라는 문구가 떠있었다.  
  그 이후로부터는 상황을 만들어보기로 했다.  
  뉴스 기사가 만들어야 하는 상황을 가정하고 진행해보았다.
  VSCode를 사용하여 좀더 효율을 높이고자 했다.  
    
``` html
<!DOCTYPE html>      <!-- Document type은 html이다. "이 문서의 타입은 html임을 명시" -->
<html lang="en">     <!-- 모든 html 태그의 최상단에 작성해야하는 태그, html이라는 태그의 attribute는 lang -->
<head>               <!-- 문서의 부가적인 정보(Meta information) 표기 -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OneTwo News</title>        <!--브라우저 탭에 뜨는 정보 -->
</head>
  <body>
    <h1>Best Places To Visit Post-Pandemic</h1>
  </body>
</html>
```  
  
    
 * #### 줄바꿈  
     
  타이틀 뿐만 아니라 뉴스를 게시한 시간과 날짜, 그리고 누가 게시했는 지까지 적어주려 했다.  
      
``` html
<!DOCTYPE html>      
<html lang="en">     
<head>               
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OneTwo News</title>        
</head>
  <body>
    <h1>Best Places To Visit Post-Pandemic</h1>
    Author : OneTwo 
    Date : April 28, 1998, 4:40am
  </body>
</html>
```  
  
  마찬가지로 실행해보았으나 조금 이상하다.  
  내가 원한것은 저자와 날짜가 다른 줄에 표기되길 바랬으나 한줄로 표기돼버렸다.  
  해결 방법이 없을까?  
  줄바꿈을 할 수있는 태그를 찾아보았다.  
  <br> 라고 하는 태그를 찾게 됐다.  
    
``` html
<!DOCTYPE html>      
<html lang="en">     
<head>               
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OneTwo News</title>        
</head>
  <body>
    <h1>Best Places To Visit Post-Pandemic</h1>
    Author : OneTwo <br>
    Date : April 28, 1998, 4:40am
  </body>
</html>
```  
    
  정상적으로 줄바꿈이 되었다.  
  그렇다면 br은 무엇의 약자일까?  
  찾아보니 break 라고한다.  
  멈춘다는 뜻이겠지 싶다.  
  이제 문단을 구분하여 본문을 작성하려 한다.  
    
``` html
<!DOCTYPE html>      
<html lang="en">     
<head>               
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OneTwo News</title>        
</head>
  <body>
    <h1>Best Places To Visit Post-Pandemic</h1>
    
    <p>More people are being vaccinated everyday and travel is already top of mind.</p>
    
    <p>Suddenly, the whole world feels in reach again, even if travel restrictions haven’t quite been lifted yet.</p>
    
    Author : OneTwo <br>
    Date : April 28, 1998, 4:40am
  </body>
</html>
```  
  
  문단이 잘 구분되어 실행되는 모습을 볼 수 있었다.  
  그렇다면 p는 무엇의 약자일까?  
  찾아보니 paragraph라고 한다.  
  문단 이라는 뜻을 가지고 있으니 굉장히 잘맞는 단어 선택이라고 느껴진다.  
  <p> 말고 다른 문단 기능을 가진 태그도 있는지 찾아보았다.  
  <p> <div> <span> 이 있는데, 이들의 차이점이 뭘까?  
      
   ![image url](https://github.com/12OneTwo12/TIL/blob/main/Html/laknfglaknglvaekrf.png?raw=true)  
      
   이렇다고 한다.  
   줄을 어떻게 정리 하느냐의 차이인듯 싶다.   
   
    
 * ### SEO  
     
   SEO란 Search Engine Optimization, 검색 엔진 최적화  
   우리가 무언가를 검색 했을때 가장 알맞는 결과를 보여주기 위한 엔진인데
   h 태그가 이를 도와준다고 한다.         
   그렇다면 h1 태그를 남발하면 검색 엔진 상단에 노출되기 쉬워 기사 조회수를 늘릴 수 있지 않을까?  
       
      ```
      SEO의 검색 인덱싱(Indexing)에 잘 들어가기 위해 우리는 태그를 단순히 시각적인 기능(ex. <br>)으로 뿐만 아니라 의미론적(Semantic)으로도 잘 사용할수록 더 좋음.  
      또한 장애인, 유아, 노인들을 위한 웹 접근성(Web accessibility)의 측면도 존재.  
      이러한 것 들을 준수하는 것을 웹 표준이라고 함.  
      따라서 h1 태그는 SEO가 볼 때 대주제 혹은 제목으로 표시되기 때문에 각 페이지당 한 번만 사용하는 것이 좋음.   
      만약 h1 태그가 중복될 경우 검색엔진은 사이트의 구조 파악이 어려워지게 되고, 추천 검색 순위에서 밀리게 될 확률이 높음.  
        → "h2 태그는 상위 노출을 시키고 싶은 키워드를 포함하되, 너무 많은 키워드 사용은 자제하는 것이 좋다"와 같은 각각의 활용법이 존재함.  
      ```
     
   남발하는 것은 안좋다고 한다.  
   이제 나머지 기사를 채워보자.  
   여행지 이름을 작성하고 Lorem을 통해 적당히 내용을 채워보자.  
     
    ```
    Lorem ipsum : 의미 없는 dummy 텍스트를 작성하여 우선 화면의 구성과 느낌만 보고 싶을 때 주로 활용.
    ```  
        
``` html
<!DOCTYPE html>      
<html lang="en">     
<head>               
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OneTwo News</title>        
</head>
  <body>
     <h1>Best Places To Visit Post-Pandemic</h1>

    <p>More people are being vaccinated everyday and travel is already top of mind.</p>
    
    <p>Suddenly, the whole world feels in reach again, even if travel restrictions haven’t quite been lifted yet.</p>
    
    <h2>Alentejo, Portugal</h2>

    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, deserunt sunt. Ab, minima quod aperiam iure quos fugit tenetur nam labore impedit maiores enim       amet perspiciatis quae et, eius exercitationem.</p>
    
    Author : OneTwo <br>
    Date : April 28, 1998, 4:40am

  </body>
</html>
```  
      
  나머지 내용은 채웠으니 이제 여행지 정보를 ul 태그를 통해 입력하려 한다.  
      
``` html
<!DOCTYPE html>      
<html lang="en">     
<head>               
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OneTwo News</title>        
</head>
  <body>
     <h1>Best Places To Visit Post-Pandemic</h1>

    <p>More people are being vaccinated everyday and travel is already top of mind.</p>
    
    <p>Suddenly, the whole world feels in reach again, even if travel restrictions haven’t quite been lifted yet.</p>
    
    <h2>Alentejo, Portugal</h2>

    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, deserunt sunt. Ab, minima quod aperiam iure quos fugit tenetur nam labore impedit maiores enim       amet perspiciatis quae et, eius exercitationem.</p>
    
      <ul><!-- ul>li*3{text} -->
        <li>Temperature</li>
        <li>Heat rating</li>
        <li>water color</li>
      </ul>      
    
    Author : OneTwo <br>
    Date : April 28, 1998, 4:40am

    <p>2021 OneTwo Media LLC. Contact : 123456@email.com</p>
    
  </body>
</html>
```  
 * #### Hyperlink 실전  
  
    더 많은 여행지 정보를 알려주기 위해 처음 HTML을 배우면서 알게 됐던 Hyperlink를 사용해보려고 한다.   
    자세한 내용은 위키피디아로 갈 수 있는 링크를 걸어보려고 한다.  
    
``` html
<!DOCTYPE html>      
<html lang="en">     
<head>               
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OneTwo News</title>        
</head>
  <body>
     <h1>Best Places To Visit Post-Pandemic</h1>

    <p>More people are being vaccinated everyday and travel is already top of mind.</p>
    
    <p>Suddenly, the whole world feels in reach again, even if travel restrictions haven’t quite been lifted yet.</p>
    
    <h2>Alentejo, Portugal</h2>

    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, deserunt sunt. Ab, minima quod aperiam iure quos fugit tenetur nam labore impedit maiores enim       amet perspiciatis quae et, eius exercitationem.</p>
    
      <ul><!-- ul>li*3{text} -->
        <li>Temperature</li>
        <li>Heat rating</li>
        <li>water color</li>
      </ul>
    
      <a href="https://en.wikipedia.org/wiki/Alentejo">More information</a>   <!-- a href 는 Hyperlink. 링크 타고 들어갈 수 있게 해줌 -->
    
    Author : OneTwo <br>
    Date : April 28, 1998, 4:40am

    <p>2021 OneTwo Media LLC. Contact : 123456@email.com</p>
    
  </body>
</html>
```  
    
	href란 무엇의 약자일까?   
	    hypertext reference의 약자이다. 직역하면 뛰어넘는 것을 언급하다 정도가 될텐데, 나는 호출 또는 불러오기? 정도로 이해했다.  
	      
 * #### Semantic Tag  
  
  코드가 점점 길어져서 한번에 알아보기 어렵게 바뀌고 있다.  
  이제 가독성과 SEO를 이용하기 위해 의미단위로 구분하는 Semantic Tag를 사용하고자 한다.  
   
``` html
<!DOCTYPE html>      
<html lang="en">     
<head>               
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OneTwo News</title>        
</head>
  <body>
    <article>
      <h1>Best Places To Visit Post-Pandemic</h1>

      <p>More people are being vaccinated everyday and travel is already top of mind.</p>
    
      <p>Suddenly, the whole world feels in reach again, even if travel restrictions haven’t quite been lifted yet.</p>
    
      <h2>Alentejo, Portugal</h2>

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, deserunt sunt. Ab, minima quod aperiam iure quos fugit tenetur nam labore impedit maiores enim       amet perspiciatis quae et, eius exercitationem.</p>
    
        <ul><!-- ul>li*3{text} -->
          <li>Temperature</li>
          <li>Heat rating</li>
          <li>water color</li>
        </ul>
    
      <a href="https://en.wikipedia.org/wiki/Alentejo">More information</a>   <!-- a href 는 Hyperlink. 링크 타고 들어갈 수 있게 해줌 -->
    </article>
    
    <footer>
      Author : OneTwo <br>
      Date : April 28, 1998, 4:40am

      <p>2021 OneTwo Media LLC. Contact : 123456@email.com</p>
    </footer>
  </body>
</html>
```  
  
   이러면 나중에 보더라도 가독성이 좋아 유지보수에도 좋을거 같다.  
   이제 마무리 단계에 들어가보자.  
      
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<!--문서의 문자 인코딩 방식 -->
	<meta charset="UTF-8"/>
	<!--문서의 저자, 작성자 -->
  <meta name="author" content="Yoo"/>
	<!--문서의 설명, 개요 -->
	<meta name="dsecription" content="HTML tutorial"/>
	<!--웹 애플리케이션 이름 -->
	<meta name="application-name" content="Application name"/>
	<!--웹 페이지의 뷰포트 영역 -->
  <meta name="viewport" content=""/>
	<!--검색 엔진에 적용되는 키워드 목록 -->
  <meta name="keywords" content=""/>
	<!--문서에 사용되는 소프트웨어 패키지 -->
  <meta name="generator" content=""/>
	<!-- 지정된 HTTP 헤더 제공 -->
	<meta http-equiv="refresh" content="3"/>
  </head>
    <body>
 
    </body>
</html>
```
    
 * #### 이미지 삽입  
  	  
  마지막으로 기사에 이미지를 삽입해보자.  
  이미지를 삽입할때 쓰이는 태그는 img 라고 한다.  
  쓰이는 attribute는 src이고 img는 딱봐도 image인것같고,  
  src는 source의 약자라고 한다.  
  img src=를 써준다음은 alt도 입력해줘야하는데  
  alt는 이미지가 에러가 났을때 표기될 문구를 뜻한다.  
  한번 해보자.  
  
``` html
<!DOCTYPE html>      
<html lang="en">     
<head>               
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OneTwo News</title>        
</head>
  <body>
    <article>
      <h1>Best Places To Visit Post-Pandemic</h1>

      <p>More people are being vaccinated everyday and travel is already top of mind.</p>
    
      <p>Suddenly, the whole world feels in reach again, even if travel restrictions haven’t quite been lifted yet.</p>
      
      <!-- 이미지 첨부 예정 -->
      <p><img src="https://github.com/12OneTwo12/TIL/blob/main/Html/og.jpg?raw=true" alt="error"></p>
    
      <h2>Alentejo, Portugal</h2>

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, deserunt sunt. Ab, minima quod aperiam iure quos fugit tenetur nam labore impedit maiores enim       amet perspiciatis quae et, eius exercitationem.</p>
    
        <ul><!-- ul>li*3{text} -->
          <li>Temperature</li>
          <li>Heat rating</li>
          <li>water color</li>
        </ul>
    
      <a href="https://en.wikipedia.org/wiki/Alentejo">More information</a>   <!-- a href 는 Hyperlink. 링크 타고 들어갈 수 있게 해줌 -->
    </article>
    
    <footer>
      Author : OneTwo <br>
      Date : April 28, 1998, 4:40am

      <p>2021 OneTwo Media LLC. Contact : 123456@email.com</p>
    </footer>
  </body>
</html>
```    
    
 * #### 완성  
  
   자 그럼 드디어 완성됐다.  
   그 결과는 이렇다.  
   ![image url](https://github.com/12OneTwo12/TIL/blob/main/Html/dptl.png?raw=true)  
     
 * #### 느낀 점  
  
	이번 작업을 통해 내가 평소 아무렇지 않게 보고 불평하던 Web site들이 이런 하나하나 노력들과 작업들로 이루어졌다는 것을 직접 해보며 느껴보니 모든사이트들의 작업물들이 존경스러워 보이고 저런 사이트들을 어떻게 만들었는지 정말 신기하기도 했다. 내가 평소 누려왔던 것들이 하나하나 감사하게 느껴지는 작업이였다.  
	
* #### 돌아가기 
#### [ Link ](https://github.com/12OneTwo12/TIL)  
