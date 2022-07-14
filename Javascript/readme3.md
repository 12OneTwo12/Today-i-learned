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
    
  
