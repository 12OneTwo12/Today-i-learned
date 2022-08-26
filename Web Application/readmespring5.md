# Spring   
  
  #### [ 2022-08-26 ]  
  
  ## 목차  
  * #### [[ DB Connection이란 ]](#db-connection이란)  
  * #### [[ JDBC란 ]](#jdbc란)  
  * #### [[ 커넥션 풀(DBCP) ]](#커넥션-풀dbcp)  
  * #### [[ Spring-JDBC ]](#spring-jdbc)  
  * #### [[ MyBatis ]](#mybatis)  
  * #### [[ MyBatis Spring연결 ]](#mybatis-spring연결)  
      
---------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### DB Connection이란  

  - DB를 사용하기 위해 DB와 애플리케이션 간 통신을 할 수 있는 수단이다.  

  - DB Connection은 Database Driver와 Database 연결 정보를 담은 URL이 필요하다.  

  - Java의 DB Connection은 JDBC를 주로 이용하는데, URL 타입을 사용한다.  

* ### JDBC란  

  - Jaba Database Connectivity의 약어로 자바 언어로 다양한 종류의 관계형 데이터베이스에 접속하고,    
    SQL문을 수행하여 처리하고자 할 때 사용되는 표준 SQl 인터페이스 API이다.  
      
  - 원래라면 DB마다 연결 방식과 통신 규격이 따로 있기 때문에 프로그램을 DB와 연결한다면,   
    해당 DB와 관련된 기술적 내용을 배우고 DB가 변경될 시 많은 변경 사항이 존재한다.  
    하지만 각 DBMS에 맞는 JDBC를 받아주게 되면 쉽게 DBMS를 변경할 수 있게 된다.  
    
  - 즉, DBMS 종류(MySQL, MsSQL, Oracle 등)에 상관 없이 하나의 JDBC API를 사용해서 데이터베이스 작업을 처리할 수 있게 된다.   
    JDBC API를 사용하는 애플리케이션의 개략적인 구조는 다음과 같다.  
      
  ![image url](https://github.com/12OneTwo12/Today-i-learned/blob/main/Web%20Application/jdbc.png?raw=true)  
    
  - 자바 애플리케이션에서 데이터베이스에 접근하기 위해서는 JDBC API를 이용해서 데이터베이스에 접근하고,   
    JDBC API는 JDBC 드라이버를 거쳐 데이터베이스와 통신을 한다.  
    
  * #### JDBC 실행 과정  
  
    | 객체 및 메소드                   |                                                     설명                                                     |
    |----------------------------------|:------------------------------------------------------------------------------------------------------------:|
    | getConnection()                  | DriverManager.getConnection() 은 실제 자바 프로그램과 데이터베이스를 네트워크 상에서 연결해 주는 메소드이다. |
    | Connection                       |                    DB 연결 객체, 데이터베이스로의 연결 기능을 제공, Statement 객체를 생성                    |
    | Statement 또는 PreparedStatement |                                                SQL문 실행 객체                                               |
    | ResultSet                        |                                          쿼리문의 결과를 가지는 객체                                         |
      
    ```java
    Connection conn = null;
    PreparedStatement  pstmt = null;
    ResultSet rs = null;
    
    private static final String DB_URL = "jdbc:mysql://localhost:3306/";
	  private static final String DATABASE_NAME = "example";
	  private static final String USER = "example";
	  private static final String PASSWORD = "example";

    try {
        String sql = "SELECT * FROM example"

        // 1. 드라이버 연결 DB 커넥션 객체를 얻음
        connection = DriverManager.getConnection(DB_URL + DATABASE_NAME, USER, PASSWORD);

        // 2. 쿼리 수행을 위한 PreparedStatement 객체 생성
        pstmt = conn.createStatement();

        // 3. executeQuery: 쿼리 실행 후
        // ResultSet: DB 레코드 ResultSet에 객체에 담김
        rs = pstmt.executeQuery(sql);
        } catch (Exception e) {
        } finally {
            conn.close();
            pstmt.close();
            rs.close();
        }
    }
    ```  
      
    위와 같이 자바에서 DB에 직접 연결해서 처리하는 경우 JDBC Driver를 로드하고 커넥션 객체를 받아와야 한다.   
    그러면 매번 사용자가 요청을 할 때마다 드라이버를 로드하고 커넥션 객체를 생성하여 연결하고 종료하기 때문에 매우 비효율적이다.   
    이런 문제를 해결하기 위해서 커넥션 풀을 사용한다.    
      
* ### 커넥션 풀(DBCP)  

  웹 컨테이너(WAS)가 실행되면서 일정량의 Connection 객체를 미리 만들어서 pool에 저장했다가,   
  클라이언트 요청이 오면 Connection 객체를 빌려주고 해당 객체의 임무가 완료되면 다시 Connection 객체를 반납 받아서 pool에 저장하는 프로그래밍 기법이다.  
    
  Container 구동 시 일정 수의 Connection 객체를 생성하게 되며 클라이언트의 요청에 의해 애플리케이션이 DBMS 작업을 수행해야 하면,   
  Connection Pool에서 Connection 객체를 받아와 작업을 진행한다. 이후 작업이 끝나면 Connetion Pool에 Connection 객체를 반납한다.  
    
  나는 쉽게 이해해서 위의 코드를 매번 적는 귀찮은 과정을 손 쉽게 만들어주는 프로그래밍 기법으로 이해했다.  
  흔히 Hikari CP를 사용한다.  
    
  * #### 커넥션 풀(DBCP)의 장점  

    - 여러 명의 사용자를 동시에 처리할수 있는 웹 어플리케이션이다.  

    - DB연결을 이용할 때 매번 연결하는 방식이 아닌 미리 연결을 맺고 사용하는 Connection Pool을 이용해 성능을 향상시킨다.  

    - DB 접속 설정 객체를 미리 만들어 연결하여 메모리 상에 등록해 놓기 때문에 불필요한 작업(커넥션 생성, 삭제)이 사라지므로 클라이언트가 빠르게 DB에 접속이 가능하다.  

    - DB Connection 수를 제한할 수 있어서 과도한 접속으로 인한 서버 자원 고갈 방지가 가능하다.  

    - DB 접속 모듈을 공통화하여 DB 서버의 환경이 바뀔 경우 쉬운 유지 보수가 가능하다.  

    - 연결이 끝난 Connection을 재사용함으로써 새로 객체를 만드는 비용을 줄일 수 있다.  
        
* ### Spring-JDBC  
  
  Spring JDBC란? (JdbcTemplate)  
    
  - JDBC의 장점을 유지하면서, 전통적방식의 JDBC단점을 극복하여,   
    간결한 형태의 API 사용법을 제공하며 기존 방식에서 지원하지 않는 편리한 기능을 제공한다.  
      
  - Spring JDBC는 반복적으로 하는 작업을 대신한다.  
    (connection, prepareSatement, resultSet의 반복처리, Exception처리)  
      
  - Spring JDBC는 SQL에 바인딩할 값을 지정만 해주면 된다.  

  - Spring JDBC는 사용 전 DB커넥션을 가져오는 DataSource가 강제화 된다
  
  * #### DataSource  

    DataSource는 DB에 이용되는 URL, id, pw, DriverClass를 미리 정의해 놓고 사용 하는 객체이다.  
    Spring-Jdbc에서 기본으로 제공해주고, 여러 커넥션풀 라이브러리에서 기본으로 제공해준다.  
      
  * #### 설정 방법  

    우선 커넥션 커넥션 풀을 사용하기 위해선 몇가지 설정이 필요하다.  
    스프링 JDBC를 하기위한 필요 라이브러리는 다음과 같다.  
    아래 항목들을 메이븐에 추가(pom.xml)해주면 된다.  
      
    - Connector(커넥터) 설정  

    - Spring-JDBC 설정  

    - Hikari CP(커넥션풀) 설정  

    - Spring-test(DB연결을 테스트 하기 위해 사용)  

    ```xml
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

    <dependency>
			<groupId>junit</groupId>
			<artifactId>junit</artifactId>
			<version>4.12</version>
			<scope>test</scope>
		</dependency>
    ```  
      
    그후 DB와 관련된 스프링 설정 xml파일에 가서 DataSource와 HikariCP 빈으로 등록 하기 위해    
    namespace에 ```jdbc```와 ```beans```를 추가해준다.    
      
  * #### DataSource설정  

    그 후 DataSource와 Hikari CP를 DB와 관련된 스프링 설정 파일에 가서 빈으로 등록해준다.  
      
    ```xml
    <bean id="hikariConfig" class="com.zaxxer.hikari.HikariConfig">
      <property name="driverClassName" value="com.mysql.cj.jdbc.Driver" />
      <property name="jdbcUrl" value="jdbc:mysql://localhost:3306/spring?serverTimezone=Asia/Seoul" />
      <property name="username" value="spring" />
      <property name="password" value="spring" />
    </bean>

    <!-- 커넥션 풀 적용(의존성 주입) -->
    <bean id="ds" class="com.zaxxer.hikari.HikariDataSource">
      <constructor-arg ref="hikariConfig" />
    </bean>
    ```
      
    이를 해석하자면 hikariConfig이름으로 컨테이너에 객체 생성한다.  
    세터 주입으로 name에 value를 저장한다.  
      
    그후 커넥션 풀 적용은,  
    Class속성에 정의된 클래스를 dataSource 이름으로 컨테이너에 객체생성한다.  
    ref 참조속성 생성자 주입으로 위에 선언한 hikariConfig를 주입한다.  
      
    그러나 이렇게 설정하면 보안상 문제가 있을 수 있기 때문에,  
    ```resources``` 폴더 안에 DB에 연결할 주소들이라던지 계정 이름 비밀번호등을 따로 ```properties```파일로 만들어 호출하는 방식으로 변경 해준다.  
      
    ```
    hikari.properties
      
    ds.driverClassName=com.mysql.cj.jdbc.Driver
    ds.jdbcUrl=jdbc:mysql://localhost:3306/spring?serverTimezone=Asia/Seoul
    ds.username=spring
    ds.password=spring
    ```
    ```xml
    <!-- 외부설정파일을 사용하는 방법 -->
    <!-- classpath:/    ->java/resources 폴더 하위경로를 의미함 -->
    <bean id="DBproperties" class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer">
      <property name="location" value="classpath:/db-config/hikari.properties" />
    </bean>


    <bean id="hikariConfig" class="com.zaxxer.hikari.HikariConfig">
      <property name="driverClassName" value="${ds.driverClassName}" />
      <property name="jdbcUrl" value="${ds.jdbcUrl}" />
      <property name="username" value="${ds.username}" />
      <property name="password" value="${ds.password}" />
    </bean>

    <!-- 커넥션 풀 적용(의존성 주입) -->
    <bean id="ds" class="com.zaxxer.hikari.HikariDataSource">
      <constructor-arg ref="hikariConfig" />
    </bean>
    ```
      
    ```PropertyPlaceholderConfigurer```는 외부 파일을 맵핑시켜주는 클래스 이다.  
    ```classpath:/``` 는 ```src/main/resources```파일 아래의 파일의 경로를 참조하는 방법이다.  
      
    ```PropertyPlaceholderConfigurer```로 연동했다면, 외부파일안의 변수 이름을 ${ }로 참조 해서 사용 할 수 있다.  
      
    그 후 ```JdbcTemplate```을 사용하기 위해 ```Root-context.xml```에 설정을 추가해준다.  
      
    ```xml
    <!-- jdbcTemplate이름으로 객체생성하며 의존주입 -->
    <bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
      <property name="dataSource" ref="dataSource"></property>
    </bean>
    ```

    해석하자면 Class속성에 정의된 클래스를 jdbcTemplate이름으로 컨테이너에 객체생성하고,  
    dataSource 메서드에 앞서 생성한 dataSource를 주입해준다.  
    Spring JDBC 사용 전 DB커넥션을 가져오는 DataSource가 강제화 된다.  
    이렇게 되면 DAO에서 멤버 필드로 ```DataSource ds;```를 선언해주고 ```@Autowired``` 어노테이션을 통해 맵핑해주면,  
    우리는 DB와 연결할 수 있는 것이다.  
      
* ### MyBatis  

  MyBatis란 객체 지향 언어인 자바의 관계형 데이터베이스 프로그래밍을 좀 더 쉽게 할 수 있게 도와 주는 개발 프레임 워크이다.  
  JDBC를 통해 데이터베이스에 엑세스하는 작업을 캡슐화하고 일반 SQL 쿼리, 저장 프로 시저 및 고급 매핑을 지원하며   
  모든 JDBC 코드 및 매개 변수의 중복작업을 제거 한다.  
  Mybatis에서는 프로그램에 있는 SQL쿼리들을 한 구성파일에 구성하여 프로그램 코드와 SQL을 분리할 수 있는 장점을 가지고 있다.  
    
  - MyBatis 는 개발자가 지정한 SQL, 고급 매핑을 지원하는 프레임워크이다.  
  - JDBC 코드와 수동으로 셋팅하는 파라미터와 결과 매핑을 제거한다.  
  - 복잡한 JDBC코드를 걷어내며 깔끔한 소스코드를 유지한다.  
  - DAO계층을 대신한다.  
  - 기존 DAO의 Interface의 구현클래스를 xml파일이 대신한다.  
  - 스프링에서 사용하려면 MyBatis-Spring module을 다운로드 받아야 한다.  
    
  쉽고 간단하게 이야기 하자면,  
  이제까지 중복해서 작업했던 DB와의 연결 그리고 SQL쿼리들로 작업했던 것들을,  
  간단하게 끝낼 수 있는 정말 굉장한 녀석이다.  
    
  ![image url](https://github.com/12OneTwo12/Today-i-learned/blob/main/Web%20Application/mybatis.png?raw=true)  
    
  | 전통적인 JDBC 프로그램       |              MyBatis              |
  |------------------------------|:---------------------------------:|
  | 직접 Connection 생성         |        자동 Connection 생성       |
  | 직접 Close() 처리            |         자동 Close() 처리         |
  | 직접 PreparedStatement 생성  |    자동 PreparedStatement 처리    |
  | Pstmt의 setxxx() 직접 처리   |       #{name} 을 통한 ? 처리      |
  | Select의 경우 ResultSet 처리 | 리턴 타입으로 자동 ResultSet 처리 |
    
  * #### MyBatis 설정하기    

    **SQLSessionFactory**는 마이바티스 핵심객체인데, 스프링 컨테이너에 생성해 놓으면 된다.  
    유의할 점은 마이바티스 사용시 기본적으로 spring-jdbc 라이브러리가 있어야 한다.  

    **MyBatis를 사용하기 위한 pom.xml 설정 추가**
      
    ```xml
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
    ```
  
    마찬가지로 MyBatis를 사용하기 위해 DB와 관련된 스프링 설정 xml파일에 가서 namespace에 추가 ```mybatis```를 추가 해준다.  
    그리고 DB와 관련된 스프링 설정 xml파일에 가서 아래 구문을 추가 해준다.  
      
    ```xml
    <!-- MyBatis의 사용의 핵심 객체 sessionFactory 추가 -->
    <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
      <property name="dataSource” ref="dataSource"></property>
    </bean>
    
    <mybatis-spring:scan base-package="com.simple.mapper"/>
    ```
      
    해석하자면 sqlSessionFactory 이름으로 컨테이너에 객체생성해주고,  
    dataSource 메서드에 앞서 생성한 dataSource를 주입시킨다.  
      
    ```mybatis-scan```을 추가하고 해당 패키지를 스캔하여 xml파일을 객체(bean)로 생성해준다.  
      
    여기서 한가지 더 추가하자면, MyBatis에는 여러가지 설정을 더해줄 수 있는데,  
    이 설정 파일을 따로 xml파일로 만들어 지정해 줄 수 있다.  
    
    **mybatis-config.xml**
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE configuration
     PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
     "http://mybatis.org/dtd/mybatis-3-config.dtd">

      <!-- 마이바티스 설정관련 xml파일이 된다 -->
      <!-- VO클래스의 단축명을 선언 -->
      <configuration>
        <typeAliases>
          <typeAlias type="com.simple.command.ScoreVO" alias="ScoreVO" />
          <typeAlias type="com.simple.command.MemberVO" alias="MemberVO" />
        </typeAliases>
      </configuration>
    ```
        
    ```xml
    <!-- MyBatis의 사용의 핵심 객체 sessionFactory 추가 -->
    <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
      <!-- 데이터베이스 정보 -->
      <property name="dataSource" ref="ds"></property>
      <!-- 마이바티스 설정경로 -->
      <property name="configLocation" value="classpath:/mybatis-config/mybatis-config.xml"/>
    </bean>

    <!-- 마이바티스가 실행시킬 인터페이스 패키지의 위치 -->
    <mybatis-spring:scan base-package="com.simple.mapper"/>
    ```
    
* ### MyBatis Spring연결  

  이로써 mybatis를 사용할 수 있게 됐는데, 사용방법을 알게됐을때 너무 놀랐다.  
  이렇게 간단하게 끝낼 수 있다는게 너무 신기하기도 했고, 대단하다는 생각도 들었다.  
    
  우선 구현하고자 하는 메소드들을 가진 interface를 만들어 준다.  
  ```java
  package com.simple.mapper;
  public interface TestMapper {
    public String getTime();
  }
  ```
    
  그 후 같은 위치에 인터페이스와 똑같은 이름을 가진 xml파일 하나를 만들어 주고 이곳에 인터페이스의 메소드를 구현해준다.  
  그리고 mybatis가 DAO 부분을 대신하기 때문에 service영역에서 
    
  ```java
  @Autowired
	private TestMapper testMapper;
  // 인터페이스명 참조변수
  ```
  
  이렇게 선언하고 원하는 메소드를 ```testMapper.메소드```로 사용해주면 됐다.  
  너무 간단하지 않은가. 처음에 보고 너무 충격을 받았다 정말 이렇게 간단해 질 수 있나 싶었다.  
    
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE mapper
   PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
   "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
  
  <!--위 설정을 추가 -->
  <mapper namespace="com.simple.mapper.TestMapper"> 
    <select id="getTime" resultType="String">
        select sysdate() from dual <!-- 원하는 쿼리문 -->
    </select>
  </mapper>

  <!-- id는 추상메서드명, resultType은 결과를 받아서 처리할 객체(반환유형) -->
	<!-- sql의 ;은 찍지 않는다. -->
	<select id="getTime" resultType="String">
		SELECT now()
	</select>
	
	<!-- vo가 전달될 때는 vo안에 getter메서드명을 #{}에 사용한다. -->
	<insert id="insertTest" >
		INSERT INTO score(name, kor, eng, math) values(#{name},#{kor},#{eng},#{math})
	</insert>
	
	<insert id="updateTest">
		UPDATE score SET name = #{name}, kor = ${kor}, eng = ${eng}, math = #{math} WHERE sno = #{sno}
	</insert>

	<select id="selectTest" resultType="ScoreVO">
		SELECT * FROM score WHERE sno = #{num}
	</select>
	
	<select id="selectTest02" resultType="map">
		SELECT * FROM score WHERE sno = #{num}
	</select>
	
	<delete id="deleteTest">
		DELETE FROM score WHERE sno = #{num}
	</delete>
  ```
    
  - Namespace : 인터페이스의 경로와 동일하게 작성해준다.  
  - Id : 인터페이스 추상메서드와 동일하게 작성해준다.  
  - resultType : 추상메서드의 리턴타입과 동일하게 작성해준다.  
  
  * #### MyBatis Mapper XML의 주요 속성

    ##### Mapper태그
    
      - Namespace – 인터페이스 전체경로 작성(인터페이스 동일한 이름으로 병합해서 처리 함)


    ##### Select 속성  
      
      - Id – 메서드를 찾기위한 구분자(인터페이스 메서드명과 동일)
      - parameterType – 구문에 전달될 파라미터 타입 (패키지 경로 포함, 전체 클래스명)
      - resultType – 결과 반환 타입(패키지 경로 포함, 전체 클래스명)(마이바티스 설정관련 xml파일에서 VO클래스의 단축명을 선언했다면 전체 클래스 명이 아닌 VO명만으로 가능)
      - resultMap – 외부 Map타입을 이용한 반환 타입
    
    ##### Insert, Update, Delete 속성  
      
      - Id – 메서드를 찾기위한 구분자(인터페이스 메서드명과 동일)
      - parameterType – 구문에 전달될 파라미터 타입 (패키지 경로 포함, 전체 클래스명)

    ##### Sql 구분의 값의 전달
    
      - ```#{name}```

    
