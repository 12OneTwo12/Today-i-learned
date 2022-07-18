# Javascript  
  
  #### [ 2022-07-18 ]  
    
## 목차  
  * #### [[ Javascript spread syntax(Javascript 전개 문법) ]](#javascript-spread-syntaxjavascript-전개-문법)  
  * #### [[ Javascript Destructuring(Javascript 구조분해할당) ]](#javascript-destructuringjavascript-구조분해할당)  
  * #### [[ Javascript Module(Javascript 모듈) ]](#javascript-modulejavascript-모듈)  
  * #### [[ JavaScript sync and async(동기와 비동기) ]](#javascript-sync-and-async동기와-비동기)  
  * #### [[ Ajax(Asynchronous Javascript and XML) ]](#ajaxasynchronous-javascript-and-xml)  
  * #### [[ JavaScript JSON(JavaScript Object Notation) ]](#javascript-jsonjavascript-object-notation)  
  * #### [[ 돌아가기 ]](#돌아가기)  
    
      
-----------------------------------------------------------------------------------------------------------------------------------------------------    
   
 * ### Javascript spread syntax(Javascript 전개 문법)  

  전개 연산자(Spread Operator)란 객체나 배열의 값을 하나 하나 넘기는 용도로 사용할 수 있다. 전개 연산자를 사용하는 방법은 점 세개(...)를 붙이면 된다.  
  하나로 뭉쳐있는 여러 값들의 집합을 펼쳐서(전개, 분산, spreading) 개별적인 값들의 목록으로 바꿔주는데,    
  spread 문법 적용 가능한 대상은 Array, String, Map, Setm Dom Collection 등으로 한정된다.    
  Spread syntax크게 세 가지 상황에서 사용한다.  
    
        1. 함수 호출에서 iterable 객체를 인자로 사용하고 싶을 때   
        
        2. 배열 literal로 배열을 정의하는데 iterable 객체의 요소를 요소로 사용하고 싶을 때  
        
        3. 객체 literal로 key-value 쌍으로 구성된 객체를 정의하는데 특정 객체의 요소를 객체의 요소로 사용하고 싶을 때  
          
        iterable이란 “순회 가능한”, “순회시킬 때 사용하는 객체” 로 해석할 수 있는데, 주어진 순서대로 데이터를 표현할 수 있는 객체를 뜻한다.    
        문자열(String), 배열(Array), Map, Set 같은 것들 말이다.  
        
  * #### Spread with Arrays  

    ```javascript
    const fruits = ['apple', 'banana'];
    const otherFruits = ['kiwi', 'podo'];
    ``` 
    위의 예제처럼 문자열 값을 가진 2가지 변수가 있다고 하고, 위의 두 배열을 연결해서 하나의 배열로 출력해보자.  
      
    ```javascript
    const allFruits = fruits.concat(otherFruits);
    console.table(allFruits);
    ```  
    위 방법이 전개 문법을 사용 하지 않은 코드이다.  
    예제에서는 문자열 값을 가진 변수가 2가지 뿐이니 간단하게 끝났지만,  
    예를 들어 문자열이 10개 있었다고 가정하면 우리는 concat을 9번 사용하여야지만 모두 하나의 배열로 만들 수 있었을 것이다.  
    그러나 Spread 방법을 사용하면 간단하게 끝낼 수 있다.  
    
    ```javascript
    const myFruits = [...fruits, ...otherFruits];
    console.table(myFruits);
    ```  
    ```...```를 활용하여, 연결할 배열들을 적어주면 간단하게 끝낼 수 있다.  
    이것이 spread syntax(전개 문법)이다.  
    
    ```javascript
    const users = [
    { id: 1, userName: 'Jeong'}, 
    { id: 2, userName: 'Choi' },
    ];
    ```  
    다음과 같은 객체에 새로운 프로퍼티를 준다고 했을 때 기존의 방식은 이러했다.  
    ```javascript
    const newUser = { id: 3, userName: 'Love'};
    users.push(newUser);
    ```  
    그러나 spread 방식은 이러하다.  
    ```javascript
    const secondUser = { id: 4, userName: 'Zzang'};
    const updatedUsers = [...users, secondUser];
    ```  
    
  * #### Array Copy  

    Spread의 장점은 연산을 해도 원본 배열은 변하지 않는다는 장점이 있다.  
    예를 들어 기존 방법을 사용하여 ```const originalArray = ['one', 'two', 'three'];``` 문자열을   
    ```const secondArray = originalArray;```변수 선언과 초기화를 통해 할당했다고 가정했을 때.  
    우리가 변수 secondArray의 배열을 수정하면 변수 originalArray에 있던 값들도 수정 돼버린다.  
    그렇게 되면 원본 데이터의 수정이 생기게 돼서 불편한 상황들이 만들어 질 수 있다.  
    그렇기 때문에 Spread를 사용하여   
    ```javascript
    const originalArrayWithSpread = ['four', 'five', 'six'];
    const secondArrayWithSpread = [...originalArrayWithSpread];
    ```  
    변수 secondArrayWithSpread 배열 값을 수정하게 될 경우에 원본 originalArrayWithSpread에는 변화가 없어, 원본 데이터를 보존 할 수 있는 것이다.  
    마찬가지로 문자열 역시 가능하다.
    ```javascript
    const aString = 'hello';
    const strArray = [...aString];
    ```  
      
  * #### Spread with Objects

    * ##### 기존의 방식을 사용한 object의 shallow copy  

      Object또한 마찬가지 인데,  
      ```javascript
      const originalObject = { enabled: true, darkMode: false};
      const secondObject = Object.assign({}, originalObject);
      ```  
      위 오브젝트를 변수에 담아 변수를 수정하게 된다면 원본 객체또한 수정돼버린다.  
        
    * ##### spread를 활용한 object shallow copy  

      ```javascript
      const originalObject2 = { enabled: true, darkMode: false };
      const secondObject2 = { ...originalObject };
      ```  
      이렇게 객체에도 사용할 수 있다.  
        
          
 * ### Javascript Destructuring(Javascript 구조분해할당)
    
    Destructuring이란, 구조(배열 or 객체 등 어떠한 자료구조)를 뜻하는데,  
    Destructuring assignment(분해 할당)은 객체의 프로퍼티나 배열을 여러 개의 변수로 분해해주는 것이다. 
    함수에 객체나 배열을 전달해야 하는 경우가 생기곤 한다. 가끔은 객체나 배열에 저장된 데이터 전체가 아닌 일부만 필요한 경우가 생기기도 하는데,
    이럴 때 객체나 배열을 변수로 '분해’할 수 있게 해주는 문법인 구조 분해 할당(destructuring assignment) 을 사용할 수 있다.   
    이 외에도 함수의 매개변수가 많거나 매개변수기본값이 필요한 경우 등에서 구조 분해(destructuring)는 그 진가를 발휘한다.  
    예시로 살펴보자.  
      
    * #### Object Destructuring : 객체의 요소들을 개별 변수들로 분해
  
    ```javascript
    const book = {
        id : 1,
        title : 'The Great Gatsby',
        pudData : '10/04/1925',
    };
    ```  
      위와 같은 객체가 있다 가정하자.  
      기존의 방식을 통해 배열을 분해하여 이용하려면 아래와 같이 사용해야 했을 것이다.  
    ```javascript
    const id = book.id;
    const title = book.title;
    const pudData = book.pudData;
    ```  
      그러나 Object Destructuring 방식을 이용하면,  
    ```javascirpt
    const { id, title, pudData } = book;
    console.log( id, title, pudData );
    ```  
      위와 같은 방법으로 끝나는 것이다.  
      다른 이름으로 지정하고 싶은 경우에는  
    ```javascript
    // { 객체 프로퍼티: 목표 변수 }
    const { id: bookId, title: bookTitle, pudData: bookPubData } = book ;
    ```  
      이렇게 주면 되는 것이다.  
      지금은 프로퍼티가 몇개 되지 않아 효용이 없는 것 같이 보일 수 있어도, 가령 프로퍼티가 굉장히 많다고 하면 기존에 비해 우리는 훨씬 편리함을 얻을 수 있는것이다.  
      
      중첩된 프로퍼티 역시 가능하다.  
    ```javascript
    // 중첩된 객체도 destructuring가능
    const anotherBook = {
        id : 2,
        title : 'The old man and the sea',
        pubData : '08/09/1952',
        author : {
            firstName : 'Ernest', // 프로퍼티 중첩도 가능
            lastName : 'Hemingway',
        },
    };
    
    const { 
        id, 
        title, 
        pubData, 
        author : { firstName, lastName } 
    } = anotherBook;
    ```  
    
    * #### Array Destructuring : 배열의 요소들을 개별 변수들로 분해

        이번에는 배열로 봐보자.  
        JS Array는 순서를 보장받아야하기 때문에 기존 방식에서는 인덱싱을 통해 분해했다.  
      ```javascript
      const data = ['1970', '12', '01'];
      const year = data[0];
      const month = data[1];
      const day = data[2];
      ```  
        그러나 Array Destructuring 방식으로는,  
      ```javascript
      const [ year, month, day ] = data;
      ```
        이렇게 간단하게 끝날 수 있다. 중첩 배열의 Destructuring또한 가능한데,  
      ```javascript
      const nestedArray = [1,2,[true, 'hoya'],5];
      const [one, two, [isTure, userName], five] = nestedArray;
      ```  
        이렇게 할 수 있다. 예를 들어 아래 예제의 객체가 있다고 가정할때,
      ```javascript
      const movie = {
          movieTitle : 'spiderman no way home',
          movieActor : { 
          firstName : 'Tom',
          lastName: 'Holland',
          },
          hashTags : [ 'honey fun', 'handsome', 'thrill' ],
      }
      ```  
        콘솔 로그를 통해 ```console.log(movieDate, movieActor, firstName, tag1, tag2);``` 이렇게 로그에 남길 수 있도록 해보면,  
      ```javascript
      const {
          movieTitle,
          movieActor, //객체만 따로 분해하고 싶을 때
          movieActor : { firstName }, // 내부에서 별도로 Destructuring
          hashTags : [ tag1, tag2 ],
        } = movie;
        
      console.log(movieDate, movieActor, firstName, tag1, tag2);
      ```  
      이렇게 하고 로그에 남길 수 있을 것이다.  
          
          
 * ### Javascript Module(Javascript 모듈)  

  모듈이란, 개발하는 애플리케이션의 크기가 커지면 언젠간 파일을 여러 개로 분리해야 하는 시점이 온다.   
  이때 분리된 파일 각각을 '모듈(module)'이라고 부르는데, 모듈은 대개 클래스 하나 혹은 특정한 목적을 가진 복수의 함수로 구성된 라이브러리 하나로 구성된다.  
  코드를 여러 파일로 쪼개서 모듈화시키는 방법을 Modular Programming이라 하는데, 서로 관계가 있는 기능끼리, 파일끼리 서로 module의 형태로 불러와서  
  필요한 코드만 사용하는 방식이다. ES6(2015)에서 모듈화를 할 수 있는 import, export라는 키워드 사용한다.  
    
  예를 들어 프로그램이 커져서 계산 함수들을 모아놓은 js파일 모듈과 출력을 당담하는 js파일 모듈이 다르다고 가정했을때,  
  ```javascript
  function sum(x,y){
      return x+y;
  }

  function sub(x,y){
      return x-y;
  }

  function mul(x,y){
      return x*y;
  }

  function div(x,y){
      return x/y;
  }
  ```  
  위 예제가 복잡한 수식으로 된 함수들이라 가정했을 때, 우리가 출력과 함수 모두를 한 파일에 넣게 되면 우리의 인지 범위를 벗어나버리게 될것이다.  
  그렇기에 함수들을 엮어놓은 모듈을 따로 만들어 두고 필요할때마다 다른 모듈에서 꺼내 쓸 수 있게 한것이 모듈 프로그램이라 생각하면 된다.  
  이는 import, export라는 키워드로 사용되는데, 이렇게 사용하면 된다.  
    ```javascript
  export function sum(x,y){
      return x+y;
  }

  export function sub(x,y){
      return x-y;
  }

  export function mul(x,y){
      return x*y;
  }

  export function div(x,y){
      return x/y;
  }
  ```  
  먼저 보낼 모듈에서 export를 넣어주고, 사용할 모듈에서는 이렇게 하면 된다.  
  ```javascript
  // import {불러올 함수명} from '해당 함수를 가지고 있는 파일의 경로' ( ./ : 현재 경로 )
  import { sum, sub, mul, div } from './function.js'; 
  
  console.log(sum(10,5));
  console.log(sub(10,5));
  console.log(mul(10,5));
  console.log(div(10,5));
  ```  
  이런 식으로 사용할 수 있다.  
  
    
 * ### JavaScript sync and async(동기와 비동기)  
      
    데이터를 받는 방식인 동기와 비동기. 이 둘의 개념에 대해 알아보고 둘의 차이점을 알아보도록 하자.  
    
    * #### synchronous(동기)  

      synchronous란 직역하자면 동시 발생[존재]하는 이라고 해석 되는데,  
      말 그대로 동시에 일어난다는 뜻이다. 요청과 그 결과가 동시에 일어난다는 약속인데, 바로 요청을 하면
      시간이 얼마나 걸리던지 요청한 자리에서 결과가 주어져야 한다.  
      
          함수가 호출된 순서대로 순차적으로 실행됨 - 동기(sync) 방식  
            
          요청한 결과가 한자리에서 동시에 일어남  
            
          A노드와 B노드 사이의 작업 처리 단위(transaction)을 동시에 맞추겠다.  
            
      * #### 순차 실행  

        ```javascript
        const firstFunc = () => console.log('첫 번째 함수가 호출됨');

        const someLongWork = () => {
            console.log('-----------');
            console.log('특정 작업 처리중.. 시간 오래 걸림');
            console.log('-----------');
        }

        const secondFunc = () => console.log('두 번째 함수가 호출됨');

        // 함수들이 작성한 순서대로 순차적으로 호출됨
        firstFunc();
        someLongWork();
        secondFunc();
        ```  
          
        한 번에 하나의 작업(Task)만 처리하기 때문에 특정 작업(ex 특정 함수)someLongWrok()이 길어질 경우,  
        secondFunc()는 someLongWork()가 처리될 때 까지 작업이 중단(Blocking, 블로킹)된다.  
          
        ```javascript
        console.log(Date.now()); // 1970년 1월 1일부터 지금까지 흘러간 초(ms)

        // 일정한 작업 시간이 경과한 이후에 함수가 호출(실행)되도록 시간을 지연하는 sleep 함수
        const sleep = (callbackFn,delay) => {
            console.log('시간 지연중..');
            const delayedTime = Date.now() + delay;

            // 현재 시간(Date.now())에 delay를 더한 delayedTime이
            // 현재 시간(Date.now())보다 작으면 계속 반복.
            while(Date.now() < delayedTime);

            callbackFn();
        }

        function firstWork() {
            console.log('첫 번째 작업 수행');
        }

        function secondWork() {
            console.log('두 번째 작업 수행');
        }

        // secondWork()는 sleep()의 실행이 종료된 이후 호출됨, 3초 이상 블로킹.
        sleep(firstWork, 3 * 1000);

        secondWork();  
        ```  
          
        이처럼 현재 실행 중인 작업(Task)이 종료할 때까지 다음에 실행될 작업이 대기하는 방식을 동기(synchronous) 처리라고 한다.  
        동기 처리 방식은 작업을 순서대로 하나씩 처리, 실행 순서가 보장되는 장점이 있지만 단점은 앞선 작업이 종료할 때까지 이후 작업들이 블로킹된다는 것이 있다.  
          
    * #### asynchronous(비동기)  
  
      asynchronous는 직역하자면 동시에 존재[발생]하지 않는 이라는 뜻이다.  
      비동기는 동시에 일어나지 않는다는 의미이다. 요청한 결과는 동시에 일어나지 않을거라는 약속이기도 하다.  
      현재 실행 중인 작업(Task)가 아직 종료되지 않은 상태라고 해도, 다음에 해야 할 작업을 곧바로 실행하는 방식이다.  
          
          요청한 그 자리에서 결과가 주어지지 않음  
            
          노드 사이의 작업 처리 단위를 동시에 맞추지 않아도 된다.  
              
      아래 예제를 실행 해보면 이해가 쉬울 것 같다.  
        
      ```javascript
      const firstWork = () => {
          console.log('첫 번째 작업 진행 중');
      }

      const secondWork = () => {
          console.log('두 번째 작업 진행 중');
      }

      // 지정한 타이머(일정 시간) 이후에 콜백 함수 firstWork()를 호출
      // 타이머 함수 setTimeout()의 특징 중 하나, 블로킹(작업 중단)을 하지 않고, 비동기적으로 처리함.
      setTimeout(firstWork, 3*1000);
      secondWork();
      ```
        
      이러한 비동기 처리 방식은 현재 실행 중인 작업(Task, ex, firstwork)가 종료되지 않은 상태라고 해도,  
      다음 작업(secondWrok)을 곧바로 실행하기 때문에 블로킹이 발생하지 않는 장점이 있다.  
      하지만 단점은 작업의 실행 순서가 보장 되지 않는다는 점이 있다.  
        
          비동기 처리 방식으로 동작하는 JS 함수들 : setTimeout(), setInterval, HTTP 요청, 이벤트 핸들러(EventHandler)
              
                
 * ### Ajax(Asynchronous Javascript and XML)  

  * #### Ajax란 무엇인가?  
  
    Ajax란 Asynchronous Javascript And Xml(비동기식 자바스크립트와 xml)의 약자인데,  
    자바스크립트를 이용해 서버와 브라우저가 비동기 방식으로 데이터를 교환할 수 있는 통신 기능이다.  
    브라우저가 가지고있는 XMLHttpRequest 객체를 이용해서 전체 페이지를 새로 고치지 않고도 페이지의 일부만을 위한 데이터를 로드하는 기법이다.  
      
    다르게 표현하자면 자바스크립트를 통해서 서버에 데이터를 비동기 방식으로 요청하는 것이다.  
    여기서 비동기 방식이라 함은 웹페이지를 리로드하지 않고 데이터를 불러오는 방식이며 Ajax를 통해서   
    서버에 요청을 한 후 멈추어 있는 것이 아니라 그 프로그램은 계속 돌아간다는 의미를 내포하고 있다.  
    AJAX라는 기술은 여러가지 기술이 혼합적으로 사용되어 이루어진다. 대표적인 예로는 아래와 같은 것들이 있다.  
      
      * HTML
      * DOM
      * JavaScript
      * XMLHttpRequest
      * Etc
      

  * #### AJAX로 할 수 있는 것  

    AJAX라는 네트워크 기술을 이용하여 클라이언트에서 서버로 데이터를 요청하고 그에 대한 결과를 돌려받을 수 있다.  
      
        클라이언트란?
        서버에서 정보를 가져와서 사용자에게 보여줄 수 있고 사용자와 상호작용할 수 있는 소프트웨어를 일컫는다.
        Ex) 웹브라우저, 핸드폰 어플리케이션 등...  
          
  * #### AJAX를 사용하는 이유  

    단순하게 WEB화면에서 무언가 부르거나 데이터를 조회하고 싶을 경우, 페이지 전체를 새로고침하지 않기 위해 사용한다고 볼 수 있다.  
    AJAX는 HTML 페이지 전체가 아닌 일부분만 갱신할 수 있도록 XMLHttpRequest객체를 통해 서버에 request한다.   
    이 경우, JSON이나 XML형태로 필요한 데이터만 받아 갱신하기 때문에 그만큼의 자원과 시간을 아낄 수 있다.  
      
  * #### AJAX의 장단점  

    * AJAX의 장점  

          웹페이지의 속도향상  
            
          서버의 처리가 완료될 때까지 기다리지 않고 처리가 가능하다.  
            
          서버에서 Data만 전송하면 되므로 전체적인 코딩의 양이 줄어든다.  
            
          기존 웹에서는 불가능했던 다양한 UI를 가능하게 해준다. ( Flickr의 경우, 사진의 제목이나 태그를 페이지의 리로드 없이 수정할 수 있다.)  
            
    * AJAX의 단점  

          히스토리 관리가 되지 않는다.  
            
          페이지 이동없는 통신으로 인한 보안상의 문제가 있다.  
          
          연속으로 데이터를 요청하면 서버 부하가 증가할 수 있다.  
          
          XMLHttpRequest를 통해 통신하는 경우, 사용자에게 아무런 진행 정보가 주어지지 않는다.   
          (요청이 완료되지 않았는데 사용자가 페이지를 떠나거나 오작동할 우려가 발생하게 된다.)  
            
          AJAX를 쓸 수 없는 브라우저에 대한 문제 이슈가 있다.  
            
          HTTP 클라이언트의 기능이 한정되어 있다.  
            
          지원하는 Charset이 한정되어 있다.  
            
          Script로 작성되므로 디버깅이 용이하지 않다.  
            
          동일-출처 정책으로 인하여 다른 도메인과는 통신이 불가능하다. (Cross-Domain문제)  
            
  * #### AJAX 사용법  
 
    그럼 이제 사용법에 대해 알아보자.  
    ```javascript
    const xhr = new XMLHttpRequest(); // XMLHttpRequest API 로딩
    
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos')
    ```  
    특정 서버에 요청을 보내고 그에 대한 자료를 받아준다. ( API를 로딩해준다. )  
    ```javascript
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
    ```  
      
    예제를 실행해보면 이해가 더 될것같다.  
      
         readyState: HTTP 요청의 현재 상태를 가지고 있는 정수값 프로퍼티
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
    
      
 * ### JavaScript JSON(JavaScript Object Notation)  
    
    #### JSON : 'J'ava'S'cript 'O'bject 'N'otation  
    JSON이란 JavaScript Object Notation라는 의미의 축약어로 데이터를 저장하거나 전송할 때 많이 사용되는 경량의 DATA 교환 형식이다.  
    Javascript에서 객체를 만들 때 사용하는 표현식을 의미하는데, JSON 표현식은 사람과 기계 모두 이해하기 쉬우며 용량이 작아서,   
    최근에는 JSON이 XML을 대체해서 데이터 전송 등에 많이 사용한다.  
    특히, 인터넷에서 자료를 주고 받을 때 그 자료를 표현하는 방법으로 알려져 있다.  
      
    * #### JSON 특징  
  
      * 클라이언트와 서버 간의 HTTP 통신을 위한 텍스트 데이터 포맷이다.
      * JS에 종속되지 않는 언어 독립형 데이터 포맷이다.
      * 대부분의 프로그래밍 언어에서 사용 가능.
      * 서버와 클라이언트 간의 교류에서 일반적으로 많이 사용된다.  
      * 자바스크립트 객체 표기법과 아주 유사하다.  
      * 자바스크립트를 이용하여 JSON 형식의 문서를 쉽게 자바스크립트 객체로 변환할 수 있는 이점이 있다.  
      * JSON 문서 형식은 자바스크립트 객체의 형식을 기반으로 만들어졌다. 
      * javascript가 java로 변환되는 걸 도와주는 친구다. 

    * #### JSON 작성법  

      JSON 작성 방식은 Javascript 객체 작성 방식과 유사하다.  
      
            JSON 작성 방식 : Key 값 및 문자열은 ""(쌍따옴표만 가능)로 작성해야함, 홑따옴표 불가
            {
                    "title": "노인과 바다",
                    "author": "해밍웨이",
                    "isSold": false,
                    "genre": ["novel", "essay"],
            }  
              
      만약, JS Object를 Client 측에서 서버로 데이터(일반적으로 객체)를 전송하기 위해서는 객체를 문자열화(직렬화, Serialization)해야한다.  
      ```javascript
      const book = {
          title: "노인과 바다",
          author: "해밍웨이",
          isSold: false,
          genre: ["소설", "경험담"],
      };
      
      const jsonData = JSON.stringify(book); // JS Object를 JSON 포맷의 문자열로 변환
      ```  
        
      JSON.stringify()는 일반적으로 서버로 보내는 데이터는 한개일 수도 있지만, 여러 개일 수도 있기 때문에, 객체 뿐만 아니라 배열도 JSON 포맷의 문자열로 직렬화한다.  
        
       ```javascript
       const books = [
          { id: 1, title: "하농", author: "하농", isSold: false },
          { id: 2, title: "체르니", author: "체르니", isSold: true },
          { id: 3, title: "부르크뮐러", author: "부르크뮐러", isSold: true },
       ];
       
       const jsonData2 = JSON.stringify(books); // 배열을 JSON 포맷의 문자열로 변환
       ```  
         
    * #### JSON 에서 객체로    

      반대로 서버가 클라이언트 쪽으로 응답한 JSON 데이터는 문자열 형태이다.  
      이 문자열을 JS에서 다시 사용하기 위해서는 문자열 포맷을 다시 JS 전용 객체 리터럴(JS 객체)로 변환해야한다.  
      문자열 포맷을 객체(object)로 변환, 즉 객체화하는 것을 역직렬화(deserialization)라고 한다.  
      
      ```javascript
      const book = {
          id: 1,
          title: '하농',
          author: '하농',
          isSold: false,
      };

      // 서버에서 응답한 데이터라고 가정
      const responseData = JSON.stringify(book);
      
      // JSON 포맷의 문자열을 JS 객체로 변환(parsing)
      const parsedData = JSON.parse(responseData);
      ```  
      서버로부터 응답받은 데이터가 문자열화된 배열일 경우, 배열 객체로 변환해준다.  
        
      ```javascript
      const books = [
          { id: 1, title: "하농", author: "하농", isSold: false },
          { id: 2, title: "체르니", author: "체르니", isSold: true },
          { id: 3, title: "부르크뮐러", author: "부르크뮐러", isSold: true },
      ];

      // 서버에서 응답한 데이터라고 가정.
      const responseData2 = JSON.stringify(books);

      // JSON 포맷의 문자열을 배열로 변환
      const parsedData2 = JSON.parse(responseData2);
      console.log(parsedData2); // 로그에 남겨 확인
      ```
      
* #### 돌아가기 
#### [ Link ](https://github.com/12OneTwo12/TIL) 
        
