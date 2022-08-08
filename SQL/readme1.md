# SQL  
  
  #### [ 2022-08-08 ]  
    
  ## 목차  
  * #### [[ SQL 명령어 ]](#sql-명령어)  
  * #### [[ SELECT ]](#select)  
  * #### [[ 중복의 제거 ]](#중복의-제거)  
  * #### [[ 필터링(WHERE Clause) ]](#필터링where-clause)  
  * #### [[ 조건의 작성 ]](#조건의-작성)  
  * #### [[ 조건의 유형 ]](#조건의-유형)  
  * #### [[ Null ]](#null)  
  * #### [[ 와일드 카드 ]](#와일드-카드)  
  * #### [[ 다중 테이블 연결 쿼리 JOIN Clause ]](#다중-테이블-연결-쿼리-join-clause)  
  * #### [[ 그룹화와 집계 Grouping And Aggregation  ]](#그룹화와-집계-grouping-and-aggregation)  
      
-----------------------------------------------------------------------------------------------------------------------------------------------------  
   
* ### SQL 명령어  

  **전체 데이터베이스(Schema) 조회**

  ```sql
  show databases;
  ```

  **sakila DB 사용**

  ```sql
  use sakila;
  ```

  **sakila DB가 보유 중인 테이블(Table) 조회**

  ```sql
  show tables;
  ```

  **customer 테이블의 정보 조회**

  ```sql
  desc customer;
  ```

  **현재 접속 중인 MySQL의 버전, user, database 확인**  
    
* ### SELECT  

  SQL SELECT문은 하나 또는 그 이상의 테이블에서 데이터를 추출하는 SQL의 데이터 조작 언어(DML) 중 하나이다.   
  데이터베이스 중 하나 또는 그 이상의 테이블에서 데이터를 추출하기 위한 명령으로 데이터 조작 언어 (DML)에서 가장 많이 사용된다.   
      
  SELECT문(SELECT Statement)은 여러 개의 구성 요소(component)와 절(clause)으로 구성된다.  
      
  **language 테이블의 전체 데이터 조회**

  ```sql
  SELECT * FROM language;
  ```

  FROM clause : language라는 단일 테이블을 사용함을 명시

  SELECT clause : FROM 절에서 명시한 language 테이블의 모든(*) 열을 결과셋에 포함하도록 명시

  → “language 테이블의 모든 열과 모든 행을 조회”

  **language 테이블에서 language_id, name, last_update 열(column) 조회**

  ```sql
  SELECT language_id, name, last_update FROM language;
  ```

  → SELECT 절은 **‘모든 열 중에 쿼리 결과셋(ResultSet)에 포함시킬 열을 결정’**하는 역할  
      
  ### **열** 별칭(Alias) **지정(Labeling)**

  **language 테이블에서 language_id 열의 이름을 ‘언어ID’로, name 열의 이름을 ‘언어명’으로, last_update 열의 이름을 ‘마지막 업데이트’로 별칭을 지정하여 조회(AS 키워드는 생략 가능)**

  ```sql
  SELECT language_id AS 언어ID, name AS 언어명, last_update AS "마지막 업데이트" FROM language;
  ```
 
* ### 중복의 제거  

  **film_actor 테이블에서 전체 데이터를 50개 까지만 조회**

  ```sql
  SELECT * FROM film_actor LIMIT 50;
  ```

  ### FROM 절(FROM Clause)

  1. 하나 이상의 테이블을 지정할 때(지금까지 사용한 방식)
  2. 다른 테이블과 서로 연결할 때(추후 설명)

  ### WHERE 절(WHERE Clause)

  모든 행들(Rows)을 조회하지 않고, 원하는 특정 행만을 얻고자할 때 사용하는 **필터링(Filtering) 방식**

  → 반대로 말하면 얻고자하는 결과셋(ResultSet)에 조회되지 않기를 원하는 행들을 필터링해서 걸러내는 방식

  **category 테이블에서 모든 데이터 조회**

  ```sql
  SELECT * FROM category;
  ```

  **film_category 테이블에서 category가 Sci-Fi인 film만 조회**

  ```sql
  SELECT * from film_category WHERE category_id = 14;
  ```  
    
* ### 필터링(WHERE Clause)    

  SELECT 문(Statement)을 통해 조회하려는 데이터의 행(row) 수를 제한하고자 할 때 하나 이상의 필터링 조건을 포함하기 위해 사용하는 WHERE 절(Clause)  
      
  **customer 테이블에서 first_name이 KAREN인 회원의 모든 열 데이터 조회**

  ```sql
  SELECT * FROM customer 
  WHERE first_name = "KAREN";
  ```

  ### **AND, OR** 연산자를 통하여 하나 이상의 조건 조합

  **AND**

  **customer 테이블에서 first_name이 “VIRGINIA”이고 last_name이 “BLUE”인 회원의 모든 열 조회**

  ```sql
  SELECT * FROM customer 
  WHERE first_name = "VIRGINIA" AND last_name = "BLUE";
  ```

  **customer 테이블에서 first_name이 “VIRGINIA”이고 last_name이 “GREEN”인 회원의 모든 열 조회**

  ```sql
  SELECT * FROM customer WHERE first_name = "VIRGINIA" AND last_name = "GREEN";
  ```

  **OR**

  **film_category 테이블에서 category가 Animation이거나 Games인 모든 열 조회**

  ```sql
  SELECT * FROM film_category WHERE category_id = 2 OR category_id = 10;
  ```

  **조건이 세 개 이상일 경우, 가독성을 위해 ( )로 구분하여 작성**

  **customer 테이블에서 (first_name이 ‘STEVEN’이거나 last_name이 ‘YOUNG’이고) create_date가 2006년 1월 1일 이후인 회원 조회**

  ```sql
  SELECT * FROM customer 
  WHERE (first_name = 'STEVEN' OR last_name = 'YOUNG') AND create_date > '2006-01-01';
  ```
      
* ### 조건의 작성

  WHERE 절 뒤에는 조건식(Condition)을 작성하는데,

  이러한 조건식(Condition)은 하나 이상의 **연산자**와 결합된 하나 이상의 **표현식(Expression)**으로 구성된다.  

  조건식 내에서 사용되는 연산자의 종류

  - =, !=, <, >, <>(!=와 동일), LIKE, IN 등
  - +, -, *, /와 같은 산술 연산자

  연산자와 결합된 표현식의 종류

  - 숫자
  - 테이블
  - ‘This is a String’과 같은 문자열
  - 내장 함수(추후 설명)
  - 서브쿼리
  - 등 등

* ### 조건의 유형

  **동등 조건(= 기호 사용, Equality conditions)**

  대부분의 조건식에서 활용되는 기호, **‘컬럼명(열)’ = 표현/값** 형식으로 작성

  **actor 테이블에서 first_name이 ‘GRACE’인 배우(Actor)의 데이터 조회**

  ```sql
  SELECT * FROM actor WHERE first_name = 'GRACE';
  ```

  **부등 조건(!= 혹은 <> 기호 사용,  Inequality conditions)**

  **category 테이블에서 name이 Family가 아닌 모든 카테고리 조회**

  ```sql
  SELECT * FROM category WHERE name <> 'Family';
  ```

  **범위 조건(Range conditions)**

  조건식을 통해 해당 열의 값이 특정 조건과 같거나 큰지 와같은 특정 범위 내 조건에서의 필터링

  일반적으로 숫자나 시간 데이터로 작업할 때 주로 활용

  **rental 테이블에서 rental_date가 2005-05-25 이전에 빌려간 회원의 id와 대여 날짜를 조회**

  ```sql
  SELECT customer_id, rental_date FROM rental WHERE rental_date < '2005-05-25';
  ```

  **BETWEEN ~ AND연산자 - Between A AND B**

  해당 열의 데이터가 범위를 가질 때 활용, **영어 문법에서의** **“BETWEEN A AND B”와 동일**

  **rental 테이블에서 rental_date가 2005-05-24부터 2005-05-25 사이의 rental_date 열 조회**

  ```sql
  SELECT * FROM rental WHERE rental_date BETWEEN '2005-05-24' AND '2005-05-25';
  ```

  **BETWEEN 상한값 AND 하한값 으로 지정해야함**

  ```sql
  SELECT * FROM rental WHERE rental_date BETWEEN '2005-05-26' AND '2005-05-24';
  ```

  → Empty Set 반환

  **rental 테이블에서 rental_date가 2005-05-24 23시 정각부터 2005-05-24 자정까지 1시간 동안의 rental_date 열 조회**

  ```sql
  SELECT rental_date FROM rental 
  WHERE rental_date BETWEEN '2005-05-24 23:00:00' AND '2005-05-25';
  ```

  → 쿼리에 날짜(’2005-05-24’)까지만 명시할 경우, 시간은 기본적으로 자정으로 설정됨.

  **rental 테이블에서 rental_date가 2005-05-25 자정부터 2005-05-25 오전 1시까지 1시간 동안의 rental_date 열 조회**

  ```sql
  SELECT rental_date FROM rental WHERE rental_date WHERE rental_date BETWEEN '2005-05-25' AND '2005-05-25 01:00:00';
  ```

  payment **table에서 amount가 10.0부터 10.99 사이의 모든 payment 조회**

  ```sql
  SELECT * FROM payment WHERE amount BETWEEN 10.0 AND 10.99;
  ```

  → 숫자 값은 ‘’(Single quote, 홑 따옴표) 없이 쿼리 작성 가능  
    
* ### Null

  정해지지 않은 값, 해당 사항이 없음, 알려지지 않은 값 등을 나타낼 때 사용

  ex) 
  ```
  테이블에 값을 추가할 때 나중에 특정 조건에 따라 설정해야해서 미리 설정할 수 없는 필드
  ```
  Null의 특징

  1. null과 null이 서로 같을 수 없다.

  rental 테이블에서 customer_id가 155번인 대여기록 중 rental_id, customer_id, return_date 열만 조회

  ```sql
  SELECT rental_id, customer_id, return_date FROM rental WHERE customer_id = 155;
  ```

  rental 테이블에서 영화(film)를 반납하지 않은 대여기록 중 rental_id, customer_id, return_date 조회

  ```sql
  SELECT rental_id, customer_id, return_date FROM rental WHERE return_date = NULL;
  ```

  → return_date도 null이고, Null도 null이기 때문에 두 개의 null이 서로 같을 수 없다는 특징 때문에 해당되는 조건이 필터링(WHERE) 되지 않고 Empty set을 반환하게 됨

  rental 테이블에서 영화(film)를 반납하지 않은 대여기록 중 rental_id, customer_id, return_date 조회

  ```sql
  SELECT rental_id, customer_id, return_date FROM rental WHERE return_date IS NULL;
  ```

  → 해당 필드가 Null인지 확인하기 위해서는 **IS NULL** 연산자를 사용함

  rental 테이블에서 영화를 반납한 대여기록 중 rental_id, customer_id, return_date를 상위 50개만 조회

  ```sql
  SELECT rental_id, customer_id, return_date 
  FROM rental 
  WHERE return_date IS NOT NULL LIMIT 50;
  ```

  **→ IS NOT NULL 키워드 사용**

  rental 테이블에서 2005년 5월에서 8월 사이에 반납되지 않은 대여기록 중 rental_id, customer_id, return_date를 조회

  ```sql
  SELECT rental_id, customer_id, return_date
  FROM rental
  WHERE return_date NOT BETWEEN '2005-05-01' AND '2005-09-01';
  ```

  → 아까 조회한 null 데이터 기록은 포함되지 않았음

  null까지 포함하기 위해서는 별도의 조건을 작성해야함

  ```sql
  SELECT rental_id, customer_id, return_date
  FROM rental
  WHERE return_date IS NULL
  OR return_date NOT BETWEEN '2005-05-01' AND '2005-09-01';
  ```  
    
* ### 와일드 카드

  부분적으로 일치하는 문자를 찾고자 할 때 활용  
    
  customer 테이블에서 last_name의 두 번째 문자에는 A가, 네 번째 문자에는 T가 포함되고, 마지막 문자는 S로 끝나는 고객의 last_name과 first_name을 조회

  ```sql
  SELECT last_name, first_name
  FROM customer
  WHERE last_name LIKE '_A_T%S';
  ```
    
  customer 테이블에서 last_name이 Q로 시작하거나 Y로 시작하는 고객의 last_name, first_name 조회

  ```sql
  SELECT last_name, first_name 
  FROM customer
  WHERE last_name LIKE 'Q%' OR last_name LIKE 'Y%';
  ```
    
* ### 다중 테이블 연결 쿼리 JOIN Clause  

  address 테이블에서 주소를 가져오고, 동시에 customer 테이블에서 last_name과 first_name을 가져오기 위해서는 두 테이블의 연결(JOIN)이 필요함

  **외래 키(Foreign key) 개념을 활용하여 두 테이블에 공통적으로 존재하는 address_id 컬럼으로 두 테이블의 열(Column) 데이터를 하나로 연결(JOIN)**

  **단순한 방법**

  ```sql
  -- 상위 100개 행 조회
  SELECT c.first_name, c.last_name, a.address
  FROM customer c JOIN address a LIMIT 100;
  ```

  **과거에 사용하던 JOIN Query**

  ```sql
  SELECT c.first_name, c.last_name, a.address 
  FROM customer c, address a 
  WHERE c.address_id = a.address_id;
  ```

  → 각 테이블 customer와 address의 공통 컬럼인 address_id를 WHERE 절 내에 JOIN 조건을 기술함.

  **해당 Query의 첫 번째 단점**

  DBMS 벤더(Oracle, MySQL, SQL Server, PostgreSQL 등)마다 조금씩 다른 문법(Dialect, 방언)에 의해 호환이 어려움.

  ```sql
  SELECT c.first_name, c.last_name, a.address
  FROM customer c, address a
  WHERE c.address_id = a.address_id
  AND a.postal_code = 52137;
  ```

  **해당 Query의 두 번째 단점**

  WHERE 조건이 논리 연산자(AND, OR 등)에 의해 두 개 이상이 될 경우 어떤 조건이 JOIN 조건이고, 어떤 조건이 일반적인 필터링 조건인지 구분이 어려움.

  **ANSI 표준 문법(SQL92 버전)을 활용한 JOIN Query**

  ```sql
  SELECT c.first_name, c.last_name, a.address
  FROM customer c INNER JOIN address a -- JOIN 유형 및 조인 테이블 지정
  ON c.address_id = a.address_id -- 조인 조건 기술
  WHERE a.postal_code = 52137;
  ```

  → INNER는 default 이기 때문에 생략해도 동일한 결과가 출력됨
    
* ### 그룹화와 집계 Grouping And Aggregation   


  **테이블에서 특정 컬럼을 기준으로 데이터들을 묶어서 조회(Grouping)하고자할 때는 GROUP BY 키워드를 사용함.**

  **rental 테이블 기본 형태 조회**

  ```sql
  SELECT * FROM rental LIMIT 20;
  ```

  **rental 테이블에서 customer_id, rental_date열 데이터를 위에서부터 30행 조회**

  ```sql
  SELECT customer_id FROM rental LIMIT 30;
  ```

  **rental 테이블에서 customer_id를 그룹핑하여 조회**

  ```sql
  SELECT customer_id FROM rental GROUP BY customer_id;
  ```

  → 총 회원 수는 599명

  **rental 테이블에서 customer_id 및 각 customer가 대여(rental)한 횟수를 카운트하여 별도의 열로 조회**

  ```sql
  SELECT customer_id, count(rental_date) FROM rental GROUP BY customer_id;
  ```

  → count( )는 그룹핑된 customer_id의 행 수(599개)를 카운트하고, ( * )는 그룹핑된 customer_id 열에 각각 매칭되어있는 행 수를 셈

  **rental 테이블에서 customer_id 및 각 customer가 대여(rental)한 횟수를 카운트하여 대여한 횟수를 기준으로 오름차순하여 조회**

  ```sql
  SELECT customer_id, count(*) FROM rental GROUP BY customer_id ORDER BY 2 DESC;
  ```

  → customer_id가 148번인 회원이 46회로 가장 많이 대여, 318번 회원이 12번으로 가장 적게 대여하였음.

  **대여 횟수가 40번 미만인 데이터는 제외(필터링)하여 조회(잘못된 WHERE 절 사용 예시)**

  ```sql
  SELECT customer_id, count(*)
  FROM rental
  WHERE count(*) < 40
  GROUP BY customer_id;
  ```

  → ERROR 발생, 위 Query가 실행되는 순서상 WHERE 절이 적용되는 시점이 그룹핑되는 시점보다 먼저 적용되기 때문에 WHERE 절에서 count(*)를 참조 불가.

  **그룹핑한 열에 대한 필터링 조건은 별도의 키워드 HAVING을 사용해야함**

  **대여 횟수가 40번 미만인 데이터는 제외(필터링)하여 조회, 두번째 열인 count(*) 기준으로 정렬**
    
  
