# Java 
  
  #### [ 2022-07-28 ]  
  
  ## 목차  
  * #### [[  
    
      
---------------------------------------------------------------------------------------------------------------------------------------------------
    
* ### 객체 배열 (Array of Objects)  

  배열(Array)은 같은 자료형을 연속되게 사용하는 시스템이다.   
  그런데 자바는 객체지향프로그래밍으로 모든 프로그램을 객체를 중심으로 작성한다.   
  객체 역시 하나의 자료형이다. 그렇다면 객체도 배열로 만들 수 있나?  
  답은 만들 수 있다 였다.  
  ```java
  Animal[] animals = new Animal[4];
		Cat tom = new Cat();
		animals[0] = tom;
		animals[1] = new Dog();
		animals[2] = new Mouse();
		animals[3] = new Cat();
  ```  
    
  다음과 같은 예제가 있을때, 우리는 animal이라는 객체 배열에 각각 dog 클래스, mouse클래스, cat 클래스를 인덱스로 담게 됐다.  
  그렇다면 여기서 한가지 궁금증이 생긴다.  
  Animal이라고 하는 상위 데이터 타입을 가졌기 때문에 만약 ```sing()``` 이라는 오버 라이딩된 메소드가 있다면,   
  각 하위 클래스, 즉 각각의 인덱스들이 가지고 있는 메소드로 호출이 되지 않을까? 한번 해보자.  
    
  ```java
  for (int i = 0; i < animals.length; i++) {
	    animals[i].sing();
	}
  ```
  결과는 이러했다.  
  ``` 
  고양이는 야옹~
  강아지는 멍멍~
  쥐는 찍찍
  고양이는 야옹~
  ```  
    
  각각의 하위 클래스에 오버라이딩 해놓은 ``` sing() ```이라는 메소드가 호출된 것을 확인 할 수 있었다.  
    
* ### 텍스트 파일 읽기  

  그렇다면 이번엔 텍스트 파일로 된 데이터를 입력받아 배열로 관리 해보도록 하겠다.  
  우선 내용이 이러한 tsv 파일을 만들어 줬다.  
  ```
  1	숙제하기	2022-03-05	수학,영어 숙제
  2	조깅하기	2022-03-07	공원에서 1시간 동안 조깅을 한다
  3	놀기	2022-03-02	친구랑 논다.
  ```
  그리고 이 파일을 읽어오기 위해 Path라는 인터페이스 활용했다.  
  ```java
  static String RESOURCES = "src/resources/";
	
  public static void main(String[] args) throws IOException {
  // 파일을 읽어들이기 위해서는 Path라는 인터페이스 활용

    Path filePath = Paths.get(RESOURCES + "todo-data-simple.tsv");
    long numberOfLines = Files.lines(filePath).count();

    int rows = (int)numberOfLines;
  ```
  Path라는 인터페이스를 활용해 src/resources/라는 폴더 안에 있는 ```todo-data-simple.tsv```라는 파일을 읽어와 filePath라는 변수에 담았다.  
  그리고 ```Files.lines().conut();```라는 메소드를 활용해 filePath변수에 담겨있는 데이터의 줄이 몇줄인지 카운트했고,  
  그를 long 데이터 타입의 numberOfLines라는 변수에 담아 이를 int로 형변환한 값을 rows라는 변수에 담았다.  
  ```java
  // 할 일 번호들
  int[] todoNumbers = new int[rows];
		
	// 할일 제목들
	String[] todoTitles = new String[rows];
		
	// 할일 내용들
	String[] todoDescriptions = new String[rows];
		
	// 할일 날짜들
	LocalDate[] todoDueDate = new LocalDate[rows];
		
	List<String> lines = Files.readAllLines(filePath);
	```
  이로서 우리는 배열의 length를 어느정도로 줄건지 rows라는 변수를 이용해줄 수 있게 됐다.  
  각자 역할에 맞게 배열을 만들어 주었고 이는 잠시 후 활용 하려 한다.  
  우선 ```Files.readAllLines(filePath);```를 이용해 filePath의 모든 라인을 읽어 lines라는 Arraylist에 담았다.
  ```java
  int index = 0;
  for (String line : lines) { // lines 리스트 내에 있는 요소 1개(한 줄)가 line이라는 변수에 할당
      String[] columns = line.split("\t"); // tab으로 각각 구분된 데이터들을 분리해서 문자열 배열에 순서대로 할당


      // 읽어들인 각각의 데이터
      int id = Integer.parseInt(columns[0]);
      String title = columns[1];
      LocalDate dueDate = LocalDate.parse(columns[2]);
      String description = columns[3];

      // 배열에 각각 추가
      todoNumbers[index] = id;
      todoTitles[index] = title;
      todoDescriptions[index] = description;
      todoDueDate[index] = dueDate;
      index++;
	}
		
	for (int i = 0; i < index; i++) {
		System.out.printf("%d번 째로 해야할 일은 %s이고, 할일 내용은 %s이다 기한은 %s까지 입니다. \n",todoNumbers[i],todoTitles[i],todoDescriptions[i],todoDueDate[i]);
	}
  ```  
    
  반복문 for-each를 통해 lines 리스트 안에 있는 요소 1개(한줄)이 line 이라는 변수에 할당 된다.  
  그 후 tab으로 구분된 데이터들을 분리해서 columns라는 배열에 담아 각각의 데이터를 변수에 담아준다.  
  ```columns[0]``` 는 1이 ```id```라는 변수에 담길것이고, ```columns[1]```는 숙제하기, ```columns[3]``` 수학,영어 숙제가 될것이다.  
  그럼 각각의 변수에 담은 것을 배열에 각각 추가해주는 반복문이기때문에, 한줄이 끝나면 다시금, 다음줄에서 반복을 해줄 것이다.  
  그렇게 되면, 각각의 배열에는 할 일 번호들, 제목들, 내용들, 날짜들에 따라 목적에 맞게 배열에 담겨 활용할 수 있는 것이다.  
  위 출력문의 결과를 보자면  
  ```
  1번 째로 해야할 일은 숙제하기이고, 할일 내용은 수학,영어 숙제이다 기한은 2022-03-05까지 입니다. 
  2번 째로 해야할 일은 조깅하기이고, 할일 내용은 공원에서 1시간 동안 조깅을 한다이다 기한은 2022-03-07까지 입니다. 
  3번 째로 해야할 일은 놀기이고, 할일 내용은 친구랑 논다.이다 기한은 2022-03-02까지 입니다. 
  ```
  이렇게 출력 된다.  
  위 예제는 객체가 아닌 기본 자료혐(Primitive)을 그대로 활용 중이라 관리가 불편하다. 
  .게다가 메인 화면에 해당하는 App.java에서 데이터를 파싱(parsing, 다른 데이터 타입으로 변환한다.), 연산, 출력 처리를 모두 다 하고 있다.  
  이는 하나의 클래스(App.java)에서 여러가지 역할들(파실, 연산, 출력 등등)을 한 곳에서 다 담당하고 있다는 의미(Godclass)이다.  
  유지보수성이 떨어지니 이를 클래스를 활용해 관리 해보자.   
    
* ###  텍스트 파일 읽기 (class ver)  

  생각보다 간단했다. 우선 Todo라는 클래스를 만들어준다.  
  ```java
  package dev.todo.model;

  import java.time.LocalDate;

  public class Todo {
    private int id;
    private String title;
    private LocalDate duedate; 
    private String description;
    private boolean isCompleted;

    // 모든 필드를 매개 변수로 받는 생성자
    public Todo(int id, String title, LocalDate duedate, String description) {
        super();
        this.id = id;
        this.title = title;
        this.duedate = duedate;
        this.description = description;
        this.isCompleted = false; // 기본값 false
      }

      public int getId() {
        return id;
      }

      public void setId(int id) {
        this.id = id;
      }

      public String getTitle() {
        return title;
      }

      public void setTitle(String title) {
        this.title = title;
      }

      public LocalDate getDuedate() {
        return duedate;
      }

      public void setDuedate(LocalDate duedate) {
        this.duedate = duedate;
      }

      public String getDescription() {
        return description;
      }

      public void setDescription(String description) {
        this.description = description;
      }

      @Override
      public String toString() {
        return "Todo [id=" + id + ", title=" + title + ", duedate=" + duedate + ", description=" + description + "]";
      }

    }
  ```  
    
  ```java
  static String RESOURCES = "src/resources/";
	
	public static void main(String[] args) throws IOException {		
		
		// 1. 파일 입출력 기능(역할)
		Path filePath = Paths.get(RESOURCES + "todo-data-simple.tsv");
		long numberOfLines = Files.lines(filePath).count();
		int rows = (int)numberOfLines;
		
		List<String> lines = Files.readAllLines(filePath);
  ```  
  이 부분 까지는 똑같았다.  
  다음은 이러 했다.  
  ```java
  // todo 데이터가 3개 있는데, Todo 객체를 담을 Todo타입의 배열
	// 데이터 타입[] 변수명 = new 데이터 타입[배열의 길이];
	Todo[] todos = new Todo[rows];
		
	// 반복문을 통해 읽어들인 각각의 todo를 todos 배열 요소에 추가 
	int index = 0;
	for (String line : lines) { // lines 리스트 내에 있는 요소 1개(한 줄)가 line이라는 변수에 할당
		String[] columns = line.split("\t");
			
		int id = Integer.parseInt(columns[0]);
		String title = columns[1];
		LocalDate dueDate = LocalDate.parse(columns[2]);
		String description = columns[3];
			
		// int, String, LocalDate 타입들을 하나의 커스텀 타입인 Todo로 묶어서 관리
		Todo todo = new Todo(id,title,dueDate,description); 
		todos[index] = todo; // [Todo todo1, Todo todo2, Todo todo3];
			
		index++;
	}
  ```  
    
  달라진 부분은 todo 타입으로 된 배열을 이용해 관리하고 있다는 점이다.  
  정리하자면 다음과 같다.  
    
      1. Todo 데이터들을 하나로 모아서 관리해주는 별도의 클래스 Todo 생성.  
      
      2. 생성한 클래스(Todo)를 활용하여 데이터를 관리한다.  
      
      3. 배열을 활용하여 읽은 데이터들을 Java에서 관리  
      
      4. 할 일 번호로 하나의 Todo를 조회하는 기능을 구현  
  
  개선된 부분은 기본 자료형들(int, String, LocalDate..)을 하나의 참조 자료형(Todo)으로 모아서 관리하기 때문에  
  raw data(날 것 그대로의 데이터)를 건들지 않고, 별도의 클래스(Todo)로 관리하게 된다. 아직까지 한계점은   
  
        1. 연전히 App.java 한 곳에서 다양한 역할을 수행하고 있음  
	          1) 데이터의 입출력 및 파싱(parsing)처리  
	          2) 데이터의 출력 결과를 보여주는 View 기능  
	          3) 어떤 데이터를 조회할지 등을 결정하는 Controller 기능 등등  
	            
  이를 더 개선할 방법은 차후 보도록하겠다.  
