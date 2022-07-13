# Javascript  
  
  #### [ 2022-07-13 ]  
    
## 목차  
  * #### 
    
      
-----------------------------------------------------------------------------------------------------------------------------------------------------  
  
* ### Javascript 변수( Javascript Variables )

  Javascript에서의 변수에 대해 알아보고자 한다.  
  우선 변수란 무엇일까?  
    
    * 변수  
  
          자바스크립트에서 변수란 값을 저장하기 위해 확보한 메모리 공간 자체 또는 메모리 공간을 식별하기 위한 식별자이다.  
          일종의 데이터 보관함 같은 것이다.  
            
![image url](https://github.com/12OneTwo12/TIL/blob/main/Javascript/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20(1).png?raw=true)  
    
   * 변수 생성 2단계  
  
  
              선언 : 변수 이름을 등록해서 자바스크립트 엔진에 변수의 존재를 알린다.  
            
              초기화 : 값을 저장하기 위한 메모리 공간을 확보하고 암묵적으로 undefined를 할당해 초기화한다.  
              
            
* ### 변수의 선언  

  변수의 선언은 변수를 생성하는 것이다.  
  값을 저장하기 위한 메모리 공간을 확보하고 변수 이름과 확보된 메모리 공간의 주소를 연결해서 값을 저장할 수 있게 준비하는 것인데,    
  변수를 선언할 때는 var, let, const를 사용하여 선언 해야만 한다.  
     
  ![image url](https://github.com/12OneTwo12/TIL/blob/main/Javascript/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C.png?raw=true)  
    
  Javascript의 변수는 Java와 다르게 변수의 데이터 타입을 선언할 필요 없다. 이는 장단점이 있는데,   
  코딩할때는 편리 하지만 변수명에 문자열이 담겨져있는지 숫자가 담겨져있는지 직접 봐야지만 확인 할 수 있다는 점이다.  
  위에 보이는 "testData" 라고 적은 부분이 변수 명이 되는 것이다. 
  사람이 태어나면 이름을 지어 주는 것처럼 변수를 선언할 때 이름을 지어 주는 것이다.  
  그런데 여기서 주목할 것은 어째서 "testdata"가 아닌 "testData"라고 선언 한 것일까?  
  각 프로그래밍 언어에는 변수 이름 명명 규칙(Variable Naming Convention)이 존재하는데  
  이는 쉽게 코드를 이해하고 사용할수 있게 규칙을 정해 가독성을 높이고, 유지보수 비용을 줄이기 위해 사용한다.  
    
* ### 변수 이름 명명 규칙(Variable Naming Convention)  

  대표적인 네이밍 컨벤션 케이스( Naming Convention Case )가 몇 가지만 알아보자.  
    
    * 카멜 표기법 camelCase, lowerCamelCase  
  
                띄어쓰기 대신 대문자로 단어를 구분하는 표기 방식이다.  
                JavaScript에서 대부분(objects, functions, and instances)의 이름에 사용한다.  
  
  
    * 파스칼 표기법 PascalCase, UpeerCamelCase  
  
                첫 단어를 대문자로 시작하는 표기 방식이다. 카멜표기법과 같지만 첫 단어 또한 대문자이다.    
                JavaScript에서 클래스의 이름에 사용한다.   
                python에서도 클래스의 이름에 사용한다.   
                C에서 열거형 상수(enum)를 표기할때 사용한다.  
  
    
    * 스네이크 표기법 snake_case  
  
               모두 소문자를 사용하고 띄어쓰기 대신 '_'(underbar) 를 사용하는 표기 방식이다.   
               Python 에선 변수, 함수, 메서드, 인스턴스 등의 이름에 사용한다.   
               C에선 대부분(변수, 변수 타입, 함수 등) 의 이름에 사용한다.  
    
 ![image url](https://github.com/12OneTwo12/TIL/blob/main/Javascript/img123123.png?raw=true)  
   
   Javascript에서 변수를 선언할때는 카멜 표기법(camelCase)을 이용하여 선언 해줘야 한다.  
   
* #### 변수의 재할당

          변수의 재할당이란 말 그대로 이미 선언한 변수를 다른 값으로 초기화 해주는 것을 의미한다.  
      
![image url](https://github.com/12OneTwo12/TIL/blob/main/Javascript/%EC%A0%9C%EB%AA%A9%20%EC%97%86%EC%9D%8C21321.png?raw=true)  
  
* #### 상수란  

          const 키워드를 이용해서 상수를 선언할 수 있다.   
          여기서 상수란 한 번 선언되어 초기화되면 다시 선언되거나 할당될 수 없는 변수를 의미한다.  
    
  그렇다면 이제 예제를 보자  
    
```javascript
let userName; // 변수 선언, userName이라는 공간 할당받음, undefined
console.log(userName);
userName = 'Yoo'; // 변수의 초기화(Initialization)
console.log(userName);

// 재할당(Reassignment)
userName = 'Why';
console.log(userName);

// 상수(Contstant), 재할당 불가, 처음에만 할당 가능
const allUsers = 20;
console.log(allUsers);

allUsers = 5; // Uncaught TypeError: Assignment to constant variable.
// 상수에 재할당 불가능.
```  
  
  예제를 보니 이해가 쉬워진듯 하다.  
    
* ### Javascript 자료형(Javascript Data Types)  

  Data Type이란 변수를 선언할 때, 숫자나 문자열 또는 이 외의 것들을 변수에 저장하는 데이터 종류를 말한다.  
  Javascript는 동적 타입 언어인데 이가 의미하는 바는 아래와 같다.  
    
   * 정적 타입 언어(static typed language)  
          
            C나 Java 와 같은 프로그래밍 언어에는 정수 타입 변수(int), 부동소수점 타입 변수(double) 등이 있어   
            그 변수의 타입과 일치하는 데이터만 저장이 가능하다.  
            이와 같이 변수에 타입이 있는 언어를 정적 타입 언어(static typed language) 라고 한다.  
              
   * 동적 타입 언어(dynamic typed language)  

            자바스크립트는 변수에 타입이 없으므로, 모든 타입의 데이터를 저장할 수 있다.   
            아래와 같이 실행할 때 변수에 저장된 데이터 타입을 동적으로 바꿀 수 있다는 것이다.   
            이와 같은 언어를 동적 타입 언어(dynamic typed language) 라고 한다.  
              
              
   
