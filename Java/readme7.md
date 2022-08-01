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
     
* ### 메모리 구조(static, stack, heap)  

  프로그램을 구동하기 위해서 운영체제가 메모리(RAM)에 데이터 및 명령어를 저장할 공간을 할당하여 준다.   
  메모리는 컴퓨터에게 있어 가장 중요한 자산이고 사용할 수 있는 공간이 한정되어 있다.   
  이러한 것을 어떻게 관리하느냐에 따라서 프로그램의 성능(속도 등)이 좌우된다.   
  따라서 메모리를 효율적으로 사용하기 위해서는 메모리의 구성과 특징에 대해서 이해할 필요가 있다.  
    
  * #### Stack area(스택 메모리 영역)   

     우리가 현재까지 작성하던 메소드 내에서 정의하는 기본 자료형(int, double, byte, long, boolean 등)에   
     해당되는 지역변수(매개 변수 및 블럭문 내 변수 포함)의 데이터의 값이 저장되는 공간이 Stack(스택) 영역이다.   
     해당 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다.   
     
  * #### Heap area(힙 메모리 영역)  
  
     참조형(Reference Type)의 데이터 타입을 갖는 객체(인스턴스), 배열 등은 Heap 영역에 데이터가 저장된다.   
     이때 변수(객체, 객체변수, 참조변수)는 Stack 영역의 공간에서 실제 데이터가 저장된 Heap 영역의   
     참조값(reference value, 해시코드 / 메모리에 저장된 주소를 연결해주는 값)을 new 연산자를 통해 리턴 받는다.   
     다시 말하면 실제 데이터를 갖고 있는 Heap 영역의 참조 값을 Stack 영역의 객체가 갖고 있다.   
     이렇게 리턴 받은 참조 값을 갖고 있는 객체를 통해서만 해당 인스턴스를 핸들 할 수 있다.  
       
   * #### Static area(스태틱 메모리 영역)  
         
     하나의 JAVA 파일은 크게 필드(field), 생성자(constructor), 메소드(method)로 구성된다.   
     그중 필드 부분에서 선언된 변수(전역변수)와 정적 멤버변수(static이 붙은 자료형) Static 영역에 데이터를 저장한다.   
     Static 영역의 데이터는 프로그램의 시작부터 종료가 될 때까지 메모리에 남아있게 된다.   
     다르게 말하면 전역변수가 프로그램이 종료될 때까지 어디서든 사용이 가능한 이유이기도 하다.   
     따라서 전역변수를 무분별하게 많이 사용하다 보면 메모리가 부족할 우려가 있어 필요한 변수만 사용할 필요가 있다.	   
	   
     그림을 통해 이해를 도와보자.  
	    
    ![image url](https://github.com/12OneTwo12/TIL/blob/main/Java/Untitled.png?raw=true)  
      
     쉽게 생각하면 Static은 프로그램 시작부터 끝까지 쓸수 있게, Stack은 호출될때 사용하고 사라짐, 
     Heap은 참조변수의 주소가 가르치는 실제 데이터가 저장된 영역 정도로 이해했다.  
     
* ### 예외 처리(Exception Handling)  

  내가 작성한 코드가 실행 도중에 어떤 원인에 의해 오작동(예상과는 다르게 작동)하거나 비정상적으로(갑자기) 종료가 되는 경우가 있다.  
  이러한 결과를 초래한 원인을 프로그램 오류 라고 한다. 이러한 오류는 발생 시점에 따라 크게 2~3가지로 나눌 수 있다.  
    
  ```
  1. 컴파일 오류(compile-time error)
  2. 런타임 오류(runtime error)
  3. 논리적 오류(logical error)
  ```
  
  * #### 컴파일 오류 - 컴파일 불가능

     ```
     소스 코드의 컴파일 과정에서 발생하는 오류.

     ex) Syntax Error(문법 오류)
     ```
     

  * #### 런타임 오류  

     ```
     문법은 맞았으나, 실행 과정에서 발견(확인)되는 오류

     ex) Shark s = (Shark)new Animal( )
     ```  
       
  * #### 논리적 오류  

     ```
     문법도 맞고, 실행 과정에서의 에러도 없으나 논리가 틀려서 발생하는 오류  
  
     ex) 사람의 나이가 음수값으로 설정되거나 예금이 없는데 인출이 되거나 하는 경우.  
     ```  
       
  자바에서는 실행 시(runtime)발생할 수 있는 프로그램 오류를 '에러(error)'와 '예외(exception)'로 분류한다.  
    
  * #### 에러(Error) - 시스템 레벨에서 발생, 심각한 문제, 개발자가 제어 불가    

     ```
     일단 발생하면 복구가 어려움.
     별도의 처리가 없을 경우 프로그램이 예상치 못하게 비정상 종료되는 경우

     하드웨어의 고장 등으로 인한 소프트웨어(응용 프로그램)의 실행에 문제(오류)가 생겨 발생

     ex) 메모리 부족(OutofMemoryError), 

      스택오버플로(StackOverflowError) 등
     ```  
       
  * #### 예외(Exception) - 개발자의 코드에서 발생, 예방 가능, 개발자가 제어 가능  

     ```
     발생하더라도 수습될 수 있음. 비교적 덜 심각함.
     개발자의 잘못된 코드 작성 or 웹 서비스 사용자의 잘못된 화면 조작으로 인한 소프트웨어(응용 프로그램)에 문제가 생기는 경우

     ex) [NullPointerException.java](http://NullPointerException.java) , 
     [IndexOutOfBoundsException.java](http://IndexOutOfBoundsException.java) → 모든 예외는 클래스 객체임

     에러는 발생하면 프로그램의 비정상적인 종료를 막을 방법이 없지만, 
     예외는 발생하더라도 이에 대한 대처 코드를 작성해놓을 경우 프로그램의 비정상적인 종료를 막을 수 있음.
     개발자가 미리 대처가 가능하기 때문에 프로그램의 실행 도중에 문제가 생겨도 곧바로 종료하지 않고, 남아있는 작업(Task)을 수행한 후 정상적으로 종료할 수 있음
     ```   
       
* ### 예외의 구분  

  ![image url](https://github.com/12OneTwo12/TIL/blob/main/Java/2019-03-02-java-checked-unchecked-exceptions-1.png?raw=true)  
    
  Exception 클래스 : 모든 예외의 최상위 클래스  
  
  Exception 클래스는 다음과 같이 두 그룹으로 나누는 편.  
    
  ```
  1. Exception 클래스와 그 하위 클래스들.
  2. RuntimeException 클래스와 그 하위 클래스들(NullPointer, ClassCast, IndexOutOfBounds..)
  ```  
    
* ### 예외의 처리  

  예외 처리(Exception handling)란 프로그램 실행 과정에서 발생할 수 있는 예상치 못한 예외의 발생에 대처가 가능한 코드를 작성하는 것을 의미한다.  
  따라서 프로그램의 비정상적인 종료를 막고, 정상적인 실행을 계속 유지하도록 하기 위함이다.   
  이러한 오류를 무시하고 싶을 때도 있고, 오류가 날 때 그에 맞는 적절한 처리를 하고 싶을 때도 있다.   
  이에 자바는 try ... catch, throw 구문을 이용해 오류를 처리 한다.  
    
  다음은 예외처리를 위한 try, catch문의 기본 구조이다.  
    
  ```
  try { 예외가 발생할 가능성이 있는 코드를 작성 } catch(발생할 수 있는 예외클래스명 참조변수명) { 해당 예외에 대한 대처 코드 }
  -> try {} : try 블럭(block) 내부에 예외가 발생할 가능성이 있는 코드를 작성함
  ```
    
  ```java
  try {
      ...
  } catch(예외1) {
      ...
  } catch(예외2) {
      ...
  ...
  }  
  ```
  try 문안의 수행할 문장들에서 예외가 발생하지 않는다면 catch문 다음의 문장들은 수행이 되지 않는다.   
  하지만 try 문안의 문장을 수행하는 도중에 예외가 발생하면 예외에 해당되는 catch문이 수행된다.  
    
  바로 예제를 봐보자.  
    
  ```java
  int number = 100;
  int result = 0;
		
  for(int i = 0; i < 10; i++) {
	  result = number / (int)(Math.random() * 10);
	  System.out.println(result);
  }
  ```  
  위 구문을 실행하자 몇줄 잘 실행 되더니 오류가 이렇게 나왔다.  
  ```
  java.lang.ArithmeticException: / by zero
	at dev.syntax.step05exception.Ex1.main(Ex1.java:10)
  ```  
  대충 보니 0으로는 나눌수 없다는 것 같다.  
  그렇다면 이 ArithmeticException이라고 하는 오류에 예외 처리를 해보도록 하자.  
  ```java
  int number = 100;
  int result = 0;
		
  for(int i = 0; i < 10; i++) {
	  try { // try catch 시작
	  	  result = number / (int)(Math.random() * 10);
		  System.out.println(result);
	  } catch(ArithmeticException exception) {
		  System.out.println("0으로 나눠지면 안돼요");
	  } // try catch 끝
  }
  ```
  이렇게 되면 ArithmeticException이라는 오류가 발생 했을때 ```0으로 나눠지면 안돼요```가 출력되는 것을 알 수 있다.  
    
  그렇다면 우리가 오류를 모를 때는 어떻게 할까?  
  그때는 Exception이라는 예외중의 최상위 클래스를 활용하면 좋을 듯 하다.  
  ```java
  System.out.println(1);
  System.out.println(2);
  try {
	  System.out.println(3/0); // 정수 3을 0으로 나누는 예외 발생용 코드
  } catch (Exception e) { // Exception은 예외중에 최상위 클래스, 3을 0으로 나누는 과정에서 발생하는 예외 클래스(ArithmeticException)의 인스턴스가 참조변수 e에 할당됨
	  if (e instanceof ArithmeticException) {
		  System.out.println(e + "는 ArithmeticException 인스턴스입니다.");
	  }
	  System.out.println(4);
  }
  System.out.println(5);
  ```  
  이렇게 하면 아래와 같이 출력되는 것을 볼 수 있다.  
  ```
  1
  2
  java.lang.ArithmeticException: / by zero는 ArithmeticException 인스턴스입니다.
  4
  5
  ```  
    
* ### finally block  

  finally block이란 try-catch문과 함께 사용되며 예외의 발생 여부에 상관없이 무조건 실행되어야 할 코드를 포함시킬 때 사용된다.  
  try-catch문의 끝에 선택적으로 덧붙여서 사용할 수 있다.  
  ```java
  try {
	  //예외가 발생할 가능성이 있는 코드
  } catch(Exception e1){
	  // 예외처리를 위한 코드
  } finally {
	  //예외 발생여부에 관계 없이 항상 수행되어야 하는 코드
  }
  ```  
    
  따라서 finally는 무조건 실행되기 때문에 예외가 발생한 경우에는 'try → catch → finally' 순으로, 
  예외가 발생하지 않은 경우에는 'try → finally'순으로 실행된다.  
  예제로 살펴본다면,  
  ```java
  public class Finally {

	public static void main(String[] args) {
		method1();
		System.out.println("method1()의 수행종료, main()으로 복귀");
	}

	public static void method1() {
		try {
			System.out.println("method1()이 호출 되었음");
			return;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			System.out.println("method1()의 finally block이 실행 되었음");
		}
	}
  }
  ```  
  위와 같다면,   
  ```
  method1()이 호출 되었음
  method1()의 finally block이 실행 되었음
  method1()의 수행종료, main()으로 복귀
  ```  
    
  이처럼 실행 되는 것을 볼 수 있다.  

* ### 예외 던지기 (throws)  

  메소드 내부에서 예외가 발생 할 수 있는 코드 작성 시 try-catch 블록으로 예외를 처리하는 것이 기본이지만,  
  경우에 따라서는 메소드를 호출 한 곳으로 예외를 떠넘기거나 강제로 발생 시킬 수 있다.  
  문법은 굉장히 간단하다.  
  ```
  throw 발생시킬 예외 
  ```  
  간단한 예제로 살펴보자.  
  ```java
  public static void main(String[] args) {
	// throw : 예외를 고의적으로 발생시킬 때 사용하는 키워드
	try {
		Exception e = new Exception(); // 예외 인스턴스 직접 생성
		throw e; // 예외를 발생시킬(다른 말로 예외를 던진다)
	} catch (Exception e) {
		System.out.println("예외 메시지 : " + e.getMessage());
		e.printStackTrace();
	}
	System.out.println("프로그램 정상 종료");
  }
  ```  
  참조변수 e를 throw함으로써 예외를 발생시키고 이에대한 메시지를 출력하도록 했다.  
  ```java
  public static void main(String[] args) throws Exception {
	  method1();
  } // 닫는 중괄호 -> 해당 메서드의 종료
	
  static void method1() throws Exception {
	  method2();
  } 
	
  static void method2() throws Exception { // throws Exception : method2를 호출한 곳(method1()) 으로 예외에 대한 처리(책임)를 떠넘김
	  //Exception e = new Exception();
	  //throw e ;
	  throw new Exception(); // 위와 동일한 코드, 한줄로 작성
  } 
  ```  
  혹은 이처럼 예외에 대한 처리를 떠넘길때도 사용한다.  
    
