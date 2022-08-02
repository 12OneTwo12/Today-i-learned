# Java 
  
  #### [ 2022-08-02 ]  
  
  ## 목차  
  * #### [[ 객체 지향 언어의 4대 특징 ]](#객체-지향-언어의-4대-특징)  
  * #### [[ 텍스트 파일 읽기 ]](#텍스트-파일-읽기)  
  * #### [[ 텍스트 파일 읽기 개선 ]](#텍스트-파일-읽기-개선)  
    
      
---------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### 객체 지향 언어의 4대 특징  

  * #### 캡슐화 (Encapsulation)  
    
        캡슐화는 객체지향에서 데이터 구조와 데이터를 다루는 방법을 결합시켜 묶는다.  
        데이터를 은닉하고 그 데이터를 접근하는 기능을 노출시키지 않는다는 의미이다.  
        말 그대로 데이터를 캡슐에 감싸듯 감싸 노출시키지 않는 것을 이야기 한다.
        
  * #### 상속 (Inheritance)    
   
        상속이란 상위개념의 특징을 하위 개념이 물려받는 것을 의미한다. 
        하나의 클래스가 가지고 있는 특징 (데이터와 함수)들을 그래도 다른 클래스가 물려주고자 할 때 상속의 특징을 사용한다.
        우리가 그전에 살펴본 "확장"과 "재사용"의 개념이다.
        
  * #### 추상화 (Abstraction)    
    
        추상화란 객체들의 공통적인 특징(속성과 기능)을 뽑아내는 것이다.
        인터페이스로 클래스들의 공통적인 특성(변수, 메소드)들을 묶어 표현하는 것이다.
        
  * #### 다형성(polymorphism)  
    
        다향성이란 다양한 형태로 표현이 가능한 것을 의미한다.
        다형성(polymorphism)이란 하나의 객체가 여러 가지 타입을 가질 수 있는 것을 의미한다.
        자바에서는 이러한 다형성을 부모 클래스 타입의 참조 변수로 자식 클래스 타입의 인스턴스를 참조할 수 있도록 하여 구현하고 있다.
        다형성은 상속, 추상화와 더불어 객체 지향 프로그래밍을 구성하는 중요한 특징 중 하나이다.  
        
* ### [텍스트 파일 읽기](https://github.com/12OneTwo12/TIL/blob/main/Java/readme6.md#%ED%85%8D%EC%8A%A4%ED%8A%B8-%ED%8C%8C%EC%9D%BC-%EC%9D%BD%EA%B8%B0)  
  
  이제는 저번에 했던 텍스트 파일 읽기를 좀 더 개선 해보려 한다.  
  저번의 한계점은 여전히 App.java 한 곳에서 데이터의 입출력 및 파싱(parsing)처리, 데이터의 출력 결과를 보여주는 기능,  
  어떤 데이터를 조회할지 등을 결정하는 Controller 기능 등등의 다양한 역할을 수행하고 있다.  
  이를 좀더 개선할 수 있는 방법을 이제는 활용 할 수 있을 거 같다.  
  
  우선 읽어들인 데이터를 parsing해주는 코드를 별도의 클래스 TodoTSVParser.java로 분리하고,  
  App.java에서 데이터의 출력 결과를 보여주는 기능들도 별도의 메서드로 분리해보자.  
    
  ```java
  package dev.todo;

  import java.io.IOException;
  import java.nio.file.Files;
  import java.nio.file.Path;
  import java.nio.file.Paths;
  import java.time.LocalDate;
  import java.util.Arrays;
  import java.util.List;

  import dev.todo.model.Todo; // 패키지가 서로 다르면 import

  public class App {
    
    static String RESOURCES = "src/resources/";

    public static void main(String[] args) throws IOException {		

      // 1. 파일 입출력 기능(역할)
      Path filePath = Paths.get(RESOURCES + "todo-data-simple.tsv");
      long numberOfLines = Files.lines(filePath).count();
      int rows = (int)numberOfLines;

      List<String> lines = Files.readAllLines(filePath);

      Todo[] todos = new Todo[rows];

      int index = 0;
      for (String line : lines) { 
        String[] columns = line.split("\t");

        int id = Integer.parseInt(columns[0]);
        String title = columns[1];
        LocalDate dueDate = LocalDate.parse(columns[2]);
        String description = columns[3];
        
        Todo todo = new Todo(id,title,dueDate,description); 
        todos[index] = todo; // [Todo todo1, Todo todo2, Todo todo3];

        index++;
      }

      // 전체 Todos 조회
      System.out.println(todos);
      for (int i = 0; i < todos.length; i++) {
        System.out.println(todos[i]);
      }

      System.out.println(Arrays.toString(todos));

      // 할 일 번호(id)로 하나의 Todo를 조회
      int todoNumber = 2;
      for(Todo todo : todos) { 
        if(todo.getId() == todoNumber) System.out.println(todo);
      }
    }

  }
  ```
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
  우선 저번에 작성 했던 코드는 이러했다. 여기서 Todo클래스는 손댈 필요 없을 것이고, TodoTSVParser 클래스를 만들어보자.  
  TodoTSVParser 클래스에는 본문의 
  ```java
  int index = 0;
  for (String line : lines) { 
	  String[] columns = line.split("\t");
			
		int id = Integer.parseInt(columns[0]);
		String title = columns[1];
		LocalDate dueDate = LocalDate.parse(columns[2]);
		String description = columns[3];
			
		Todo todo = new Todo(id,title,dueDate,description); 
		todos[index] = todo; // [Todo todo1, Todo todo2, Todo todo3];
			
		index++;
	}
  ```  
    
  이 부분을 TodoTSVParser 클래스로 구동 할 수 있게 만들어 보자.  
  어떻게 구현해야 할까?  
  우선 TodoTSVParser에 Todo 타입의 값을 반환하고 lines을 인자값으로 받는 메소드를 만들어야 할것 같다.  
    
  ```java
  public Todo[] parseFromTSV(List<String> lines) {}
  ```  
    
  이렇게 되면 속을 채우는 코드만 만들면 되는데, 만든다고 할 것 없이 원래 App.java가 가지고 있던 위 코드를 붙여 가져와 주면 될 것 같다.  
  ```java
  public Todo[] parseFromTSV(List<String> lines, int rows) {
		int index = 0;
		Todo[] todos = new Todo[rows];
		for (String line : lines) {
			String[] columns = line.split("\t");

			int id = Integer.parseInt(columns[0]);
			String title = columns[1];
			LocalDate dueDate = LocalDate.parse(columns[2]);
			String description = columns[3];

			Todo todo = new Todo(id, title, dueDate, description);
			
			todos[index++] = todo; 
		}
		return todos;
	}
  ```  
  이렇게 되면 그 전의 코드와 달라진 점은 그저 parseFromTSV메서드 안에서 사용하기 위해 todos라는 Todo타입의 배열을 선언해준 것과
  parseFromTSV 메서드 값으로 todos배열을 return 해준게 전부이다.  
  ```java
  TodoTSVParser parser = new TodoTSVParser();
	Todo[] todos = parser.parseFromTSV(lines, rows);
  ```
  그렇다면 우리는 App.java에서 인스턴스를 생성하고 호출하게 되면, 우리가 원하는 결과 값을 얻을 수 있는 것이다.  
  한 가지 더 나아가서 parseFromTSV 메드를 두 가지 부분으로 나눌 수 있을 것 같다.  
  한 줄만 파싱하는 메서드와 파싱된 한 줄의 데이터를 배열에 추가하는 메서드로.  
    
  ```java
  public class TodoTSVParser {

	// 한줄만 파싱하는 메서드
	private Todo parseFromTSV(final String line) {
		
		String[] columns = line.split("\t");
		
		int id = Integer.parseInt(columns[0]);
		String title = columns[1];
		LocalDate dueDate = LocalDate.parse(columns[2]);
		String description = columns[3];
		
		Todo todo = new Todo(id,title,dueDate,description);
		return todo;
	}
	
	// 파싱된 한 줄의 데이터를 배열에 추가
	public Todo[] parseLinesFromTSV(List<String> lines, int rows) {
				
		Todo[] todos = new Todo[rows];
		
		int index = 0;
		for (String line : lines) {
			todos[index] = parseFromTSV(line);
			index++;
		}
		
		return todos;
		
	}
  ```  
  이렇게 나누어 개선하였고 이를 App.java에서 호출하게 되면 이렇게 된다.  
  ```java
  package dev.todo;

  import java.io.IOException;
  import java.nio.file.Files;
  import java.nio.file.Path;
  import java.nio.file.Paths;
  import java.util.Arrays;
  import java.util.List;

  import dev.todo.data.TodoTSVParser;
  import dev.todo.model.Todo; 

  public class App {

    private static final String RESOURCES = "src/resources/";

    public static void main(String[] args) throws IOException {		

      final Path filePath = Paths.get(RESOURCES + "todo-data-simple.tsv");
      long numberOfLines = Files.lines(filePath).count();
      int rows = (int)numberOfLines;

      List<String> lines = Files.readAllLines(filePath);

      TodoTSVParser parser = new TodoTSVParser();
      Todo[] todos = parser.parseLinesFromTSV(lines, rows);

      // 전체 Todos 조회
      findAll(todos);

      System.out.println(findById(todos, 3));

    }

    public static void findAll(Todo[] todos) {
      for (int i = 0; i < todos.length; i++) {
        System.out.println(todos[i]);
      }
    }

    public static Todo findById(Todo[] todos,int todoNumber) {

      for(Todo todo : todos) { 
        if(todo.getId() == todoNumber) return todo;
      }
      return null;
    }
  }
  ```  
    
  아래 ```findAll```메서드와 ```findById```메서드를 통해 출력 또한 다른 클래스에서 구현할 수 있도록 만들었다.  
  이를 통해 데이터를 파싱하는 부분을 별도의 클래스로 관심사(역할)를 분리함으로써 관리가 용이해졌다.  
    
  데이터를 파싱한느 부분을 별도의 클래스 분리하였지만,  
  여전히 메인 화면에 해당하는 App.java에서 출력,연산 처리 등을 전부 한 곳에서 수행 중이다.  
  조금 더 개선 해보도록 하자.  
    
  todo 등록 기능(파일 쓰기)을 별도의 클래스 TodoTSWriter에 작성(구현)해보고,  
  배열을 컬렉션(Collection)으로 변경해보자.  
    
* ### 텍스트 파일 읽기 개선  

  그렇다면 컬렉션이란 무엇일까?  
  전통적으로 많은 양의 데이터를 처리하기 위해서는 배열을 이용했다.  
  그러나 배열은 자료형이 같아야 하고 또 크기가 고정되어 있어 자료의 추가, 삭제하기에는 불편한 점이 많다.  
  우리가 배열을 선언할때 length를 어떻게 줄지 정해야 하는 것과 같이 말이다.  
    
  이를 보완하기 위해 자바는 "동적배열"의 개념인 컬렉션 프레임워크를 제공한다.  
  컬렌션프레임워크는 어떤 자료형이라도 담을 수 있고 또, 자료의 추가, 삭제가 자유로워 데이터 크기가 자료를 담는 만큼 혹은 삭제하는 만큼 크기가 변화한다.  
  종류는 Set, List, Map이 대표적인데, 나는 List를 써보려 한다.  
    
  ```java
	final Path filePath = Paths.get(RESOURCES + "todo-data-simple.tsv");
	List<String> lines = Files.readAllLines(filePath);
		
	TodoTSVParser parser = new TodoTSVParser();
	List<Todo> todos = parser.parseLinesFromTSV(lines);
  ```  
  우선 파일의 줄 길이를 알아내기 위한 ```Files.lines(filePath).count();``` 부분을 바꿔줬다.  
  이에 따라 당연히 출력을 담당하는 메서드의 파라미터도 변경해줬다.  
  ```java
  public static void findAll(List<Todo> todos) {
		for (int i = 0; i < todos.size(); i++) {
			System.out.println(todos.get(i));
		}
	}
	
	public static Todo findById(List<Todo> todos,int todoNumber) {
		
		for(Todo todo : todos) { 
			if(todo.getId() == todoNumber) return todo;
		}
		return null;
	}
  ```  
  이로써 배열의 길이를 변수에 담아 값으로 줘야하는 번거로움은 사라졌다.  
  그리고 당연하게도 이와 연관된 TodoTSVParser클래스도 수정해준다.  
  ```java
  public List<Todo> parseLinesFromTSV(List<String> lines) {
		List<Todo> todos = new ArrayList<>(); // 가변 길이 배열
		for (String line : lines) {
			todos.add(parseFromTSV(line));
	  }
		
	  return todos;
  }
  ```  
  ```.add```와 ```for```를 통해 인덱스에 하나하나 담는 역할을 해준다.  
  그 후 우리가 개선하려고 했던, 등록 기능( 파일 쓰기 ) 역할을 할 수 있는 별도의 클래스 TodoTSVWriter를 구현 해주자. 먼저  
  ```java
  public boolean save(String RESOURCES, Path filePath, Todo newTodo) {} // public boolean save(파일 경로, 파일 이름, 새롭게 등록할 데이터){}
  ```  
  먼저 위 메서드를 TodoTSVWriter에 만들어주고 Todo newTodo에 새로 입력할 데이터 값을 주기 위해 Todo클래스에 생성자를 하나 만들어 준다.  
  ```java
  public Todo(String title, LocalDate duedate, String description) {
		this.title = title;
		this.duedate = duedate;
		this.description = description;
	}
  ```
  제목과, 날짜, 세부사항만들 받을 생성사를 만들어주고 App.java에 새로 입력할 데이터 값을 만들어 준다.  
  ```java
  Todo newTodo = new Todo("산책하기", LocalDate.of(2022, 08, 02), "강아지와 산책한다.");
  ```  
  그럼 ```save()```의 인자값은 다 모인 것 같다.  
  위 인자값들을 통해 tvs파일에 todo 데이터 등록하는 코드를 작성만 하면 된다.  
  FileOutputStream을 이용했다.  
    
  ```java
  public class TodoTSVWriter {

    // 새로운 Todo 등록
    public boolean save(String RESOURCES, Path filePath, Todo newTodo) {
      // todo-data-simple.txt파일에 todo 데이터 등록하는 코드 작성 예정

      try {
        FileOutputStream fileOutputStream = new FileOutputStream(RESOURCES + "todo-data-simple.tsv", true);
        OutputStreamWriter outputStreamWriter = new OutputStreamWriter(fileOutputStream, "UTF-8");
        BufferedWriter bufferedWriter = new BufferedWriter(outputStreamWriter);

        long numberOfLines = Files.lines(filePath).count();
        int rows = (int)numberOfLines; // 등록하기 전의 현재 데이터의 행 수

        rows++; // 새롭게 등록할 데이터의 id 번호
        bufferedWriter.newLine(); // 한줄 내려
        bufferedWriter.write(rows + "\t"); // 할일 번호 먼저 쓰고, 탭으로 한 칸 띄어

        // 추가할 Todo 내용을 메서드 밖에서 받은 newTodo 객체를 활용하여 추가
        bufferedWriter.write(newTodo.getTitle() + "\t");
        bufferedWriter.write(newTodo.getDuedate() + "\t");
        bufferedWriter.write(newTodo.getDescription() + "\t");

        bufferedWriter.close();
        outputStreamWriter.close();
        fileOutputStream.close();

        // 등록 전의 데이터의 행 수가 등록 후의 행 수보다 더 적을 경우(등록 성공)
        if (numberOfLines < Files.lines(filePath).count()) {
          return true;
        }

      } catch (IOException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
      }

      return false;
    }

  }
  ```  
  이 후 App.java에 ```save``` 메서드를 호출해주기만 하면 될 것 같다.  
  ```java
  TodoTSVWriter writer = new TodoTSVWriter();
  Todo newTodo = new Todo("산책하기", LocalDate.of(2022, 04, 05), "강아지와 산책한다.");
  writer.save(RESOURCES, filePath, newTodo);
  ```  
    
  이로써 배열이 컬렉션(List 인터페이스)으로 변경되면서 요소의 크기를 고려할 필요가 없어졌다.(고정길이 배열 -> 가변길이 배열)  
  그러나 아직 조회, 분기(전체 조회할지, 하나의 아이디만 조회할 지 등) 등의 내용이 App.java 안에서 한 번에 이루어지고 있다.  
  별도의 데이터 출력, Controller 등으로 분리가 필요해 보인다.  
  이는 다음에 해보도록 하자.  
  
