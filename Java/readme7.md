# Java 
  
  #### [ 2022-08-01 ]  
  
  ## 목차  
  * #### [[ 
    
      
---------------------------------------------------------------------------------------------------------------------------------------------------
   
* ### 추상 메소드(abstract method)  

  추상 메소드(abstract method)란 자식 클래스에서 반드시 오버라이딩해야만 사용할 수 있는 메소드를 의미한다.  
  자바에서 추상 메소드를 선언하여 사용하는 목적은 추상 메소드가 포함된 클래스를 상속받는 자식 클래스가 반드시 추상 메소드를 구현하도록 하기 위함이다.  
    
  예를 들면 모듈처럼 중복되는 부분이나 공통적인 부분은 미리 다 만들어진 것을 사용하고,   
  이를 받아 사용하는 쪽에서는 자신에게 필요한 부분만을 재정의하여 사용함으로써 생산성이 향상되고 배포 등이 쉬워지기 때문이다.  
    
  이러한 추상 메소드는 선언부만이 존재하며, 구현부는 작성되어 있지 않다. 여기서 오버라이딩의 개념이 한번 더 나오는데.  
  바로 이 작성되어 있지 않은 구현부를 자식 클래스에서 오버라이딩하여 사용하는 것이다.  
    
  자바에서 추상 메소드는 다음과 같은 문법으로 선언한다.  
  ```java
  abstract 반환타입 메소드이름();
  ```  
  
  만약 어떤 클래스가 추상 메서드를 하나라도 가지고 있으면, 그 클래스는 반드시 추상 클래스로 선언해야한다.  
  추상 메서드가 없어도 추상 클래스를 선언할 수는 있다. 추상 클래스에 추상 메서드가 아닌 일반 메서드도 작성할 순 있다.  
    
  ```
  **정리** 

      1. 추상 클래스는 인스턴스, 즉 객체를 만들 수 없음.(new 사용 불가.)
       
      2. 추상 메서드는 하위 클래스(추상 클래스를 상속받은)에게 메서드의 구현을 강제함.(오버라이딩 강제)
       
      3. 추상 메서드를 하나라도 포함하는 클래스는 반드시 추상 클래스여야 함.
      
  ```  
  예제로 이해하자면,  
  ```java
  public abstract class Animal {
    abstract void sing(); // 선언부만 있고, 구현부는 작성하지 않음

    void eat() { // eat()은 추상메서드가 아님
      System.out.println("냠냠");
    }
  }
  ```
  ```java
  public class SingTest {

	public static void main(String[] args) {

      Animal[] animals = new Animal[3];

      animals[0] = new Cat();		
      animals[1] = new Mouse();		
      animals[2] = new Dog();		
  //		animals[3] = new Animal(); // Cannot instantiate the type Animal
      // Animal 클래스는 추상클래스(abstract)로 지정되었기 때문에 인스턴스(객체) 생성 불가.
      // 누군가가 실수로 Animal 객체를 생성하는 불상사를 막을 수 있음

      for (Animal anAnimal : animals) {
        anAnimal.sing();
      }

    }

  }

  class Mouse extends Animal { void sing() { System.out.println("찍찍"); }}
  class Cat extends Animal { void sing() { System.out.println("야옹"); }}
  class Dog extends Animal { void sing() { System.out.println("멍멍"); }}
  ```  
  
