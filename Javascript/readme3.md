# Javascript  
  
  #### [ 2022-07-14 ]  
    
## 목차  
  * #### [[ Javascript 객체(Javascript Object) ]](#javascript-객체javascript-object)  
  * #### [[ Javascript 함수(Javascript Functions) ]](#javascript-함수javascript-functions)   
  * #### [[ 화살표 함수(Arrow function) ]](#화살표-함수arrow-function)  
  * #### [[ Javascript 콜백(Javascript callback) ]](#javascript-콜백javascript-callback)  
  * #### [[ addEventListener ]](#addeventlistener)  
  * #### [[ Javascript 배열(Javascript Array) ]](#javascript-배열javascript-array)  
  * #### [[ 배열 매서드(함수)의 반환 패턴 ]](#배열-매서드함수의-반환-패턴)  
  * #### [[ 이어서 보기 ]](#이어서-보기)  
  * #### [[ 돌아가기 ]](#돌아가기)  
    
      
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

    함수의 선언을 위해서는 Keyword, name, parameter, body 필요하다.  
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
        
    그렇다면 파라미터(parameter)란 무엇일까?  
      
        매개변수(parameter)란 함수의 정의에서 전달받은 인수를 함수 내부로 전달하기 위해 사용하는 변수를 의미합니다.
        인수(argument)란 함수가 호출될 때 함수로 값을 전달해주는 값을 말합니다.  
          
    나는 쉽게 우리가 함수를 사용할때 ()들어가는 변수들을 매개변수(parameter)로 이해했다.  
      
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
      
      
* ### Javascript 콜백(Javascript callback)  

    Callback이란, 어떤 함수의 인자값(argument)으로 보내지는 함수로써, 무언가(event)가 발생했을 때(어떤 함수의 호출) 실행(호출)되는 함수를 말한다.  
    조금 더 쉽게 설명하자면 파라미터로 함수를 전달받아, 함수의 내부에서 실행하는 함수이다.  
    예제를 살펴보며 이해를 도와보자.  
      
    ```javascript
    // 콜백 함수 - 기본
    function greeting(name) {
        console.log(`Hello ${name}`);
    }

    function userInput(myName, callbackFn){
        callbackFn(myName); // greeting("Jeong");과 같음.
    }

    // userInput함수의 인자값으로 greeting 함수를 전달
    userInput('Jeong', greeting);
    ```
      
    이해하기 위해 예제를 천천히 봐보자.    
    예제 마지막 줄을 보면, userInput이라는 함수의 첫번 째 인자값으로 'Jeong'을 넣었고,  
    두번 째 인자값으로 greeting이라고 하는 함수를 넣게됐는데. 그렇다면 userInput이라고 하는 함수는 어떤 명령을 수행하는 함수인지 보자. 
    userInput이라는 함수는 myName이라는 매개변수(parameter)와 callbackFn이라고 하는 매개변수(parameter)를 가지고 있는데.  
    첫번 째 인자값으로 들어간 'Jeong'이라는 문자열이 myName이라고 하는 매개변수에 할당되고,  
    두번 째 인자값으로 들어간 greeting이라고 하는 함수가 callbackFn이라고 하는 매개변수에 할당된다.  
    그렇게 되면 이제 greeting이라는 함수는 무슨 행동을 하는지 살펴봐야하는데,  
    callbackFn안에 담긴 함수 greeting은 name이라는 매개변수가 주어졌을때, 'Hello ${name}'이라는 문자열을 내보내게 되는데,  
    userInput이라는 함수 body 안에서 callbackFn(myName)이라는 코드를 통해 코드 마지막줄에서 첫번 째로 주어진 인자값 'Jeong'이  
    myName으로 전달, 이는 곧 callbackFn(myName)의 파라미터로 전달되며 이것이 greeting의 파라미터, 즉 name이라는 파라미터의 값이 된다.  
    즉 결과는 'Hello Jeong'이 출력된다.  
    처음에는 상당히 이해하기 어려운 개념이였다.  
    설명하는 지금도 나에게는 이해가 덜되고 어려운 개념이다. 간단하게 순서를 그려보자면  
      
         userInput('Jeong', greeting); -> callbackFn('Jeong') -> greeting('Jeong') -> console.log(`Hello ${'Jeong'}`); -> 출력  
           
    이렇다고 볼 수 있을 것 같다.  
      
 * ### addEventListener  

    이벤트 리스너는 DOM 객체에서 이벤트가 발생할 경우 해당 이벤트 처리 핸들러를 추가할 수 있는 오브젝트이다.  
    이벤트 리스너를 이용하면 특정 DOM에 위에 말한 Javascirpt 이벤트가 발생할 때 특정 함수를 호출한다.  
    작성된 이벤트 리스너는 먼저 해당 객체나 요소에 등록되어야만 호출될 수 있다.  
    객체나 요소의 메소드에 이벤트 리스너를 전달할 때는 다음 메소드를 사용할 수 있다.  
      
        대상객체.addEventListener(이벤트명, 실행할이벤트리스너, 이벤트전파방식)  
          
    예문으로 이해해보자.  
      
    ```javascript
    const button = document.querySelector('button');

    button.addEventListener('click', ()=>{console.log('button cliked!');})
    
    // 버튼을 마우스로 클릭하는 클릭('click') 이벤트가 발생하였을 때
    // 'button cliked!'가 출력되도록 구현
    ```  
      
    이렇게하면 button을 클릭할때마다 console.log('button cliked!') 코드가 실행되는 것이다.  
    이를 통해 다양하게 활용할 수 있겠다 싶었다.  
      
    그렇다면 querySelector무엇일까?  
      
          기본형태 : element = baseElement.querySelector(selectors);element = baseElement.querySelector(selectors);  
          querySelector() 를 사용하여 html의 태그와 class, id 모두 JavaScript에 가져오는 역활을 하는 녀석이다.  
          이로 인해 html 요소들을 JavaScript에서 변경할 수 있다.  
            
    예제  
      
    ```javascript
    const myDiv = document.querySelector(".test"),
        myH1 = myDiv.querySelector("h1");

    console.log(myDiv);
    console.log(myH1);
    ```
      
    js 에서 html의 엘리먼트를 갖고와서 html을 컨트롤 할 수 있다.  
    h1을 갖고 올 때는 myDiv 자손 엘리먼트 중 h1을 갖고 온다.  
    html 문서를 만들고 로그를 확인 해보도록 하자.
      
      
 * ### Javascript 배열(Javascript Array)  

    배열이란, 연관된 데이터를 모아서 관리하기 위해서 사용되는 데이터 타입이다.  
    변수가 하나의 데이터를 저장하기 위한 것이라면 배열은 여러 개의 데이터를 저장하기 위한 것이라고 할 수 있다.  
      
          배열 작성 방식 : const someting = [ element, element, element, element, ··· ];  
          element : 배열에 들어갈 요소들(Html의 element가 아님)  
            
      ```javascript
      const nothing = [];     // [] 배열을 arr이라는 변수에 할당(저장), [] -> 빈 배열  
      const arr = ['나','너','그리고','우리',2,3,7];  
      ```  
          
     * 배열의 출력 방법

        ```javascript
        console.log(arr);         // 배열 전부를 출력
        console.log(arr[0]);      // 배열 중에 첫 번째 요소 출력 
        console.log(arr[2]);      // 배열 중에 세 번째 요소 출력
        console.log(arr.length);  // length는 배열의 길이를 의미, 배열의 길이를 출력  
        ```  
          
        배열의 요소를 호출할때는 0번 부터 시작한다.  
          
        ![image url](https://github.com/12OneTwo12/TIL/blob/main/Javascript/123123124151515161.png?raw=true)  
          
     * 배열 요소들의 관리  

        배열 요소들을 관리하는 방법은 다음과 같다.  
  
        ```javascript
        // 요소의 조회(참조)
        console.log(`${arr[0]},${arr[4]}`);

        // 요소의 추가
        // 변수명 [추가할 인덱스 번호, 위치] = 할당할 값(리터럴)
        arr[7] = 'new cookie';
        console.log(arr);

        const melonCookie = 'melon cookie';
        arr[8] = melonCookie; // 변수로도 할당 가능
        console.log(arr);

        // 요소의 갱신(update)
        arr[7] = 5;
        console.log(arr);

        // 요소의 삭제
        const fruits = ['apple','orange','kiwi'];
        // 1. fruit
        // 2. fruits

        console.log(fruits);
        delete fruits[1]; // 삭제, 희소배열이 만들어지기 때문에 비추
        console.log(fruits); // empty같이 요소의 실제 값은 없지만, 공간은 유지된 형태
        console.log(fruits[1]); // undefined
        console.log(fruits.length); 

        const nuts = ['walnut','almond','pinenut'];
        nuts.splice(1,1); // () 보고 함수인가보다 생각해야함, 배열의 요소를 수정할 수 있는 splice라는 프로퍼티를 사용 // 1번인덱스 삭제
        // ex.  pikachu.attack(); // console.log('백만 볼트!');
        console.log(nuts);
        console.log(nuts.length);

        nuts.splice(1,0,'nie'); // 1번 인덱스에 nie 추가
        console.log(nuts);

        const new = [3,4,5,6,7,8,9];
        neww.splice(3,2); // 3번 인덱스부터 2개 삭제       
        ```  
            
          
 * #### 배열 매서드(함수)의 반환 패턴  

    * 원본을 직접 수정하는 mutator methods  

      * pop() : 원본 배열의 가장 끝에 위치한 요소를 제거, 해당 값을 반환함, 추가 파라미터는 없음
          
      * shift() : 원본 배열의 가장 첫 번째(앞) 요소 제거. pop이 성능이 더 좋음 shift는 뒷 인덱스들이 전부 한칸 씩 앞으로 와야하기 때문

      * push() : 원본 배열의 가장 끝에 새로운 요소 추가. 추가할 요소 작성  
        
      * unshift() : 원본 배열의 가장 앞에서 요소 추가  -> shift(), unshift()는 모든 인덱스에 영향을 미침.

      * splice() : 정해진 위치에 요소를 추가하거나 제거, 또는 추가와 제거를 동시에 진행.  

      * reverse() : 배열의 순서를 역순으로 정렬.  

      * fill() : 모든 요소들을 주어진 값으로 전부 덮어씀, 시작과 끝 지점 지정 가능.  

      * sort() : 오름차순 정렬, 문자 중에 대문자 혹은 숫자가 포함돼 있다면 숫자 > 대문자 > 소문자 > abc 순으로 정렬.  

     
* #### 이어서 보기  
#### [ Link ](https://github.com/12OneTwo12/TIL/blob/main/Javascript/readme4.md)  
  
* #### 돌아가기 
#### [ Link ](https://github.com/12OneTwo12/TIL) 
