# Python     
  
  #### [ 2022-09-24 ]   
   
  ## 목차  
  * #### [[ set ]](#set)  
  * #### [[ tuple ]](#tuple)  
  * #### [[ dictionary(딕셔너리) ]](#dictionary딕셔너리)  
      
------------------------------------------------------------------------------------------------------------------------------------------------------

  ```
  list=>변할수 있다. 요소:변할 수 있다. 
  set=>변할수 있다. 요소:변할 수 없다. 
  tuple=>변할수 없다. 요소:변할 수 있다. 
  dictionary=>키와 값 저장. d['name']='aaa'
  ```
  
* ### set  
  
  요소=>중복허용안함. 순서없음. 수정불가능  
    
  ```python
  set1={1,2,3,4}
  set2={1,[2,3],4} #에러 :요소는 수정불가능한 값만 가능
  ```
    
  **요소 추가**
  ```python
  set11 = set() 
  print(type(set11)) # 결과는 <class 'set'> 

  set11.add(1) 
  set11.add('asdf') # 결과는 {1, 'asdf'} 
  for i in set11: 
    print(i) # 1 asdf 

  #요소 여러 개 추가 
  set7.update([1,3,7,9]) 
  print(set7) # 결과는 {1, 2, 3, 4, 5, 6, 7, 9}
  ```
 
  **검색**
  ```python
  for i in set7: 
    print(i) 
  '''
  결과
  2 
  4 
  5 
  6 
  '''
  if 3 in set7: 
    print('found') 
  else: 
     # SyntaxError: invalid syntax 
  print(3 in set7)  # 결과는 False 
  print(6 in set7)  # 결과는 True 
  len(set7) # 4 
  print(max(set7)) # 6 
  print(min(set7)) # 2 
  print(sum(set7)) # 17
  ```
  
  **삭제**
  ```python
  #요소 삭제:remove() 
  set7.remove(3) 
  print(set7) # {1, 2, 4, 5, 6, 7, 9} 
  set7.remove(11) 
  '''
    Traceback (most recent call last): 
      File "<pyshell#57>", line 1, in  
        set7.remove(11) 
    KeyError: 11 
  '''
  set7.discard(9) 
  print(set7) # {1, 2, 4, 5, 6, 7} 
  set7.discard(9) 
  print(set7) # {1, 2, 4, 5, 6, 7} 
  del set7 
  print(set7)
  '''
    Traceback (most recent call last): 
      File "<pyshell#63>", line 1, in  
        print(set7) 
    NameError: name 'set7' is not defined 
  '''
  set7.pop() 
  '''
    Traceback (most recent call last): 
      File "<pyshell#64>", line 1, in  
        set7.pop() 
    NameError: name 'set7' is not defined 
  '''
  set7={1,2,3,4,5} 
  set7.pop() # 1 
  print(set7) # {2, 3, 4, 5} 
  set7.pop() # 2 
  print(set7) # {3, 4, 5} 
  set7.clear() 
  print(set7) 
  set() 
  ```
  
  **집합 연산**
  ```python
  #합집합(union) 
  set1 = {1,2,3,4} 
  set2={3,4,5,6} 
  set3 = set1 | set2 
  print(set3) # {1, 2, 3, 4, 5, 6} 
  print(type(set3)) # <class 'set'> 
  set4 = set1.union(set2) 
  print(set4) # {1, 2, 3, 4, 5, 6} 
  print(type(set4)) # <class 'set'>
  
  #교집합(intersection) 
  set3 = set1 & set2 
  print(set3) # {3, 4} 
  print(type(set3)) # <class 'set'> 
  set4 = set1.intersection(set2) 
  print(set4) # {3, 4} 
  print(type(set4)) # <class 'set'>
  
  #차집합(difference) 
  set3 = set1 - set2 
  print(set3) # {1, 2} 
  set4 = set2 - set1 
  print(set4) # {5, 6} 
  set5 = set1.difference(set2) 
  print(set5) # {1, 2}
  
  #대칭차집합 
  set3 = set1 ^ set2 
  print(set3) # {1, 2, 5, 6}
  
  #합집합에서 교집합을 뺀 결과 
  set4 = set1.symmetric_difference(set2) 
  print(set4) # {1, 2, 5, 6} 
  a={1,2,3} 
  b={1,2,3,4,5} 
  print(a.issubset(b)) # True 
  print(b.issubset(a)) # False 
  print(a<b) # True 
  print(a>b) # False 
  print(b.issuperset()) 
  '''
    Traceback (most recent call last): 
      File "<pyshell#107>", line 1, in  
        print(b.issuperset()) 
    TypeError: issuperset() takes exactly one argument (0 given) 
  '''
  print(b.issuperset(a)) # True 
  c={1,2,3} 
  print(a==c) # True 
  print(a>=b) # False 
  print(a<=b) # True 
  print(a!=b) # True 
  print(a!=c) # False 
  ```
    
* ### tuple  
  
  변경불가. 요소자체는 변할 수 있음  
  고정된 집합 데이터를 저장. 요소를 추가, 삭제, 변경 안됨  
  인덱스로 접근 가능  
    
  **생성**
  ```python
  t1 = (1,2,3)
  print(t1) # (1, 2, 3)
  print(type(t1)) # <class 'tuple'>
  t1 = (1, 3.45, 'asdf', [5,6,7])
  print(t1) # (1, 3.45, 'asdf', [5, 6, 7])
  print(type(t1)) # <class 'tuple'>
  t2 = ((1,2,3), (4,5,6))
  print(t1) # (1, 3.45, 'asdf', [5, 6, 7])
  print(t2) # ((1, 2, 3), (4, 5, 6))
  print(type(t2)) # <class 'tuple'>
  t3 = tuple([1,2,3])
  print(t3) # (1, 2, 3)
  t4 = tuple({4,5,6})
  print(t4) # (4, 5, 6)
  t5 = tuple('asdf')
  print(t5) # ('a', 's', 'd', 'f')
  t6 = 12,23,34
  print(t6) # (12, 23, 34)
  t7 = 'aaa', 'bbb','ccc'
  print(t7) # ('aaa', 'bbb', 'ccc')
  ```
    
  **요소접근**
  ```python
  #요소 접근
        t1[0]  t1[1]   t1[2]   t1[3]   t1[4]
  t1 = (1,       2,       3,        4,       5)
        t1[-5]  t1[-4]   t1[-3]   t1[-2]   t1[-1]

  for i in t1: #정방향 요소
  print(i)
  for i in range(0, len(t1)): #정방향 인덱스
  print(t1[i])
  for i in range(len(t1)-1, -1, -1): #역방향 인덱스
  print(t1[i])

  t2 = tuple('abcdef')
  print(t2) # ('a', 'b', 'c', 'd', 'e', 'f')
  for i in t2: #정방향 요소
  print(i)
  for i in range(0, len(t2)): #정방향 인덱스
    print(t2[i])
  for i in range(len(t2)-1, -1, -1): #역방향 인덱스
    print(t2[i])
  t3 = ((1,2,3), (4,5))
  print(t3[0]) # (1, 2, 3)
  print(t3[1]) # (4, 5)
  print(t3[0][0]) # 1
  print(t3[0][1]) # 2
  print(t3[0][2]) # 3
  print(t3[1][0]) # 4
  print(t3[1][1]) # 5
  for i in range(0, 2):
    for j in range(0, len(t3[i])):
      print(t3[i][j])
  for i in t3:
    for j in i:
      print(j)
  t4 = 1,2,3,4,5,6,7
  print(t4) # (1, 2, 3, 4, 5, 6, 7)
  print(t4[2:5]) # (3, 4, 5)
  print(t4[:5]) # (1, 2, 3, 4, 5)
  print(t4[2:]) # (3, 4, 5, 6, 7)
  print(t4[:]) # (1, 2, 3, 4, 5, 6, 7)
  
  #빈 튜플 생성
  t1=()
  t2=tuple()

  #요소 하나짜리 튜플 생성
  t1 = (1) => type(t1):정수
  t2 = (1,)  =>type(t2):튜플
  t3 = ('abc')  => type(t3):문자열(str)
  t4 = ('abc',)  => type(t4):튜플
  t5 = 1 => type(t5):정수
  t6 = 1, => type(t6):튜플

  #초기화 해서 만들기

  t5=(1,)*3
  print(t5) # (1, 1, 1)
  t6 = ('hello',)*2
  print(t6) # ('hello', 'hello')
  ```
  
  **함수**
  ```python
  len()-길이
  sum()-요소의 총합
  max()-요소의 최대값
  min()-요소의 최소값
  print(len(t4)) # 7
  print(sum(t4)) # 28
  print(max(t4)) # 7
  print(min(t4)) # 1
  ```
    
  **검색, 비교연산**
  ```python
  print(4 in t4) # True
  print(9 in t4) # False
  print(t4.index(4)) # 3
  print(4 not in t4) # False
  print(9 not in t4) # True
  t1=1,2,3
  t2=4,5,6
  print(t1) # (1, 2, 3)
  print(t2) # (4, 5, 6)
  print(t1+t2) # (1, 2, 3, 4, 5, 6)
  t3=1,2,3
  print(t1==t2) # False
  print(t1==t3) # True
  print(t1!=t2) # True
  print(t1!=t3) # False
  ```
    
  **요소 추가, 수정, 삭제 불가. 튜플 자체 삭제는 가능**
  ```python
  t1[3]=4
  '''
    Traceback (most recent call last):
      File "<pyshell#101>", line 1, in 
        t1[3]=4
    TypeError: 'tuple' object does not support item assignment
  '''
  t1.append(4)
  '''
    Traceback (most recent call last):
      File "<pyshell#102>", line 1, in 
        t1.append(4)
    AttributeError: 'tuple' object has no attribute 'append'
  '''
  t1[0]=10
  ''''
    Traceback (most recent call last):
      File "<pyshell#103>", line 1, in 
        t1[0]=10
    TypeError: 'tuple' object does not support item assignment
  '''
  
  #튜플은 =연산자 사용 불가. 요소를 리스트를 이용해 우회적으로 추가 가능
  t4 = ([],)
  print(t4) # ([],)
  t4[0].append(1)
  t4[0].append(2)
  t4[0].append(3)
  print(t4) # ([1, 2, 3],)
  
  #튜플은 요소변경이 안됨
  del t1[0]
  '''
    Traceback (most recent call last):
      File "<pyshell#112>", line 1, in 
        del t1[0]
    TypeError: 'tuple' object doesn't support item deletion
  '''
  del t1
  print(t1)
  '''
    Traceback (most recent call last):
      File "<pyshell#114>", line 1, in 
        print(t1)
    NameError: name 't1' is not defined
  '''
  ```
    
  **튜플의 활용**
  ```python
  #여러 변수 한꺼번에 초기화

  a, b, c = 1,2,3
  print('a=',a,', b=',b,', c=',c) # a= 1 , b= 2 , c= 3

  #변수의 개수와 값이 맞아야 함
  x, y, z = 1,2
  '''
    Traceback (most recent call last):
      File "<pyshell#117>", line 1, in 
        x, y, z = 1,2
    ValueError: not enough values to unpack (expected 3, got 2)
  '''

  #여러 값 저장
  student=('aaa',1,45,56,67,'bbb',2,67,78,89,'ccc',3,67,78,98)
  print(student) # ('aaa', 1, 45, 56, 67, 'bbb', 2, 67, 78, 89, 'ccc', 3, 67, 78, 98)
  for i in range(0, 3):
    print(student[i*5])

  '''
  aaa
  bbb
  ccc
  '''
  ```
  
* ### dictionary(딕셔너리)  
  
  - 키와 값을 같이 저장  
  - 요소의 추가, 변경, 삭제 가능  
  - 키는 중복, 변경 안됨. 키는 숫자, 문자열, 튜플만 가능  
  - 값은 중복, 변경 허용. 값의 타입 제한 없음  

  **생성**  
  ```python
  # 3개의 요소를 갖는 딕셔너리 생성. (“name”;”aaa”), (“tel”:”111”), (“age”:15)
  # 키는 모두 문자열이고 값은 키가 “age”인 요소의 값만 정수이고 나머지는 문자열이다.

  d1 = {"name":"aaa", "tel":"111", "age":15}
  print(d1) # {'name': 'aaa', 'tel': '111', 'age': 15}
  print(type(d1)) # <class 'dict'>

  # 3개의 요소를 갖는 딕셔너리 생성. 키 1에 대한 값은 “korea”, 키 2에 대한 값은 “english",
  # 키 3에 대한 값은 “math”이다. 이 딕셔너리의 키는 모두 정수 타입이고, 값은 문자열 타입이다.

  d2 = {1:"korea", 2:"english", 3:"math"}
  print(d2) # {1: 'korea', 2: 'english', 3: 'math'}
  print(type(d2)) # <class 'dict'>

  # 2개의 요소를 갖는 딕셔너리 생성. 모든 키는 실수, 값은 정수이다.

  d3 = {1.1:1, 2.2:2}
  print(d3) # {1.1: 1, 2.2: 2}
  print(type(d3)) # <class 'dict'>

  # 3개의 요소를 갖는 딕셔너리 생성. 모든 키는 튜플이고 값은 문자열이다.

  d4 = {(1,):"aaa", (2,):"bbb", (3,):"ccc"}
  print(d4) # {(1,): 'aaa', (2,): 'bbb', (3,): 'ccc'}
  print(type(d4)) # <class 'dict'>



  # { }로 딕셔너리 생성

  d1 = {'name': 'aaa', 'tel': '111', 'address': '대한민국'}

  # 딕셔너리 d1을 복사하여 딕셔너리 d2 생성. dict() 메서드의 파라메터로 복사할 딕셔너리 할당

  d2 = dict(d1)
  print(d2) # {'name': 'aaa', 'tel': '111', 'address': '대한민국'}

  print(type(d2)) # <class 'dict'>
  ```
  
  **요소접근**
  ```python
  # 키가 “name”, “tel”, “address”인 딕셔너리 생성

  d1 = {"name":"aaa", "tel":"111", "address":"대한민국"}
  print(d1) #전체 요소 출력 {'name': 'aaa', 'tel': '111', 'address': '대한민국'}

  # 키가 “name”인 요소 값 읽기 : d1[“name”]

  print("name:", d1["name"]) # name: aaa

  # 키가 “tel”인 요소 값 읽기 : d1[“tel”]

  print("tel:", d1["tel"]) # tel: 111

  # 키가 “address”인 요소 값 읽기 : d1[“address”]

  print("address:", d1["address"]) # address: 대한민국


  #루프로 딕셔너리(d1)에서 키를 하나씩 꺼내 그 키를 사용해 요소 값에 접근

  for key in d1: #d1에서 키를 하나씩 꺼내

  print("key:", key, " / value:", d1[key]) #꺼낸 키로 값을 읽는다 => d1[key]

  '''
  key: name / value: aaa
  key: tel / value: 111
  key: address / value: 대한민국
  '''
  
  # d1의 items() 메서드를 호출해 딕셔너리의 모든 요소 출력
  # items()는 각 요소를 키와 값으로 묶어 튜플로 만들고 이 튜플들을 리스트에 담아 반환한다.

  print(d1.items()) # dict_items([('name', 'aaa'), ('tel', '111'), ('address', '대한민국')])

  print(type(d1.items())) # <class 'dict_items'>
  ```
    
  **요소추가**
  ```python
  d1 = {} # 빈 딕셔너리 생성

  d1["name"]="aaa" # 키가 “name”인 요소 추가
  d1["tel"]="111" # 키가 “tel”인 요소 추가
  d1["age"]=12 # 키가 “age”인 요소 추가
  d1["address"]="서울특별시" # 키가 “address”인 요소 추가

  print(d1) # 딕셔너리 전체 요소를 출력하여 추가된 것 확인 {'name': 'aaa', 'tel': '111', 'age': 12, 'address': '서울특별시'}

  print(type(d1)) # 요소를 추가해도 타입은 딕셔너리 <class 'dict'>

  # 이미 존재하는 키로 추가

  d1["age"]=23 # 이미 존재하는 키를 추가하면 추가되지 않고 수정됨

  print(d1) # “age”키의 값이 12에서 23으로 수정됨 # {'name': 'aaa', 'tel': '111', 'age': 23, 'address': '서울특별시'}
  ```
  
  **요소 수정**
  ```python
  d1 = {'name': 'aaa', 'tel': '111', 'age': 12, 'address': '서울특별시'}

  print(d1) # {'name': 'aaa', 'tel': '111', 'age': 12, 'address': '서울특별시'}

  d1["name"]="bbb" # 키가 “name”인 요소의 값을 “bbb”로 수정
  d1["tel"]="222" # 키가 “tel”인 요소의 값을 “222”로 수정

  print(d1) # 수정하지 않은 요소는 그대로 유지됨 {'name': 'bbb', 'tel': '222', 'age': 12, 'address': '서울특별시'}
  ```
    
  **요소 삭제**
  ```python
  d1 = {1:"aaa", 2:"bbb", 3:"ccc", 4:"ddd", 5:"eee", 6:"fff"}
  
  print(d1) # {1: 'aaa', 2: 'bbb', 3: 'ccc', 4: 'ddd', 5: 'eee', 6: 'fff'}
  print(type(d1)) # <class 'dict'>

  del d1[2] # 키가 2인 요소 삭제
  print(d1) # 전체 요소 출력해보면 키가 2인 요소가 빠졌다. {1: 'aaa', 3: 'ccc', 4: 'ddd', 5: 'eee', 6: 'fff'}

  d1.pop(5) # 키가 5인 요소 삭제. 'eee' # pop(key)는 키가 key인 요소 팝(값 추출)

  print(d1) # {1: 'aaa', 3: 'ccc', 4: 'ddd', 6: 'fff'}

  d1.popitem() # 임의의 요소 하나 팝 (6, 'fff')

  print(d1) # {1: 'aaa', 3: 'ccc', 4: 'ddd'}

  d1.clear() # 딕셔너리 모든 요소 삭제

  print(d1) # 전체 요소를 출력해보면 비었다. {}

  del d1 # 딕셔너리 객체 삭제. d1이름 자체가 없어진다.

  print(d1) # d1은 없는 변수인데 출력하므로 에러 발생
  ```
