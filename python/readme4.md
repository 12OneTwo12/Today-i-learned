# Python     
  
  #### [ 2022-09-27 ]   
   
  ## 목차  
  * #### [[ immutable인자와 mutable인자 ]](#immutable인자와-mutable인자)  
  * #### [[ 파이썬 함수의 다양한 아규먼트(인자) ]](#파이썬-함수의-다양한-아규먼트인자)  
  * #### [[ 전역변수와 지역변수 ]](#전역변수와-지역변수)  
  * #### [[ 전역변수의 visible ]](#전역변수의-visible)  
  * #### [[ return ]](#return)  
  * #### [[ 지역함수 ]](#지역함수)  
  * #### [[ 재귀함수 ]](#재귀함수)  
  * #### [[ 함수 객체 ]](#함수-객체)  
      
------------------------------------------------------------------------------------------------------------------------------------------------------

파이썬에서의 함수에대해 알아보자.  

* ### immutable인자와 mutable인자  
  
  immutable이란 단어 그대로 불변성(Immutable)을 의미한다.  
  mutable이란 반대로 변할수 있음을 의미한다.  
    
  ```python
  def paramTest1(num, msg):
      '''
      immutable param test
      '''
      print('변경전')
      print('num:', num, ', msg:', msg) # num: 10 , msg: main안
      num=300
      msg='함수안'
      print('변경후')
      print('num:', num, ', msg:', msg) # num: 300 , msg: 함수안

  def main():
      n=10
      m='main안'
      print('함수 호출 전')
      print('n:', n, ', m:', m) # n: 10 , m: main안
      paramTest1(n, m)
      print('함수 호출 후')
      print('n:', n, ', m:', m) # n: 10 , m: main안

  main()
  ```
    
  ```python
  def paramTest2(list1, list2):
      '''
      mutable param test
      '''
      print('변경전')
      print('list1:', list1) # list1: [1, 2, 3]
      print('list2:', list2) # list2: [4, 5, 6, 7]
      list1 = [100, 200]
      list2[0]=10
      list2[2]=30
      print('변경후')
      print('list1:', list1) # list1: [100, 200]
      print('list2:', list2) # list2: [10, 5, 30, 7]

  def main():
      li1=[1,2,3]
      li2=[4,5,6,7]
      print('함수 호출 전')
      print('li1:', li1) # li1: [1, 2, 3]
      print('li2:', li2) # li2: [4, 5, 6, 7]
      paramTest2(li1, li2)
      print('함수 호출 전')
      print('li1:', li1) # li1: [1, 2, 3]
      print('li2:', li2) # li2: [10, 5, 30, 7]

  main()
  ```
    
* ### 파이썬 함수의 다양한 아규먼트(인자)  
  
  - 요구인자: 함수에서 일반적으로 사용하는 방법으로 파라메터 개수와 순서를 맞추어 호출  
    
  - 키워드인자:파라메터 순서에 맞추지 않아도 됨. 단 이 인자가 어느 파라메터로 전달될지 지정해야함.  
    
  - 디폴트 인자:파라메터 기본값을 지정하여 생략가능.   
    
  - 가변인자: 파라메터의 개수 가변. 인자값을 튜플에 담아 전달.  
  
  
  ```python
  a = 10  # 전역변수. 이 파일 어디에서나 사용가능한 변수. 단 사용전 선언은 필수

  def f1(x):  # 파라메터도 지역변수
      b = 20  # 지역변수
      print('a:', a, 'b:', b, 'x:', x)


  def f2():
      # 에러: b와 x는 f1()의 지역변수이므로 다른 함수에서 사용 불가
      print('a:', a, 'b:', b, 'x:', x)


  def f3():
      a = 100  # a:지역변수
      print('f3()에서 a:', a)


  def f5():
      global a  # a:전역변수
      a = 200
      print('f5()에서 a:', a)


  def f4():
      print('f4()에서 a:', a)


  f1(30) # a: 10 b: 20 x: 30
  '''
  f2()
  '''
  f3() # f3()에서 a: 100
  f4() # f4()에서 a: 10
  f5() # f5()에서 a: 200
  f4() # f4()에서 a: 200
  print(a) # 200
  ```
    
  ```python
  def test(a:str, b:int, c:int)->int: #->은 반환타입 지정. :은 파라메터 타입 지정
      print(a)
      print(b+c)
      return b+c

  # 디폴트 인자 : 파라메터의 기본값을 설정하여 호출시 인자전달 생략가능
  def default(b,c,a='default a'):
      return a

  # 가변 인자 : 파라미터 개수가 고정이 아님
  def test2(*args): # *args: 가변인자
      print(type(args))
      print(args)
      print(args[3])
      return sum(args)

  if __name__=='__main__':
      res = test('aaa',1,2)
      print(res)

      # 키워드 인자
      res = test(c=10, b=5, a='bbb')
      print(res)

      res = default(3,2)
      print(res)

      res = test2(3,6,8,9,7,5,23,4,6,7)
      print(res)
  ```
    
* ### 전역변수와 지역변수  
  
  전역변수: 함수 밖에 정의한 변수로 변수 정의 아래에 있는 모든 함수와 코드에서 사용가능  
  
  지역변수: 함수 안에서 정의한 변수로 선언한 함수 안에서만 사용 가능  
    
  ```python
  a=10 #전역변수. 이 파일 어디에서나 사용가능한 변수. 단 사용전 선언은 필수
  def f1(x):#파라메터도 지역변수
      b=20 #지역변수
      print('a:', a, 'b:', b, 'x:', x)

  def f2():
      #에러: b와 x는 f1()의 지역변수이므로 다른 함수에서 사용 불가
      print('a:', a, 'b:', b, 'x:', x)

  def f3():
      a=100 #a:지역변수
      print('f3()에서 a:', a)

  def f5():
      global a #a:전역변수
      a = 200
      print('f5()에서 a:', a)

  def f4():
      print('f4()에서 a:', a)

  '''
  f1(30)
  f2()
  '''
  f3()
  f4()
  f5()
  f4()
  ```
  
* ### 전역변수의 visible  
  
  ```python
  #전역변수의 visible
  def f1():
      print("f1()")
      print("a =", a)
      #print("b =", b)
      #print("c =", c)

  def f2():
      print("f2()")
      print("a =", a)
      print("b =", b)
      #print("c =", c)

  def f3():
      print("f3()")
      print("a =", a)
      print("b =", b)
      print("c =", c)

  a = 10
  f1()
  b = 20
  f2()
  c = 30
  f3()
  ```
    
* ### return  
  
  - return: 함수 종료(함수는 return이 없어도 더이상 실행할 문장이 없으면 종료)  
    
  - return 값: 함수 종료 및 값 반환  
    
  - return None: 파이썬은 리턴값이 없는 함수도 None이 반환됨. None은 값이 없음을 나타내는 상수  
    
  ```python
  def printHello():
      print("hello")

  def main():
      result = printHello()
      print("result =", result)
      print("result type =", type(result))

  main()
  ```
    
* ### 지역함수  
  
  ```python
  def f1(x):
      if x == "windows":
          def win():
              print("윈도우즈 입니다")
      elif x == "linux":
          def linux():
              print("리눅스 입니다")
      else:
          def other():
              print("다른 종류의 os입니다")

      #win()
      linux()
      #other()

  def main():
      '''
      win()
      linux()
      other()
      '''
      f1("linux")


  main()
  ```
    
* ### 재귀함수  
  
  재귀함수 : 함수 안에서 자신을 또 호출하는 구조의 함수. 동일한 작업을 반복처리시 사용.  
  단점 : 성능을 저하, 스택 오버 플로우를 유발 -> 루프로 전환 권장  
    
  ```python
  # factorial 4!=4*3*2*1
  def facto(num):
      if num==1:
          return 1
      else:
          return num * facto(num-1)

  def facto2(num):
      res = 1
      for i in range(1,num+1):
          res *= i
      return res

  def fibo2(num):
      data = [1]*num
      for i in range(2,num):
          data[i] = data[i-1]+data[i-2]
      return data

  print(facto(4))
  print(facto2(4))
  ```
    
* ### 함수 객체  
  
  ```python
  def sayHello():
      print('hello~~')

  def main():
      funcObj = sayHello  #함수 이름엔 함수 참조값이 저장됨
      funcObj()
      sayHello()

  main()
  ```
    
  **함수 객체 활용 - 룩업 테이블**
  ```python
  def error1():
      print('1번 에러 발생')

  def error2():
      print('2번 에러 발생')

  def error3():
      print('3번 에러 발생')

  def error4():
      print('4번 에러 발생')

  def main():
      ec=2
      if ec==1:
          error1()
      elif ec==2:
          error2()
      elif ec==3:
          error3()
      elif ec==4:
          error4()

  def main2():
      ec=2
      f = [error1, error2, error3, error4]
      f[ec-1]()

  main2()
  ```
    
  **함수 객체 활용 - 핸들러 처리**
  ```python
  def onEvent(f):
      print("핸들러가 등록되었습니다.")
      f()
      print()

  def myHandler1():
      print("1번 이벤트 핸들러입니다.")

  def myHandler2():
      print("2번 이벤트 핸들러입니다.")

  def myHandler3():
      print("3번 이벤트 핸들러입니다.")

  def main():
      onEvent(myHandler1)
      onEvent(myHandler2)
      onEvent(myHandler3)

  main()
  ```
    
  
