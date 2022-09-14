# Spring   
  
  #### [ 2022-09-14 ]  
  
  ## 목차  
  * #### [[ Connectionless Protocol ]](#connectionless-protocol)  
  * #### [[ Session ]](#session)  
  * #### [[ 인터셉터(Intercepter) ]](#인터셉터intercepter)  
      
---------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### Connectionless Protocol   

  Connectionless이란 비연결성을 의미하는데,  
  비연결성은 클라이언트와 서버가 한 번 연결을 맺은 후, 클라이언트 요청에 대해 서버가 응답을 마치면 맺었던 연결을 끊어 버리는 성질을 말한다.  
    
  웹 서비스는 HTTP 프로토콜을 기반으로 하는데, 요청에 대한 응답 후 관계를 끊는다.    
  즉, 인증되지 않은 사용자는 모든 페이지에서 인증 과정을 거쳐야 한다.  
    
  좀 더 쉽게 이해하자면, 웹사이트에 접속 했었을 때 로그인을 한번 했다고 해도 별도의 처리를 하지 않는다면,  
  페이지를 이동할때마다 로그인을 해줘야 한다는 것이다.  
    
  사용자 입장에서는 굉장히 굉장히 불편할 것이다.  
  이런 불편함 때문에 지속적인 인증 수단으로 저번에 한번 살펴본 세션과 쿠키를 사용 한다.  
    
* ### Session  

  세션이 무엇인지는 저번에 알아봤으니 혹시 다시 보고 싶다면 [ JSP 객체, Cookie 및 Session ](https://github.com/12OneTwo12/Today-i-learned/blob/main/Java/readme13.md)이 곳을 다시 봐보길 바라며  
  이번엔 스프링에서 세션을 사용하는 방법을 알아보겠다.  
    
  나는 사실 프로젝트를 진행하면서 이미 세션을 어느정도 사용해 보았다.  
  생각보다 굉장히 단순 했는데,  
  사용하고자 할때 파라미터로 세션을 넣어주거나 ```request``` 객체를 파라미터로 넣어 ```request```에서 session값을 주거나 가져올 수 있다.  
    
  **예시**
  ```java
  public String updatePage(HttpServletRequest request) {…}
  public String MyPage(HttpSession session) {…}
  ```
    
  * #### 세션의 주요 메서드  
  
    | 세션 메소드              | 기능                               |
    |--------------------------|------------------------------------|
    | getId()                  | 세션 ID를 반환한다.                |
    | setAttribute()           | 세션 객체에 속성을 저장한다.        |
    | getAttribute()           | 세션 객체에 저장된 속성을 반환한다. |
    | removeAttribute()        | 세션 객체에 저장된 속성을 제거한다. |
    | setMaxInactiveInterval() | 세션 객체의 유지시간을 설정한다.    |
    | getMaxInactiveInterval() | 세션 객체의 유지시간을 반환한다.    |
    | invalidate()             | 세션 객체의 모든 정보를 삭제한다.   |


  그렇다면 여기서, 나는 실제 활용할때 이렇게 사용을 했었다.  
  유저가 로그인 했을때만 들어 갈 수 있게 만들 페이지들에서 세션값을 확인하여 세션값이 없다면 홈페이지로 ```redirect``` 시키는 방법을 사용했다.  
  가장 최근 내가 진행 했던 프로젝트의 코드이다.  
    
  **예시**
  ```java
  @RequestMapping("/register")
	public String register(HttpSession session, RedirectAttributes RA) {
		ManagerVO checkSession = (ManagerVO) session.getAttribute("sessionVO");

		if (checkSession == null) {
			RA.addFlashAttribute("msg", "관리자 로그인이 필요합니다");
			return "redirect:/library/index";
		} else {
			return "manager/register";
		}

	}
  ```  
    
  이렇게 세션 값을 확인하여 세션 값이 없다면 처음 화면으로 redirect시키는 방법을 필요한 모든 곳에 적어주었는데,  
  다음 내가 이야기할 ```인터셉터(Intercepter)``` 라는 것을 알게 되고 정말 참 유용하겠다 라는 생각이 들 수 밖에 없었다.  
    
* ### 인터셉터(Intercepter)  

  인터셉터란, 컨트롤러(Controller)의 '핸들러(Handler)'를 호출하기 전과 후에 요청과 응답을 참조하거나 가공할수 있는 일종의 필터이다.  
  단어 그대로 해석하자면 낚아채다라는 의미인데, 내가 위에서 사용했던 방법과 비슷하다고 생각하면 될거같은데, 더 나은 방법이라고 볼 수 있다.  
    
  사용자 요청에 의해 서버에 들어온 Request 객체를 컨트롤러의 핸들러(사용자가 요청한 url에 따라 실행되어야 할 메서드, 이하 핸들러)로  
  도달하기전에 낚아채서 개발자가 원하는 추가적인 작업을 한 후 핸들러로 보낼수 있도록 해주는것이 인터셉터이다.  
    
  개발자는 특정 Controller의 핸들러가 실행되기 전이나 후에 추가적인 작업(로그인체크, 권한 체크 등)을 원할때 Interceptor를 사용한다.  
    
  * #### 인터셉터 메서드  

    - #### preHandle()  

      ```
      - 컨트롤러가 호출되기 전에 실행됨
      - 리턴값이 boolean이다. 리턴이 true 일경우 preHandle() 실행후 핸들러에 접근한다.   
      - false일경우 작업을 중단하기 때문에 컨트롤러와 남은 인터셉터가 실행되지않는다.  
      - 가장 많이 사용된다.
      ```
        
    - #### postHandle()  

      ```
      - 핸들러가 실행되고 난 후 View가 생성되기 이전에 호출된다.
      - ModelAndView 타입의 정보가 인자값으로 받는다. 
      - 따라서 Controller에서 View 정보를 전달하기 위해 작업한 Model 객체의 정보를 참조하거나 조작할수 있다.  
      - preHandle() 에서 리턴값이 fasle인경우 실행되지 않는다.
      ```
        
    - #### afterCompletion()  

      ```
      - 모든 View에서 최종 결과를 생성하는 일을 포함한 모든 작업이 완료된 후에 실행된다.
      - 요청 처리중에 사용한 리소스를 반환해주기 적당한 메서드 이다.
      - preHandle() 에서 리턴값이 false인경우 실행되지 않는다.
      ```
  
  * #### 구현 방법   

    스프링에서 제공하는 ```HandlerInterceptor``` 인터페이스를 상속 받아 사용한다.  
      
    **인터셉터 클래스 선언**
    ```java
    public class UserAuthHandler implements HandlerInterceptor {
        @Override
        public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
            //내용작성
            HttpSession session = request.getSession();
		        String userId = (String)session.getAttribute("userId");
            
            if(userId == null) { // 조건
                response.sendRedirect("/user/login"); // 원하는 페이지로 보내버림
                return false; //컨트롤러를 실행하지 않음
            } else { 
                return true; //컨트롤러를 실행함
            }
        }
    }
    ```
  
    스프링 설정파일에서는 addInterceptors메서드를 오버라이드 하고 내용을 작성한다.  
  
    **스프링 설정파일**
    ```java
    @Configuration // 스프링 설정파일로 사용
    public class WebConfig implements WebMvcConfigurer {

      // 인터셉터 빈 등록
      @Bean
      public UserAuthHandler userAuthHandler() {
        return new UserAuthHandler();
      }

      //핸들러적용
      @Override
      public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(userAuthHandler())
            .addPathPatterns("/main")
            .addPathPatterns("/user/**") // 인터셉터 경로 추가
            .addPathPatterns("/practice1/**")
            .excludePathPatterns("/user/login") //인터셉터 경로 제외
            .excludePathPatterns("/user/join");

        // 다른역할을 하는 인터셉터가 있다면 추가
        // registry.addInterceptor(인터셉터 빈);
      }

    }
    ```  
      
    이렇게 하면 내가 그전에 프로젝트에서 하나하나 컨트롤러단에 세션을 넣어줄 필요 없이 간단하게 해결이 가능 했던 것이다.  
    나중에 리펙토링해야겠다 하고 생각이 들었다.  
    
 
