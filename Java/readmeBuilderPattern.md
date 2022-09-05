# Builder Pattern  
  
  #### [ 2022-09-05 ]  
  
  ## 목차  
  * #### [[ 빌더 패턴(Builder Pattern)이란? ]](#빌더-패턴builder-pattern이란)  
  * #### [[ 구현 방법 ]](#구현-방법)  
      
---------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### 빌더 패턴(Builder Pattern)이란?  

  빌더 패턴은 그전에 살펴본 싱글톤 패턴, 팩토리 패턴, 추상 팩토리 패턴과 마찬가지로,  
  생성과 관련된 디자인 패턴으로, 동일한 프로세스를 거쳐 다양한 구성의 인스턴스를 만드는 방법 중 하나이다.  
  
  빌더 패턴은 복잡한 객체를 생성하는 방법을 정의하는 클래스와 표현하는 방법을 정의하는 클래스를 별도로 분리하여,   
  서로 다른 표현이라도 이를 생성할 수 있는 동일한 절차를 제공하는 패턴이다.  
    
  생성 패턴은 인스턴스를 만드는 절차를 추상화하는 패턴이다.  
  생성 패턴에 속하는 패턴들은 객체를 생성, 합성하는 방법이나 객체의 표현 방법을 시스템과 분리해준다.  

  생성해야하는 객체가 Optional한 속성을 많이 가질 때 더 좋다.  
    
  빌더 패턴은 생성과 관련된 어떤 문제를 해결하려고 했을까?  
    
  객체를 생성할 때 생성자(Constructor)만 사용할 때 발생할 수 있는 문제를 개선하기 위해 고안됐다.  
  
  이전에 알아본 생성 패턴과 비교하자면, 팩토리 메소드 패턴이나 추상 팩토리 패턴에서는 생성해야하는 클래스에 대한 속성 값이 많을 때 아래와 같은 이슈들이 있다.  
  
  ```
  - 클라이언트 프로그램에서 팩토리 클래스를 호출할 때 Optional한 인자가 많아지면, 타입과 순서에 대한 관리가 어려워져 에러 발생 확률이 높아진다.
  
  - 경우에 따라 필요 없는 파라미터들에 대해서 팩토리 클래스에 일일이 NULL 값을 넘겨줘야한다.
  
  - 생성해야 하는 sub class가 무거워지고 복잡해짐에 따라 팩토리 클래스 또한 복잡해진다. 
  ```  
    
  빌더 패턴은 이러한 문제들을 해결하기 위해 별도의 Builder 클래스를 만들어 필수 값에 대해서는 생성자를 통해,   
  선택적인 값들에 대해서는 메소드를 통해 step-by-step으로 값을 입력받은 후에 build() 메소드를 통해 최종적으로 하나의 인스턴스를 return하는 방식이다.  
  3가지 이슈를 해결하려면 다음과 같은 요구사항을 만족하면 된다.  
    
  ```
  - 불필요한 생성자를 만들지 않고 객체를 만든다.
  - 데이터의 순서에 상관 없이 객체를 만들어 낸다.
  - 사용자가 봤을때 명시적이고 이해할 수 있어야 한다.
  ```  
    
  그렇기에 빌더 패턴이 가지는 장점들은 다음과 같다.  
    
  ```
  - 필요한 데이터만 설정할 수 있다.
  - 유연성을 확보할 수 있다.
  - 가독성을 높일 수 있다.
  - 변경 가능성을 최소화할 수 있다.
  ```
    
* ### 구현 방법  

  **구현**
  ```java
  public class BuilderVO {

    // 1. 멤버변수
    private String name;
    private int age;

    // 5. 외부에서 객체 생성을 요구할 때 static 키워드를 이용해서 내부의 빌더 클래스를 생성해서 반환
    public static Builder builder() {
      return new Builder(); // 내부클래스의 생성자
    }

    // 8. 외부클래스의 생성자는 내부클래스를 받고, 멤버변수값을 저장한다.
    private BuilderVO(Builder builder) {
      this.name = builder.name;
      this.age = builder.age;
    }

    @Override
    public String toString() {
      return "BuilderVO [name=" + name + ", age=" + age + "]";
    }

    // 2. 내부클래스 -> 외부클래스를 생성하지 않고도, 내부클래스에 접근이 가능
    public static class Builder{

      // 3. 내부클래스의 멤버변수
      private String name;
      private int age;

      // 4. 내부클래스의 생성자, 생성자를 제한
      private Builder() {}

      // 6. setter메서드를 생성하고, 나를 반환시킨다.
      public Builder name(String name) {
        this.name = name;
        return this;
      }

      public Builder age(int age) {
        this.age = age;
        return this;
      }

      // 7. 최종적으로 내부클래스에서 build()메서드를 이용해서
      // 바깥에 있는 클래스에 내부 멤버변수를 전달.
      public BuilderVO build() {
        return new BuilderVO(this); // this. 나자신을 전달
      }

    }

  }
  ```
  
  **사용**
  ```
  BuilderVO vo = BuilderVO.builder().name("홍길동").age(20).build();
  ```
  
  빌더 패턴은 굉장히 자주 사용되는 생성 패턴 중 하나로, Retrofit이나 Okhttp 등 유명 오픈소스에서도 이 빌더 패턴을 사용하고 있다.  
  실무에서는 Stream.Builder API, StringBuilder, UriComponentsBuilder 등에 활용된다고 한다.  
    
  
