# SQL  
  
  #### [ 2022-08-09 ]  
    
  ## 목차  
  * #### [[ 테이블의 생성 과정 ]](#테이블의-생성-과정)  
  * #### [[ INSERT 레코드 추가 ]](#insert-레코드-추가)  
  * #### [[ UPDATE 레코드 수정 ]](#update-레코드-수정)  
  * #### [[ DELETE 레코드 삭제 ]](#delete-레코드-삭제)  
      
-----------------------------------------------------------------------------------------------------------------------------------------------------  
   
* ### 테이블의 생성 과정   

  테이블의 생성 과정은 설계 → 정제 → 테이블 작성 및 생성 순으로 진행된다.  
    
  * #### 설계(Design)  

    **사람에 대한 정보를 담을 테이블 정의**

    **“한 사람을 간단하게 묘사”**

    이름 - name

    생일 - birth_date

    주소 - address

    좋아하는 음식 - favorite_foods

  * #### 정제(Refinement)  

    name 열은 이름과 성으로 구성된 복합 객체이다.    
    여러 사람이 동일한 이름, 눈동자, 색, 생년월일 등을 가질 수 있기 때문에 Person 테이블에 고유성을 보장하는 열을 추가해야한다.    
  
    address 열은 거리, 도시, 국가 등으로 구성된 복합 객체이다.   
  
    favorite_foods 열은 0개 혹은 1개 이상의 독립적인 항목을 포함하는 목록(enumeration) 형태이다.  
    특정 음식이 어떤 사람이 좋아하는 음식인지 구분시킬 수 있도록 이 열에 대한 별도의 테이블을 작성하는 것이 좋을듯 하다.    

    정규화 진행 후 테이블은 다음과 같다.  
      
    ```
    열                        자료형
    person_id                 smallint(unsigned)
    first_name                varchar(20)
    last_name                 varchar(20)
    birth_date                date
    street                    varchar(30)
    city                      varchar(20)
    state                     varchar(20)
    coutry                    varchar(20)
    postal_code               varchar(20)
    ```
      
    고유성을 보장하는 기본 키 person_id 추가해주고, favorite_food를 담을 별도의 테이블 생성해준다.  
      
    ```
    열                        자료형
    person_id                 smallint(unsigned)
    food                      varchar(20)
    ```
    
  * #### 테이블 작성 및 생성  

    ##### 데이터베이스(Schema) 생성

    ```sql
    -- CREATE DATABASE 데이터베이스명;

    CREATE DATABASE testdb;
    ```

    ##### 현재 사용 중인 database 확인

    ```sql
    SELECT database();
    ```

    ##### 다른 Database로 변경

    ```sql
    -- use 데이터베이스명;

    USE testdb;
    ```

    ##### SQL statement(DDL) 작성

    ```sql
    CREATE TABLE person ( -- CREATE TABLE 테이블명
      person_id SMALLINT UNSIGNED, -- 필드 데이터타입,(comma로 구분)
      first_name VARCHAR(20),
      last_name VARCHAR(20),
      birth_date DATE,
      street VARCHAR(20),
      state VARCHAR(20),
      country VARCHAR(20),
      postal_code VARCHAR(20),
      CONSTRAINT pk_person PRIMARY KEY (person_id) -- 기본키로 사용하곘다는 제약조건 명시
      -- CONSTRAINT 제약조건이름 PRIMARY KEY (필드이름)
    );
    ```

    **생성된 테이블 조회**
    ```sql
    DESC person;
    ```
    
    **favorite_food 테이블 생성**

    ```sql
    CREATE TABLE favorite_food (
      person_id SMALLINT UNSIGNED,
      food VARCHAR(20),
      CONSTRAINT pk_favorite_food PRIMARY KEY (person_id, food)
    );
    ```

    한 사람은 좋아하는 음식이 여러개일 수 있기 때문에 person_id와 food 둘을 합쳐서(복합키) 기본키를 두 개로 구성

    **생성된 테이블 정보 조회**

    ```sql
    DESC favorite_food
    ```

    **person_id를 외래키 제약조건으로 추가하는 것을 깜빡하였을 경우,**

    CONSTRAINT fk_favorite_food_person_id FOREIGN KEY (person_id) REFERENCES person (person_id)

    favorite_food 테이블의 person_id열은 외래키로 적용

    **외래키 제약조건 추가**

    작성 방식

    ```sql
    ALTER TABLE 테이블 명 ADD CONSTRAINT 제약조건 이름 FOREIGN KEY(컬럼 명)
    REFERENCES 부모테이블 명 (PK 컬럼명);
    ```

    ALTER TABLE favorite_food -- favorite food 테이블 정보 수정하겠습니다.
    ADD CONSTRAINT fk_favorite_food_person_id -- 제약조건 추가할건데 이름은 fk_favorite~이다.
    FOREIGN KEY (person_id) -- 외래키로 지정할 필드는 person_id 필드다.
    REFERENCES person (person_id) -- 외래키로 지정한 필드 person_id필드는 person 테이블의 person_id를 참조다.

    ```sql
    ALTER TABLE favorite_food ADD CONSTRAINT fk_favorite_food_person_id FOREIGN KEY (person_id)
    REFERENCES person (person_id);
    ```
    
* ### INSERT 레코드 추가  

  INSERT 키워드를 활용하여 실제 Data를 삽입(INSERT)할 수 있다.  
  person_id같은 경우에는 기본 키(primary key)이기 때문에 1,2,3 ~ 같은 자동으로 증가하는 값(auto_increment)을 설정해두는 것이 일반적인 방식이다.  

  ALTER 키워드를 활용하여 table의 정보 변경
  ```sql
  ALTER TABLE person MODIFY person_id AUTO_INCREMENT;
  ```

  → 에러 발생, favorite_food 테이블에 외래키 제약조건이 걸려있기 때문에 해당 제약조건 비활성화 후 다시 적용

  외래키 제약조건 비활성화

  ```sql
  SET foreign_key_checks=0; -- 비활성화

  ALTER TABLE person MODIFY person_id SMALLINT UNSIGNED AUTO_INCREMENT;

  SET foreign_key_checks=1; -- 활성화
  ```

  INSERT 키워드 기본 Syntax

  ```sql
  INSERT INTO 테이블명
  (컬럼명, 컬럼명 ...)
  VALUES (실제 값, 실제 값, ...);
  ```

  INSERT 키워드를 활용하여 데이터 삽입

  ```sql
  INSERT INTO person
    (first_name, last_name, eye_color, birth_date, street)
  VALUES ('STERINE', 'LEE', 'BR', '1999-05-02');
  ```

  → ERROR 1136 (21S01): Column count doesn't match value count at row 1

  INSERT 절 뒤에 지정한 컬럼 (first_name, last_name, eye_color, birth_date, street)의 개수와

  VALUES로 지정한 실제 값들의 수가 일치하지 않음.

  ```sql
  INSERT INTO person
    (first_name, last_name, eye_color, birth_date, street)
  VALUES ('STERINE', 'LEE', 'TR', '1999-05-02', 'MILD TASTE STREET');
  ```

  → ERROR 1265 (01000): Data truncated for column 'eye_color' at row 1

  eye_color로 허용 가능한 값의 범위를 벗어남

  ```sql
  INSERT INTO person
    (first_name, last_name, eye_color, birth_date, street)
  VALUES ('STERINE', 'LEE', 'GR', '1999-05-02', 'MILD TASTE STREET');
  ```

  → Query OK, 1 row affected (0.01 sec)

  날짜값은 문자열로 작성하였지만, MySQL에서 지원하는 시간 자료형 포맷(format)에만 일치시켜서 작성하면 자동으로 문자열을 날짜타입으로 변환하여 데이터베이스에 저장해줌
  
  ```sql
  INSERT INTO favorite_food (person_id, food) VALUES (1, 'pizza');
  ```

  → Query OK, 1 row affected (0.02 sec)

  ```sql
  INSERT INTO favorite_food (person_id, food) VALUES (2, 'salad');
  INSERT INTO favorite_food (person_id, food) VALUES (3, 'ace');
  ```

  → ERROR 1452 (23000): Cannot add or update a child row: a foreign key constraint fails (`mydb`.`favorite_food`, CONSTRAINT `fk_favorite_food_person_id` FOREIGN KEY (`person_id`) REFERENCES `person` (`person_id`))

  다른 person 데이터 추가

  ```sql
  INSERT INTO person
    (first_name, last_name, eye_color, birth_date, street)
  VALUES ('LANA', 'DEL REY', 'BR', '1999-02-04', 'BLUE JEAN STREET');
  ```

  데이터 삽입

  ```sql
  INSERT INTO favorite_food (person_id, food) VALUES (2, 'salad');
  INSERT INTO favorite_food (person_id, food) VALUES (2, 'ace');
  ```
  
* ### UPDATE 레코드 수정  
  
  UPDATE 키워드 기본 Syntax

  ```sql
  UPDATE 테이블명
  SET 수정할 필드명 = '수정할 값',
  [수정할 필드명 = '수정할 값'], ...
  [WHERE Exp];
  ```

  UPDATE 키워드를 활용하여 특정 레코드의 데이터를 갱신

  ```sql
  UPDATE person
  SET street = 'GREEN TEA STREET',
    state = 'MA',
    country = 'USA',
    postal_code = '15232';
  ```

  → WHERE 키워드를 사용하지 않았기 때문에 모든 열의 데이터가 지정한 값으로 바뀜

  WHERE 키워드를 추가하여 특정 레코드의 데이터 갱신

  ```sql
  UPDATE person
  SET street = 'SPIDER STREET',
    state = 'NA',
    country = 'USA',
    postal_code = '14231'
  WHERE person_id = 2;
  ```
  
* ### DELETE 레코드 삭제  

  DELETE 키워드를 사용하여 해당 레코드를 삭제 할 수 있다.  
    
  person 테이블의 레코드 삭제

  ```sql
  DELETE FROM person;
  ```

  → ERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (mydb.`favorite_food`, CONSTRAINT `fk_favorite_food_person_id` FOREIGN KEY (`person_id`) REFERENCES `person` (`person_id`))

  ALTER 키워드를 사용하여 기존의 제약조건 제거

  ```sql
  -- ALTER TABLE 테이블명 DROP FOREIGN KEY 외래키 제약조건명

  ALTER TABLE favorite_food DROP FOREIGN KEY fk_favorite_food_person_id;
  ```

  부모 테이블(person)의 데이터 삭제 시 자식 테이블(favorite_food)의 데이터도 같이 제거되도록 CASCADE 속성 설정

  ```sql
  -- ALTER TABLE 테이블명 ADD CONSTRAINT 외래키 제약조건명 FOREIGN KEY 자식속성
  -- REFERENCES 부모테이블명(자식 속성이 참고할 부모속성) ON DELETE CASCADE;

  ALTER TABLE favorite_food 
  ADD CONSTRAINT FOREIGN KEY (person_id) 
  REFERENCES person(person_id)
  ON DELETE CASCADE;
  ```

  → 외래키 이름을 따로 작성하지 않으면 기본으로 생성됨

  다시 레코드 삭제

  ```sql
  DELETE FROM person;
  ```

  → 별도의 WHERE 키워드를 사용하지 않으면 전체 행이 삭제된다.  
  
