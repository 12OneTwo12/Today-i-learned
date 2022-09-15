# JPA     
  
  #### [ 2022-09-14 ]  
  
  ## 목차  
  * #### [[ JPA ]](#jpa)  
  * #### [[ JPA (Java Persistence API)란 ]](#jpa-java-persistence-api란)  
  * #### [[ JPA의 다양한 방식 ]](#jpa의-다양한-방식)  
      
---------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### JPA  

  JPA는 Java Persistence API의 약자로, 자바 어플리케이션에서 관계형 데이터베이스를 사용하는 방식을 정의한 인터페이스이다.  
  Hibernate는 JPA의 구현체(클래스) 인데,  
    
  JPA는 자바 진영에서 ORM(Object-Relational Mapping) 기술 표준으로 사용되는 인터페이스의 모음이다.   
  그 말은 즉, 실제적으로 구현된것이 아니라 구현된 클래스와 매핑을 해주기 위해 사용되는 프레임워크이다.   
  JPA를 구현한 대표적인 오픈소스가 Hibernate라는 것이다.  
    
  우선 JPA에 앞서, 먼저 ORM에 대해 알아보도록하자.  
    
  * #### ORM(Object-Relational Mapping)  

    ```
    우리가 일반 적으로 알고 있는 애플리케이션 Class와 RDB(Relational DataBase)의 테이블을 매핑(연결)한다는 뜻이며, 
    기술적으로는 어플리케이션의 객체를 RDB 테이블에 자동으로 영속화 해주는 것이라고 보면된다.
    ```
      
    간단하게 말하면 ```DB데이터 - <맵핑> - 필드``` DB데이터와 필드를 연결하는것이다.  
    구현 클래스와 RDB(Relational DataBase)에서 쓰이는 데이터인 테이블 자동으로 매핑(연결)하는 것을 의미한다. 즉 JPA and hibernate는 ORM이다.
      
  * #### Persistentent Framework(영속성 프레임워크)  

    방금 위에서 영속화 해준다는 말을 했다.  
    그렇다면 영속화란 무엇일까?  
      
    ```
    데이터를 생성한 프로그램이 종료되어도 사라지지 않는 데이터의 특성을 말한다.  
      
    영속성을 갖지 않으면 데이터는 메모리에서만 존재하게 되고 프로그램이 종료되면 해당 데이터는 모두 사라지게 된다.  
      
    그래서 우리는 데이터를 파일이나 DB에 영구 저장함으로써 데이터에 영속성을 부여한다.  
    ```  
      
    이러한 과정을 영속화 라고 한다.  
      
    영속성 프레임워크란 연결은 프로그램의 소스코드에서 SQL 문장을 분리하여  
    별도의 XML 파일로 저장하고 이 둘을 서로 연결시켜주는 방식으로 작동하는 프레임워크를 말한다.   
      
    대표적으로 Mybatis가 있다.  
      
* ### JPA (Java Persistence API)란  

  간단하게 말하자면 JPA란 SQL작성없이 SQL문을 실행시키는 API이다.  
  JPA는 인터페이스의 모음이다. 즉, 실제로 동작하는 것이 아니다.  
  개발자가 JPA를 사용하면, JPA 내부에서 JDBC API를 사용하여 SQL을 호출하여 DB와 통신한다.  
  JPA가 데이터베이스 연동에 사용되는 코드, SQL까지 전부 제공한다.  
    
  즉 개발자가 SQL을 적지 않더라도 자동으로 처리한다.  
  
  * #### hibernate  
    ```
    Hibernate는 JPA의 구현체 중 하나이다.  
    Hibernate가 지원하는 메서드 내부에서는 JDBC API가 동작하고 있으며, 단지 개발자가 직접 SQL을 직접 작성하지 않을 뿐이다
    ```
      
  * #### JPA의 장점  

    - SQL문이 아닌 Method를 통해 DB를 조작할 수 있어, 개발자는 객체 모델을 이용하여 비즈니스 로직을 구성하는데만 집중할 수 있다.  
      (내부적으로는 쿼리를 생성하여 DB를 조작함. 하지만 개발자가 이를 신경 쓰지 않아도된다.)  

    - Query와 같이 필요한 선언문, 할당 등의 부수적인 코드가 줄어들어, 각종 객체에 대한 코드를 별도로 작성하여 코드의 가독성을 높인다.  

    - 객체지향적인 코드 작성이 가능하다. 오직 객체지향적 접근만 고려하면 되기때문에 생산성 증가한다.  

    - 매핑하는 정보가 Class로 명시 되었기 때문에 ERD를 보는 의존도를 낮출 수 있고 유지보수 및 리팩토링에 유리하다.  

    - 예를들어 기존 방식에서 MySQL 데이터베이스를 사용하다가 PostgreSQL로 변환한다고 가정해보면, 
      새로 쿼리를 짜야하는 경우가 생김. 이런 경우에 ORM을 사용한다면 쿼리를 수정할 필요가 없다.  
        
  * #### JPA의 단점  

    - 프로젝트의 규모가 크고 복잡하여 설계가 잘못된 경우, 속도 저하 및 일관성을 무너뜨리는 문제점이 생길 수 있다.  

    - 복잡하고 무거운 Query는 속도를 위해 별도의 튜닝이 필요하기 때문에 결국 SQL문을 써야할 수도 있다.  

* ### JPA의 다양한 방식  

  | JPA문법        | 표현식                                          |
  |----------------|-------------------------------------------------|
  | JPA기본구문    | findAll, findById, save, deleteById등 기본 제공 |
  | JPA쿼리 메서드 | 메서드이름을 조합해서 SQL문을 생성              |
  | JPQL(@Query)   | SQL과 유사하나 엔티티를 구문에서 사용(조인)     |
  | 네이티브쿼리   | 기존의 SQL문을 사용하는 방법                    |
  | 쿼리DSL        | 동적쿼리구문에 사용                             |
    
  **모듈추가**
  ```gradle
  dependencies {
	  implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    ...
  }
  ```
    
  **application.properties**
  ```properties
  ## 프로젝트트 실행시 자동 DDL(create, alter, drop)에 대한 설정
  spring.jpa.hibernate.ddl-auto=update
  ## sql을 포맷팅해서 출력(가독성 향상)
  spring.jpa.properties.hibernate.format_sql=true
  ## Jpa처리시에 발생하는 sql을 보여줄 것인지에대한 설정
  spring.jpa.show-sql=true
  ```
    
  **엔티티 정의**
  ```java
  @Entity // JPA의 엔티티로 관리
  @Table(name = "TBL_MEMO") // 테이블명 지정
  @ToString
  @Setter
  @Getter
  @Builder
  @NoArgsConstructor
  @AllArgsConstructor
  public class Memo {

    //JPA사용시에는 기본타입을 사용하지 않고 wrapper타입을 사용
    
    @Id // PK를 자동으로 생성하고자 할때 사용
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private Long mno;

    @Column(length = 300, nullable = false) // 컬럼의 길이, 널여부 지정
    private String writer;

    @Column(columnDefinition = "varchar(300) default 'admin'") // 직접 컬럼모형을 지정
    private String text;

    @Transient // VO에 사용은 하지만, 컬럼으로 지정하지 않을 값
    private String hello;

  }
  ```
    
  **DAO 인터페이스 정의하기**
  ```java
  // DAO의 인터페이스
  public interface MemoRepository extends JpaRepository<Memo, Long> { // <엔티티, PK의 타입>
    // 하고자 하는 쿼리문을 추상메서드로 작성
  }
  ```
  
  **사용하기**
  ```
  public class JPABasic {

    //Sort - 오더 클래스
    //PageRequest - limit 클래스

    @Autowired
    MemoRepository memoRepository;

    // 정렬
    public void testCode01() {

      Sort order = Sort.by("mno").descending(); // mno desc

      List<Memo> list = memoRepository.findAll(order);

      for(Memo m : list) {
        System.out.println(m);
      }

    }

    // 정렬 and

    public void testCode02() {
      // select * from tbl_memo order by writer desc, text asc;

      Sort order01 = Sort.by("writer").descending().and(Sort.by("text").ascending());
      // Sort order02 = Sort.by("text").ascending();

      // Sort order = order01.and(order02);

      List<Memo> list = memoRepository.findAll(order01);

      for(Memo m : list) {
        System.out.println(m);/		}

    }

    // 페이지 클래스 - limit

    public void testCode03() {
      // select * from tbl_memo limit 0, 10
      // PageRequest page = PageRequest.of(0, 10);
      // Pageable은 부모 인터페이스 타입
      Pageable page = PageRequest.of(0, 10);

      // 페이지에 필요한 정보들을 반환
      Page<Memo> memo = memoRepository.findAll(page);

      // Page인터페이스에서 조회된 데이터르 얻음
      List<Memo> list = memo.getContent();

      List<Memo> memoList = memoRepository.findAll(page).getContent();

      for(Memo m : memoList) {
        System.out.println(m);
      }
      System.out.println("현재 페이지 번호 : " + memo.getNumber());
      System.out.println("총 페이지 수 : " + memo.getTotalPages());
      System.out.println("총 데이터 수 : " + memo.getTotalElements());
      System.out.println("데이터 존재 여부 : " + memo.hasContent());
      System.out.println("amount값 : " + memo.getSize());
    }
  }
  ```
    
  **JPA쿼리 메서드**  
  쿼리 메서드란 메서드 이름을 조합해서 SQL문을 만드는 것을 의미하는데 이는,  
  https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods.query-creation
  사이트를 참조하길 바람.  
    
  **JPQL의 @Query사용하기**  
  JPQL구문을 사용하는방법 ( SQL과 비슷하나 엔티티를 구문에서 사용)  
    
  - 엔티티명은 곧 클래스명입니다(테이블이 아님)  
  - 엔티티와 속성은 대소문자 구분함  
  - 키워드는 구분하지 않음  
  - 별칭은 필수  
  - 파라미터전달 @Param (이름), :이름

  ```java
  //////////////////////////JPQL////////////////////////////////////
	// SQL문과 유사하나 엔티티를 사용해서 쿼리를 직접 작성하는 방법
	@Query("select m from Memo m order by m.mno desc")
	List<Memo> getListDesc();
	
	@Query("select m from Memo m where m.mno > :num order by m.mno desc")
	List<Memo> getListDescParam(@Param("num") Long num);
  ```
  
  **객체를 파라미터로 넘길경우**  
    
  객체를 넘길때는 #{객체명} 구문을 사용할 수 있음  
    
  ```java
  // JPQL insert구문은 제공 x
  // 업데이트 구문은 @Transactional @Modifying 구문을 반드시 붙힌다.
  @Transactional
  @Modifying
  @Query("update Memo m set m.writer = :a where m.mno = :b")
  int updateMemo(@Param("a") String a, @Param("b") Long b);
	
  @Transactional
  @Modifying
  @Query("update Memo m set m.writer = :#{#A.writer}, m.text = :#{#A.text} where m.mno = :#{#A.mno}")
  int updateMemoTwo(@Param("A") Memo memo);
  ```
      
  **네이티브쿼리 사용**  
    
  ```java
  // 네이티브쿼리(기존sql문 사용)
  @Query(value = "select * from tbl_memo where mno = ?", nativeQuery = true)
  Memo getNative(Long mno);
  ```
  
  나는 솔직히 Mybatis가 더 편한것 같다는 느낌을 받았다.  
  
