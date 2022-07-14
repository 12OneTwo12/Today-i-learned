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

    함수의 선언을 위해서는 Keyword, name, paramenter, body 필요하다. 아래 예문을 보며 이해해보자.  
      
      ```javascript  
      function hello() {
      } 
      
      // Keyword    -> function
      // Name       -> hello
      // Paramenter -> ()
      // Body       -> {}
      ```  
        
     
   
