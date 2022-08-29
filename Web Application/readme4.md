# Web Application  
  
  #### [ 2022-08-29 ]  
  
  ## 목차  
  * #### [[ Lombok이란? ]](#lombok이란)  
  * #### [[ Lombok설치 및 사용법 ]](#lombok설치-및-사용법)  
  * #### [[ Tiles란? ]](#tiles란)  
  * #### [[ Tiles설치 및 사용법 ]](#tiles설치-및-사용법)  
      
---------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### Lombok이란?  

  Lombok이란 Java의 라이브러리로 반복되는 메소드를 어노테이션을 사용해서 자동으로 작성해주는 라이브러리다.  
  이제까지 내가 작성 하던 Model, VO 같은 경우, 이들이 가지는 프로퍼티에 대해서 Getter나 Setter, 생성자 등을 매번 작성해줘야 하는데.  
  가끔 멤버변수가 추가되거나 하면 그때마다 수정해줘야하는 번거로움이 있었다.  
  Lombok은 이러한 부분을 자동으로 만들어주고 수정해주는 라이브러리라고 할 수 있다.  
    
* ### Lombok설치 및 사용법   
      
  사용법은 간단하다.  
  
  우선 Lombok을 설치하기 위해 Lombok라이브러리를 ```pom.xml```에 추가해준다.  
  **pom.xml**
  ```xml
	<dependency>
		<groupId>org.projectlombok</groupId>
		<artifactId>lombok</artifactId>
		<version>1.18.24</version>
		<scope>provided</scope>
	</dependency>
  ```
  그리고 ```https://projectlombok.org/download``` 롬북 사이트로가 ```jar```파일을 받은 후 실행하여 컴파일러 경로를 지정해준후 install해주면 끝이다.    
  그 후 사용할 VO혹은 Model에서 Lombok 어노테이션을 사용해주면 끝이다.  
  정말 간단했다.  
    
  ```java
  import lombok.AllArgsConstructor;
  import lombok.Data;
  import lombok.Getter;
  import lombok.NoArgsConstructor;
  import lombok.Setter;
  import lombok.ToString;

  //@Setter
  //@Getter
  //@ToString
  // 3개 묶어서 Data 어노테이션
  @Data // setter + getter + ToString
  @AllArgsConstructor // 모든 멤버필드를 받는 생성자 
  @NoArgsConstructor // 기본 생성자
  public class TestVO {

    private String firstName;
    private String lastName;
    private int age;

  }
  ```  
    
  이로서 간단한 어노테이션 하나로 getter,setter,toString 그리고 생성자까지 간단하게 끝낼 수 있게 됐다.  
    
* ### Tiles란?  

  타일즈는 웹 페이지의 상단이나 하단 메뉴와 같이 반복적으로 사용되는 부분들에 대한 코드를 분리해서 따로 한 곳에서 관리를 가능하게 해주는 프레임워크이다.    
  JSP include와의 차이점은 비슷한 역할이지만, tiles가 좀 더 편리한 면이 있다.   
  jsp는 페이지 내에 동일한 레이아웃 정보가 들어가므로 전체적인 레이아웃을 변경하게 될 경우 모든 페이지를 수정해야하는 문제점이 있다.   
  예를들면 만약 50개의 페이지에 상단 메뉴가 include 되어있는데, 페이지명이 바뀌면 50개 파일을 전부 수정해주어야 하는 것이다.   
  tiles는 이런 일이 있으면 설정파일만 변경해주면 된다.  
    
* ### Tiles설치 및 사용법   
    
  tiles를 설정하는 방법을 알아보자.  
  우선 마찬가지로 ```pom.xml```파일에 tiles라이브러리를 추가해 설치해준다.  
  ```xml
	<!-- 타일즈 (jstl이 반드시 필요) -->
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
  ```
    
  그 후 스프링 설정파일에 타일즈를 선언해준다.  
    
  ```xml
	<!-- 타일즈 설정 -->
	<beans:bean id="tilesConfigurer" class="org.springframework.web.servlet.view.tiles3.TilesConfigurer">
		<beans:property name="definitions">
			<beans:list>
				<beans:value>/WEB-INF/tiles/tiles.xml</beans:value> <!-- 타일즈 설정 파일의 위치 선언 -->
			</beans:list>
		</beans:property>
	</beans:bean>

	<beans:bean class="org.springframework.web.servlet.view.UrlBasedViewResolver">
		<beans:property name="viewClass" value="org.springframework.web.servlet.view.tiles3.TilesView" />
		<beans:property name="order" value="1" /> <!-- 다중 뷰 리졸버가 선언되려면 UrlBasedViewResolver를 이용한다. 
                                                  해당 뷰 리졸버의 설정으로 TilesView를 넣고 ORDER를 1번째로 선언 -->
	</beans:bean>

	<!-- 뷰리졸버 설정 -->
	<beans:bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
		<beans:property name="prefix" value="/WEB-INF/views/" />
		<beans:property name="suffix" value=".jsp" />
		<beans:property name="order" value="2" /> <!-- 기존에 있던 리졸버 뷰의 순서를 ORDER로 2번째로 선언 -->
	</beans:bean>
  ```
    
  그 후 header, body, footer를 가진 teamplate.jsp라는 기본 레이아웃을 정의한다. 
  이 정의된 레이아웃의 name속성인 base를 상속하여 추가적으로 여러 tiles들을 만들 수 있다.  
    
  * **WEB-INF/tiles/tiles.xml**
  ```xml
  <tiles-definitions>
  <!-- 공통화면(메뉴 표시) -->
    <definition name="base" template="/WEB-INF/tiles/template.jsp">
      <put-attribute name="header" value="/WEB-INF/tiles/header.jsp" />
      <put-attribute name="body" value="" />
      <put-attribute name="footer" value="/WEB-INF/tiles/footer.jsp" />
      <put-attribute name="aside" value="/WEB-INF/tiles/aside.jsp" />
    </definition> 


    <definition name="*" extends="base"> <!-- name속성에는 컨트롤러의 리턴위치가 들어감 -->
      <put-attribute name="body" value="/WEB-INF/views/{1}.jsp" />
    </definition>

    <definition name="*/*" extends="base">
      <put-attribute name="body" value="/WEB-INF/views/{1}/{2}.jsp" />
    </definition>

    <definition name="*/*/*" extends="base">
      <put-attribute name="body" value="/WEB-INF/views/{1}/{2}/{3}.jsp" />
    </definition>

    <!-- controller반환되는 뷰경로를 직접 지정 
    <definition name="index" template="/WEB-INF/views/index.jsp" /> <!--template속성은 보여질 파일의 위치가 들어간다 -->
    <definition name="aaa" template="/WEB-INF/views/aaa.jsp" />
    <definition name="xxx/yyy/kkk" template="/WEB-INF/views/xxx.jsp" /> -->

    <definition name="user/login" template="/WEB-INF/views/user/login.jsp"></definition>
  </tiles-definitions>
  ```
    
  * **WEB-INF/tiles/template.jsp**
  ```jsp
  <%@ page language="java" contentType="text/html; charset=UTF-8"
     pageEncoding="UTF-8"%>
  <%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
  <!DOCTYPE html>
  <html>
  <head>
    <!-- ….생략 -->
  </head>
    <body>
      <tiles:insertAttribute name="aside" />
      <tiles:insertAttribute name="header" />
      <tiles:insertAttribute name="body" />
      <tiles:insertAttribute name="footer" />
    </body>
  </html>
  ```
    
  그후 각자 ```header.jsp```, ```aside.jsp```, ```footer.jsp```를 만들어 각각 코드를 적용해주면,   
  컨트롤러의 리턴값이 ```/WEB-INF/views/```이하로 들어오는 ```*/*/*```에 포함되는 모든 jsp 파일들은   
  ```header.jsp```, ```aside.jsp```, ```footer.jsp``` 포함한 상태로 화면에 출력이 되는 것이다.  
  이로써 수정이 이루어 진다고 해도 비교적 전보다 간단하게 수정할 수 있을 것이다.  
  
