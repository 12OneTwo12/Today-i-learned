# Java 
  
  #### [ 2022-07-26 ]  
    
## 목차  
  * #### [[ 
    
      
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
    
  
