# OOP  
    
  #### [ 2022-09-06 ]  
     
## 목차  
  * #### [[ SOLID ]](#solid)  
  * #### [[ 단일 책임 원칙(Single responsibility principle) ]](#단일-책임-원칙single-responsibility-principle)  
  * #### [[ 개방-폐쇄 원칙 (Open/closed principle) ]](#개방-폐쇄-원칙-openclosed-principle)  
  * #### [[ 리스코프 치환 원칙 (Liskov substitution principle) ]](#리스코프-치환-원칙-liskov-substitution-principle)  
  * #### [[ 인터페이스 분리 원칙 (Interface segregation principle) ]](#인터페이스-분리-원칙-interface-segregation-principle)  
  * #### [[ 의존관계 역전 원칙 (Dependency inversion principle) ]](#의존관계-역전-원칙-dependency-inversion-principle)  
  * #### [[ 정리 ]](#정리)  
    
    
-----------------------------------------------------------------------------------------------------------------------------------------------------  
  
* ### SOLID  

  SOLID란 로버트 마틴이 2000년대 초반에 명명한 객체지향(OOP) 프로그래밍 및 설계의 다섯 가지 기본 원칙이다.  
    
  ```
  프로그래머가 시간이 지나도 유지 보수와 확장이 쉬운 시스템을 만들고자 할 때 이 원칙들을 함께 적용할 수 있다.
  ```
    
  라고 위키백과에서는 설명 하고 있다.  
  위 말처럼 이 원리는 시간이 지나도 프로그래머로 하여금 유지보수에 용이하고 확장이 쉽도록 프로그래밍할 수 있도록 도와주는 도움을 주는 원칙이다.  
    
  SOLID는 5원칙의 앞글자 하나씩을 따온 단어이다.  
  SOLID의 5대 원칙은 다음과 같다.  
    
  * #### 단일 책임 원칙(SRP - Single responsibility principle)  
  
        한 클래스는 하나의 책임만 가져야 한다.
  
  * #### 개방-폐쇄 원칙 (OCP - Open/closed principle)  
  
        소프트웨어 요소는 확장에는 열려 있으나 변경에는 닫혀 있어야 한다.
  
  * #### 리스코프 치환 원칙 (LSP - Liskov substitution principle)  
  
        프로그램의 객체는 프로그램의 정확성을 깨뜨리지 않으면서 하위 타입의 인스턴스로 바꿀 수 있어야 한다.
  
  * #### 인터페이스 분리 원칙 (ISP - Interface segregation principle)  

        특정 클라이언트를 위한 인터페이스 여러 개가 범용 인터페이스 하나보다 낫다.
  
  * #### 의존관계 역전 원칙 (DIP - Dependency inversion principle)  

        추상화에 의존해야지, 구체화에 의존하면 안된다. 의존성 주입은 이 원칙을 따르는 방법 중 하나다.  
        
* ### 단일 책임 원칙(Single responsibility principle)  

  solid 5원칙 중 첫번째 원칙으로, 단어 그대로 모든 Class는 하나의 책임만 가지며, 그 책임은 완전히 캡슐화되어야 함을 일컫는다.     
  곧 작성된 Class는 하나의 기능만 가지며, 그 Class가 제공하는 모든 서비스는 하나의 책임을 수행하는 데 집중되어야 한다는 원칙이다.   
    
  간단한 예를 들어서 회원가입 쪽의 API를 담당하는 API Core를 담당하는 Class가 있다고 가정했을 때, 그 안에는 회원가입에 해당하는 기능들만 들어가 있어야 한다.   
  그래서 만약 이쪽의 코드를 수정해야 한다고 한다면 그때는 회원가입 API 기능에 문제가 생겼다거나 정책이 바꼈다 등의 명확한 사유를 알 수 있을 것이다.   
  단일 책임은 관심사 분리와도 밀접한 관계가 있다.  
  
  만약 단일 책임 원칙을 지키지 않았을 경우에는 하나의 Class에 다양한 기능이 들어간 경우,   
  해당 Class를 수정했을 때 다른 모듈에 어떠한 영향을 미치는 지 그 범위을 추측하기 힘들 수 있다.  
    
  * #### 메소드가 SRP를 지키지 못한 경우  
    
    **예시**  
    ```java
    class person {
        final static Boolean man = true;
        final static Boolean woman = false;
        Boolean gender;

        void hi() {
            if (this.gender == man) {
                // hi. i'm a man
            } else {
                // hi. i'm a waman
            }
        }   
    }
    ```
       
    위의 클래스에서는 ```hi()```라는 메소드에서 남자와 여자의 기능 모두를 구현하려 하기에 코드가 길어졌을 때,   
    해당 Class를 수정하면 다른 모듈에 어떠한 영향을 미치는 지 그 범위을 추측하기 힘들 수 있다.  
      
    **예시**  
    ```java
    abstract class person {
        abstract void hi();
    }

    class man extends person {
        void hi() {
            // hi. i'm a man
        }
    }

    class woman extends person {
        void hi() {
            // hi. i'm a waman
        }
    }
    ```
      
    위와 같이 ```person```이라는 추상 클래스를 두고 ```man```, ```woman``` 클래스가    
    각자 자신의 특징에 맞게 ```hi()``` 메소드를 구현해서 사용하는 것으로 리팩토링 할 수 있다.   
    
    단일 책임 원칙을 제대로 지키면 변경이 필요할 때 수정할 대상이 명확해진다.  
    그리고 이러한 단일 책임 원칙의 장점은 시스템이 커질수록 극대화되는데,   
    시스템이 커지면서 서로 많은 의존성을 갖게되는 상황에서 변경 요청이 오면 딱 1가지만 수정하면 되기 때문이다.  
    단일 책임 원칙을 적용하여 적절하게 책임과 관심이 다른 코드를 분리하고, 서로 영향을 주지 않도록 추상화함으로써 애플리케이션의 변화에 손쉽게 대응할 수 있다.  
      
* ### 개방-폐쇄 원칙 (Open/closed principle)  

  solid 원칙 중 2번째 원칙이며, 개방폐쇄 원칙은 클래스, 모듈 함수 등의 소프트웨어 개체는 확장에 대해 열려있어야 하고,   
  수정에 대해서는 닫혀 있어야 한다는 프로그래밍 원칙이다.  
  즉, 자신의 확장에는 열려 있고, 주변의 변화에 대해서는 닫혀 있어야 한다.  
    
  이는 수정이 일어나더라도 기존의 구성요소에서는 수정이 일어나지 않아야 하며,   
  쉽게 확장이 가능하여 재사용을 할 수 있도록 해야한다는 의미이다. 여기에서 중요한 것은 추상화와 다형성이다.  
    
  객체 지향에서 다형성이란 여러 가지 형태를 가질 수 있는 능력을 의미한다.   
  이 원칙을 무시한다면 유연성, 재사용성, 유지보수성 등을 얻을 수 없다라고 할 정도로 중요한 원칙이라고 볼 수 있다.  
    
  **예시**  
  ```java
  class sonata {
      
      void 악셀(){
        // ...
      }
      
      void 브레이크(){
        // ...
      }
      
  }
  
  class k3 {
      
      void 악셀(){
        // ...
      }
      
      void 브레이크(){
        // ...
      }
      
  }
  
  class driver(){...}
  ```
  
  위의 코드를 보면 운전자가 악셀을 밟냐 브레이크를 밟냐에 따라 행동이 달라지는 것을 볼 수 있다.  
  이렇게 어떤 변화가 있을 때 바로 운전자에게 영향이 오기 때문에 이러한 설계는 개방 폐쇄 원칙에 위배된다.  
    
  **예시**  
  ```java
  abstract class car{
      void 악셀();
      void 브레이크();
  }
  
  class sonata extends car {
      
      void 악셀(){
        // ...
      }
      
      void 브레이크(){
        // ...
      }
      
  }
  
  class k3 extends car {
      
      void 악셀(){
        // ...
      }
      
      void 브레이크(){
        // ...
      }
      
  }
  
  class driver(){...}
  ```
  
  이렇게 상위 클래스 또는 인터페이스를 중간에 둠으로써 다양한 자동차가 생긴다고 해도 객체 지향 세계의 운전자는 운전 습관에 영향을 받지 않게 된다.  
  다양한 자동차가 생긴다고 하는 것은 자동차 입장에서는 자신의 확장에는 개방되어 있는 것이고, 운전자 입장에서는 주변의 변화에 폐쇄돼 있는 것이다.  
    
  데이터베이스의 개방 폐쇄 원칙의 아주 좋은 예는, JDBC가 개방 폐쇄 원칙의 가장 좋은 예 이다.  
  데이터베이스가 MySQL에서 오라클로 바뀌더라도 Connection을 설정하는 부분만 변경해주면 된다.  
      
  즉, 자바 애플리케이션은 데이터베이스라고 하는 주변의 변화에 닫혀 있는 것이다.   
  데이터베이스를 교체한다는 것은 데이터베이스가 자신의 확장에는 열려 있다는 것이다.  
    
  개방 폐쇄 원칙을 무시하고 프로그램을 작성하면 객체지향 프로그래밍의 가장 큰 장점인 유연성, 재사용성, 유지보수성 등을 얻을 수 없다.  
  따라서 객체지향 프로그래밍에서 개방 폐쇄 원칙은 반드시 지켜야 할 원칙이다.  
    
* ### 리스코프 치환 원칙 (Liskov substitution principle)  

  리스코프 치환 원칙은 solid에서 L에 해당하는 원칙이다.   
      
  ```    
  서브 타입은 언제나 자신의 기반 타입으로 교체할 수 있어야 한다. -로버트 C.마틴
  ```   
     
  리스코프 치환 코드는 상속에 대한 개념으로서, wiki 백과에서는 ‘자료형 S가 자료형 T의 하위형이라면 필요한 프로그램의 속성의 변경없이   
  자료형 T의 객체를 자료형 S의 객체로 교체(치환) 할 수 있어야 한다.’ 라고 설명하고 있다.   
    
  쉽게 말해서 부모 Class가 들어갈 자리에 자식 Class를 넣어도 잘 구동되어야 한다 라는 원칙이다.   
    
  - 하위 클래스 is a kind of 상위 클래스 - 하위 분류는 상위 분류의 한 종류다.
    
  - 구현 클래스 is able to 인터페이스: 구현 분류는 인터페이스할 수 있어야 한다.  
      
  위의 두 문장을 잘 지키고 있다면 이미 리스코프 치환 원칙을 잘 지키고 있다고 할 수 있다.  
    
  즉, 해당 객체를 사용하는 클라이언트는 상위 타입이 하위 타입으로 변경되어도,   
  차이점을 인식하지 못한 채 상위 타입의 퍼블릭 인터페이스를 통해 서브 클래스를 사용할 수 있어야 한다는 것이다.  
    
  리스코프 치환 원칙에 대해 이해하기 위해 정사각형은 직사각형이다(Square is a Rectangle)는 예시를 살펴보도록 하자.   
  직사각형과 정사각형을 각각 구현하면 다음과 같다.  
    
  **예시**  
  ```java
  @Getter
  @Setter
  @AllArgsConstructor
  public class Rectangle {

      private int width, height;

      public int getArea() {
          return width * height;
      }

  }

  public class Square extends Rectangle {

      public Square(int size) {
          super(size, size);
      }

      @Override
      public void setWidth(int width) {
          super.setWidth(width);
          super.setHeight(width);
      }

      @Override
      public void setHeight(int height) {
          super.setWidth(height);
          super.setHeight(height);
      }
  }
  ```

  Square는 1개의 변수만을 생성자로 받으며, width나 height 1개 만을 설정하는 경우 모두 설정되도록 메소드가 오버라이딩 되어 있다.  
  이를 이용하는 클라이언트는 당연히 직사각형의 너비와 높이가 다르다고 가정할 것이고,   
  직사각형을 resize()하기를 원하는 경우 다음과 같은 메소드를 만들어 너비와 높이를 수정할 것이다.  
    
  ```java
  public void resize(Rectangle rectangle, int width, int height) {
      rectangle.setWidth(width);
      rectangle.setHeight(height);
      if (rectangle.getWidth() != width && rectangle.getHeight() != height) {
          throw new IllegalStateException();
      }
  }
  ```

  문제는 resize()의 파라미터로 정사각형인 Square이 전달되는 경우다.  
  Rectangle은 Square의 부모 클래스이므로 Square 역시 전달이 가능한데, Square는 가로와 세로가 모두 동일하게 설정되므로   
  예를 들어 다음과 같은 메소드를 호출하면 문제가 발생할 것이다.  
  
  ```java
  Rectangle rectangle = new Square();
  resize(rectangle, 100, 150);
  ```
    
  이러한 케이스는 명백히 클라이언트의 관점에서 부모 클래스와 자식 클래스의 행동이 호환되지 않으므로 리스코프 치환 원칙을 위반하는 경우이다.   
  리스코프 치환 원칙이 성립한다는 것은 자식 클래스가 부모 클래스 대신 사용될 수 있어야 하기 때문이다.  
    
  리스코프 치환 원칙은 자식 클래스가 부모 클래스를 대체하기 위해서는 부모 클래스에 대한 클라이언트의 가정을 준수해야 한다는 것을 강조한다.   

  **계층도/조직도 - 리스코프 치환 원칙 위배**  
  ![image url](https://github.com/12OneTwo12/Today-i-learned/blob/main/Java/010.jpg?raw=true)  
  **분류도 - 리프코프 치환 원칙 만족**  
  ![image url](https://github.com/12OneTwo12/Today-i-learned/blob/main/Java/011.jpg?raw=true)    
    
* ### 인터페이스 분리 원칙 (Interface segregation principle)  

  solid 원칙 중 I에 해당하는 원칙으로서, 클라이언트는 자신이 사용하지 않는 메소드에 의존 관계를 맺으면 안된다라는 원칙이다.   
  즉, 인터페이스 분리 원칙이란 클라이언트의 목적과 용도에 적합한 인터페이스 만을 제공하는 것이다.
    
  단일 책임 원칙(SRP)에서는 하나의 역할(책임)만 하도록 다수의 클래스로 분할하였다.  
  인터페이스 분리 원칙은 각 역할에 맞게 인터페이스로 분리하는 것이다.  
  
  객체가 충분히 높은 응집도의 작은 단위로 설계됐더라도,   
  목적과 관심이 각기 다른 클라이언트가 있다면 인터페이스를 통해 적절하게 분리해줄 필요가 있는데, 이를 인터페이스 분리 원칙이라고 부른다.   
  
  이 법칙에서의 핵심 과제는 큰 덩어리의 인터페이스들을 구체적이고 작은 단위들로 분리시킴으로써 꼭 필요한 메서드들만 이용할 수 있게 한다이다.   
  이러한 원칙을 준수하면서 기대할 효과로는 시스템의 내부 의존성 관계를 느슨하게 하여 리팩토링, 수정, 재배포를 쉽게 할 수 있도록 한다.  
  
  인터페이스를 분리하게 되면 인터페이스가 명확해지고, 대체 가능성이 높아진다.  
    
  **ISP 적용 전**
  ```java
  public interface multifunction {
    void copy();
    void fax(Address from, Address to);
    void print();
  }
  
  public class CopyMachine implements multifunction {
    @Override
    public void copy() {
      System.out.println("### 복사 ###");
    }

    @Override
    public void fax(Address from, Address to) {
      // 사용하지 않는 인터페이스가 변경되어도 함께 수정이 일어난다.
    }

    @Override
    public print() {
      // 사용하지 않는 인터페이스가 변경되어도 함께 수정이 일어난다.
    }
  }
  ```
  
  ```multifunction``` 인터페이스에 모든 기능들을 한 번에 넣었더니, ```CopyMachine```을 구현하는데 필요없는 ```fax()```, ```print()```도 모두 구현해줘야 한다.  
  
  **ISP 적용 후**
  ```java
  public interface Print{
    void print();
  }

  public interface Copy {
    void copy();
  }

  public interface Fax {
    void fax(Address from, Address to);
  }
  
  public class copyMachine implements Copy {
    @Override
    void copy() {
      System.out.println("### 복사 ###");
    }
  }
  ```

  클라이언트에 따라 인터페이스를 분리하면 변경에 대한 영향을 더욱 세밀하게 제어할 수 있다.   
  그리고 이렇게 인터페이스를 클라이언트의 기대에 따라 분리하여 변경에 의해 의한 영향을 제어하는 것을 인터페이스 분리 원칙이라고 부른다.  
    
* ### 의존관계 역전 원칙 (Dependency inversion principle)  

  solid 원칙 중 마지막 D에 해당하는 원칙으로 이 원칙은 2가지 중요한 요소를 가지고 있다.  
    
  - 상위 모듈은 하위 모듈에 종속되어서는 안된다. 둘 다 추상화에 의존해야 한다.  
    
  - 추상화는 세부사항에 의존하지 않는다. 세부사항은 추상화에 의해 달라져야 한다.  

  의존 역전 원칙이란 고수준 모듈은 저수준 모듈의 구현에 의존해서는 안 되며,   
  저수준 모듈이 고수준 모듈에서 정의한 추상 타입에 의존해야 한다는 것이다.   
  객체 지향 프로그래밍에서는 객체들 사이에 메세지를 주고 받기 위해 의존성이 생기는데,   
  의존성 역전의 원칙은 올바른 의존 관계를 위한 원칙에 해당된다. 여기서 각각 고수준 모듈과 저수준 모듈이란 다음을 의미한다.  
    
  - 고수준 모듈: 변경이 없는 추상화된 클래스(또는 인터페이스)  

  - 저수준 모듈: 변하기 쉬운 구체 클래스  

  의존 역전 원칙이란 결국 추상화에 의존하며 구체화에는 의존하지 않는 설계 원칙을 의미한다.  
  
  **예시**     
  ![image url](https://github.com/12OneTwo12/Today-i-learned/blob/main/Java/01011.png?raw=true)  
    
  대표적인 예제라고 할 수 있는 자동차와 스노우 타이어 이야기이다.  
  
  현재는 겨울이기 때문에 스노우 타이어를 구매하여 자동차에 끼도록 설계했다.   
  즉, 고수준 모듈인 자동차가 저수준 모듈인 스노우 타이어에 의존하는 상태이다.  
    
  하지만, 날씨가 따뜻해지면서 더 이상 스노우 타이어를 사용할 필요가 없어졌다.   
  그래서 일반 타이어로 교체하기로 결정하였다고 가정하자.     
  그런데, 단순히 스노우 타이어를 일반 타이어로 바꾼다고 코드가 끝나는 것이 아니다.   
  이것에 의존하고 있던 자동차의 코드도 연쇄적으로 영향을 끼치게 된다.   

  이것은 개방-폐쇄 원칙을 위반하는 것이므로 추상화나 다형성을 통해 문제를 고쳐야 한다.     
  의존 역전 원칙은 그 중에서도 추상화를 이용한다.   
  바로, 스노우 타이어나 일반 타이어를 '타이어' 자체로 추상화하는 것이다.  
    
  ![image url](https://github.com/12OneTwo12/Today-i-learned/blob/main/Java/010111.png?raw=true)  
    
  여기서 타이어는 저수준 모듈보다는 고수준 모듈인 자동차 입장에서 만들어지는데,   
  이것은 고수준 모듈이 저수준 모듈에 의존했던 상황이 역전되어 저수준 모듈이 고수준 모듈에 의존하게 된다는 것을 의미한다.   
  이런 맥락에서 이 원칙의 이름이 의존 역전 원칙인 것이다.  

* ### 정리  

  단일 책임 원칙과 인터페이스 분리 원칙은 객체가 커지지 않도록 막아준다.   
  객체가 단일 책임을 갖게 하고 클라이언트마다 다른 인터페이스를 사용하게 함으로써 한 기능의 변경이 다른 곳에까지 미치는 영향을 최소화할 수 있고,   
  이는 결국 기능 변경을 보다 쉽게 할 수 있도록 만들어 준다.  
   
  리스코프 치환 원칙과 의존 역전 원칙은 개방 폐쇄 원칙을 지원한다.   
  개방 폐쇄 원칙은 변화되는 부분을 추상화하고 다형성을 이용함으로써 기능 확장을 하면서도 기존 코드를 수정하기 않도록 만들어 준다.   
  여기서, 변화되는 부분을 추상화할 수 있도록 도와주는 원칙이 바로 의존 역전 원칙이고, 다형성을 도와주는 원칙이 리스코프 치환 원칙인 것이다.  
    
  결국 SOLID원칙은 프로그래밍을 할때 유지 보수와 확장이 쉬운 시스템을 만들고자 지켜지는 원칙인 것이다.  
  이를 얼마나 잘 이해하고 있고 활용하냐에 따라 더 나은 코드를 작성할 수 있을 것 같으니 더욱 공부하여 정진하고자 한다.  
  
