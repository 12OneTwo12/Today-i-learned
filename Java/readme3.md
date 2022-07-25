# Java 
  
  #### [ 2022-07-25 ]  
    
## 목차  
  * #### [[ 객체 지향 프로그래밍 ]](#객체-지향-프로그래밍)  
  * #### [[ 객체(Object) ]](#객체object)  
  * #### [[ 클래스(Class) ]](#클래스class)    
  * #### [[ 인스턴스(instance) ]](#인스턴스instance)  
  * #### [[ 인스턴스 변수의 초기화 ]](#인스턴스-변수의-초기화)  
  * #### [[ 생성자(constructor) ]](#생성자constructor)  
  * #### [[ 참조 타입(Reference Type) ]](#참조-타입reference-type)  
  * #### [[ 접근 지정자 (access modifier) ]](#접근-지정자-access-modifier)  
    
      
-----------------------------------------------------------------------------------------------------------------------------------------------------  
  
* ## 객체 지향 프로그래밍  

  오늘은 객체 지향 프로그래밍에 대해 조금 더 자세히 알아보자.  
    
  * ### 객체(Object)  
  
    객체 지향 프로그래밍에서는 모든 데이터를 객체(object)로 취급하며, 이러한 객체가 바로 프로그래밍의 중심이 된다.  
    객체(object)란 간단히 이야기하자면 실생활에서 우리가 인식할 수 있는 사물로 설명할 수 있다.  
    이러한 객체의 상태(state)와 행동(behavior)을 구체화하는 형태의 프로그래밍이 바로 객체 지향 프로그래밍이다.  
    이때 객체를 만들어 내기 위한 설계도와 같은 개념을 클래스(class)라고 한다.  
    예를 들면 쥐라는 생물이 있다고 하자. 이를 상태와 행동등으로 간단히 구체화 한다면,  
    ```java
    public class Mouse { // 쥐 클래스 작성
    // 쥐에 대한 속성과 행위를 기술하는 부분
    
    // Mouse의 속성 ( Member field, 프로퍼티, 어트리뷰트 )
    int age;
    String Name;
    String country;
    String address;
    
    // Mouse의 행위( Member Method )
    void sing() {
      System.out.println(name + "찍찍?!");
      }
      
    ```  
      
    이렇듯 우리가 인식할 수 있는 사물처럼 Mouse라는 객체의 속성과 행동등을 구체화하는 형태의 프로그래밍이 바로 객체 지향 프로그래밍인것이다.  
      
  * ### 클래스(Class)  

    자바에서 클래스(class)란 객체를 정의하는 틀 또는 설계도와 같은 의미로 사용된다.  
    자바에서는 이러한 설계도인 클래스를 가지고, 여러 객체를 생성하여 사용하게 된다.   
    클래스는 객체의 상태를 나타내는 필드(field)와 객체의 행동을 나타내는 메소드(method)로 구성된다.  
    즉, 필드(field)란 클래스에 포함된 변수(variable)를 의미한다.  
    또한, 메소드(method)란 어떠한 특정 작업을 수행하기 위한 명령문의 집합이라 할 수 있다.  
    위의 예제에서 우리가 한것은 클래스를 이용하여 객체를 구체화 한것 뿐이다.  
    아직 우리는 저 클래스를 이용해 활용하지 않았는데, 
    나는 이를 다양하게 활용하며 프로그래밍 하는 일련의 모든 과정을 객체 지향 프로그래밍이라 할 수 있겠다고 이해했다.  
    그렇다면 저 클래스를 활용하는 법은 무엇이 있을까?  
      
  * ### 인스턴스(instance)  

    자바에서 클래스를 사용하기 위해서는 우선 해당 클래스 타입의 객체(object)를 선언해야 한다.  
    이렇게 클래스로부터 객체를 선언하는 과정을 클래스의 인스턴스 화라고 한다.  
    또한, 이렇게 선언된 해당 클래스 타입의 객체를 인스턴스(instance)라고 한다.  
    즉, 인스턴스란 메모리에 할당된 객체를 의미한다.  
        
    자바에서는 하나의 클래스로부터 여러 개의 인스턴스를 생성할 수 있다.  
    이렇게 생성된 인스턴스는 독립된 메모리 공간에 저장된 자신만의 필드를 가질 수 있다.  
    하지만 해당 클래스의 모든 메소드(method)는 해당 클래스에서 생성된 모든 인스턴스가 공유하게 된다.  
      
    쉽게 이야기 하자면 위 예제가 쥐를 뜻하는 객체가 아닌 사람을 뜻하는 객체 ```People```이라고 가정해보자.  
    그렇다면 사람은 각자 다른 이름을 가지고 있을 것이고,   
    ``` People Jeong = new People(); ``` 로 People이라는 클래스를 이용해 Jeong이라는 사람을 따로 만들었을 때,  
    이렇게 선언된 클래스 타입의 객체를 인스턴스라고 하는 것이다.  
      
  * ### 인스턴스 변수의 초기화  

    클래스를 가지고 객체를 생성하면, 해당 객체는 메모리에 즉시 생성된다.  
    하지만 이렇게 생성된 객체는 모든 인스턴스 변수가 아직 초기화되지 않은 상태이다.  
  
    자바에서 클래스 변수와 인스턴스 변수는 별도로 초기화하지 않으면, 다음 값으로 자동 초기화된다.  
      
    ![image url](https://github.com/12OneTwo12/TIL/blob/main/Java/instance%20ch.png?raw=true)  
      
    하지만 사용자가 원하는 값으로 인스턴스 변수를 초기화하려면, 일반적인 초기화 방식으로는 초기화할 수 없다.  
    인스턴스 변수 중에는 private 변수도 있으며, 이러한 private 변수에는 사용자나 프로그램이 직접 접근할 수 없기 때문이다.  
    따라서 private 인스턴스 변수에도 접근할 수 있는 초기화만을 위한 public 메소드가 필요해진다.  
    쉽게 이야기 하자면 우리가 public이라고 이제 까지 써온 이유가 이것때문이라는 것이다.  
      
  * ### 생성자(constructor)  

    생성자 메서드는 new 연산자와 함께 사용되며, 어떤 객체(클래스)의 인스턴스를 만들 때 사용(호출)된다.  
       
          new 연산자는 객체를 Heap이라는 메모리 영역에 메모리 공간을 할당해주고 메모리주소를 반환한 후 생성자를 실행시켜준다.   
          리터럴과는 달리 new 연산자로 생성된 객체는 똑같은 값을 가진(?) 객체가 있어도 서로 다른 메모리를 할당하기 때문에 서로 다른 객체로 분류된다.  
      
      * #### 생성자 작성 규칙  

        * 별도의 반환 타입이 없음(내부적으로 void가 동작)  

        * 생성자 메서드의 이름은 클래스의 이름과 동일(대문자까지 동일하게, case sensitive)  

        * 복수의 생성자를 작성할 수 있다.(Overloading) -> 메서드의 이름은 동일하고, 매개변수의 개수 or 타입 or 작성 순서가 다를 경우 중복해서 작성 가능하다    

      * #### 기본 생성자  

        기본 생성자는 개발자가 별도로 작성하지 않으면, 컴파일러가 자동으로 생성해준다.  
        매개변수가 하나라도 있는 생성자를 한개라도 작성하였으면 별도로 작성이 필요하다.  
        ``` public 클래스 이름() {} ``` 이렇게 작성 하면 된다.  

      * #### 생성자 오버로딩(Constructor overloading)    

        ```java
        public class Mouse {
	
        int age;
        String name;

        // 매개변수(parameter)가 하나도 없는 생성자를 기본 생성자(default constructor)라고 함
        public Mouse() {} // Duplicate method Mouse() in type Mouse
        //	public Mouse() {} // 매개변수까지 동일하니까 작성 불가능

        // age만 파라미터로 갖는 생성자
        public Mouse(int age) {
          this.age = age;
        }

        // name만 파라미터로 갖는 생성자
        public Mouse(String name) {
          this.name = name;
        }

        // age와 name 모두 파라미터로 갖는 생성자
        public Mouse(int age, String name) {
          this.age = age;
          this.name = name;
        }

        public Mouse(String name, int age) { // -> 작성 순서가 다르기 때문에 오버로딩 가능
          this.name = name;
          this.age = age;
        }
        ```  
          
        이런식으로 같은 class안에 생성자를 중복해서 작성하는 것을 생성자 오버로딩(Constructor overloading)이라 한다.  
          
        
  * ### 참조 타입(Reference Type)  

    우리가 인스턴스를 만들때 선언하는 변수를 참조 변수라고 하는데, 그렇다면 참조 변수란 무엇이고 참조 타입은 무엇일까?  
  
    ![image url](https://github.com/12OneTwo12/TIL/blob/main/Java/99E8E24B5B613AB212.png?raw=true)  
      
    데이터 타입에는 두가지가 있는데, 우리가 알던 int,float와 같은 데이터 타입을들 기본타입, 원시타입이라 한다.  
    그렇다면 참조 타입은 무엇일까?  
    참조 타입(reference type)이란 객체의 번지를 참조하는 타입으로 배열, 열거, 클래스, 인터페이스 타입을 말한다.   
    기본 타입과 참조 타입의 차이는 저장되는 값이 무엇인가이다.   
    기본 타입으로 선언된 변수는 실제 값을 변수에 저장하지만 참조 타입은 배열, 열거, 클래스,   
    인터페이스를 이용해서 선언된 변수는 메모리에 번지를 값으로 갖게 된다. 즉 번지를 통해 객체를 참조한다는 뜻으로 참조 타입이라고 부른다.  
      
    간단하게 차이를 본다면,  

          원시 타입 - 값을 그대로 저장  
            
          참조 타입 - 값을 주소로 저장하고, 출력시 주소와 일치하는 값을 출력  
    
    이렇다고 할 수 있다.  
    그림으로 이해를 돕자면,  
    ```java
    int a = 1;
    int b = 1;
    ```  
    ![image url](https://github.com/12OneTwo12/TIL/blob/main/Java/primitive%20type.png?raw=true)  
    이렇게 개별적으로 저장이 되는 것이고,  
    ```java
    refer a = new refer(); // 대충 멤버로 1,2를 줬다고 하자
    
    refer b = new refer(); // 대충 멤버로 a,b,c를 줬다고 하자
    ```
    ![image url](https://github.com/12OneTwo12/TIL/blob/main/Java/Reference%20Type.png?raw=true)  
      
    이렇게 값을 주소에 저장하고 출력시 주소와 일치하는 값을 출력하는 것이다.  
    이때 ``` a = b ``` 라는 코드를 적게 되면 a라는 참조 변수에 b라는 참조 변수 안에 담겨있는 주소를 a에 주기 때문에  
    같은 값을 반환하게 된다.  
      
  * ### 접근 지정자 (access modifier)  

    접근 지정자란? Access Modifier, Access Specifier 라고도 하며, 객체 지향 언어에서 객체를 캡슐화 하고,   
    외부에서 접근이 가능한 공개 멤버와 외부에서의 접근을 허용하지 않는 인가하지 않는 비공개 멤버를 구분 짓는 지정자이다.  
    쉽게 이야기하면, 프로그램에서 클래스 혹은 클래스 내의 멤버앞에 붙여서 다른 클래스의 접근을 제한하는 역할을 하는 친구이다.  
    자바에서는 public, protected, private 그리고 접근 지정자를 생략하는 default, 이렇게 총 4개의 접근 지정자를 두고 있다.  
      
     * #### public  

            클래스가 public 접근 지정자로 선언되면 다른 어떤 클래스에서도 사용할 수 있게 된다.  
              
     * #### default  

            접근 지정자가 default로 선언된 클래스는 어떨까? 접근 지정자를 생략하고 클래스를 선언한 경우를 말한다.  
            이 경우에는 같은 패키지 내에 있는 클래스들만 접근이 가능하다.  
            
     * #### private  

            private으로 선언된 경우, 이 접근 지정자는 기본적으로 비공개를 의미한다.  
            즉, 같은 클래스 내부 멤버에 의해서만 접근이 가능하다는 뜻으로 다른 어떤 클래스에서도 접근할 수 없다.  
              
    private를 사용하게 되면 아무래도 보안적으로 더 뛰어날 것이다.  
    그러나 우리가 다른 클래스에서 사용하려면 어떻게 해야할까?  
    ```java
    public class Student {
      int id; 
      private String name; // private = 공개 안함
      // Student 클래스 입장에서 StudentTest.java 뿐만 아니라 본인을 제외한 다른 모든 클래스들을 외부 클래스라고 함.
      // private이라는 접근 제어자를 작성하면 해당 필드는 자기 자신만 접근 가능하게 됨
      int grade;
      String address;

      public Student(String name) {
        this.name = name;
      }

      public String getName() {
        return name;
      }

    }
    ```  
      
    이와 같은 예제가 있을때, 나는 Student 클래스를 이용해, 정정일이라는 name을 가진 인스턴스를 만들고 싶다면,  
    ```java
    //		Student jji = new Student();
    //		jji.name = "정정일"; // The field Student.name is not visible
    //    이렇게 하면 private로 설정했기 때문에 name 필드로의 접근이 불가능해짐
    
    Student jji = new Student("정정일");
    System.out.println(jji.getName());
    // 이렇게 진행 했을경우 진행 가능
    ```  
      
    나는 약간 우회한다고 이해했다. 이런식으로 사용한다고 한다.  
    
