# Spring   
  
  #### [ 2022-08-25 ]  
  
  ## 목차  
  * #### [[ Controller의 화면처리 ]](#controller의-화면처리)  
  * #### [[ 요청 파라미터(request) ]](#요청-파라미터request)  
  * #### [[ Model전달자 ]](#model전달자)  
  * #### [[ Service, DAO 계층 구조 ]](#service-dao-계층-구조)  
  * #### [[ 서비스 계층구현 방법 ]](#서비스-계층구현-방법)  
      
---------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### Controller의 화면처리  
  
  * #### void 메서드의 페이지이동  
  
    들어오는 경로 그대로 화면으로 연결을 해준다.  
      
    ```java
    @RequestMapping(value="/req_ex01")
    public void req_ex01() {
    }
    ```
    
  * #### String 메서드의 페이지이동  

    String형 메서드의 경우 return 경로로의 jsp파일로 이동된다.  
      
    ```java
    @RequestMapping(value="/req_ex01")
    public String req_ex01() {
      return "request/req_ex01";
    }
    ```
  
  * #### redirect 페이지이동  

    ```redirect:/``` 리다이렉트 키워드를 이용하면 다시 브라우저로 요청한다.  
    즉 다시 Controller로 요청을 보낸다.  
      
    ```java
    @RequestMapping(value="/요청")
    public String req_ex01() {
      return “redirect:/req_ex01";
    }
    ```
  
* ### 요청 파라미터(request)  

  메서드에서 파라미터 값을 처리하는 3가지 방법  
    
  스프링에서는 메서드 안에서 사용할 기능을 매개변수로 선언해서 사용한다.  
    
  * #### 전통적 방식의 처리  

    ```java
    메서드(HttpServletRequest request)
    String name = request.getParameter(“name”)
    ```
    기존방식으로는 ```HttpServletRequest```타입으로 받아서 ```getParameter```메소드로 값을 받았다.  
    ```java
    @RequestMapping("/param")
    public String param(HttpServletRequest request) {...}
    ```
    같은 방법으로 하면 이런식으로 된다.  
    
  * #### 어노테이션으로 처리  

    ```java
    메서드(@RequestParam(＂name＂) String name)
    ```
    폼태그의 name값을 속성으로 받는다.  
    ```java
    @RequestMapping("/param")
    public String param(@RequestParam("id") String id) {...}
    ```
    ```Requestparam```은 선언된 파라미터가 필수로 들어가야하며 하나라도 빠지면 오류가 뜬다. 그러나 required = false로 하면 필수가 아니여도 진행 가능하다.
    해당 어노테이션의 추가 속성에는 아래 두 가지가 있다.  
      
    - required – 해당 파라미터가 필수가 아닌 경우 지정  
      
    - defaultValue - required지정시 기본값 을 지정  
      
    ```java
    @RequestParam(value=＂파라미터값", required = false, defaultValue = “기본값") 
    ```
    
  * #### 커맨드객체를 통한 처리  

    폼 태그의 값을 받아 처리할 수 있는 Class생성받는 방법이다.  
    변수명을 폼 태그의 이름들과 일치하게 생성하고, 이를 파라미터로 넣으면  VO객체에 동일한 setter가 있다면 자동으로 저장해준다.  
    가장 많이 사용되는 방법이다.  
    ```java
    @RequestMapping("/param")
    public String param(MemberVO vo) {...}
    ```

* ### Model전달자  

  방금까지 값을 가져오기 위한 역할을 하는 녀석들을 봤다면 이번 Model은 화면에 데이터를 전달하기 위한 객체이다.  
  이를 이용하는 방법에는 4가지가 있는데, 하나씩 살펴보도록 하자.  
    
  * #### Model 객체  

    Model타입을 메서드의 파라미터로 주입하게 되면 view로 전달하는 데이터를 담아서 보낼 수 있다.  
    ```request.setAttribute()```와 유사한 역할을 한다.  
      
    ```java
    @RequestMapping("/res_ex02")
    public String res_ex02(Model model) {
      model.addAttribute("key", "value");
      return "response/res_ex02";
    }
    ```
      
  * #### ModelAndView 객체  

    ModelAndView는 저번에도 한번 살펴봤다.  
    페이지와, 데이터를 동시 지정할 수 있는 녀석이다.  
      
    ```java
    @RequestMapping("/res_ex03")
    public ModelAndView res_ex03() {
      ModelAndView mv = new ModelAndView();
      mv.addObject("key", "value");
      mv.setViewName("response/res_ex03"); //뷰에대한 정보
      return mv;
    }
    ```
     
    Model과 ModelAndView의 차이는   
    Model은 뷰에 데이터만을 전달하기 위한 객체이고, ModelAndView는 데이터와 뷰의 이름을 함께 전달하는 객체라는 것이다.  
      
  * #### @ModelAttribute 어노테이션  

    전달받은 파라미터를 Model에 담아서 화면까지 전달하려 할 때 사용되는,   
    request + model이 합쳐진 모델 어트리뷰트 어노테이션이다.  
    ```@ModelAttribute```를 이용하면 커멘드 객체의 이름을 변경할 수 있고, 이렇게 변경된 이름은 뷰에서 커멘드 객체를 참조할 때 사용된다.  
      
    사용방법  
    ```java
    @ModelAttribute("받을 값") 사용할 변수
    ```
      
    ```java
    @RequestMapping("/res_ex04")
    public String res_ex04(@ModelAttribute("id") String id) {
      return "response/res_ex04";
    }
    ```
    
  * #### RedirectAttribute 객체  

    리다이렉트 이동시 파라미터 값을 전달하는 방법이다.  
    스프링은 기본적으로 forward형식인데 다시 컨트롤러를 태워서 나가고 싶을 때 ```redirect:/ 절대경로```방법으로 가게된다.  
    이때 ```addFlashAttribute()```를 사용하고 리다이렉트하게되면 데이터를 1회에 한해 사용이 가능하다.  
    보통 알림창을 띄우거나 할때 사용한다.  
      
    ```java
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(MemberVO vo, RedirectAttributes ra) {
      if(vo.getId().equals(vo.getPw())) { // 로그인 성공
        ra.addFlashAttribute("vo", vo); // 리다이렉트시 시에 1회 사용가능
        return "redirect:/response/res_redirect_ok";
      } else { // 로그인 실패
        return "response/res_redirect";
      }

    }
    ```
      
* ### Service, DAO 계층 구조   

  ![image url](https://github.com/12OneTwo12/Today-i-learned/blob/main/Web%20Application/servicedao.png?raw=true)  
    
* ### 서비스 계층구현 방법   

  서비스 계층 구현 방법에는 크게 3가지가 있다.  
    
  * #### new 연산자  
    
    new 연산자를 이용한 service객체 생성 및 참조 방법이다.
    기존에 계속해서 사용했던 방법이다.  
    ```java
    public String scoreForm(ScoreVO vo) {
		  ScoreServiceImpl service = new ScoreServiceImpl();
		  service.scoreRegist(vo);
		
		  return "redirect:/service/scoreResult";
	  }
    ```
      
  * #### 스프링 설정파일에서 빈으로 만들기  

    스프링 설정 파일을 이용한 서비스 객체 생성 및 의존 객체 자동 주입방법이다.  
    스프링 설정파일 ```xml```파일에   
      
    ```xml
    <beans:bean id="scoreService" class="com.simple.service.ScoreServiceImpl"/>
    ```
      
    설정을 넣어줘 빈으로 생성해주고 service를 사용하고자 하는 controller에 멤버변수로 서비스를 선언해주고 ```@Autowired```어노테이션으로 매치해준다.  
      
    ```java
    @Controller
    @RequestMapping("/service")
    public class ServiceController {

      // 멤버변수
      @Autowired 
      @Qualifier("scoreService")
      private ScoreService scoreService;
    }
    ```
    이렇게 되면 컨트롤러에서 서비스를 호출할때 필요할때 멤버변수를 호출하면 되는 것이다.  
    
  * #### 어노테이션을 이용하는 방법  

    어노테이션을 이용하는 방법인데, 어제 살펴봤을때 서비스에 달아주는 ```@Service```어노테이션을 봤었다.  
    이를 이용하는 방법인데,  
      
    ```java
    @Service("scoreService") // 컴포넌트 스캔을 이용해서 패키지를 읽게 만든다.
    public class ScoreServiceImpl implements ScoreService{...}
    ```
      
    ```@Service``` 어노테이션은 서비스 클래스에 달아주고,  
    마찬가지로 멤버변수에 ```@Autowired```어노테이션을 이용해 매치해준다.  
    물론 ```xml```파일에 컴포넌트 스캔을 이용해 서비스가 있는 패키지를 읽을 수 있게 설정 해줘야 한다.  
      
    ```xml
    <context:component-scan base-package="com.simple.Service"/>
    ```
