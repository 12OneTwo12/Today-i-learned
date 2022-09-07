# Spring Boot  
    
  #### [ 2022-09-06 ]  
  
  ## 목차  
  * #### [[ 유효성검사(Valiadation)이란? ]](#유효성검사valiadation이란)  
  * #### [[ 설정 방법 ]](#설정-방법)  
  * #### [[ 적용 방법 ]](#적용-방법)  
  * #### [[ 데이터를 받을 때 ]](#데이터를-받을-때)  
      
-----------------------------------------------------------------------------------------------------------------------------------------

* ### 유효성검사(Valiadation)이란?  

  ```
  유효성 검사란, 요청한 데이터가 어떤 조건에 충족하는지 확인하는 작업이다.
  ```
  
  validation이란 어떤 데이터의 값이 유효한지, 타당한지 확인하는 것을 의미한다.  
    
  예를 들어 웹 페이지에서 회원가입을 진행 할때, 생년월일 , 연락처, 이름 등 정보를 입력하는 란에,  
  아무런 값도 입력하지 않거나, 형식에 맞지 않는 값으로 입력됐을 때 그대로 값이 활용 되면 안될것이다.  
    
  따라서, 잘못된 데이터 요청이 들어 올 경우 유효성 검사를 통하여 처리 해주어야한다.  
    
  예를 들어 UI에서 javascript로 "이메일 양식이 일치하지 않는다"고 출력하는 것은 UX 측면에서 사용자에게 편의를 주기 위함 이다.  
  보안적인 측면에서 유효성 검사는, UI, 서버에서 둘 다 수행되어야 한다.  
    
  스프링과 스프링 부트 모두 적용 가능한데, 스프링 부트에서는 비교적 간단하게 유효성 검사를 할 수 있다.  
    
* ### 설정 방법  

  일일히 수작업으로 형식을 정해줘 Java코드로 처리할 수 도 있겠지만 그것은 너무,  
  시간과 노력을 할애해야하는 일 일것이다.  
  스프링 부트 2.3버전 이후로 부터는 ```Spring Boot Starter Validation```라는 라이브러리로 간단하게 이를 처리할 수 있다.  
    
  **build.gradle**
  ```gradle
  dependencies{
    // 생략
	  implementation 'org.springframework.boot:spring-boot-starter-validation'
  }
  ```
    
* ### 적용 방법   

  ```Spring Boot Starter Validation```라이브러리에선 간단하게 어노테이션을 이용하여 적용시킬 수 있다.  
    
  아래 어노테이션은 VO(DTO) 클래스의 멤버변수에 적용해서 사용한다.  
  Import는 ```javax.validation```패키지를 사용한다.  
    
  **어노테이션**
  | 어노테이션 | 설명                                      | 적용대상                                 |
  |------------|-------------------------------------------|------------------------------------------|
  | @NotNull   | null을 제외한다                           | String, Long, Integer등등 전부 검사 가능 |
  | @NotBlank  | null, 공백을 허용하지 않음                | String만 적용가능                        |
  | @NotEmpty  | null을 허용하지 않음                      | String, Map, Array에 검사 가능           |
  | @Pattern   | 정규표현식에 맞는 문자열을 정의할 수 있다 | String만 적용가능                        |
  | @Email     | email형식이어야 한다                      | 공백을 통과                              |
    
  **ex**
  ```java
  public class ValidVO {

    // 유효성 검사를 진행할때는 기본타입이 null값을 가질 수 없기 때문에 wrapper형으로 선언해준다.

    @NotBlank(message = "이름은 필수 입니다")
    private String name;

    @NotNull(message = "급여는 필수 입니다")
    private Integer salary;

    @Pattern(regexp = "[0-9]{3}-[0-9]{3,4}-[0-9]{4}", message = "000-0000-0000형식 이어야 합니다") // 자바의 정규 표현식
    private String phone;

    @NotBlank
    @Email(message = "이메일 형식이어야 합니다") // 공백은 통과
    private String email;

  }
  ```
    
  외에 다른 기능의 어노테이션들도 많기 때문에 필요할 때 찾아볼 것.  
    
* ### 데이터를 받을 때  

  ```@Valid```와 ```Errors```객체를 사용하여 유효성 검사를 진행 한다.  
    
  ```java
  @PostMapping("/validForm")
	public String validForm(@Valid ValidVO vo, Errors errors) {
		// @Valid가 붙은 유효성검사를 진행, 유효성 검사에 실패한 멤버변수는 errors바인딩
		
		if(errors.hasErrors()) {
			System.out.println("유효성 검사 실패");
			System.out.println("유효성검사 실패 개수 : "+errors.getFieldErrorCount());
		}
    return "";
	}
  ```

  * #### Errors의 메소드  

    | 설명                | 표현식                                      | 클래스명    |
    |---------------------|---------------------------------------------|-------------|
    | hasErrors()         | 바인딩된 에러가 있다면 true                 | Errors      |
    | getFieldErrors()    | 유효성 검사에 실패한 필드 목록확인          | Errors      |
    | getField()          | 유효성 검사에 실패한 변수명확인             | FiledErrors |
    | getDefaultMessage() | 유효성 검사에 실패한 변수의 에러메시지 확인 | FiledErrors |
    | isBindingFailure()  | 유효성 검사에 바인딩이 안된경우 false       | FiledErrors |
      
