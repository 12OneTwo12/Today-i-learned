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
        
        
    
    
  
