# Java  
  
  #### [ 2022-11-18 ]  
  
  ## 목차  
  * #### [[ 가비지 컬렉션(Garbage Collection) ]](#가비지-컬렉션garbage-collection)  
  * #### [[ Mark And Sweep ]](#mark-and-sweep)   
  * #### [[ GC의 대상이 되는 Heap 영역 ]](#gc의-대상이-되는-heap-영역)   
  * #### [[ 가비지 컬렉션 동작 과정 ]](#가비지-컬렉션-동작-과정)  
      
---------------------------------------------------------------------------------------------------------------------------------------------------
  
출처: https://coding-factory.tistory.com/829, https://goodgid.github.io/Java-Garbage-Collection-(1)/  
  
* ### 가비지 컬렉션(Garbage Collection)  

  가비지 컬렉션은 영어로 Garbeage Collection으로 줄여서 GC라고도 부른다.   
  가비지 컬렉션은 자바의 메모리 관리 방법 중의 하나로 동적으로 할당했던 메모리 영역 중 필요 없게 된 메모리 영역을 주기적으로 삭제하는 프로세스를 말한다.  
    
  C나 C++에서는 이러한 가비지 컬렉션이 없어 프로그래머가 수동으로 메모리 할당과 해제를 일일이 해줘야 하는 반면   
  Java는 JVM에 탑재되어 있는 가비지 컬렉터가 메모리 관리를 대행해주기 때문에 개발자 입장에서 메모리 관리,   
  메모리 누수(Memory Leak) 문제에서 대해 완벽하게 관리하지 않아도 되어 오롯이 개발에만 집중할 수 있다는 장점이 있다.  
    
  * #### 가비지 컬렉션의 단점  

    - 개발자가 메모리가 언제 해제되는지 정확하게 알 수 없다.  

    - 가비지 컬렉션(GC)이 동작하는 동안에는 다른 동작을 멈추기 때문에 오버헤드가 발생한다.  

    GC가 너무 자주 실행되면 소프트웨어 성능 하락의 문제가 되기도 한다.   
    이러한 특성으로 인해 실시간으로 계속 동작해주어야 하는 시스템들 예를 들자면 열추적 미사일의 경우에는   
    잠깐의 소프트웨어 일시정지로도 목표한 결과가 달라질 수 있기 때문에 GC의 사용이 적합하지 않을 수 있습다.  
    
  ![image url](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbW5c5r%2FbtrvAb4nrdH%2FlYHuQZya8ECvEndRkQchjk%2Fimg.png)  
   
  객체들은 실질적으로 Heap영역에서 생성되고 Method Area이나 Stack Area등 Root Area에서는 Heap Area에 생성된 객체의 주소만 참조하는 형식으로 구성된다.   
  하지만 이렇게 생성된 Heap Area의 객체들이 메서드가 끝나는 등의 특정 이벤트들로 인하여 Heap Area 객체의 메모리 주소를 가지고 있는 참조 변수가  
  삭제되는 현상이 발생하면 위의 그림에서의 빨간색 객체와 같이 Heap영역에서 어디서든 참조하고 있지 않은 객체들이 발생하게 된다.   
  이러한 객체들을 Unreachable하다고 하며 주기적으로 가비지 컬렉터가 제거해준다.  
 
  ```
  Reachable : 객체가 참조되고 있는 상태
  Unreachable  : 객체가 참조되고 있지 않은 상태 (GC의 대상이 됨) 
  ```
  
* ### Mark And Sweep    

  ![image url](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbGghBW%2FbtrvvDgIHRO%2FHxoX3w9skgah3xFVhfEgD0%2Fimg.png)  
    
  Mark And Sweep 알고리즘은 가비지 컬렉션이 동작하는 원리로 루트에서부터 해당 객체에 접근 가능한지에 대한 여부를 메모리 해제의 기준으로 삼는다.     
  Mark And Sweep은 위의 그림과 같이 총 3가지 과정으로 나뉘게 된다.  

  Mark 과정 : 먼저 Root로부터 그래프 순회를 통해 연결된 객체들을 찾아내어 각각 어떤 객체를 잠조하고 있는지 찾아서 마킹한다.    
  Sweep 과정 : 참조하고 있지 않은 객체 즉 Unreachable 객체들을 Heap에서 제거한다.    
  Compact 과정 : Sweep 후에 분산된 객체들을 Heap의 시작 주소로 모아 메모리가 할당된 부분과 그렇지 않은 부분으로 압축한다. (가비지 컬렉터 종류에 따라 하지 않는 경우도 있음)  
    
* ### GC의 대상이 되는 Heap 영역  

  **JVM 내부 구조**
  ![image url](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcQRqku%2Fbtru0vJ6Ixx%2F9qCTW7ChXc80fGfQUrT4B0%2Fimg.png)  
  
  위 사진중 Heap Area 영역에 해당하는 곳이다. 자세한 글을 https://coding-factory.tistory.com/828참조  
    
  ![image url](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fbti1oP%2FbtrvtcdoBC9%2FupBBOdB4mJF6tfyhL8GPbK%2Fimg.png)  
    
  Heap Area는 효율적인 GC를 위해 위와 같이 Eden, Survival, Old Generation으로 나뉜다.  
  
* ### 가비지 컬렉션 동작 과정   

  ![image url](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F7pVmj%2Fbtrvu28jcRt%2FIy5eB9flQ8L4eIkc0a1FX1%2Fimg.png)  
    
  객체가 처음 생성되고 Heap영역의 Eden에 age-bit 0으로 할당됩니다. 이 age-bit는 Minor GC에서 살아남을 때마다 1씩 증가하게 된다.  
    
  ![image url](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcTWRqo%2FbtrvxlfT2KU%2FgIDFZpUapbTZTKR1Gi16M0%2Fimg.png)  
    
  시간이 지나 Heap Area의 Eden 영역에 객체가 다 쌓이게 되면 Minor GC가 한번 일어나게 되고 참조 정도에 따라 Servivor0 영역으로 이동하거나 회수된다.  
    
  ![image url](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fb42htO%2FbtrvuPvhcQ2%2FHwXDNmku8NbhSkaGoJEywK%2Fimg.png)  
    
  계속해서 Eden영역에는 신규 객체들이 생성된다.   
  이렇게 또 Eden영역에 객체가 다 쌓이게 되면 Young Generation(Eden+Servivor) 영역에 있는 객체들을 비어있는
  Survival인 Survival1 영역에 이동하고 살아남은 모든 객체들은 age가 1씩 증가한다.  
    
  ![image url](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdpYphN%2FbtrvocRXzk2%2FPANFhltyaGtzuDak9nqd61%2Fimg.png)  
    
  또다시 Eden 영역에 신규 객체들로 가득 차게 되면 다시한번 minor GC가 일어나고 Young Generation(Eden+Servivor) 영역에 있는   
  객체들을 비어있는 Survival인 Survival0으로 이동시킨 뒤 age를 1 증가시킨다. 이 과정을 계속 반복한다.  
    
  ![image url](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FGvbFe%2FbtrvqaMQzF5%2F2pYF0QKjwBZWF7EtYNJ8OK%2Fimg.png)  
    
  이 과정을 반복하다 보면 age bit가 특정 숫자 이상으로 되는 경우가 발생한다.   
  이때 JVM에서 설정해놓은 age bit에 도달하게 되면 오랫동안 쓰일 객체라고 판단하고 Old generation 영역으로 이동시킨다.   
  이 과정을 프로모션(Promotion)이라고 한다.  
    
  ![image url](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fb015X4%2FbtrvtcRX3Go%2FDG6GyfMsZv0xgJRujfOeRK%2Fimg.png)  
    
  시간이 지나 Old영역에 할당된 메모리가 허용치를 넘게 되면, Old 영역에 있는 모든 객체들을 검사하여 참조되지 않는 객체들을 한꺼번에 삭제하는 GC가 실행된다.   
  이렇게 Old generation영역의 메모리를 회수하는 GC를 Major GC라고 한다. Major GC는 시간이 오래 걸리는 작업이고   
  이때 GC를 실행하는 스레드를 제외한 모든 스레드는 작업을 멈추게 됩니다. 이를 'Stop-the-World' 라 한다.   
  이 작업이 너무 잦으면 프로그램 성능에 문제가 될 수 있다.  
