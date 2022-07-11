# HTML  
  
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
   
    
