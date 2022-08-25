# Spring    
  
  #### [ 2022-08-24 ]  
  
  ## 목차  
  * #### [[ 스프링 MVC프레임워크 동작 구조 ]](#스프링-mvc프레임워크-동작-구조)  
  * #### [[ web.xml 설정 ]](#webxml-설정)  
  * #### [[ servlet-context.xml 설정 ]](#servlet-contextxml-설정)  
  * #### [[ Controller(컨트롤러) ]](#controller컨트롤러)  
      
---------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### 스프링 MVC프레임워크 동작 구조    

  ![image url](https://github.com/12OneTwo12/Today-i-learned/blob/main/Web%20Application/springmvc.png?raw=true)  
    
  ![image url](https://github.com/12OneTwo12/Today-i-learned/blob/main/Web%20Application/springmvc2.png?raw=true)  
    
  
* ### web.xml 설정  
  
  web.xml에 서블릿을매핑  
      
  ```xml
  <servlet>
    <servlet-name>서블릿별칭</servlet-name>
    <servlet-class>서블릿명(패키지이름을포함한전체서블릿명)</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>서블릿별칭</servlet-name>
    <url-pattern>/맵핑명</url-pattern>
  </servlet-mapping>
  ```  
  
  * #### 예시
  ```xml
  <servlet>
    <servlet-name>appServlet</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
  <init-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>/WEB-INF/spring/appServlet/servlet-context.xml</param-value>
  </init-param>
    <load-on-startup>1</load-on-startup>
  </servlet>
  <servlet-mapping>
    <servlet-name>appServlet</servlet-name>
    <url-pattern>/</url-pattern>
  </servlet-mapping>
  ```  
      
  ```param-name```은 ```contextConfigLocation```이 등록되어 있는데 이는 스프링 설정파일을 다른이름으로 여러 개 생성하도록 해준다.    
  ```param-value```는 ```servlet-context.xml```로 지정하고 있는데 이때 지정된 ```servlet-context.xml```파일이 스프링 설정의 역할을 하는 파일이다.    
      
* ### servlet-context.xml 설정    

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:mvc="http://www.springframework.org/schema/mvc"
    xsi:schemaLocation="http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc-3.1.xsd
      http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <!-- 뷰 리졸버(화면에 대한 경로 생성) -->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
      <property name="prefix" value="/WEB-INF/views/"/>
      <property name="suffix" value=".jsp"/>
    </bean>

    <!-- 정적 자원 맵핑 -->
    <!-- MVC모듈을 활성화 -->
  <!--<mvc:resources location="폴더 경로" mapping="url경로"/> -->
    <mvc:resources location="/resources/" mapping="/resources/**"/>

    <!-- 
      bean생성 코드 
      1. 자바의 컨트롤러를 bean으로 생성
      2. 핸들러 구현(스프링에서 제공해주는 다양한 방법을 이용해서 핸들러를 구현가능)
    -->

    <bean id="con" class="com.simple.controller.MainController"/>

      <bean class="org.springframework.web.servlet.handler.SimpleUrlHandlerMapping">
          <property name="order" value="1" />
          <property name="mappings">
              <props>
                  <prop key="/test/con">con</prop>
                  <prop key="/test/bbb">con</prop>
              </props>
          </property>
      </bean>

  </beans>
  ```

  스프링 설정 파일은 클래스로부터 객체(빈:bean)를 생성하고 조립하는 역할을 한다고 학습했다.  
  ```servlet-context.xml```에서도 마찬가지로 프로젝트에 필요한 객체(빈:bean) 를 생성하고 조립한다.  
      
  ```<resources mapping="/resources/**" location="/resources/" />``` 의 의미는  
  정적 자원 맵핑으로 Css, script 파일들을 사용하기 위한 경로 설정이다.  
  resources폴더에 만들어지는 파일들은 해당 경로로바로 맵핑되어 보여진다.  
      
  ```xml
  <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
      <property name="prefix" value="/WEB-INF/views/"/>
      <property name="suffix" value=".jsp"/>
  </bean>
  ```
    
  위의 뷰 리졸버 설정은 컨트롤러에서 받은 View정보에 /WEB-INF/views/이름.jsp를 이름만으로 맵핑하게 해준다.  
      
  ```<annotation-driven />```의 의미, 이 태그는HandlerMapping, HandlerAdapter를 객체로 생성한다.  
  스프링 어노테이션을 사용할 수 있게한다.  
      
  ```<context:component-scan base-package="패키지위치.패키지이름" />```의 의미는  
  스프링 컨테이너에게 자바패키지를 자동으로 스캔해서 객체(bean)으로 생성하라는 설정이다.  
    
  원래는 위와같던 길던 코드가 Spring legacy project로 생성하게 되면,  
      
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <beans:beans xmlns="http://www.springframework.org/schema/mvc"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:beans="http://www.springframework.org/schema/beans"
    xmlns:context="http://www.springframework.org/schema/context"
    xsi:schemaLocation="http://www.springframework.org/schema/mvc https://www.springframework.org/schema/mvc/spring-mvc.xsd
      http://www.springframework.org/schema/beans https://www.springframework.org/schema/beans/spring-beans.xsd
      http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">

    <!-- 핸들러 맵핑, 핸들러 어댑터를 어노테이션을 이용해서 사용할 수 있게 함 -->	
    <annotation-driven />

    <!-- 정적자원맵핑 -->
    <resources mapping="/resources/**" location="/resources/" />

    <!-- 뷰 리졸버 -->
    <beans:bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
      <beans:property name="prefix" value="/WEB-INF/views/" />
      <beans:property name="suffix" value=".jsp" />
    </beans:bean>

    <!-- 해당 패키지를 읽어서 @Controller, @service, @Repository, @Component를 bean으로 생성 -->
    <context:component-scan base-package="com.simple.controller" />

  </beans:beans>
  ```  
      
* ### Controller(컨트롤러)  

  컨트롤로는 어노테이션으로 표현할 수 있다.  
    
  ![image url](https://github.com/12OneTwo12/Today-i-learned/blob/main/Web%20Application/controllerspringmvc.png?raw=true)  
    
  ```java
  @Controller // 빈으로 생성한다는 의미
  @RequestMapping("/request")
  public class ReqiestController {

    @RequestMapping("/req_ex01")
    public String req_ex01() {
      return "request/req_ex01";
    }

    // ex02화면 출력 - 들어오는 경로 그대로 화면으로 연결
    @RequestMapping("/req_ex02")
    public void req_ex02() {
    }

  //	@RequestMapping(value = "/request", method = RequestMethod.GET)
  //	public String req_ex03() {
  //		
  //		return null;
  //	}

    // get, post 둘다 허용
    @RequestMapping("/basic1")
    public String basic1() {
      return null;
    }

    // post만 허용
    @RequestMapping(value = "/basic2", method = RequestMethod.POST)
    public String basic2() {
      return null;
    }

    // 동일한 형식의 요청이라면 묶어서 사용이 가능
    @RequestMapping({"/basic3", "/basic4"})
    public String basic3_4() {
      System.out.println("요청을 묶어서 사용");
      return null;
    }

  }
  ```
      
  * #### 구동 과정  
      
    ![image url](https://github.com/12OneTwo12/Today-i-learned/blob/main/Web%20Application/springmvc3.png?raw=true)  
    
  * #### @Controller  

    | 어노테이션  |                       설명                      |
    |-------------|:-----------------------------------------------:|
    | @Component  | 일반적인 컴포넌트로 등록되기 위한 클래스에 사용 |
    | @Controller |              컨트롤러 클래스에 사용             |
    | @Service    |               서비스 클래스에 사용              |
    | @Repository |     DAO 클래스 또는 리포지토리 클래스에 사용    |
      
    ```xml
    <!-- 해당 패키지를 읽어서 @Controller, @service, @Repository, @Component를 bean으로 생성 -->
	  <context:component-scan base-package="com.simple.controller" />
    ```
      
    위에 해당하는 Base-package에 기술된 패키지를 스캔해서, 위 어노테이션이 붙은 클래스를 빈으로 생성한다.  
      
    ```xml
    @RequestMapping("/req_ex01")
    public String req_ex01() {
      return "request/req_ex01";
    }
    ```
      
    위 메소드를 예를 들면 ```/req_ex01```이라는 주소로 들어오게되면 ```request/req_ex01``` 파일을 View하라는 의미가 되는데,    
    우리가 뷰 리졸버를 통해 ```/WEB-INF/views/```와 ```.jsp```를 잘라냈음으로 저렇게 값을 받게 되면   
    실제 경로는 ```/WEB-INF/views/request/req_ex01.jsp```이 될 것이다.    
    
    ```@RequestMapping```을 이용한 URL맵핑에서는 ```method``` 라는 태그를 통해 get방식과 post방식을 정할 수 있다.  
      
    ```xml
    // get, post 둘다 허용
    @RequestMapping("/basic1")
    public String basic1() {
      return "request/basic1";
    }
    
    // post 방식만 허용
    @RequestMapping(value = "/basic2", method = RequestMethod.POST) 
    public String basic2() {
      return "request/basic2";
    }

    // get 방식만 허용
    @RequestMapping(value = "/basic2", method = RequestMethod.GET) 
    public String basic3() {
      return "request/basic3";
    }

    // ex02화면 출력 - 들어오는 경로 그대로 화면으로 연결
    @RequestMapping("/req_ex02")
    public void req_ex02() {
    }
    ```
    
  
