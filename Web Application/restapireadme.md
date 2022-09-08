# REST API  
  
  #### [ 2022-09-08 ]  
  
  ## 목차  
  * #### [[ REST란 ]](#rest란)  
  * #### [[ REST API란 ]](#rest-api란)  
      
---------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### REST란    
  
  REST API란 REST를 기반으로 만들어진 API를 의미한다. REST API를 알기 위해 REST부터 알아보도록 보자.  
    
  REST란, REST(Representational State Transfer)의 약자로 **자원을 이름으로 구분하여 해당 자원의 상태를 주고받는 모든 것**을 의미한다.  
    
  - 웹에 존재하는 모든 자원(이미지,동영상,DB 자원)에 고유한 URI를 부여해 활용하는 것으로,   
    자원을 정의하고 자원에 대한 주소를 지정하는 방법론을 의미한다고 한다.  
      
  - HTTP URI(Uniform Resource Identifier)를 통해 자원(Resource)을 명시하고,  
    HTTP Method(POST, GET, PUT, DELETE, PATCH 등)를 통해, 해당 자원(URI)에 대한 CRUD Operation을 적용하는 것을 의미한다.  
      
  - 이런 REST 형식을 잘 따른 시스템을 RESTful 이라고 부른다.  
    
  **CRUD Operation이란**
    
    CRUD는 대부분의 컴퓨터 소프트웨어가 가지는 기본적인 데이터 처리 기능인   
    Create(생성), Read(읽기), Update(갱신), Delete(삭제)를 묶어서 일컫는 말이다.  
    
    ```
    Create : 데이터 생성(POST)
    Read : 데이터 조회(GET)
    Update : 데이터 수정(PUT, PATCH)
    Delete : 데이터 삭제(DELETE)
    ```
      
  * #### REST 구성 요소  

    - 자원(Resource) : HTTP URI

          모든 자원은 고유한 ID를 가지고 ID는 서버에 존재하고 클라이언트는 각 자원의 상태를 조작하기 위해 요청을 보낸다. 
          HTTP에서 이러한 자원을 구별하는 ID는 "id/1" 같은 HTTP URI 이다.  
          
    - 자원에 대한 행위(Verb) : HTTP Method  

          클라이언트는 URI를 이용해 자원을 지정하고 자원을 조작하기 위해 Method를 사용한다.   
          HTTP 프로토콜에서는 GET, POST, PUT, DELETE같은 Method를 제공한다.  
            
    - 자원에 대한 행위의 내용 (Representations) : HTTP Message Pay Load  

          클라이언트가 서버로 요청을 보냈을 때 서버가 응답으로 보내주는 자원의 상태를 Representation이라고 한다.   
          REST에서 하나의 자원은 JSON, XML, TEXT, RSS 등 여러형태의 Representation으로 나타낼 수 있다.  

  * #### REST의 특징  

    - 클라이언트 / 서버 구조(Client-Server)   
    
          자원이 있는 Server, 자원을 요청하는 Client의 구조를 가진다.  

    - 무상태(Stateless)   
    
          HTTP는 Stateless프로토콜 이므로 REST 역시 무상태성을 가진다. 클라이언트의 Context를 서버에 저장하지 않는다.  

    - 캐시 처리 가능(Cachealble)  
    
          웹 표준 HTTP 프로토콜을 그대로 사용하므로, 웹에서 사용하는 기존의 인프라를 그대로 활용 가능하다.  

    - 계층화   
    
          API 서버는 순수 비즈니스 로직을 수행하고 그 앞단에 
          사용자 인증, 암호화, 로드밸런싱 등을 하는 계층을 추가하여 구조상의 유연성을 줄 수 있다.  

    - 인터페이스 일관성(Uniform Interface)   
    
          URI로 지정한 자원에 대한 조작을 통일되고 한정적인 인터페이스로 수행한다. 
          HTTP 표준에만 따른다면 모든 플랫폼에 사용이 가능하다.  

    - 자체 표현 구조   
    
          동사(Method) + 명사(URI)로 이루어져있으며 어떤 메소드에 무슨 행위를 하는지 알 수 있으며
          REST API 자체가 매우 쉬워서 API 메세지 자체만 보고도 API를 이해할 수 있다.  

  * #### REST의 장단점  

    **장점**
      
    - 쉬운 사용   
    
          HTTP 프로토콜 인프라를 그대로 사용하므로 별도의 인프라를 구축할 필요가 없다.  

    - 클라이언트-서버 역할의 명확한 분리   
    
          클라이언트는 REST API를 통해 서버와 정보를 주고받는다. 
          REST의 특징인 Stateless에 따라 서버는 클라이언트의 Context를 유지할 필요가 없다.  

    - 특정 데이터 표현을 사용가능    
    
          REST API는 헤더 부분에 URI 처리 메소드를 명시하고 필요한 실제 데이터를 'Body'에 표현할 수 있도록 분리시켰다. 
          JSON, XML 등 원하는 Representation 언어로 사용 가능하다.  

    **단점**
    
    - 메소드의 한계  

          REST는 HTTP 메소드를 이용하여 URI를 표현한다. 
          이러한 표현은 쉬운 사용이 가능하다는 장점이 있지만 반대로 메소드 형태가 제한적인 단점이 있다.  
            
    - 표준이 없음  

          REST는 설계 가이드 일 뿐이지 표준이 아니다. 명확한 표준이 없다.  
            
* ### REST API란    

  위에서 언급했듯 RESPT API란 REST의 원리를 따르는 API를 의미한다.  
  여기서 API(Application Programming Interface)란, 쉽게 말해   
  **데이터와 기능의 집합을 제공하여 컴퓨터 프로그램간 상호작용을 촉진하며, 서로 정보를 교환가능 하도록 하는 것**이다.  
    
  REST API에 대해 공부하던 나는 이렇게 이해했다.   
  나에게 무엇인가 값을 받으면 그것을 가공해 무엇인가 돌려줄 수 있는 
  혹은 요청이 들어왔을때 내가 가지고 있는 기능 혹은 데이터를 넘겨 줄 수 있는 창고(REST Server)를 만들어 놓고,  
  정해진 URI를 통해 요청하면 가공된 값 혹은 기능 또는 데이터를 넘겨주는 그러한 로직들이 서버 단위로 이러나는 것을 REST API라고 이해했다.  
  물론 이게 정확하지 않을 수 있어 더 공부해야하지만 대충 이런식으로 감을 잡았다.  
    
  **REST API의 정의**  
    
    - REST 기반으로 서비스 API를 구현한 것  
    - 최근 OpenAPI(누구나 사용할 수 있도록 공개된 API: 구글 맵, 공공 데이터 등),   
      마이크로 서비스(하나의 큰 애플리케이션을 여러 개의 작은 애플리케이션으로 쪼개어 변경과 조합이 가능하도록 만든 아키텍처)   
      등을 제공하는 업체 대부분은 REST API를 제공한다.  

  * #### REST API의 특징  

    - 사내 시스템들도 REST 기반으로 시스템을 분산해 확장성과 재사용성을 높여 유지보수 및 운용을 편리하게 할 수 있다.

    - REST는 HTTP 표준을 기반으로 구현하므로, HTTP를 지원하는 프로그램 언어로 클라이언트, 서버를 구현할 수 있다.  

    - 즉, REST API를 제작하면 델파이 클라이언트 뿐 아니라, 자바, C#, 웹 등을 이용해 클라이언트를 제작할 수 있다.  

  이러한 REST API로 주고 받아지는 값들은 코드 혹은 클래스 단위로 넘어가고 넘어 오는 것이 아닌 위에서 언급한,  
  JSON, XML, TEXT, RSS파일들로 주고 받아 지는데, 이를 코드로 다시 이용하기 위해 JSON을 자신의 프로그래밍 언어에 맞게 정제하여 사용한다면,  
  사실상 다른 프로그래밍 언어들로도 값을 주고 받을 수 있지 않나 하는 생각이 들었다.  
  
* ### 스프링 부트에서의 REST API  

  스프링 프레임 워크에서의 REST API확용은 비교적 간단 했다.  
  어노테이션을 활용하면 굉장히 간단하게 끝낼 수 있었는데,  
    
  | 어노테이션      | 기능                                                                                              |
  |-----------------|---------------------------------------------------------------------------------------------------|
  | @RestController | Controller가 rest방식임을 명시                                                                    |
  | @ResponseBody   | 뷰리졸버로 전달하는게 아니라 데이터를 요청한 화면으로 전 달함을 명시 Restcontroller에는 이미 포함 |
  | @PathVariable   | URL경로에 파라미터를 줄 수도 있으며, URL경로의 있는 값을 추출할 때 사용                           |
  | @RequestBody    | JSON데이터를 자동으로 바인딩 처리                                                                 |
    
  ```java
  @RestController 
  public class RestBasicController {
    // Jackson-databind 모듈이 자동으로 형변환을 시켜서 반환
    @GetMapping(value = "/요청받을 주소", produces = "application/json")
    public String text() {
      return "전달할 값";
    }
  }
  ```
  
  REST API의 데이터형식 제어  
    
  소비자(consumers) vs 제공자(produces)  
    
  - consumers – 보내는 데이터는 반드시 이 타입으로 보내라  
  - Produces – 제공하는 데이터는 이 타입으로 줄게  
    
  예시  
  ```java
  consumes = "application/json＂ produces = "application/json"
  ```

  **예시**
  ```java
	// 요청 경로 test
	// 요청 방식 post
	// 화면에서 보내는 데이터 키 값 bno, name, title
	// 서버에서 반환하는 데이터는 map 형식
  @CrossOrigin("*") // Cross-Origin Resource Sharing - CORS : 제약 - 같은 서버에서는 제약이 x, 서버가 다른경우 기본적으로 거절 crossOrigin을 통해 허용
	@PostMapping("/test")
	public Map<String, Object> test(@RequestBody BoardVO vo){
		
		Map<String, Object> map = new HashMap<>();
		map.put("hi", "hello world");
		
		return map;
	}
  ```

  만약 위 API를 모두에서 허용하고 서버에 올린다면 나는 정말 별건 없지만 REST server를 구축한 것이된다.  
  누군가 ```/test```라는 주소로 알맞은 형식에 맞게 JSON으로 값을 보낸다면 ```hi```라는 키 값을 가진 문자열 ```"hello world"```를 가지게 될테니 말이다.  
  이러한 로직을 대충 이하하고 나니, 내가 다른 API로 요청을 보낼때 어떤 과정을 거치는구나를 감 잡을 수 있게 됐다.  
  그곳에 알맞은 형식으로 된 값을 보내고, 원하는 값을 가져온다는 과정을 말이다.  
