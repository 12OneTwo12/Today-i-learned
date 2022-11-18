# Web Application    
  
  #### [ 2022-11-18 ]  
  
  ## 목차  
  * #### [[ Web Server ]](#web-server)  
  * #### [[ WAS(Web Application Server) ]](#wasweb-application-server)  
  * #### [[ WAS만 써도 되나? ]](#was만-써도-되나)  
  * #### [[ Apache Tomcat ]](#apache-tomcat)  
      
---------------------------------------------------------------------------------------------------------------------------------------------------
  
출처 : https://codechasseur.tistory.com/25  

서버 개발에 있어서 가장 기초적인 개념인 '웹 서버'와 'WAS(Web Application Servier)'의 차이점을 다뤄보려고 한다.  

* ### Web Server  
  
  사전적 정의  
    
  ```
  "웹 브라우저 클라이언트로부터 HTTP 요청을 받아들이고 HTML 문서와 같은 웹 페이지를 반환하는 컴퓨터 프로그램"
  ```
    
  웹 서버란 클라이언트(사용자)가 웹 브라우저에서 어떠한 페이지 요청을 하면 웹 서버에서 그 요청을 받아 정적 컨텐츠를 제공하는 서버이다.    
  여기서 정적 컨텐츠란 단순 HTML 문서, CSS, javascript, 이미지, 파일 등 즉시 응답가능한 컨텐츠이다.   
  그렇다면 웹 서버는 정적 컨텐츠만 제공하느냐? 그것은 아니다.   
  웹 서버가 동적 컨텐츠를 요청 받으면 WAS에게 해당 요청을 넘겨주고, WAS에서 처리한 결과를 클라이언트(사용자)에게 전달해주는 역할도 한다.  
    
  ![image url](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FpxLJe%2FbtqBTL7f4OE%2FO54n7FkOZUKAItvIPUpwGK%2Fimg.png)  
  
  웹서버의 개념은 크게 두 가지 측면으로 요약할 수 있다.

  - 소프트웨어 측면 
  
      ```
      웹서버는 HTTP와 같은 프로토콜을 통해 넘어온 클라이언트의 요청에 HTML과 같은 웹 페이지로 응답하는 소프트웨어다. 
      웹 서버는 주소 HTTP 프로토콜을 사용하여 클라이언트의 요청을 처리 및 응답한다.  
      대표적인 예로 nginx, apache가 있다. 
      이 소프트웨어들은 호스팅하고 있는 서버(컴퓨터)에서 웹페이지의 컴포넌트 파일들(html, image, css, javacript 등)에 어떻게 접근하는지를 관리한다.  
      ```          
                   
  - 하드웨어 측면 
      
      ```
      nginx나 apache와 같은 소프트웨어가 실제로 동작하고,   
      웹 페이지의 데이터를 실제로 저장하는 서버(컴퓨터)를 의미한다.   
      웹 서버는 인터넷에 연결되어 IP주소로 식별되고, 이 주소를 통해 클라이언트와 연결된다.  
      ```
      
* ### WAS(Web Application Server)  

  사전적 정의  
    
  ```
  "인터넷 상에서 HTTP 프로토콜을 통해 사용자 컴퓨터나 장치에 애플리케이션을 수행해주는 미들웨어로서, 
  주로 동적 서버 컨텐츠를 수행하는 것으로 웹 서버와 구별이 되며, 주로 데이터베이스 서버와 같이 수행"
  ```
    
  WAS는 웹 서버와 웹 컨테이너가 합쳐진 형태로서, 웹 서버 단독으로는 처리할 수 없는 데이터베이스의 조회나 다양한 로직 처리가 필요한 동적 컨텐츠를 제공한다.   
  덕분에 사용자의 다양한 요구에 맞춰 웹 서비스를 제공할 수 있다.  
  
  - 대표적인 WAS 종류 : Tomcat  

  ![image url](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FpAqij%2FbtqBS7bDSam%2FGJDanZaV3kMKPqfXtlEqL0%2Fimg.png)  
    
* ### Web Service Architecture  

  웹 어플리케이션은 요청 처리 방식에 따라 다양한 구조를 가질 수 있다.  
    
  - 클라이언트(사용자)  →  Web Server  →  DB  
  - 클라이언트(사용자)  →  WAS → DB  
  - 클라이언트(사용자)  →  Web Server  →  WAS  →  DB  

  ![image url](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcjdthZ%2FbtqBUUpmzjp%2FFqUA0NUhwetKmpjurXQwf1%2Fimg.png)  
    
  * #### 클라이언트(사용자)  →  Web Server  →  WAS  →  DB 구조의 동작 과정  

    ```
    1. Web Server는 웹 브라우저 클라이언트(사용자)로부터 HTTP 요청을 받는다.
    2. Web Server는 클라이언트의 요청(Request)을 WAS에 보낸다.
    3. WAS는 관련된 Servlet을 메모리에 올린다.
    4. WAS는 web.xml을 참조하여 해당 Servlet에 대한 Thread를 생성한다. (Thread Pool 이용)
    5. HttpServletRequest와 HttpServletResponse 객체를 생성하여 Servlet에 전달한다.
    5-1. Thread는 Servlet의 service() 메서드를 호출한다.
    5-2. service() 메서드는 요청에 맞게 doGet() 또는 doPost() 메서드를 호출한다.
    6. protected doGet(HttpServletRequest request, HttpServletResponse response)
    7. doGet() 또는 doPost() 메서드는 인자에 맞게 생성된 적절한 동적 페이지를 Response 객체에 담아 WAS에 전달한다.
    8. WAS는 Response 객체를 HttpResponse 형태로 바꾸어 Web Server에 전달한다.
    9. 생성된 Thread를 종료하고, HttpServletRequest와 HttpServletResponse 객체를 제거한다.
    ```
      
* ### WAS만 써도 되나?    

  답은 '아니다' 이다.  
      
  WAS는 DB 조회 및 다양한 로직을 처리하는 데 집중해야 한다.   
  따라서 단순한 정적 컨텐츠는 웹 서버에게 맡기며 기능을 분리시켜 서버 부하를 방지한다.   
  만약 WAS가 정적 컨텐츠 요청까지 처리하면, 부하가 커지고 동적 컨텐츠 처리가 지연되면서   
  수행 속도가 느려지고 이로 인해 페이지 노출 시간이 늘어나는 문제가 발생하여 효율성이 크게 떨어진다.  
  
  웹 서버를 WAS 앞에 두고 필요한 WAS들을 Web Server에 플러그인 형태로 설정하면 더욱 효율적인 분산 처리가 가능하다.  
    
* ### Apache Tomcat  

  앞에서 언급한대로 정적 컨텐츠를 처리하는 웹 서버에는 Apache가 있고,   
  동적 컨텐츠를 처리하는 WAS서버는 Tomcat이 있는데 Tomcat은 Apache Tomcat이라는 이름으로 많이 사용되어 혼란스러울 것이다.   
  붙여서 쓰는 이유는 2008년에 릴리즈 된 Tomcat 5.5 버전부터 정적 컨텐츠를 처리하는 기능이 추가되었는데,   
  이 기능이 순수 Apache를 사용하는 것에 비해 성능적 차이가 전혀 없으며 Tomcat이 Apache의 기능을 포함하고 있기 때문에 Apache Tomcat이라고 부르고 있다.  
    
  
