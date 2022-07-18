# Javascript  
  
  #### [ 2022-07-18 ]  
    
## 목차  
  * #### [[ Javascript spread syntax(Javascript 전개 문법)
      
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
  
    
 * ### JavaScript sync, async(동기와 비동기)  
      
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
            
      

         
