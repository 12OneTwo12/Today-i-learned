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
    //animals[3] = new Animal(); // Cannot instantiate the type Animal
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
  위와 같이 코드를 써보면 이해가 좀더 될 것 같다.  
    
* ### 인터페이스(interface)  

  인터페이스란, 극단적으로 동일한 목적 하에 동일한 기능을 수행하게끔 강제하는 것이 바로 인터페이스의 역할이자 개념이다.   
  자바의 다형성을 극대화하여 개발코드 수정을 줄이고 프로그램 유지보수성을 높이기 위해 인터페이스를 사용한다.  
  
  추상 클래스보다 추상화 정도가 더 높은 추상 클래스이고,    
  추상 클래스는 구현부를 갖춘 일반 메서드나 변수도 가질 수 있지만,  
  인터페이스는 추상메서드와 상수만을 멤버로 가질 수 있다.  
  
  인터페이스 역시 다른 클래스로부터 해당 인터페이스(미완성 설계도)구현을 요구하는 목적으로 사용되며, 그 자체만으로 사용되진 않는다.  
    
  인터페이스는 개발 코드와 객체가 서로 통신하는 접점 역할을 한다.   
  개발 코드가 인터페이스의 메소드를 호출하면 인터페이스는 객체의 메소드를 호출시킨다.   
  때문에 개발 코드는 객체의 내부 구조를 알 필요가 없고 인터페이스의 메소드만 알고 있으면 된다.  
  이를 이해하기 위한 간단한 예제이다.  
  ```java
  class A {
	public void methodA(B b){
		b.myMethodB();
	}
  }

  --다른 파일--
  class B{
	public void myMethodB() {
		System.out.println("methodB()");
	}
  }

  class InterfaceTest{
	public static void main(String[] args){
		A a = new A();
		a.methodA(new B());//B b = new B();     
				   //a.methodA(b);
	}
  }
  ```  
  이를 보면 클래스 A(User)는 클래스 B(Provider)의 인스턴스를 생성하고 메서드를 호출한다. 두 클래스는 서로 직접적인 관계가 있는데,  
  ```java
  class A{
	public void methodA(B b){
		b.methodB();
	}
  }
  ```
     
  만약 클래스 B의 methodB( )의 선언부(메서드명, 매개변수 타입, 개수 등)가 변경되면   
  이를 사용(호출)하는 클래스 A도 따라서 변경해야한다.(메서드명, 매개변수 타입, 개수 등)  
  즉, 서로 직접적인 관계가 될 경우 한 쪽(Provider)이 변경되면 다른 한 쪽(User)도 변경되어야 한다는 단점이 있다.  
    
  이러할때, 두 클래스 간의 관계를 간접적으로 변경하기 위해 인터페이스를 활용하는 것이다.  
        
  ![image url](https://github.com/12OneTwo12/TIL/blob/main/Java/interface.png?raw=true)  
    
  이처럼 관계가 간접적으로 되기 때문에, 실제로 사용되는 클래스의 이름을 몰라도 되고, 오직 직접적인 관계에 있는 인터페이스의 영향만 받는다.  
    
  * #### 인터페이스의 구현(implements)  

     인터페이스 역시 추상클래스처럼 그 자체로는 인스턴스를 생성할 수 없다.  
     추상 클래스가 자신의 멤버로써 선언부만 정의한 메서드를 상속 받은 클래스에서 완성시키는 것 처럼,   
     인터페이스 역시 자신에게 정의되어 있는 추상 메서드의 구현을 담당할 클래스를 작성함으로써 인터페이스의 기능을 수행할 수 있게 된다.  
     단지, 클래스는 상속받을 때 클래스를 확장한다는 의미의 ```'extends'```라는 키워드를 사용했지만,  
     해당 인터페이스를 실제 구현(메서드 완성 등)할 구현 클래스는 extends 대신 해당 인터페이스를 구현한다는 의미의 ```'implements'``` 를 사용한다.  
       
     ```java
     class 클래스이름 implements 인터페이스이름 { ... //구현한 인터페이스에 정의되어 있는 추상 메서드를 구현해야함 }
     ```

     ```java
     // 예시
     abstract class Shark implements Fightable {
	     public void move(int x, int y){ ... }
	     public void attack(Unit target) { ... }
     }
     ```    
         
     * 모든 멤버 상수는 public static final로 지정해야 하며, 생략하면 컴파일러가 자동으로 추가해준다.
         
     * 모든 메서드는 public abstract 이어야 하며, 이 역시 생략 가능하다.    

     ```java
     interface PlayingCard {
	   public static final int SPADE = 4;
	   final int DIAMOND = 3;
   	   static int HEART = 2;
	   int CLOVER = 1;
		
	   public abstract String getCardNumber();
	   String getCardKind();
     }
     ```  
       
     다음처럼 상속과 구현을 동시에 할 수도 있다.  
       
     ```java
     class Shark extends Animal implements Fightable {
	public void move(int x, int y){ ... }
	public void attack(Unit target) { ... }
     }
     ```  
     
