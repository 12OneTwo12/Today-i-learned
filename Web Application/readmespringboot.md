# Spring 
  
  #### [ 2022-09-05 ]  
  
  ## 목차  
  * #### [[ Spring Boot ]](#spring-boot)  
  * #### [[ Maven과 Gradle은 무엇일까? ]](#maven과-gradle은-무엇일까)  
  * #### [[ 설정 ]](#설정)  
  * #### [[ JSP vs Thymeleaf ]](#jsp-vs-thymeleaf)  
  * #### [[ 템플릿 엔진이란? ]](#템플릿-엔진이란)  
  * #### [[ 스프링 부트에서의 개별적인 bean설정 ]](#스프링-부트에서의-개별적인-bean설정)  
  * #### [[ thymeleaf 템플릿 ]](#thymeleaf-템플릿)  
      
-----------------------------------------------------------------------------------------------------------------------------------------

* ### Spring Boot  

  스프링이란 Java의 웹 프레임워크라는 것을 그전에 살펴봤기에 알고 있다.  
  그렇다면 spring boot는 뭘까?  
     
  스프링과 스프링 부트는 크게 다르지 않다.   
  스프링 부트(Spring Boot)는 스프링(Spring)을 더 쉽게 이용하기 위한 도구라고 볼 수 있다.  
  Spring framework 기반 프로젝트를 복잡한 설정없이 쉽고 빠르게 만들어주는 라이브러리라고 이해할 수 있는데,  
  스프링 이용하여 개발을 할 때, 이것저것 세팅을 해야 될 요소들이 많다.  
  Spring Boot는 매우 간단하게 프로젝트를 설정할 수 있게 하여, Spring 개발을 조금 더 쉽게 만들어주는 역할을 하고 있다.  
       
  예를 들어 Spring framework를 사용하기 위한 필수 설정파일 (web.xml, rootContext.xml, ServletContext.xml등..)을   
  작성해야하고 이를 다 외우는건 사실상 불가능 하기에 기존의 사용설정을 검색해 가져오거나 개발자가 일일히 검색을 통해 설정해주어야 했다.  
  스프링부트는 메이븐이나 그레이들의 dependency에 starter 라이브러리만 작성한다면 초기 셋팅에 필요한 라이브러리들을 모두 세팅해주게 된다.   
  
  스프링 부트를 사용하면 복잡한 설정 없이 쉽고 빠르게 스프링 프레임워크를 사용할 수 있다.  
  
  스프링 부트의 또 다른 특징은 톰캣과 같은 내장 서버가 존재한다는 것이다.   
  스프링 프레임워크의 경우 톰캣을 직접 설치해 프로젝트 내에서 서버를 설정해주고,   
  버전 관리도 함께 해 주어야 했다. 하지만 스프링 부트는 그럴 필요 없이 톰캣 내장 서버가 존재하여 설치와 버전 관리를 신경 쓸 필요가 없어졌다.  
  
  마지막으로 스프링의 경우 servlet-context, root-context와 같은 xml 파일을 직접 작성해서 웹과 관련된 설정이나   
  스프링 프로젝트 내 객체 의존성을 관리해줘야 했지만 스프링부트에서는 이럴 필요 없이 자동으로 의존성 관리가 가능해졌다.  
    
  |                  |  스프링 |              스프링부트             |
  |------------------|:-------:|:-----------------------------------:|
  | 프로젝트의 구조  |   MVC2  |                 MVC2                |
  | 빌드 툴          |  메이븐 |               그레이들              |
  | 빌드 설정파일    | Pom.xml |             Build.gradle            |
  | 스프링 설정파일  | xml파일 | JAVA파일 and Application.properties |
  | 설정 방식        |   수동  |                 자동                |
  | JDBC             | Mybatis |           Mybatis and JPA           |
  | View에 대한 처리 |   JSP   |         Thymleaf or JSP 등등        |
  | 어노테이션       |   기존  |               기존 + @              |
  
* ### Maven과 Gradle은 무엇일까?  

  초기 개발 환경을 설정할 때 메이븐의 pom.xml이나 그레이들의 build.gradle 파일을 통해 스프링과 스프링부트의 프로젝트를 관리할 수 있다.  
  그럼 둘의 차이는 무엇일까?  
    
  Maven은 자바용 프로젝트 관리 툴이기 때문에 자바에서만 사용 가능한다.   
  하지만 Gradle은 Java 이외에도 C++, Python 등 다양한 언어를 지원한다.   
  현재는 메이븐의 비중이 더 크긴 하지만 그레이들이 메이븐에 비해 가독성이 더 좋고, 성능면에서도 더 빠르게 작동해기 때문에   
  대형 프로젝트의 경우 그레이들을 사용하는 경우가 많아지고 있다.  
    
  * #### 그레이들(gradle)
  
    프로젝트의 필요한 라이브러리를 연결해주고, test, 빌드(배포를 위한 준비), 위한 플랫폼이다.  
    메이븐 플랫폼의 xml의 단점을 보완하여 프로젝트에 필요한 라이브러리를 설정으로 바로 사용할 수 있다.  
      
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <project xmlns="http://maven.apache.org/POM/4.0.0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/maven-v4_0_0.xsd">
      <modelVersion>4.0.0</modelVersion>
      <groupId>com.coding404</groupId>
      <artifactId>myweb</artifactId>
      <name>SpringMyweb</name>
      <packaging>war</packaging>
      <version>1.0.0-BUILD-SNAPSHOT</version>
      <properties>
        <!-- 자바 버전 -->
        <java-version>11</java-version>
        <org.springframework-version>5.0.7.RELEASE</org.springframework-version>
        <org.aspectj-version>1.6.10</org.aspectj-version>
        <org.slf4j-version>1.6.6</org.slf4j-version>
      </properties>
      <dependencies>
        <!-- Spring -->
        <dependency>
          <groupId>org.springframework</groupId>
          <artifactId>spring-context</artifactId>
          <version>${org.springframework-version}</version>
          <exclusions>
            <!-- Exclude Commons Logging in favor of SLF4j -->
            <exclusion>
              <groupId>commons-logging</groupId>
              <artifactId>commons-logging</artifactId>
            </exclusion>
          </exclusions>
        </dependency>
        <dependency>
          <groupId>org.springframework</groupId>
          <artifactId>spring-webmvc</artifactId>
          <version>${org.springframework-version}</version>
        </dependency>

        <!-- AspectJ -->
        <dependency>
          <groupId>org.aspectj</groupId>
          <artifactId>aspectjrt</artifactId>
          <version>${org.aspectj-version}</version>
        </dependency>

        <!-- Logging -->
        <dependency>
          <groupId>org.slf4j</groupId>
          <artifactId>slf4j-api</artifactId>
          <version>${org.slf4j-version}</version>
        </dependency>
        <dependency>
          <groupId>org.slf4j</groupId>
          <artifactId>jcl-over-slf4j</artifactId>
          <version>${org.slf4j-version}</version>
          <scope>runtime</scope>
        </dependency>
        <dependency>
          <groupId>org.slf4j</groupId>
          <artifactId>slf4j-log4j12</artifactId>
          <version>${org.slf4j-version}</version>
          <scope>runtime</scope>
        </dependency>
        <dependency>
          <groupId>log4j</groupId>
          <artifactId>log4j</artifactId>
          <version>1.2.15</version>
          <exclusions>
            <exclusion>
              <groupId>javax.mail</groupId>
              <artifactId>mail</artifactId>
            </exclusion>
            <exclusion>
              <groupId>javax.jms</groupId>
              <artifactId>jms</artifactId>
            </exclusion>
            <exclusion>
              <groupId>com.sun.jdmk</groupId>
              <artifactId>jmxtools</artifactId>
            </exclusion>
            <exclusion>
              <groupId>com.sun.jmx</groupId>
              <artifactId>jmxri</artifactId>
            </exclusion>
          </exclusions>
          <scope>runtime</scope>
        </dependency>

        <!-- @Inject -->
        <dependency>
          <groupId>javax.inject</groupId>
          <artifactId>javax.inject</artifactId>
          <version>1</version>
        </dependency>

        <!-- Servlet -->
        <dependency>
          <groupId>javax.servlet</groupId>
          <artifactId>javax.servlet-api</artifactId>
          <version>3.1.0</version>
          <scope>provided</scope>
        </dependency>
        <dependency>
          <groupId>javax.servlet.jsp</groupId>
          <artifactId>jsp-api</artifactId>
          <version>2.1</version>
          <scope>provided</scope>
        </dependency>
        <dependency>
          <groupId>javax.servlet</groupId>
          <artifactId>jstl</artifactId>
          <version>1.2</version>
        </dependency>

        <!-- Test -->
        <dependency>
          <groupId>junit</groupId>
          <artifactId>junit</artifactId>
          <version>4.12</version>
          <scope>test</scope>
        </dependency>

        <!-- DB커넥터 -->
        <dependency>
          <groupId>mysql</groupId>
          <artifactId>mysql-connector-java</artifactId>
          <version>8.0.28</version>
        </dependency>

        <!-- 스프링JDBC -->
        <dependency>
          <groupId>org.springframework</groupId>
          <artifactId>spring-jdbc</artifactId>
          <version>${org.springframework-version}</version>
        </dependency>

        <!-- 커넥션풀 -->
        <dependency>
          <groupId>com.zaxxer</groupId>
          <artifactId>HikariCP</artifactId>
          <version>3.2.0</version>
        </dependency>

        <!-- 스프링TEST -->
        <!-- 스프링 TEST 환경은 junit이라는 단위 테스트 환경을 사용하는데 버전이 4.12이상으로 맞춰줘야함 -->
        <dependency>
          <groupId>org.springframework</groupId>
          <artifactId>spring-test</artifactId>
          <version>${org.springframework-version}</version>
          <scope>test</scope>
        </dependency>

        <!-- mybatis -->
        <dependency>
          <groupId>org.mybatis</groupId>
          <artifactId>mybatis</artifactId>
          <version>3.4.6</version>
        </dependency>

        <!-- mybatis와 스프링을 연결해주는 모듈(spring jdbc 필수) -->
        <dependency>
          <groupId>org.mybatis</groupId>
          <artifactId>mybatis-spring</artifactId>
          <version>1.3.2</version>
        </dependency>

        <!-- Project Lombok -->
        <dependency>
          <groupId>org.projectlombok</groupId>
          <artifactId>lombok</artifactId>
          <version>1.18.24</version>
          <scope>provided</scope>
        </dependency>

        <!-- 타일즈 (jstl이 반드시 필요합니다) -->
        <dependency>
          <groupId>org.apache.tiles</groupId>
          <artifactId>tiles-extras</artifactId>
          <version>3.0.8</version>
        </dependency>
        <dependency>
          <groupId>org.apache.tiles</groupId>
          <artifactId>tiles-servlet</artifactId>
          <version>3.0.8</version>
        </dependency>
        <dependency>
          <groupId>org.apache.tiles</groupId>
          <artifactId>tiles-jsp</artifactId>
          <version>3.0.8</version>
        </dependency>


      </dependencies>
      <build>
        <plugins>
          <plugin>
            <artifactId>maven-eclipse-plugin</artifactId>
            <version>2.9</version>
            <configuration>
              <additionalProjectnatures>
                <projectnature>org.springframework.ide.eclipse.core.springnature</projectnature>
              </additionalProjectnatures>
              <additionalBuildcommands>
                <buildcommand>org.springframework.ide.eclipse.core.springbuilder</buildcommand>
              </additionalBuildcommands>
              <downloadSources>true</downloadSources>
              <downloadJavadocs>true</downloadJavadocs>
            </configuration>
          </plugin>
          <!-- 4. 메이븐 컴파일 버전 3.8.1로 변경, 자바 컴파일 버전 11로 변경 -->
          <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.8.1</version>
            <configuration>
              <source>11</source>
              <target>11</target>
              <compilerArgument>-Xlint:all</compilerArgument>
              <showWarnings>true</showWarnings>
              <showDeprecation>true</showDeprecation>
            </configuration>
          </plugin>
          <plugin>
            <groupId>org.codehaus.mojo</groupId>
            <artifactId>exec-maven-plugin</artifactId>
            <version>1.2.1</version>
            <configuration>
              <mainClass>org.test.int1.Main</mainClass>
            </configuration>
          </plugin>
        </plugins>
      </build>
    </project>
    ```
    
    이렇게 길었던 설정 파일이  
    
    ```gradle
    plugins {
      id 'org.springframework.boot' version '2.6.11'
      id 'io.spring.dependency-management' version '1.0.13.RELEASE'
      id 'java'
      id 'war'
    }

    group = 'com.simple'
    version = '0.0.1-SNAPSHOT'
    sourceCompatibility = '11'

    configurations {
      compileOnly {
        extendsFrom annotationProcessor
      }
    }

    repositories {
      mavenCentral()
    }

    dependencies {
      implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
      implementation 'org.springframework.boot:spring-boot-starter-web'
      compileOnly 'org.projectlombok:lombok'
      developmentOnly 'org.springframework.boot:spring-boot-devtools'
      runtimeOnly 'mysql:mysql-connector-java'
      annotationProcessor 'org.projectlombok:lombok'
      providedRuntime 'org.springframework.boot:spring-boot-starter-tomcat'
      testImplementation 'org.springframework.boot:spring-boot-starter-test'

      // jsp를 뷰로 적용시키기 위한 설정 
      // implementation 'org.apache.tomcat.embed:tomcat-embed-jasper:9.0.65'
      // implementation 'javax.servlet:jstl:1.2'

      // 타임리프 (jsp를 뷰로 하는게 아닌 다른 파일을 뷰로)
      implementation 'org.springframework.boot:spring-boot-starter-thymeleaf'

    }

    tasks.named('test') {
      useJUnitPlatform()
    }
    ```
    
    스프링 부트에선 이렇게 사용이 가능하게 된 것이다.  
      
    ![image url](https://github.com/12OneTwo12/Today-i-learned/blob/main/Web%20Application/springbootproject.png?raw=true)  
      
* ### 설정   

  그렇다면 spring boot에서의 설정은 어떨까?  
  기본적으로 ```application.properties``` 파일에서 손볼 수 있다.  
    
  ```properties
  # 스프링 부트 관련 설정
  # key = value 형태

  server.port=8181

  ## 히카리풀, 커넥션 작업을 전부 자동으로 처리 ##
  spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
  spring.datasource.url=jdbc:mysql://localhost:3306/spring?serverTimezone=Asia/Seoul
  spring.datasource.username=spring
  spring.datasource.password=spring


  ## jsp를 뷰로 사용하는 경우 thymeleaf사용시 설정 필요 없음
  # spring.mvc.view.prefix=/WEB-INF/views/
  # spring.mvc.view.suffix=.jsp

  # @Value예시
  spring.project.dir=c://springboot//upload
  ```
    
* ### JSP vs Thymeleaf  
  
   jsp는 서블릿이라는 형태로 변환되어 실행된다.   
   서블릿은 자바소스라 jsp에서 자바코드를 사용하는 것이 가능해지는데 그렇다보니 view에 비지니스 로직이 포함되어 복잡하고 무거워지게 된다.  
   반면, 타임리프는 서블릿으로 변환되지 않다보니 비지니스 로직이 완전히 분리가 된다는 장점이 있다.  
     
   jsp는 JAR패키징이 불가하고, WAR패키징만이 가능하다.   
   war는 jar와 달리  웹 서버나 WAS가 필요하고, web-inf 디렉토리에서 사전 정의된 구조만을 사용한다.   
   그래서 jar패키징이 가능한 thymeleaf는 was없이도 브라우저에 직접 띄울 수가 있으니 훨씬 편리하다고 볼 수 있다.  
    
   타임리프는 이렇듯 스프링부트와 굉장히 궁합이 잘 맞기에 권장하는 템플릿 엔진인 것 같다.  
   타임리프를 사용하기 위해서는 의존성을 추가해주고  
   view에서 html 언어를 추가해서 문법을 적용시켜주면 된다.  
      
* ### 템플릿 엔진이란?  

  템플릿 양식(html)과 데이터 모델(DB)에 따른 입력 자료를 결합해서 문서를 출력하는 소프트웨어를 템플릿 엔진이라고 한다.  
  즉, View를 담당하는 html코드와 DB Logic Code를 따로 분리해서 합쳐주는 기능을 하는 것이다.  
    
  이는 두가지의 종류로 나뉘는데 하나는 서버사이드 템플릿 엔진, 하나는 클라이언트사이드 템플릿 엔진이다.  
    
  * #### 서버사이드 템플릿 엔진이란?  

    이름에서 유추해볼수 있듯 서버사이드 템플릿 엔진은,  
    서버에서 가져온 데이터를 미리 만들어진 템플릿에 넣어서 html을 완성시키고 클라이언트에게 전달한다.  
      
  * #### 클라이언트 사이드 템플릿 엔진이란?  

    마찬가지로 이름에서 유추해볼 수 있듯 클라이언트 사이드 템플릿 엔진은,  
    브라우저 위에서 html 형태로 화면을 생성하고, 서버에서 받은 json, xml형식의 데이터를  
    여기서 동적인 화면으로 만드는 것이며 예로는 react나 vue.js가 있다.  
  
  여기서 jsp는 서버 사이드 템플릿 엔진인데  
  스프링부트에서는 자동 설정을 지원하지 않는다.  
    
  스프링부트에서 자동 설정을 지원하는 템플릿 엔진에는 FreeMarker, Groovy, Thymeleaf, Mustache가 있다.  
    
* ### 스프링 부트에서의 개별적인 bean설정  

  우리가 알다시피 스프링의 동작 방식은 필요한 bean을 IOC컨테이너에 미리 생성하고 꺼내 사용하는 방식이다.  
  기존 스프링에서 xml로 설정했던 bean은 스프링 부트에서 java로 생성하게 된다.  
  웹 설정은 ```WebMvcConfigurer``` 인터페이스를 구현함으로써 가능하다.  
    
  ```java
  @Configuration
  public class WebConfig implements WebMvcConfigurer {
  
    @Autowired // applicationContext는 스프링 빈을 담당하는 ioc컨테이너이다.
  	ApplicationContext applicationContext;
  
    // aplication.properties의 값을 자바 문서로 읽는 법
  	@Value("${server.port}")
  	String port;
  
    @Bean // 빈 생성
  	public void test() {
      //utilconponent 빈을 꺼냄
    	UtilConponent con = applicationContext.getBean(UtilConponent.class); // @Component 어노테이션을 달아놓은 빈을 가져다줌
    }
    
    @Bean
  	public UtilConponent utilConponent() {
	  	return new UtilConponent(); // @Component 어노테이션을 사용하지 않고 bean으로 만드는 법
  	}
    
  }
  ```

  | 어노테이션명    |                   기능                  |
  |-----------------|:---------------------------------------:|
  | @Configuration  |        스프링 설정 파일임을 의미        |
  | @Bean           |               빈으로 등록               |
  | @PropertySource |    Application.propertis를 참조 가능    |
  | @Value          | Application.properties에 값을 직접 참조 |
  
  ```@Controller```, ```@Service```, ```@Repository```, ```@Component```로 선언된 클래스들은 IOC컨테이너에 자동 생성된다.
    
* ### thymeleaf템플릿  
    
  - 타임리프thymeleaf는 자바 라이브러리이며, 텍스트, HTML, XML, Javascript, CSS 그리고 텍스트를 생성할 수 있는 템플릿 엔진이다.  

  - 스프링 MVC와의 통합 모듈을 제공하며, 애플리케이션에서 JSP로 만든 기능들을 완전히 대체할 수 있다.  

  - Spring Boot에서는 JSP가 아닌 Thymeleaf 사용을 권장하고 있다.  

  * #### 타임리프 문법  

    타임리프는 최상단에 ```xmlns:사용명```을 반드시 명시한다.  
    ```<html xlmns:th="http://www.thymeleaf.org">```
  
    | 설명                | 표현식                       | 예시                            |
    |---------------------|------------------------------|---------------------------------|
    | 변수 표현           | ${...}                       | ${session.user}                 |
    | 선택자              | *{...}                       | *{firstName}                    |
    | 메시지              | #{...}                       | #{message}                      |
    | 링크                | @{...}                       | @{abbo.tistory.com}             |
    | fragment expression | ~{...}                       | frag=~{footer::#main/text()}    |
    | 텍스트              | '...'                        | 'text1'                         |
    | 숫자                |                              | 0, 1, 3.14                      |
    | 불리언              |                              | true, false                     |
    | Null                |                              | null                            |
    | 리터럴 문자         |                              | one, main                       |
    | 텍스트 결합         | +                            | ${str1}+${str2}                 |
    | 문장 결합           | \|                           | \|My name is ${name}\|          |
    | 숫자 연산           | +, -, *, /, %                | 1+2-3*4/5%2                     |
    | 음수 기호           | -                            |                                 |
    | 조건 연산           | and, or, !, not              | ${condition1} and ${condition2} |
    | 비교 연산           | >, <, >=, <=, gt, lt, ge, le | ${number1} > 3                  |

    ```HTML Tag``` 내에 property명 앞에 'th:'를 붙힌다.  
    
    | 설명                   | 표현식                         | 예시                                                             |
    |------------------------|--------------------------------|------------------------------------------------------------------|
    | th:text                | 텍스트 내용 출력               | <span th:thex="${name}"/>                                        |
    | th:value               | Value 수정(input, checkbox 등) | <input type="text" th:value="${val}" />                          |
    | th:with                | 변수값 지정                    | <div th:with="var1=${user.name}" />                              |
    | th:if, th:unless       | 조건문(if, else)               | <p th:if="${user.authType}=='web'" th:text="${user.authType}" /> |
    | th:each                | 반복문                         | <p th:each="user:${users}" th:text="${user.name}" />             |
    | th:href                | a태그                          | <a th:href="@{경로}" > 내용 </a>                                 |
    | th:block               | 별도의 태그 없이 제어문 사용   | <th:block th:each="vo : ${list}"></th:block>                     |
    | th:inline="javascript" | 자바스크립트에서 타임리프 사용 | <script th:inline="javascript" />                                |
      
    Thymeleaf 3.x 에서는 html 태그없이 출력이 가능하다.  
      
    ```[[${변수값}]]```
      
    ```html
    <h3 th:text="${'hello world'}"></h3>
    <h3>[[${'hello world'}]]</h3>

    <h3 th:text="${1 == 1}"></h3>
    <h3>[[${1 == 1}]]</h3>
    ```
      
    

      
    
