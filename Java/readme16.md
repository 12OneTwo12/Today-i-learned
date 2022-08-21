# Java  
  
  #### [ 2022-08-21 ]  
    
## 목차  
  * #### [[ 팩토리 메소드 패턴이란 ]](#팩토리-메소드-패턴이란)  
  * #### [[ 팩토리 메소드 패턴(Factory Method Pattern) ]](#팩토리-메소드-패턴factory-method-pattern)  
  * #### [[ 추상 팩토리(Abstract Factory) 패턴 ]](#추상-팩토리abstract-factory-패턴)  
    
    
-----------------------------------------------------------------------------------------------------------------------------------------------------  
  
* ### 팩토리 메소드 패턴이란 
  
  Factory Method Pattern (팩토리 메소드 패턴) 은 생성 패턴 중 하나로 객체를 생성할 때 어떤 클래스의 인스턴스를 만들 지 서브 클래스에서 결정하게 한다.  
  즉, 인스턴스 생성을 서브 클래스에게 위임합니다.  
    
  쉽게 이야기 하자면 객체의 생성을 캡슐화 하는 패턴이다.  
    
  구체적인 객체의 생성 과정을 '팩토리'로 모듈화 하여 구체적인 부분이 아닌 추상적인 부분에 의존할 수 있도록 한다.  
  팩토리 패턴에는 팩토리 메소드 패턴과 추상 팩토리 패턴이 있다.  
    
  | Pattern            | 공통점                                                                           | 차이점                                                                                                  |
  |--------------------|-------------------------------------------|---------------------------------------------------------------------------------------------------------|
  | 팩토리 메소드 패턴 | 객체의 생성부를 캡슐화하여 결합을 느슨하게 함  | 상속을 통해 서브 클래스에서 팩토리 메소드를 오버라이딩하여 객체의 생성부를 구현                         |
  | 추상 팩토리 패턴   |    구체적인 타입에 의존하지 않도록 함         | 객체의 집합을 생성하기 위한 정의를 추상체에 위치시키고 하위의 구현체에서 세부적인 집합 생성 과정을 구현(Fatory Method를 이용해 구현) |  
    
* ### 팩토리 메소드 패턴(Factory Method Pattern)  
  
  부모(상위) 클래스에 알려지지 않은 구체 클래스를 생성하는 패턴이며. 자식(하위) 클래스가 어떤 객체를 생성할지를 결정하도록 하는 패턴이다.  
    
  사용자 관리 프로그램이 있고 구글 계정으로 가입할 수 있다고 가정해보자.  
    
  * ##### User 인터페이스 정의  

    ```java
    public interface User {
    void signup();
    }
    ```
    
  * ##### User 인터페이스를 구현하는 GoogleUser 클래스 정의  

    ```java
    public class GoogleUser implements User {
        @Override
        public void signup() {
            System.out.println("구글 아이디로 가입");
        }
    }
    ```  
      
  * ##### 추상 클래스로 UserFactory 를 정의  

    ```java
    public abstract class UserFactory {
    
        public User newInstance() {
            User user = createUser();
            user.signup();
            return user;
        }

        protected abstract User createUser();
    }
    ```
      
    외부에서 User 객체를 생성할 때는 newInstance() 메서드를 호출하면 되고, 실제로 어떤 객체를 생성할 지는 추상 메서드로 정의해서 하위 클래스에서 정의  
    Java 8 부터는 인터페이스에서 default 메서드를 사용할 수 있기 때문에 인터페이스로   
    정의할 수도 있지만 protected 키워드를 사용해 접근을 제한하고 싶어서 추상 클래스를 사용    
      
  * ##### UserFactory 를 상속받는 GoogleUserFactory를 정의  

    ```java
    public class GoogleUserFactory extends UserFactory {
        @Override
        protected User createUser() {
            return new GoogleUser();
        }
    }
    ```
      
    GoogleUser 를 반환하도록 오버라이드  
      
  * ##### 클라이언트 코드에서 GoogleUser 클래스에 대한 의존성 없이 사용 가능  

    ```java
    UserFactory userFactory = new GoogleUserFactory();
    User user = userFactory.newInstance();
    ```
    
  Factory Method 패턴의 가장 큰 장점은 지금까지 본 것처럼 수정에 닫혀있고 확장에는 열려있는 OCP 원칙을 지킬 수 있다는 점이다.  
  이렇게 하면 새로운 구현 클래스가 추가되어도 기존 Factory 코드의 수정 없이 새로운 Factory 를 추가하면 된다.  
  객체를 생성하기 위해 인터페이스를 정의하지만, 어떤 클래스의 인스턴스를 생성할지에 대한 결정은   
  서브클래스에서 이루어지도록 하여 재정의 가능한 것으로 설계 하지만, 복잡해지지 않게 한다.  

  기존 코드(인스턴스를 만드는 과정)를 수정하지 않고 새로운 인스턴스를 다른 방법으로 생성하도록 확장할 수 있다.
  Product 와 Creator 간의 커플링(결합)이 느슨하다. 확장에 열려있고 변경에 닫혀있는 객체지향 원칙을 적용했기 때문에 가능하다.   

  단점이라고 하면 클래스가 많아지고 클래스 계층도 커질 수 있다.  
  그러나 이는 객체지향의 개념인 추상화와 캡슐화가 가지는 특징 중에 하나라는 생각이 든다.  
  더욱 추상화하고 캡슐화 할수록 우리는 코드의 흐름을 따라가는 데 더 시간이 들겠지만 그만큼 객체 지향적으로 구축이 되었음으로 유지보수에서도 수월해 질 것이고  
  보안적인 측면에서도 뛰어날 것이다.  
   

* ### 추상 팩토리(Abstract Factory) 패턴  

  추상 팩토리는 얼핏 보면 팩토리 메서드 패턴과 비슷하다고 느낄 수도 있다.  
  가장 큰 차이점은 팩토리 메서드 패턴은 어떤 객체를 생성 할지에 집중하고 추상 팩토리 패턴은 연관된 객체들을 모아둔다는 것에 집중한다.  
    
  소속사를 만든다고 가정하자.  
  소속사에는 연예인과 매니저가 필수로 존재하기 때문에 팀의 구성요소라고 볼 수 있다.  
    
  * ##### Manager 인터페이스와 클래스를 정의
    
    ```java
    public interface Manager {
    }

    public class ActorManager implements Manager {
    }

    public class SingerManager implements Manager {
    }
    ```
      
  * ##### Celebrity 인터페이스와 클래스를 정의  

    ```java
    public interface Celebrity {
    }

    public class Actor implements Celebrity {
    }

    public class Singer implements Celebrity {
    }
    ```
      
  * ##### Product 를 생성하는 Factory클래스를 정의한다.  

    ```java
    public interface StaffFactory {
        Manager createManager();
        Celebrity createCelebrity();
    }

    public class ActorStaffFactory implements StaffFactory {

        @Override
        public Manager createManager() {
            return new ActorManager();
        }

        @Override
        public Player createCelebrity() {
            return new Actor();
        }
    }

    public class SingerStaffFactory implements StaffFactory {

        @Override
        public Manager createManager() {
            return new SingerManager();
        }

        @Override
        public Player createPlayer() {
            return new Singer();
        }
    }
    ```
      
    ```Manager```와 ```Celebrity```는 소속사라는 하나의 공통점으로 묶을 수 있다.  
    단순하게 생각하면 팩토리 메서드 패턴과 동일하지만 공통된 집합을 모아둔다는 점이 특징이다.  
      
  * ##### Client  

    ```java
    public class AbstractFactoryApp {
        public static void main(String[] args) {
            use(new ActorStaffFactory());
            use(new SingerStaffFactory());
        }

        private static void use(StaffFactory factory) {
            Manager manager = factory.createManager();
            Celebrity celebrity = factory.createCelebrity();
        }
    }
    ```
      
    구체 클래스가 아닌 인터페이스에 의존하게 작성할 수 있다.  
    어떤 Factory를 넘겨받는지에 관계 없이 클라이언트는 ```Manager```와 ```Celebrity```를 생성해서 사용할 수 있습니다.  
      
    추상 팩토리(Abstract Factory) 패턴역시,  
    팩토리 메서드 패턴과 마찬가지로 수정에는 닫혀 있고 확장에는 열려 있다.    
    여러 개의 비슷한 집합 객체 생성을 하나의 팩토리에 모아둘 수 있다.  
      
    팩토리 메서드 패턴과 마찬가지로 클래스 갯수가 늘어난다는 단점이 있다.  
    
    
