# Web Application  
  
  #### [ 2022-08-18 ]  
  
  ## 목차  
  * #### [[ JSP Action Tag ]](#jsp-action-tag)  
  * #### [[ forward와 sendRedirect의 차이점 ]](#forward와-sendredirect의-차이점)  
  * #### [[ 자바빈(JAVA Bean) ]](#자바빈java-bean)  
    
      
---------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### JSP Action Tag  

  JSP Action Tag란 JSP 페이지 내에서 어떤 동작을 하도록 지시하는 태그이다.  
  종류에는 페이지 이동을 강제하는 forward, 페이지를 삽입하는 include, forward나   
  include를 할 때 값을 지정하는 param, 자바의 클래스와 연동하는 useBean 등이 있다.  
    
  |    | 종류             | 기능                                                             |
  |----|------------------|------------------------------------------------------------------|
  | 1. | forward          | 현재의 페이지에서 다른 특정 페이지로 전환할 때 사용              |
  | 2. | includ           | 현재 페이지에 다른 페이지를 삽입할 때 사용                       |
  | 3. | param            | forward 및 include 태그에 데이터를 전달할 목적으로 사용되는 태그 |
  | 4. | userBean(자바빈) | JAVA언어의 데이터(변수)와 기능(메서드)으로 이루어진 클래스       |
  | 5. | setProperty      | Setter                                                           |
  | 6. | getProperty      | getter                                                           |
    
* ### forward와 sendRedirect의 차이점  

  * #### forward
      
    요청 받은 요청객체(request)를 위임하는 컴포넌트에 요청 객체값을 동일하게 전달할 수 있다.  
    요청을 처리함과 동시에 해당 결과를 바로 보여줘야 하는 경우에 사용한다.  
    쉽게 이야기하면 request에 담긴 값을 다른 페이지에서도 활용하기 위한 경우 사용한다.  
      
    사용 방법  
    ```java
    request.setAttribute("key", /*전달하고자 하는 java bean(객체)*/);
    request.getRequestDispatcher("이동하고자 하는 곳").forward(request, response);
    ```

  * #### sendRedirect  

    요청 받은 요청객체를(request) 위임하는 컴포넌트에 전달하는 것이 아닌, 새로운 요청객체를 생성한다.  
    요청을 처리한 다음 새로운 요청으로 작업을 해야할 경우에 사용한다.  
    쉽게 이야기하면 request에 담긴 값이 다른 페이지로 넘어가지 않는다.  
      
* ### 자바빈(JAVA Bean)   

  자바빈이란 JAVA언어의 데이터(변수)와 기능(메서드)으로 이루어진 클래스이다.  
  자바빈은 데이터를 저장하는 변수, 데이터를 읽어오는 메서드(getter), 데이터를 저장할 때 사용되는 메서드(setter)로 이루어져 있다.  
  나는 쉽게 setter,getter와 멤버 필드를 가지고 있는 객체를 이야기한다 정도로 이해 했다.  
    
