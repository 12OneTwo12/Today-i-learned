# Javascript  
  
  #### [ 2022-07-14 ]  
    
## 목차  
  * #### 
    
      
-----------------------------------------------------------------------------------------------------------------------------------------------------  
  
* ### Javascript 객체(Javascript Object)  

  Javascript에서 Object란 JS에서 원시 값(Primitive value)을 제외한 모든 것은 객체(object)를 의미한다.  
  원시 값은 5나 'Jeong'처럼 숫자, 문자열, 불리언, undefined 타입을 의미하고, 원시 값과 객체의 차이는 원시 값은 하나의 값만을 나타내지만  
  객체는 다양한 타입의 값들을 하나의 단위로 구성한 복합 자료 구조이다.  
    
       ex) const arr = ['apple', 5, true, ...];  
         
  객체는 프로퍼티(property, 속성)로 구성된 집합인데.  
  프로퍼티란, 속성이란 뜻으로 자바스크립트에서 객체 내부의 속성을 의미한다.  
  프로퍼티는 키(key)와 값(value)으로 구성된다.  
    
      ex) length, pop()  
        
  JS에서 사용할 수 있는 모든 값들은 프로퍼티의 값(value)이 될 수 있다.  
  함수는 일급 객체이기 때문에 값이 될 수 있고, 따라서 객체의 프로퍼티가 될 수 있는데. 함수가 무엇인지는 차후 알아보도록 하겠다.  
  우선 다음 예제를 통해 객체에 대해 이해해보자.  
    
 ```javascript
 let doggy = {
    name: 'bandi', 
    favoriteFruit: 'banana',
    bark: function(){
        console.log(`왈왈! ${this.favoriteFruit}가 먹고싶어`);
    }
};
```  
  
  위 예제를 살펴보면, doggy라고 하는 객체를 생성하였고 객체 안에는 몇 가지 프로퍼티를 추가해줬다. 세부적으로 살펴보면 
    
      //property : name, favoriteFruit  
      // key : name, favoriteFruit  
      // value : 'bandi','banana'  
    
  이렇게 구별해볼 수 있겠다.  
  console.log(typeof doggy);를 통해 데이터 타입을 살펴보면 object라고 뜨는 것을 확인해 볼 수 있다.  
  bark라고하는 함수 역시 값을 가졌기 때문에 프로퍼티로 자리잡고 있는데, 이는 차후에 다시 살펴보겠다.  
    
  * #### 프로퍼티 조회(접근)  
      
     프로퍼티에는 .(dot) 연산자를 통하여 객체의 프로퍼티에 접근할 수 있다.  
     여기서 한 가지 생각해 볼 수 있는데.  
     나는 오늘까지 프로퍼티에 대해 모르고 있었지만, 어제까지도 사용을 하고있었다.  
     내가 계속 써오던 console.log또한 console이라는 객체의 log라는 프로퍼티를 계속해서 사용하고 있던것이다.  
     프로퍼티에 접근하는 방법은 .(dot)연산자 뿐 아니라 다른 방법들도 있는데, 다음과 같다.  
       
      ```javascript
      console.log(doggy.name); // .(dot) 연산자를 통하여 객체의 프로퍼티에 접근할 수 있음
      console.log(doggy.bark);
      console.log(doggy.bark());
      console.log(doggy[`name`]); // 다른 접근 방법
      ```  
        
  * #### 프로퍼티를 동적으로 추가  

     프로퍼티를 동적으로 추가하기 위해서는 존재하지 않는 프로퍼티에 값을 할당하면 추가하면 된다.  
       
     ```javascript
     doggy.age = 2;
     console.log(doggy.age);
     ```  
       
  * #### 프로퍼티 삭제(delete 연산자)  

     프로퍼티를 삭제하는 방법은 delete 연산자를 사용하면 된다.  
       
     ```javascript
     delete doggy.age;
     console.log(doggy);
     ```  
       
     그렇다면 이제 아까 미뤄놨던 함수란 무엇인지 알아보자  
       
* ### Javascript 함수(Javascript Functions)  

  * #### Javascript에서 함수란  
    
        함수는 자바스크립트에서 가장 중요한 핵심 개념이다.   
        수학의 함수는 입력을 받아 출력을 내보내는 과정을 정의한 것이다.  
        프로그래밍 언어의 함수는 일련의 과정을 문(statement)으로 구현하고 코드 블록으로 감싸서 하나의 실행 단위로 정의한 것이다.  
        입력을 받아서 출력을 내보낼 때, 함수 내부로 전달 받은 변수를 매개변수(parameter), 입력을 인수=인자(argument), 출력을 반환값(return value)라고 한다.  
        또한 함수는 값이며, 여러 개 존재할 수 있다. 그래서 구별하기 위해 식별인 함수 이름을 사용할 수도 있다.  
    
    간단하게 이해하고자 하면 어떤 목적을 가진 작업들을 수행하는 코드들이 모인 블럭으로 이해하면 된다.  
    일반적으로 (입력 – > 함수 – > return – > 출력) 형태를 갖는다.  
     
  * #### 함수의 선언  

    함수의 선언을 위해서는 Keyword, name, paramenter, body 필요하다.  
    함수를 선언하는 방법에는 몇 가지가 있는데.  
    아래 예제처럼 선언하는 방식을 [함수 선언식] 이라고 한다.  
      
      ```javascript  
      function hello() {
      } 
      
      // Keyword    -> function
      // Name       -> hello
      // Paramenter -> ()
      // Body       -> {}
      ```  
        
        
  * #### 함수의 특징  
   
    함수에는 몇 가지 특징이 있는데, 함수는 function 키워드로 시작하고, 실제로는 객체이다.  
    함수는 정의/생성할 수 있으며, 출력할 수도 있고, 객체의 특성 덕분에 함수를 변수나 배열에 배정할 수 있다.  
    이는 자바스크립트의 특징이다.  
      
    ```javascript
    const div = function division(a,b){
    return a / b;
    }
    
    // div라는 변수에 division이라는 함수를 담았다.
    // 함수를 하나의 값으로써 변수에 할당 가능
    ```  
      
    이렇게 선언하는 방식을 [함수 표현식]이라고 한다.  
      
  * #### 즉시 실행 함수(Immediately-invoked function expression)  

    함수 정의와 동싱에 실행되는 함수, 한 번만 실행되고 다시 호출 불가하다.  
    마찬가지로 즉시 실행 함수도 함수이기 때문에, 변수에 즉시 실행 함수의 리턴 값 저장도 가능하다.  
  
    ```javascript
    const res = (function () {
    const a = 5;
    const b = 10;
    return a*b;
    }());
    ```

* ### 화살표 함수(Arrow function)  
    
    함수를 선언하는 또 하나의 방법인 화살표 함수에 대해 알아보자.  
    2015년에 발표된 ECMAScript에 arrow function가 추가됐는데.  
    우선 ES6 문법이란 전에 한번 알아봤던 ECMAScript의 약자이며 자바스크립트의 표준, 규격을 나타내는 용어이다.  
    익명함수 표현식을 작성하는 새로운 방법이고,  
    function 키워드 대신 화살표(arrow)를 사용하여 좀 더 간략하게 표현하는 문법인데, 기본 형태는 다음과 같다.  
      
         () => {};  
              
    무엇인가 많이 생략된것 같다. 예제를 보는 것이 이해가 빠를 것 같다.  
      
    ```javascript
    (a,b) => { return a - b;} // 익명 함수, 이름을 여기다 써주면 에러남
    const sub = (c,d) => { return c - d; } // 변수에 익명 함수를 담으면 됨.
    const subb = (e,f) => e*f; // 코드가 한줄이면 {}, return 생략 가능
    console.log(sub(5,3));
    ```  
      
    이런식으로 () => (화살표)와 {} 를 통해 간단하게 선언할 수 있다.  
    파라미터이 없는 함수같은경우 빈 괄호, () 를 작성해야한다.  
      
        ex) const greeting = () => console.log('안녕하세요');  
          
    같은 목표를 가진 코드를 여러 선언 방법으로 비교해보자.  
      
    ```javascript
    // 두 수의 합을 구하는 함수 sum
    // 1. 함수 선언문 방식
    function sum(a,b){
       return a+b;
    }

    // 2. 함수 표현식
    const sum = function (a,b){
        return a+b;
    }

    // 3. 화살표 함수
    const sum = (a,b) => a+b;
    ```  
      
    같은 목표를 가진 코드라면 아무래도 화살표 함수를 이용하는게 짧게 끝날 수 있을 것 같다.  
    화살표 함수의 특징은 암묵적인 return이 가능하다는 것과 기존의 함수는 { } 를 사용하고, return 키워드를 줬지만,  
    화살표 함수는 둘 다 사용하지 않음 ( 코드가 여러 줄일 경우에는 예외 )  
      
    ```javascript
    // body 부분이 2줄 이상일 경우 { } 및 return 키워드를 추가해야함
    const sub = (a,b) => {
        console.log('뺄셈입니다.');
        return a-b;
    }

    // 파라미터가 1개일 경우에는 () 생략 가능.
    const square = x => x * x;
    console.log(square(10)); // 100

    // 파라미터가 없는 경우에는 ()는 필수
    const greeting = () => 'Hello';
    console.log(greeting()); // console.log('Hello'); 와 같다.
    ```  
      
    
