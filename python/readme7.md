# Python     
  
  #### [ 2022-09-28 ]   
   
  ## 목차  
  * #### [[ 클래스 정의와 객체 생성 ]](#클래스-정의와-객체-생성)  
  * #### [[ 생성자와 소멸자 ]](#생성자와-소멸자)  
  * #### [[ private 멤버 ]](#private-멤버)  
  * #### [[ 빈 클래스 ]](#빈-클래스)  
  * #### [[ 클래스 내장 속성 ]](#클래스-내장-속성)  
      
------------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### 클래스 정의와 객체 생성  

  ```python
  class Student:
      '''test class'''
      cnt=0 #클래스 변수

      def setVal1(s, val):#첫 번째 파람은 self(현재 객체)
          s.num = val #객체 멤버변수 정의

      def setVal2(s, val):
          s.name = val

      def printVal(s):
          print(s.num)
          print(s.name)

  def main():
      s1 = Student()
      print(s1.cnt)
      s1.setVal1(12)
      s1.setVal2('aaa')
      s1.printVal()

  main()
  ```
    
* ### 생성자와 소멸자  

  생성자: __init__(self)  
  
  소멸자: __del__(self)  
  
  ```python
  class Test:
      '''생성자 테스트'''

      def __init__(s, x=0, y=0):
          s.x=x
          s.y=y

      def __del__(s): #가비지 컬렉터가 메모리 해제 전 호출되는 메서드(메모리 해제가 아님)
          print('객체 소멸')

      def printMember(s):
          print('x:', s.x)
          print('y:', s.y)

  def main():
      t1=Test()
      t1.x=10
      t1.y=20
      t1.printMember()

      t2 = Test(1,2)
      t2.printMember()

  main()
  ```
    
* ### private 멤버   

  ```python
  class Test2:

      def __init__(s, x, y):
          s.x=x   #public
          s.__y=y #private

      def printMember(s):
          print('x:', s.x)
          print('y:', s.__y)

  def main():
      t1 = Test2(1,2)
      t1.printMember()
      print(t1.x)
      print(t1.__y) #에러발생

  main()
  ```
  
* ### 빈 클래스  

  ```python
  class Test3: #빈 클래스
      pass

  def fun1():#일반 함수 정의
      print('function 1')

  def fun2():
      print('function 2')

  def main():
      t1 = Test3()
      t1.x=10
      t1.y=20
      t1.method1 = fun1

      print('x:', t1.x)
      print('y:', t1.y)
      t1.method1()
      print(t1.__dict__)

      t2 = Test3()
      t2.name='aaa'
      t2.age=12
      t2.mth=fun2

      print('name:', t2.name)
      print('age:', t2.age)
      t2.mth()
      print(t2.__dict__)

  main()
  ```
    
* ### 클래스 내장 속성  

  ```__doc__```: 도큐먼트 속성  
  ```__name__```: 클래스 이름  
  ```__module__```:모듈 이름  
  ```__bases__```: 부모 클래스 목록  
  ```__dict__```: 클래스 네임 스페이스 정보  
    
  ```python
  class Test4:
      ''' class Test4'''

      cnt=0

      def __init__(s, x, y):
          s.x=x
          s.y=y

      def printMember(s):
          print('cnt:', Test4.cnt)
          print('x:', s.x)
          print('y:', s.y)

  def main():
      t = Test4(1,2)
      print('doc:', Test4.__doc__)
      print('name:', Test4.__name__)
      print('module:', Test4.__module__)
      print('bases:', Test4.__bases__)
      print('dict:', Test4.__dict__)

  main()
  ```
    
