# Java 
  
  #### [ 2022-08-04 ]  
  
  ## 목차  
  * #### [[ MVC ]](#mvc)  
  * #### [[ 텍스트 파일을 통한 입력 및 console 기반 자바 프로그램 좀 더 개선 ]](#텍스트-파일을-통한-입력-및-console-기반-자바-프로그램-좀-더-개선)  
  * #### [[ 결과 ]](#결과)  
    
      
---------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### MVC  

  MVC란, Model, View, Controller의 약자 이다.  
  MVC패턴은 디자인패턴 중 하나인데, 여기서 말하는 디자인 패턴이란,  
  소프트웨어 설계와 관련된 디자인 패턴으로, 소프트웨어 공학에서의 ‘흔히 사용되는’ 설계 패턴을 의미한다.  
  쉽게이야기 하자면 협업과 유지보수가 더 나은 코드 구성법으로 프로그래밍 설계하는 설계 패턴을 이야기한다는 것이다.  
  그 설계 패턴중에 하나로 MVC패턴이 있는 것인데, 이름에서 알 수 있듯이 MVC는  
  크게 ```Model```과 ```View```그리고 ```Controller```로 구성해 client와 server의 로직을 분리하여   
  server에서의 수정이 client의 화면에서 영향이 없도록 설계하는 것을 목적으로 한다.  
  
  ![image url](https://github.com/12OneTwo12/TIL/blob/main/Java/mvc_role_diagram.png?raw=true)  
    
  * #### View  

        레이아웃과 화면을 처리한다. 애플리케이션의 데이터를 보여주는 방식을 정의하고 결과 출력을 담당하는 별도의 클래스 및 패키지이다.
        
  * #### Model

        애플리케이션의 정보, 데이타를 나타내고 이러한 DATA, 정보들의 가공을 책임지는 컴포넌트를 말한다.  
          
  * #### Controller  

        등록, 조회 등 어떤 액션을 수행할지 분기, 결정을 담당하여 처리하는 별도의 클래스 및 패키지를 말한다.  
          
  
  이렇듯 우리는 특정한 관심사에 따라 기능을 나누고, 각 기능을 독립적으로 개발한 뒤 
  이를 조합하는 방식으로 복잡한 소프트웨어를 구성해보자는 아이디어를 관심사의 분리(Separation of concerns, SoC)라고 한다.  
    
  ![image url](https://github.com/12OneTwo12/TIL/blob/main/Java/img%20(2).png?raw=true)  
    
  자 그렇다면 얼마전 간단하게 만들었던 텍스트 파일을 통한 간단한 입출력 프로그램을 MVC패턴을 분리해보자.  
    
* ### 텍스트 파일을 통한 입력 및 console 기반 자바 프로그램 좀 더 개선  
  
  우선 저번까지는 조회, 분기(전체 조회할지, 하나의 아이디만 조회할 지 등) 등의 내용이 App.java 안에서 한 번에 이루어지고 있어,  
  별도의 View와 Controller 등으로 분리가 필요했다.  
     
  * #### View  

    우선 App.java를 통해 출력하던 출력문들을 옮겨,  
    View가 결과 출력만을 담당하는 별도의 클래스 및 패키지가 될 수 있도록 만들어 줬다.    
      
    ```java
    public class TodoView {
    
      public void findAll(List<Todo> todos) {
        for (Todo todo : todos) {
          System.out.println(String.format("%d 번째로 해야 할 일은 %s 입니다.",todo.getId(),todo.getTitle()));
          System.out.println(todo.getDuedate().format(DateTimeFormatter.ofPattern("기한은 yyyy년 MM월 dd일 까지입니다.")));
        }
      }

      public void findById(Todo todo) {
        System.out.println(String.format("%d 번째로 할 일은 %s 입니다", todo.getId(),todo.getTitle()));
      }

      public void successPage() {
        System.out.println("정상 등록 되었습니다.");
      }

      public void errorPage() {
        System.out.println("문제가 발생 했습니다.");
      }
    }
    ```  
      
  * #### Model  

    기존 TodoTSVWriter클래스와, TodoTSVParser 클래스는 그대로 두고 이들을 활용하고,  
    비즈니스 로직과 관련된 코드를 모아두는 부분인 ```TodoService```클래스를 만들어 줬다.  
      
    ```java
    public class TodoService {
      // 비즈니스 로직과 관련된 코드를 모아두는 부분

      public List<Todo> findAll(List<Todo> todos){
        return todos;
      }

      public Todo findById(List<Todo> todos, int todoNumber) {
        for(Todo todo : todos) { 
          if(todo.getId() == todoNumber) return todo;
        }
        return null;
      }

      public boolean save(String RESOURCES, Path filePath, Todo newTodo) {

        TodoTSVWriter writer = new TodoTSVWriter();
        boolean result = writer.save(RESOURCES, filePath, newTodo);

        return result;
      }
    }
    ```  
      
  * #### Controller  

    이제 controller가 어떤 액션(전체 조회 or id로 조회 등)을 취할지 결정할 수 있게 만들어 줬다.  
      
    ```java
    public class TodoController {

      private List<Todo> todos ;
      private final TodoView todoView = new TodoView();
      private final TodoService todoService = new TodoService();

      public TodoController(List<Todo> todos) {
        this.todos = todos;
      }

      public void findAll() {
        List<Todo> todoList = todoService.findAll(todos);
        todoView.findAll(todoList);
      }

      public void findById(int todoNumber) {
        todoView.findById(todoService.findById(todos, todoNumber));
      }

      public void save(String RESOURCES, Path filePath, Todo newTodo) {
        boolean result = todoService.save(RESOURCES, filePath, newTodo);
        if(result) {
          todoView.successPage();
        } else {
          todoView.errorPage();
        }
      }
    }
    ```  
      
  * #### App.java  

    이렇게 분리한 결과 App.java의 코드가 한결 간결해 지고 가독성도 좋아졌다.  
      
    ```java
    public class App {

      private static final String RESOURCES = "src/resources/";

      public static void main(String[] args) throws IOException {		

        // 데이터 읽기
        final Path filePath = Paths.get(RESOURCES + "todo-data-simple.tsv");
        List<String> lines = Files.readAllLines(filePath);

        // 읽어들인 데이터 파싱(변환 처리)
        TodoTSVParser parser = new TodoTSVParser();
        List<Todo> todos = parser.parseLinesFromTSV(lines);

        // Controller 생성
        TodoController Controller = new TodoController(todos);

        // 전체 Todos 조회
        Controller.findAll();

        // 할 일 번호(id)로 하나의 Todo를 조회
        Controller.findById(4);

        // 할 일을 추가하는 부분을 별도의 클래스 TodoTSVWriter.java에 작성
        Todo newTodo = new Todo("산책하기", LocalDate.of(2022, 04, 05), "강아지와 산책한다.");
        Controller.save(RESOURCES, filePath, newTodo);
      }

    }
    ```  
      
* ### 결과  

  이를 통해 역할별로 관심사의 분리했기에,  
  App.java에서 Controller의 인스턴스만을 호출 Controller에게 어떤 액션을 취할건지 전달하면,  
  Controller는 각 역할을 하는 녀석들에게 전달했고, 이를 전달한 값을 출력할 것인지 저장할 것인지 등등의 역할은  
  각 역할을 하는 클래스들이 동작하였고 App.java에서는 Controller만을 가지고 통제할 수 있었다.  
      
