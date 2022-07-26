# Java 
  
  #### [ 2022-07-26 ]  
    
## 목차  
  * #### [[ 객체간의 협력이 어떻게 이루어질까 ]](#객체간의-협력이-어떻게-이루어질까)  
  * #### [[ 상속(Inheritance) ]](#상속ingeritance)  
  * #### [[ 상속의 방법 ]](#상속의-방법)  
    
      
---------------------------------------------------------------------------------------------------------------------------------------------------
  
* ###  객체간의 협력이 어떻게 이루어질까  

  예제를 통해서 객체간 협력이 어떻게 구현되는지 알아보도록 하자.  
  상당히 유명한 예제인데, 버스를 타고가는 학생이 있다고 가정하자.  
  그렇다면 아주 간단하게 이것을 객체를 이용하여 서로 상호작용 하게만든다면,  
  ```java
  public class Bus {

    public int busNumber;
    public int passengerCount;
    public int money;
    public int cost = 1150;

    // 버스의 번호만 가지고 버스를 먼저 생성해야함

    public Bus(int busNumber) {
      this.busNumber = busNumber;
    }

  }
  ```  
    
  위 클래스를 통해 버스를 만들었다. 그렇다면 이번엔 학생을 만들어 보자.  
      
  ```java
  public class Student {

    // 멤버 필드
    public String studentName;
    public int grade;
    public int money;

  }
  ```  
    
  멤버 필드까지는 필요한 것들은 선언한 것 같다.  
  그렇다면 학생이 버스를 탔을 때 일정한 금액을 지불하게 만들어야 할 것이고, 어떤 버스에 탔는지,  
  그리고 버스에서는 승객이 몇명 탑승했는지 카운트가 되야 할것이다.  
  일단 내가 알고 있는 것들로 몇가지는 완성 시킬 수 있었다.  
    
  ```java
  public void take() {
     passengerCount++;
     money += cost;
  }
  ```  
    
  버스 클래스에 take(탑승)이라는 메소드를 만들어 주어 메소드가 실행 됐을 때 버스에 있는 돈 money에 cost 비용만큼의 금액이 더해지게 만들고,  
  한번 실행됐을때 탑승 인원에 1번 카운트 되게 만들었다. 그렇다면 이제 Student를 손대봐야 하는데,  
  어떻게하면 Student 클래스에서 Bus클래스와 협력할 수 있을까?  
    
  답은 간단했다. Bus라는 데이터 타입과 참조 변수를 이용하면 됐다.  
  ```java
  public void takeBus(Bus bus) {
		System.out.println(studentName + " 이(가)" +bus.busNumber + "번 버스를 탔습니다");
		bus.take();
		money -= bus.cost;
		System.out.println(studentName + " 의 남은 돈은" + money + "원 입니다.");
	}
  ```  
    
  이렇게 되면, takeBus라는 메소드에 파라미터로 Bus 클래스 데이터 타입으로 만든 참조변수 bus가 들어가게 된다.  
  그러면 main 클래스에서 실행할때 ```takeBus(버스 번호)```이렇게 넣게 되면 우리가 원하는 그림을 만들 수 있을것이다.  
  main 클래스는 다음과 같을 것이다.  
  
  ```java
  public static void main(String[] args) {

	Student park = new Student("정정일", 5000);
	Student won = new Student("다른학생", 10000);
		
	// 학생이 버스(Bus)를 탔으면 좋겠음
		
	// 버스 객체 생성
	Bus bus100 = new Bus(100); // 노선 번호가 100번인 버스 생성
		
	// 학생이 버스를 탔다.
	park.takeBus(bus100);
  }
  ```  
    
* ### 상속(Inheritance)  
  
  * #### 상속이란    
    
    자바에서 상속이란 현실 세계에서 부모님이 자식들에게 재산을 물려주는 것과 비슷하다.   
    차이라고 하면 자식(클래스)이 상속받고 싶은 부모(클래스)를 선택해서 물려받는다.   
    이때 상속받는 클래스를 자식 클래스, 하위 클래스 또는 서브 클래스라고 부른다. 상속을 해주는 클래스를 부모 클래스, 상위 클래스 또는 슈퍼 클래스라고 한다.  
      
    자식 클래스가 부모 클래스로부터 상속을 받게 되면 부모 클래스의 필드와 메서드를 물려받게 된다.    
    그러니 상위 클래스(Super class)의 특성(멤버)을 하위 클래스(Sub class)에 상속(특성 상속)하고   
    거기에 더해 필요한 특성을 추가, 확장해서 사용할 수 있다는 의미이다. 따라서 상속 보다는 확장(extends)이라는 의미가 더 적절하다.  
      
    쉽게 예를 들자면, 동물과 포유류의 관계, 직사각형과 정사각형의 관계로 예를 들 수 있겠다.  
    모든 정사각형은 직사각형이지만, 모든 직사각형은 정사각형이 아니듯이 우리는 클래스와 상속을 통해,
    직사각형의 특성들을 입력시키고, 직사각형의 특성들을 상속받은 정사각형을 정사각형만의 특성들을 다시금 부여 해주는 것이다.  
    
    우리는 상속을 통해 중복된 코드를 줄일 수 있고, 유지 보수를 편리하게 하며, 더욱 잘 관리 할 수 있을 것이다.  
    
  		  -> Inheritance(상속)는 ‘재사용’ + ‘확장’ 이다
  
  * #### 상속의 방법  

    상속을 받는 방법은 간단하다. 상속받을 자식 클래스 뒤에 extends 키워드를 사용하고 부모 클래스를 적어주면 된다.  

	![image url](https://github.com/12OneTwo12/TIL/blob/main/Java/Inheritance.png?raw=true)  
  
    ```java
    public class Animal { // extends Object를 안쓰더라도 쓰여있는 거임
		// Object는 신, 최상위 클래스

		private int age;
		private String color;

		public Animal() {
			System.out.println("Animal() 기본 생성자 호출");
		}

		public Animal(int age, String color) {
			super();
			this.age = age;
			this.color = color;
		}

		public int getAge() {
			return age;
		}

		public void setAge(int age) {
				this.age = age;
		}

		public String getColor() {
			return color;
		}

		public void setColor(String color) {
			this.color = color;
		}

		public void sing() {
			System.out.println("동물은 어떻게 울지?");
		}

    }
    ```  
      
    이런 동물이라는 클래스가 있을때 이를 상속받은 동물 쥐가 있다고 가정 해보면,  
      
    ```java
    public class Mouse extends Animal{ // 상속(inheritance)의 keyword(예약어) : extends
	
	// extends 키워드를 써서 상속 관계를 형성하면 슈퍼 클래스(Animal)의 필드를 하위 클래스(Mouse)에서도 사용할 수 있다.

	private String address;

	public Mouse() {}
	
	public Mouse(String address) {
		super(); // super class constructor(),상위 클래스의 기본 생성자 호출 메서드
		this.address = address;
	}

	public Mouse(int age, String color, String address) {
		super(age, color); // 이러면 anima(int age, String color) 로 받게 됨.
		this.address = address;
	}
	
	public void sing() { // mouse가 자신만의 우는 방식을 새롭게 재정의(overriding)
		System.out.println("찍찍");
	}
	
    }
    ```  
      
    이렇게 되면 우리는 ``` public class Mouse extends Animal ``` 를 이용해 Animal이 가지고 있는 특성들과 메소드들을 이용 할 수 있게 된것이다.  
    게다가 전에 배운 overriding을 통해 메소드를 자신만의 메소드로 변경 또한 가능했다.  
    위에서 쓰인 ```super()```는 상위 클래스의 생성자를 호출하는 메서드다.  
      
    게다가 우리는 모르고 있었지만 모든 클래스의 제일 최상위에는 Object라는 이름을 가진 클래스가 있었다.  
    Object 클래스는 모든 클래스 계층도에서 최상위에 있는 클래스이다.  
    다른 클래스로부터 상속 받지 않는 모든 클래스들은 자동으로 Object 클래스로부터 상속받는다.  
      
    그렇다면 마찬가지로 이를 오버라이딩할 수 있지 않을까?  
      
    ```java
    public String toString() {
	String toString = String.format("안녕하세요 저는 %d살이고 %s 피부에 %s에 삽니다", getAge(), getColor() ,address);
	return toString;
    }
    ```  
      
    이렇게 되면 Object라는 클래스에 있던 메소드 ```toString()```이 하위 클래스에서 오버라이딩 돼 우리가 출력문을 통해 이를 출력하면,  
    원하는 출력문을 얻게 된다.  
