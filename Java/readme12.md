# Java 
  
  #### [ 2022-08-16 ]  
  
  ## 목차  
  * #### [[ JSP란 ]](#jsp란)  
  * #### [[ JSP 웹어플리케이션의 장점 ]](#jsp-웹어플리케이션의-장점)  
  * #### [[ HTTP 요청과 응답 ]](#http-요청과-응답)  
  * #### [[ JSP ]](#jsp)  
  * #### [[ JSP 태그 종류 ]](#jsp-태그-종류)  
  * #### [[ JSP 아키텍처 ]](#jsp-아키텍처)  
  * #### [[ SSR과 CSR ]](#ssr과-csr)  
  * #### [[ Servlet ]](#servlet)  
  * #### [[ JSP 내장 객체 ]](#jsp-내장-객체)  
    
      
---------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### JSP란  

  JSP는 HTML 페이지를 만들기 위한 방법 중 하나이다.  
  JSP(Java Server Pages)란 JavaServer Pages 의 약자이며 HTML 코드에 JAVA 코드를 넣어 동적웹페이지를 생성하는 웹어플리케이션 도구이다.  
  JSP를 통해 정적인 HTML과 동적으로 생성된 contents(HTTP 요청 파라미터)를 혼합하여 사용할 수 있다.  
    
  HTML 페이지에서 서버에 저장된 데이터를 제어하려면 HTML 페이지 내에서는 방법이 없다.  
  그렇다면 HTML 페이지에서 서버에 저장된 데이터를 제어하기 위해서는 그 작업을 실행할 수 있는 다른 페이지에게 원하는 작업을 요청(request)해야 하고     
  요청을 받은 페이지는 서버의 데이터를 접근하여 요청을 받은 부분을 처리, 수행한 다음 그 결과를 HTML 페이지에게 넘겨주어야(response) 한다.     
  HTML 페이지로부터 요청을 받아서 서버의 데이터를 처리한 다음 그 결과를 요청을 한 페이지에게 넘겨주는 역알을 하는 페이지는  
  당연히 서버에서 실행되는 페이지여야 하는데 JSP 페이지는 바로 이러한 페이지를 의미한다.  
    
  나는 쉽게 HTML과 Java를 혼합하여 서버와 데이터를 주고 받을 수 있게 만든 녀석 정도로 이해했다.  
    
  JSP는 사용자가 코드를 작성한 다음 컴파일 과정을 거치지 않고 서버에서 실행시킬 수 있다.  
  JSP는 웹 서버에 의해 서블릿(servlets)으로 변환된 다음 실행된다.  
    
    * #### Java Servlets  

          - 서블릿은 서버에서 실행되는 자바 프로그램이다. 
          - 서블릿이 사용자에 의해 요청되면 서버에서는 HTTP request에 응답하기 위해 웹 서버에서 서블릿 객체를 생성하고 이를 통해 사용자의 요청을 처리한다.
    
  그렇다면 JSP를 이용하게되면 어떤 점들이 좋을까?  
    
* ### JSP 웹어플리케이션의 장점    

  * 풍부한 java API 를 사용하여 제작이 가능하다.  
    
  * JSP기반의 웹어플리케이션은 특정 운영체제가 아니더라도 호환성의 문제가 없다.  

  *  실제 코드가 프로그램에서 노출되지 않기 때문에 보안상의 장점이 있다.  

* ### HTTP 요청과 응답  

  웹에서는 클라이언트(브라우저)와 서버간의 데이터를 주고 받기 위한 방식으로 http프로토콜을 사용한다.  
    
    * 프로토콜이란?  

          복수의 컴퓨터 사이나 중앙 컴퓨터와 단말기 사이에서 데이터 통신을 원활하게 하기 위해  
          필요한 신호 송신의 순서, 데이터의 표현법 등 통신 규약을 의미한다. 
          
  ![image url](https://github.com/12OneTwo12/Today-i-learned/blob/main/Java/httpreqandresp.png?raw=true)  
    
  브라우저가 서버의 페이지를 요청(request)하면 서버는 해당 파일을 찾은 다음 HTTP 응답(response)를 통해 클라이언트에 전송하는 방식으로 사용자의 요청을 처리한다.  
  서버로부터 전송된 페이지를 응답페이지라고 하며, 브라우저는 이 응답페이지를 해석(렌더링)하여 화면에 보여준다.  
  
* ### JSP
  
  JSP의 구조는 아래와 같다.  
    
  ![image url](https://github.com/12OneTwo12/Today-i-learned/blob/main/Java/jsphtmljavacode.png?raw=true)  
    
   클라이언트의 요청에 동적으로 작동하고, 응답은 HTML을 이용한다.  
   JSP는 웹서버와 통신시에 자동으로 Servlet으로 변환되고, MVC패턴에서 View로 이용된다.  
     
   Servlet은 java언어를 이용하여 문서를 작성하고, 출력객체 (PrintWriter)를 이용하여 html 코드를 삽입한다.  
   jsp는 서블릿과 반대로 html코드에 java언어를 삽입하여 동적 문서를 만들 수 있다.  

* ### JSP 태그 종류  

  | JSP Tag               | Code      | Characteristic              |
  |-----------------------|-----------|-----------------------------|
  | 스크립트릿(scriptlet)  | <% %>     | 모든 자바 코드 기술 가능.   |
  | 지시자(directive)     | <%@ %>    | 페이지 속성을 지정.         |
  | 선언자(declaration)   | <%! %>    | 변수나 메서드 선언 시 사용. |
  | 표현식(expression)    | <%= %>    | 결과 값을 출력할 때 사용.   |
  | 주석(comments)        | <%-- --%> | 코드 주석처리 시에 사용.    |
    
* ### JSP 아키텍처  

  ```.jsp```파일을 실행(요청)하면 웹 서버에서 우선 jsp파일을 java코드로 변환한다. 그 이후 그 파일을 컴파일하고 html로 응답한다.  
  
  만약 ```newfile.jsp```라는 파일을 만들었다고 가정하자.
  이게 실행이 될 때, 우선 jsp파일이 java파일로 바뀌게 된다. ```newfile_jsp.java```와 같이 바뀐다. 이는 톰캣 서버에서 알아서 변환해준다.  
  이후에는 이 java 파일이 컴퓨터가 알아먹을 수 있도록 컴파일러가 class 파일로 바꿔주어야 한다.  
  ```newfile_jsp.class```와 같은 형태로 바뀌게 된다.  
  이후 이 파일을 JVM이 실행을 하여, 나중에 브라우저로 응답을 해 주는 것이다.  
    
* ### SSR과 CSR  

  * #### SSR  

        SSR이란 서버사이드 렌더링의 약자로 서버로부터 완전하게 만들어진 html파일을 받아와 페이지 전체를 렌더링 하는 방식
          
  * #### CSR  

        CSR이란 클라이언트 사이드 렌더링의 약자로 사용자의 요청에 따라 필요한 부분만 응답 받아 렌더링 하는 방식
          
* ### Servlet    

  Servlet이란 자바를 기반으로 하는 웹페이지를 동적으로 만들어줄 수 있는 일종의 프로그램을 말한다.  
  좁게 보면 서블릿이란 위와 같은 기능을 하는 자바의 클래스를 뜻하고, 넓게보면 위 기능을 수행하기 위한 자바의 패키지를 뜻한다.  
    
  ![image url](https://github.com/12OneTwo12/Today-i-learned/blob/main/Java/servlet.png?raw=true)  
    
  동적 웹어플리케이션 컴포넌트이고 순수 자바코드로 이루어져있다.  
  클라이언트의 요청에 동적으로 작동하고, 응답은 html을 이용한다.  
  MVC패턴에서 Controller로 이용된다.  
       
  * #### Servlet 구별 방법  

    * URL-Mapping  

      어노테이션 이용하여 클래스 선언부 바로 위에 작성해준다.  
      ```java
      @WebServlet("/HelloWorld")
      public class BasicServlet extends HttpServlet {...}
      ```  
        
    * web.xml 설정파일 수정  

      말그대로 ```web.xml```설정파일을 수정해준다.  
      ```html
      <servlet>
        <servlet-name>basic</servlet-name>
        <servlet-class>com.simple.servlet.BasicServlet</servlet-class>
      </servlet>

      <servlet-mapping>
        <servlet-name>basic</servlet-name>
        <url-pattern>/peach</url-pattern>
      </servlet-mapping>
      ```
  
* ### JSP 내장 객체   

  개발자가 JSP 파일 내에 객체를 생성하지 않고 바로 사용할 수 있는 객체가 내장 객체이다.  
  JSP에서 제공되는 내장객체는 JSP 컨테이너에 의해 서블릿으로 변환될 때 자동으로 객체가 생성된다.  
    
  * ### JSP 내장 객체 종류  

    |    | 종류        | 클래스                                 |
    |----|-------------|----------------------------------------|
    | 1. | request     | javax.servlet.http.HttpServletRequest  |
    | 2. | response    | javax.servlet.http.HttpServletResponse |
    | 3. | out         | javax.servlet.jsp.JspWriter            |
    | 4. | session     | javax.servlet.http.HttpSession         |
    | 5. | application | javax.servlet.ServletContext           |
    | 6. | pageContext | javax.servlet.jsp.PageContext          |
    | 7. | page        | javax.servlet.jsp.HttpJspPage          |
    | 8. | config      | javax.servlet.ServletConfig            |
    | 9. | exception   | java.lang.Throwable                    |
      
  * ###  request 객체  

    웹 브라우저를 통해 서버에 어떤 정보를 요청하는 것을 request라고 한다.  
    이러한 요청 정보가 담기고 관리되는 곳이 request객체이다.  
    request객체는 이러한 요청 정보가 담기고 관리되는 곳이고, 서버와 관련된 정보 읽기 기능,   
    클라이언트가 전송한 요청 파라미터 읽기 기능, 클라이언트가 전송한 쿠키 읽기 기능 등을 제공하고 있다.  
      
      * #### request 객체 관련 주요 메서드  

        | 메서드                   | 기능                                                                            |
        |--------------------------|---------------------------------------------------------------------------------|
        | getContextPath()         | String - 웹 어플리케이션의 컨텍스트 루트의 경로를 얻습니다.                     |
        | getMethod()              | String - 웹 브라우저가 정보를 전송할 때 사용한 요청 방식을 구합니다.(get, post) |
        | getServerName()          | String - 연결할 때 사용한 서버 이름을 구합니다.                                 |
        | getServerPort()          | int - 서버가 실행중인 포트 번호를 구합니다.                                     |
        | getRequestURL()          | String - 요청 URL을 얻습니다.                                                   |
        | getRequestURI()          | String - 요청 URI를 얻습니다.                                                   |
        | getRemoteAddr()          | String - 웹 서버에 연결한 클라이언트의 IP주소를 구합니다.                       |
        | getProtocol()            | String - 해당 프로토콜을 얻습니다                                               |
        | getParameter(name)       | 이름이 name인 파라미터 값을 구합니다. 존재하지 않을 경우 null을 반환합니다.     |
        | getParameterValues(name) | 이름이 name인 모든 파라미터 값들을 배열로 구합니다.                             |
          
       
