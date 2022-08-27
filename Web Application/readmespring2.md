# Spring    
  
  #### [ 2022-08-23 ]  
  
  ## 목차  
  * #### [[ DI-IoC ]](#di-ioc)  
  * #### [[ 스프링컨테이너(IoC) ]](#스프링컨테이너ioc)  
  * #### [[ DI란? ]](#di란)  
  * #### [[ DI 설정 방법 ]](#di-설정-방법)  
  * #### [[ 생성자를 통한 의존객체 주입 ]](#생성자를-통한-의존객체-주입)  
  * #### [[ setter를 통한 의존객체 주입 ]](#setter를-통한-의존객체-주입)  
  * #### [[ 빈(Bean)의 범위 ]](#빈bean의=범위)  
  * #### [[ 의존객체자동주입 ]](#의존객체자동주입)  
  * #### [[ 빈 생성과 의존성 주입 비교 ]](#빈-생성과-의존성-주입-비교)  
  * #### [[ XML파일을 Java파일로 변경하기 ]](#xml파일을-java파일로-변경하기)  
   
      
---------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### DI-IoC  

  DI란 어제 살펴봤듯 Dependency Injection의 약자로, 의존성 주입이라 직역할 수 있다.  
  프레임워크를 연동 할 때 연결하는 소스코드를 직접 작성하는게 아닌 외부 파일을 연결해 불러오는 방식을 말하는데,  
  이를 통해 코드 간의 재사용을 높이고, 소스코드를 다양한 곳에 사용하며 모듈 간의 결합도를 낮출 수 있다.  
    
  IoC도 어제 살펴봤듯 Inversion of Control의 약자로, 제어 반전이라 직역할 수 있는데,  
  프로그램을 제어하는 패턴 중 하나로 DI 는 IoC패턴의 구현방법 중 하나이다.  
  DI에 따라 프로그램의 흐름이 완전히 변경되는데,  
  개발자는 JAVA 코딩시 new 연산자, 인터페이스 호출, 데이터 클래스 호출 방식으로 객체를 생성, 소멸시킨다.  
  여기서 IoC란 객체의 생성부터 소멸까지 개발자가 아닌 스프링컨테이너가 대신 해주는 것이다.  
    
* ### 스프링컨테이너(IoC)  

  ![image url](https://github.com/12OneTwo12/Today-i-learned/blob/main/Web%20Application/ioc.png?raw=true)  
    
* ### DI란?  

  ![image url](https://github.com/12OneTwo12/Today-i-learned/blob/main/Web%20Application/di.png?raw=true)  
    
* ### DI 설정 방법  

  ```xml
  <beans xmlns="http://www.springframework.org/schema/beans" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xsi:schemaLocation="http://www.springframework.org/schema/beans 
  http://www.springframework.org/schema/beans/spring-beans.xsd">
  ```
    
  스프링 설정파일(xml)에 위 코드를 추가해준다.  
    
  - xmlns : 속성값은 네임스페이스로 태그를 식별하기 이름   
  - xmlns:xsi – XML정보를 가르키는 주소  
  - xsi:schemaLocation – 두개의 값이 공백으로 구분 됨, 첫번째는 사용할 네임스페이스, 두번째는 참조할 네임스페이스 위치  
  
* ### 생성자를 통한 의존객체 주입  

  ```xml
  <?xml version=“1.0” encoding=“UTF-8”?>

  <beans xmlns="http://www.springframework.org/schema/beans" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xsi:schemaLocation="http://www.springframework.org/schema/beans 
  http://www.springframework.org/schema/beans/spring-beans.xsd">
    
  <bean id="변수 이름" class="자바 클래스 명" />
  <bean id="chef" class="day02.ex01.construct.Chef" />

  <!-- 생성자 주입 -->
  <bean id="hotel" class="day02.ex01.construct.Hotel">
      <constructor-arg ref="chef"></constructor-arg> <-- Hotel클래스를 hotel이름으로 빈생성 생성자 인자값으로 ref=“chef” 로 생성된 빈 참조 -->
  </bean>
  ```

* ### setter를 통한 의존객체 주입  

  ```java
  public void setUrl(String url) {
    this.url = url;
  }
  public void setUid(String uid) {
    this.uid = uid;
  }
  public void setUpw(String upw) {
    this.upw = upw;
  }
  ```
  위 자바 코드의 setter에 아래 코드로 빈을 통해 값을 넣어준다.
    
  ```xml
  <bean id="DBdev" class="day02.ex02.setter.DatabaseDev">
    <property name="url" value="jdbc:mysql://localhost:3306/test"/>
    <property name="uid" value="jsp"/>
    <property name="upw" value="jsp"/>
  </bean>
  ```
  
* ### 빈(Bean)의 범위  
   
  스프링 컨테이너에서 생성된 빈(Bean)객체의 경우 동일한 타입에 대해서는 기본적으로 한 개만 생성이 되며, getBean() 메소드로 호출될 때 동일한 객체가 반환 된다.  
  싱글톤 범위와 반대의 개념도 있는데 이를 프로토타입(Prototype) 범위라고 한다. 
  프로토타입의 경우 개발자는 별도로 설정을 해줘야 하는데, 스프링 설정 파일에서 빈 (Bean)객체을 정의할 때 scope속성을 명시해 주면 된다.  
  ```xml
  <bean id="good" class="day01.SpringTest" scope="prototype"/>
  ```
    
* ### 의존객체자동주입   

  * #### 의존객체자동주입이란?  
      
        스프링 설정 파일에서 의존 객체를 주입할 때 <constructor-org> 또는 <property> 태그로 의존 대상 객체를 명시하지 않아도   
        스프링 컨테이너 가 자동으로 필요한 의존 대상 객체를 찾아서 의존 대상 객체가 필요한 객체에 주입해 주는 기능이다.  
        구현 방법은 @Autowired와 @Resource 어노테이션을 이용해서 쉽게 구현할 수 있다.  
    
  * #### DI 자동 주입 설정 방법
  
    ```xml
    <beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:context="http://www.springframework.org/schema/context" <-- 이 부분 -->
    xsi:schemaLocation="http://www.springframework.org/schema/beans
      http://www.springframework.org/schema/beans/spring-beans.xsd
      http://www.springframework.org/schema/context <-- 이 부분 -->
      http://www.springframework.org/schema/context/spring-context-4.3.xsd"> <-- 이 부분, 이렇게 총 3부분을 추가 해주면 된다. -->
    ```

  * #### 의존객체자동주입 태그  
  
    모두 어노테이션으로 표기하면 된다.  

    * #### @Autowired (required = false)  

          타입을 기준으로 의존성을 주입, 같은 타입 빈이 두 개 이상 있을 경우 변수이름으로 빈을 찾음, Spring 어노테이션  
          속성값(멤버변수), 세터, 생성자에 적용가능하다.  
          주입하려고 하는 객체의 타입이 일치하는 객체를 자동으로 주입한다. 
        
    * #### @Qualifier  

          빈의 이름으로 의존성 주입 @Autowired와 같이 사용, Spring 어노테이션  
          모호한 bean을 강제 연결한다.  
          동일한 객체가 2개 이상인 경우 스프링 컨테이너는 자동 주입 대상 객체를 판단하지 못해서 Exception을 발생시킨다.  
          이때 사용할 수 있는 어노테이션이다.  
        
    * #### @Resource  
  
          name을 속성을 이용하여 빈의 이름을 직접 지정, JavaSE의 어노테이션(JDK9에는 포함 안되 있다)  
          속성값, 세터에 적용가능하다.  
          마찬가지로 주입하려고 하는 객체의 이름이 일치하는 객체를 자동으로 주입한다.  
        
    * #### @Inject  

          @Autowired 아노테이션을 사용하는 것과 같다. JavaSE의 어노테이션  
            
* ### 빈 생성과 의존성 주입 비교  

  ![image url](https://github.com/12OneTwo12/Today-i-learned/blob/main/Web%20Application/beanandioc.png?raw=true)  
      
* ### XML파일을 Java파일로 변경하기  

  @Configuration – 스프링 컨테이너를 대신 생성하는 어노테이션  
    
  @Bean – 빈으로 등록하는 어노테이션  
  
  * #### 예시  

    ```java
    @Configuration
    public class JavaConfig {

      //<bean id="good" class="test01.SpringTest"/>
      @Bean
      public SpringTest good() {
        return new SpringTest();
      }

      //<bean id="chef" class="day02.ex01.construct.Chef" />
      @Bean
      public Chef chef() {
        return new Chef();
      }

      //<bean id="hotel" class="day02.ex01.construct.Hotel">
      @Bean
      public Hotel hotel() {
      //Hotel은 생성자로 Chef객체를 받기 때문에 매개값으로 chef()함수를 주입합니다.
        return new Hotel(chef()); 
      }

      @Bean
      public DatabaseDev DBdev() {
      //setter를 통해 값을 받고 있기 때문에 객체를 생성하고 세터 지정후 반환합니다.
        DatabaseDev dv = new DatabaseDev();
        dv.setUrl("jdbc:mysql://localhost:3306/test");
        dv.setUid("jsp");
        dv.setUpw("jsp");
       return dv;
      }
    }
    ```  
      
    ```java
    public static void main(String[] args) {
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(JavaConfig.class);

        SpringTest t = ctx.getBean("good", SpringTest.class);
        t.method1();
        t.method2();

        Hotel h = ctx.getBean("hotel", Hotel.class);
        h.getChef().cook();
    }
    ```
      
    이렇게 사용하면 번거롭게 xml로 왔다갔다 할 필요 없이 자바에서 모두 완료할 수 있을 것 같다.  
    나에게는 java에서 진행하는게 더 익숙해 보여서 편해보였다.  
