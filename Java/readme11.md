# Java 
  
  #### [ 2022-08-05 ]  
  
  ## 목차  
  * #### [[ 초기화 블록(initialization block) ]](#초기화-블록initialization-block)  
  * #### [[ 인스턴스 블록(instance block) ]](#인스턴스-블록instance-block)  
  * #### [[ 스태틱 블록(static block) ]](#스태틱-블록static-block)  
  * #### [[ 싱글톤 패턴(Singleton pattern) ]](#싱글톤-패턴singleton-pattern)  
    
      
---------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### 초기화 블록(initialization block)    
  
  초기화 블록이란 클래스가 생성될 때 무조건 수행되는 블록을 의미한다.   
  클래스 필드의 초기화만을 담당하는 중괄호({})로 둘러싸인 블록을 의미하는데,  
  이러한 초기화 블록에는 두 가지 종류가 있는데 다음과 같다.  
  ```java
  class Example{
  
    static {
      System.out.println("클래스 블럭");
    }

    { 
    System.out.println("인스턴스 블럭");
    }
    
  }
  ```  
    
  * #### 인스턴스 블록(instance block)  

    인스턴스 초기화 블록은 단순히 중괄호({})만을 사용하여 정의할 수 있다.  
    인스턴스가 생성된 후 자동으로 실행하는 블록으로, 이러한 인스턴스 초기화 블록은 생성자와 마찬가지로 인스턴스가 생성될 때마다 실행된다.  
    하지만 언제나 인스턴스 초기화 블록이 생성자보다 먼저 실행된다.  
      
  * #### 스태틱 블록(static block)  

    클래스 초기화 블록은 인스턴스 초기화 블록에 static 키워드를 추가하여 정의할 수 있다.  
    클래스가 로딩되고 클래스 변수가 준비된 후 자동으로 실행되는 블록으로, 이러한 클래스 초기화 블록은 클래스가 처음으로 메모리에 로딩될 때 단 한 번만 실행된다.  
    생성자나 인스턴스 초기화 블록으로는 수행할 수 없는 클래스 변수의 초기화를 수행할 때 사용된다.  
       
  ```java
  public class BlockTest {

    public static void main(String[] args) {
      Block block = new Block();
      Block block2 = new Block();
      Block block3 = new Block();
      Block block4 = new Block();
      Block block5 = new Block();
      Block block6 = new Block();
    }

    public static class Block {


      static { System.out.println("Class loading...");}

      { System.out.println("instance block");}

      public Block(){
      }

    }

  }
  ```  
    
  #### 결과 
  ```
  Class loading...
  instance block
  instance block
  instance block
  instance block
  instance block
  instance block
  ```  
    
  보는 바와 같이 클래스 초기화 블록 ```Class loading...```은 한 번만 출력되고 ```instance block```는 인스턴스가 생성될 때마다 출력되는 것을 확인할 수 있다.
  
* ### 싱글톤 패턴(Singleton pattern)  

  싱글톤 패턴이란 객체의 인스턴스가 오직 1개만 생성되는 패턴을 의미한다.  
  전역 변수를 사용하지 않고 객체를 하나만 생성 하도록 하며, 생성된 객체를 어디에서든지 참조할 수 있도록 하는 패턴이다.  
    
  싱글톤으로 구현한 인스턴스는 '전역'이므로, 다른 클래스의 인스턴스들이 데이터를 공유하는 것이 가능한 장점이 있다.  
  이는 최초 한번의 new 연산자를 통해서 고정된 메모리 영역을 사용하기 때문에 추후 해당 객체에 접근할 때 메모리 낭비를 방지할 수 있다.   
  뿐만 아니라 이미 생성된 인스턴스를 활용하니 속도 측면에서도 이점이 있다고 볼 수 있다.  
    
  또다른 이점은 다른 클래스 간에 데이터 공유가 쉽다는 것이다.   
  싱글톤 인스턴스가 전역으로 사용되는 인스턴스이기 때문에 다른 클래스의 인스턴스들이 접근하여 사용할 수 있다.   
  하지만 여러 클래스의 인스턴스에서 싱글톤 인스턴스의 데이터에 동시에 접근하게 되면 동시성 문제가 발생할 수 있으니 이점을 유의해서 설계하는 것이 좋다.  
    
  만약 싱글톤 인스턴스가 혼자 너무 많은 일을 하거나, 많은 데이터를 공유시키면 다른 클래스들 간의 결합도가 높아지게 되는데,   
  결합도가 높아지게 되면, 유지보수가 힘들고 테스트도 원활하게 진행할 수 없는 문제점이 발생한다.  
  또한, 멀티 스레드 환경에서 동기화 처리를 하지 않았을 때, 인스턴스가 2개가 생성되는 문제도 발생할 수 있다.  
    
  ```java
  public class Singleton {

     private static Singleton instance = new Singleton();
    
     private Singleton() {
         // 생성자는 외부에서 호출못하게 private 으로 지정해야 한다.
     }

     public static Singleton getInstance() {
         return instance;
     }

 }
 ```  
   
 이렇게 되면 ```instance```라고 이름 붙힌 인스턴스 하나를 가지고 작업을 수행하기 때문에, 다른 클래스의 인스턴스들이 데이터를 공유하는 것이 가능하다.  
   
 
