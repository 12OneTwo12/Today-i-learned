# Java 
  
  #### [ 2022-07-27 ]  
    
## 목차  
  * #### [[ 다형성(polymorphism) ]](#다형성polymorphism)  
  * #### [[ 참조 변수의 타입 변환 ]](#참조-변수의-타입-변환)  
  * #### [[ instanceof 연산자 ]](#instanceof-연산자)
  * #### [[ Overriding ]](#overriding)  
    
      
---------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### 다형성(polymorphism)  

  다형성(polymorphism)이란 하나의 객체가 여러 가지 타입을 가질 수 있는 것을 의미한다.  
  자바에서는 이러한 다형성을 부모 클래스 타입의 참조 변수로 자식 클래스 타입의 인스턴스를 참조할 수 있도록 하여 구현하고 있다.  
  다형성은 상속, 추상화와 더불어 객체 지향 프로그래밍을 구성하는 중요한 특징 중 하나이다.  
    
  자바에서는 다형성을 위해 부모 클래스 타입의 참조 변수로 자식 클래스 타입의 인스턴스를 참조할 수 있도록 하고 있다.  
  이때 참조 변수가 사용할 수 있는 멤버의 개수가 실제 인스턴스의 멤버 개수보다 같거나 적어야 참조할 수 있다.  
  
  다음 예제는 참조 변수의 다형성을 보여주는 예제이다.  
  
  ```java
  class Animal { ... }

  class Mouse extends Animal { ... }

  ...

  Animal a = new Animal(); // 허용

  Mouse m = new Mouse();   // 허용

  Animal a = new Mouse();  // 허용

  Mouse m = new Animal();  // 오류 발생.
  ```  
    
* ### 참조 변수의 타입 변환  

    자바에서는 참조 변수도 다음과 같은 조건에 따라 타입 변환을 할 수 있다.  
       
    1. 서로 상속 관계에 있는 클래스 사이에만 타입 변환을 할 수 있다.  
       
    2. 자식 클래스 타입에서 부모 클래스 타입으로의 타입 변환은 생략할 수 있다.  
       
    3. 하지만 부모 클래스 타입에서 자식 클래스 타입으로의 타입 변환은 반드시 명시해야 한다.  

    ```java
    class Parent { ... }

    class Child extends Parent { ... }

    class Brother extends Parent { ... }

    ...

    Parent pa01 = null;

    Child ch = new Child();

    Parent pa02 = new Parent();

    Brother br = null;



    pa01 = ch;          // pa01 = (Parent)ch; 와 같으며, 타입 변환을 생략할 수 있음.

    br = (Brother)pa02; // 타입 변환을 생략할 수 없음.

    br = (Brother)ch;   // 직접적인 상속 관계가 아니므로, 오류 발생.
    ```  
      
* ### instanceof 연산자  

    이러한 다형성으로 인해 런타임에 참조 변수가 실제로 참조하고 있는 인스턴스의 타입을 확인할 필요성이 생긴다.  
    자바에서는 instanceof 연산자를 제공하여, 참조 변수가 참조하고 있는 인스턴스의 실제 타입을 확인할 수 있도록 해준다.  
  
    자바에서 instanceof 연산자는 다음과 같이 사용한다.  
      
    ```java
    class Parent { }

    class Child extends Parent { }

    class Brother extends Parent { }



    public class Polymorphism01 {

        public static void main(String[] args) {

            Parent p = new Parent();

            System.out.println(p instanceof Object); // true

            System.out.println(p instanceof Parent); // true

            System.out.println(p instanceof Child);  // false

            System.out.println();



            Parent c = new Child();

            System.out.println(c instanceof Object); // true

            System.out.println(c instanceof Parent); // true

            System.out.println(c instanceof Child);  // true

        }

    }
    ```  
      
  * ### Overriding  

    그렇다면 여기서, ``` class Animal { ... } ``` 이라는 클래스의 ``` class Mouse extends Animal { ... } 이라는 하위 클래스가 있다고 할때,  
    ``` Animal a = new Mouse(); ``` 라고 인스턴스를 만들었다고 해보자, 그렇다면 오버라이딩된 메소드를 호출했을때는 어떻게 될까?  
    한번 해보자.  
      
    ```java
    
    public class Animal {

      String name;

      void showName() {
        System.out.printf("나는%s이야. \n", name);
      }

      void sing() {
        System.out.println("동물은 어떻게 울지?");
      }
    }
    ```
    ```java
    public class Mouse extends Animal {
      String address;

      // 오버 라이딩 - 재정의 : 상위 클래스의 메서드와 같은 메서드명, 반환타입, 같은 매개변수 리스트
      @Override
      void showName() {
        System.out.printf("내 이름은 비밀이야. \n");
      }

      // 오버 로딩 - 중복 정의 : 같은 메서드명, 다른 매개변수(parameter) 리스트
      void showName(String yourName) {
        System.out.printf("안녕 %s,나는%s이야. \n", yourName ,name);
      }

      @Override
      void sing() {
        System.out.println("쥐는 찍찍");
      }

    }
    ```
    
    ```java
    public static void main(String[] args) {
        Animal anAnimal = new Animal();
        anAnimal.name = "어떤 동물";
        anAnimal.showName();

        Mouse jerry = new Mouse();
        jerry.name = "제리";
        jerry.address = "하와이";

        jerry.showName(); // 내 이름은 비밀이야 // 오버 라이딩
        jerry.showName("내 이름은 안녕이야"); // 오버로딩

        Animal mickey = new Mouse();
        mickey.showName();
    }
    ```  
      
    메소드는 오버라이딩된 하위 개체의 것을 불러오는 것을 확인했다.  
    
