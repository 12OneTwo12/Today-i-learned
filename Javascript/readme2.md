# Javascript  
  
  #### [ 2022-07-13 ]  
    
## 목차  
  * #### [[ Javascript 변수(Javascript Variables) ]](#javascript-변수javascript-variables)  
  * #### [[ 변수의 선언 ]](#변수의-선언)  
  * #### [[ 변수 이름 명명 규칙(Variable Naming Convention) ]](#변수-이름-명명-규칙variable-naming-convention)  
  * #### [[ 상수란 ]](#상수란)  
  * #### [[ Javascript 자료형(Javascript Data Types) ]](#javascript-자료형javascript-data-types)  
  * #### [[ Javascript 연산자(Javascript operators) ]](#javascript-연산자javascript-operators)  
  * #### [[ Javascript 조건문(Javascript Condition Statement) ]](#javascript-조건문javascript-condition-statement)  
  * #### [[ Javascript 반복문(Javascript Loops) ]](#javascript-반복문javascript-loops)  
    
      
-----------------------------------------------------------------------------------------------------------------------------------------------------  
  
* ### Javascript 변수(Javascript Variables)

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
              
              
* ### Javascript 자료형(Javascript Data Types)  

   Javascript의 데이터 타입에는 기본형, 문자형(String), 숫자형(Number), 논리형(Boolean), null, undefined, 심볼형(Symbol), 객체형이 있다.  
    
    * ##### 기본형  
      
          자바스크립트 자료형 중 가장 기본적인 값입니다.   
          원시 자료형, 원시데이터라고도 하며 변경이 불가능한 값입니다.  
            
    * ##### 문자형(String)  

          데이터를 '' (홑 따옴표, single quote) 또는 ""(쌍 따옴표, double quote) 안에 둘러싸인 문자들의 집합을 의미한다.     
          숫자가 들어갈 경우도 이를 수가 아닌 텍스트로 인식한다.   
            
    * ##### 숫자형(Number)  
  
          숫자형 데이터를 의미하며, 숫자를 나타내거나 연산을 하는데 쓰이는 데이터 타입이다.   
          정수나 실수를 기본하지 않고 통용해서 숫자를 처리합니다.  
              
    * ##### 논리형(Boolean)  

          참과 거짓으로 표현되는 값이며, 2개 데이터를 비교시 사용할 수 있다.   
          비교 연산자 등에 의해 참/거짓을 자동으로 판별할 수 있다.   
          참, 거짓을 각각 직접 입력 가능하다.   
            
    * ##### null  

          빈 값. (=변수가 참조하는 객체가 없음)  
          기존에 정의한 변수 값을 초기화할때도 사용하는 데이터타입이다.  
          undefined과 null의 차이점은, undefined는 정말 아무 데이터가 없을 때 표시하지만 null은 메모리 안에 null이라는 값이 저장된다.  
            
    * ##### undefined    

          정의 되지 않았다는 것을 의미한다.  
          값을 할당하지 않은 변수가 가지는 값이다. (=아직 값을 할당하지 않았음)  
            
    * ##### 심볼형(Symbol)  

          유일하며 변경 불가능한 기본값을 만든다.   
            
    * ##### 객체형   

          데이터와, 그 데이터에 관련한 절차, 방법, 기능 등의 동작을 모두 포함할 수 있다.  
          함수 (Function) 배열 (Array) 날짜 (Date) 정규식 (RegExp) 등으로 여러 속성을  
          하나의 변수에 저장할 수 있도록 해주는 데이터타입이다.  
            
  그렇다면 이제 간단히 그냥 한번 해보자.  
    
 ```javascript
 let year = 2022;
console.log(year);

let grade = 4.5;
console.log(grade);

let greeting = '안녕하세요'; // ' ' (홑 따옴표, single quote)
// ""(쌍 따옴표, double quote) 둘 다 가능

let userName = "Jeong" ;

console.log( "저는" + userName + "입니다" ); 
// 문자열에 한해 + 연산 가능

console.log(typeof true);
console.log(true + false);

console.log( "저는" + userName + "입니다" ); 
console.log(``); // backtick 기호, 템플릿 리터럴 문법
console.log(`저는 userName입니다`);
console.log(`저는 ${userName} 입니다`);
console.log('저는 ${userName}입니다');
```  
  
  직접해보니 이해가 좀더 빨리 됐다.  
  
  * 템플릿 리터럴 문법(Template literals)
       
          템플릿 리터럴은 내장된 표현식을 허용하는 문자열 리터럴입니다. 
          템플릿 리터럴은 표현식/문자열 삽입, 여러 줄 문자열, 문자열 형식화, 문자열 태깅 등 다양한 기능을 제공합니다.  
          console.log(`이것이 ${이미 선언한 변수} 리터럴 문법입니다.`); -> 이런식으로 사용하면 된다.  
            
              

* ### Javascript 연산자(Javascript operators)  
  
    연산자란 무엇인가? 주어진 식을 계산하여 결과를 얻어내는 과정을 연산이라고 하며, 연산을 수행하는 기호를 연산자라고 한다.  
    연산자의 종류에는 다음과 같은 것들이 있다.  
      
    
    1. 산술 연산자(Unary operators)  
           
              +, -, /, *, %(나머지 연산), **(제곱)
  
    2. 증감 연산자(Increment and decrement)  

              age++(후위 연산), age--(후위 연산), ++age(전위 연산), --age(전위 연산)  
              후위 연산: 코드의 실행 종료 후 연산이 진행됨  
              전위 연산: 연산 후 코드 실행 
  
    3. 관계 연산자(Relational operators)  
      
              <, >, <=, >=
  
    4. 동등 연산자(Equality operators)  
      
              ==, !=, ===, !==
              == vs === ?
    
    5. 논리 연산자(Logical operators)  
      
              &&, ||
  
    6. 삼항 연산자(Conditional ternary operators)  
      
              (condition ? ifTrue : ifFalse)

    7. 할당 연산자(Assignment operators)  
      
              =, +=, -=, *=, /=, %=
  
              
   예제로 살펴보자.  
     
```javascript
console.log(5 + 5);
console.log(5 - 10);
console.log(5 / 2);
console.log(5 * 4);
console.log(10 % 3); // 나눈 나머지값
console.log(4 ** 2); //제곱

// 증감 연산자
let age = 5;

// 후위 연산: 코드의 실행 종료 후 연산이 진행됨
console.log('후위 연산');
console.log(age++);
console.log(age--);
console.log(age);

let adult = 19;
// 전위 연산: 연산 후 코드 실행
console.log('전위 연산');
console.log(++adult);
console.log(--adult);

// 관계 연산자
// console.log(age > 4);
console.log('관계 연산');
let result = age > 4;
console.log(result);
console.log(age <= 3);

// 동등 연산자
console.log('동등 연산');
console.log(1 == 1);
console.log(1 == "1"); // 비교 전에 값이 숫자면 같은 타입으로 변환 후 연산
console.log(1 === "1"); // false, 엄격한 비교(strict), JavaScript feature
console.log(1 !== 2); // 같지 않다.

// 논리 연산자(and, or연산)
console.log('논리 연산');
console.log(true && true);
console.log(5 > 3 && 2 === 2); // and 연산
console.log(5 > 3 || 2 !==2); //or 연산

// 삼항 연산자
console.log('삼항 연산');
let yourAge = 25;
let beverage = (yourAge >= 20) ? 'Soju' : 'coke';
console.log(beverage);

if(yourAge >= 20){
    beverage = 'Soju';
} else {
    beverage = 'coke';
}

// 할당 연산자(우선 순위가 가장 낮음), 변수에 값을 대입할 때 사용하는 연산자
yourAge += 1; // yourAge = yourAge + 1과 동일한 코드
console.log(yourAge);
```  
  
  예제와 결과를 비교하며 보니 그저 개념만 볼때보다 훨씬 이해가 된다.  
    
      
* ### Javascript 조건문(Javascript Condition Statement)  
  
  조건문이란 프로그램 내에서 주어진 표현식의 결과에 따라 별도의 명령을 수행하도록 제어하는 실행문이다.  
    
  * #### if문  

    조건문 중에서 가장 기본이 되는 실행문은 if 문이다.  
    
 ![image url](https://github.com/12OneTwo12/TIL/blob/main/Javascript/%EC%A0%9C%EB%AA%A9%20%EC%97%86112%EC%9D%8C.png?raw=true)  
   
    if 괄호 안에 있는 값이 ture라면 { 괄호 안에 있는 명령을 수행하라는 코드인것이다.  
    거짓(false)이면 아무것도 실행하지 않는다.  
    
  * #### else문  

    if 문과 같이 사용할 수 있는 else 문은 if 문의 표현식 결과가 거짓(false)일 때 주어진 실행문을 실행한다.  
      
  * #### else if문  
  
    else if 문은 if 문처럼 표현식을 설정할 수 있으므로, 중첩된 if 문을 좀 더 간결하게 표현할 수 있다.   
    하나의 조건문 안에서 if 문과 else 문은 단 한 번만 사용될 수 있다.  
    하지만 else if 문은 여러 번 사용되어 다양한 조건을 설정할 수 있다.
  
 ![image url](https://github.com/12OneTwo12/TIL/blob/main/Javascript/img_js_elseif.png?raw=true)  
   
  예제를 봐서 이해를 도와보자. 피카츄가 모험을 한다고 가정하자.  
    
```javascript
if (monster === '리자몽'){
    console.log('119 신고');
} else if (monster === '거북왕') {
    console.log('도망');
} else { // else if는 if와 else 사이에만 작성 가능
    console.log('백만 볼트');
}
```  
  
  피카츄가 다음과 같은 명령을 받은 상태라면, 리자몽을 만나게 된다면 119에 신고를 할것이고,  
  거북왕을 만난다면 도망을 갈것이다. 그 외에 나머지 다른 포켓몬들과의 만남에서는 백만 볼트를 쓰게 될것이다.  
  예제를 보니 이해가 쉬워졌다.  
  
* ### Javascript 반복문(Javascript Loops)  

  반복문이란, 반복문이란 프로그램 내에서 똑같은 명령을 일정 횟수만큼 반복하여 수행하도록 제어하는 실행문이다.  
  프로그램이 처리하는 대부분의 코드는 반복적인 형태가 많으므로, 가장 많이 사용되는 실행문 중 하나이다.   
    
   * #### 반복문의 구조  

    ![image url](https://github.com/12OneTwo12/TIL/blob/main/Javascript/%EB%B0%98%EB%B3%B5%EB%AC%B8.png?raw=true)  
      
  조건을 만족하는 동안 반복하는 구조를 만들때 사용한다.  
  자주쓰이니 정확하게 숙지하도록 해야겠다.  
  
