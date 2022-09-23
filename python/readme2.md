# Python     
  
  #### [ 2022-09-23 ]  
  
  ## 목차  
  * #### [[ 문자열 ]](#문자열)  
  * #### [[ 리스트 ]](#리스트)  
      
------------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### 문자열
  
  * #### 문자열 인덱싱  

    python에서도 문자열 인덱스는 0부터 시작한다.  
    한가지 특징이 있다면 역방향 인덱스도 존재한다는 것.  

    ```python
    str = "Hello Python"
    print("str:", str)

    print("str[1]:", str[1])
    print("str[-11]:", str[-11])

    print("str[6]:", str[6])
    print("str[-6]:", str[-6])

    #’Hello’만 범위로 지정
    print("str[0:5]:", str[0:5])
    print("str[-12:-7]:", str[-12:-7])
    print("str[:5]:", str[:5])

    #’Python’만 범위로 지정
    print("str[6:12]:", str[6:12])
    print("str[-6:12]:", str[-6:12])
    print("str[6:]:", str[6:])
    ```

  * #### 문자열 연산자  

    | 연산자   | 설명                                                         | 예                                                                                                                               |
    |----------|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
    | +        | 두 개의 문자열을 하나로 결합한다.                            | 'a' + 'a' = 'aa'                                                                                                                  |
    | *        | 곱한 횟수만큼 문자열을 반복한 새로운 문자열을 생성한다.      | 'a'*3 = aaa                                                                                                                         |
    | ==       | 두 문자열을 비교하여 같으면 True, 다르면 False를 반환한다.   |  'aa' == 'bb' Flase                                                                                                                |
    | !=       | 두 문자열을 비교하여 다르면 True, 같으면 False를 반환한다.   |  'aa' != 'bb' True                                                                                                                 |
    | [ ]      | 지정한 인덱스의 문자를 반환한다.                             | >>> s1 = "abcde" >>> print(s1[3]) d                                                                                               |
    | [ : ]    | 지정된 범위에 있는 문자열을 반환한다.                        | >>> s1 = "abcde" >>> print(s1[0:3]) abc                                                                                            |
    | in       | 문자열에 지정한 문자가 있으면 True, 없으면 False를 반환한다. | >>> s1 = "abcde" >>> print('e' in s1) True >>> print('s' in s1) False                                                               |
    | not in   | 문자열에 지정한 문자가 없으면 True, 있으면 False를 반환한다. | >>> s1 = "abcde" >>> print('e' not in s1) False >>> print('s' not in s1) True                                                       |
    | for      | 문자열의 길이만큼 반복한다.                                  | >>> s1 = "abcde" >>> for i in s1: print(i, end=',')   a,b,c,d,e,                                                                   |
    | r 또는 R | 문자열 안의 이스케이프 문자를 무시한다.                      | >>> print("hello\nPython") hello Python >>> print(r"hello\nPython") hello\nPython                                                   |

  * #### 문자열 조작 함수  

    | 함수명([ ]요소는 생략가능) | 설명                                                                                                               |
    |----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | replace(old, new[, cnt])   | 문자열의 old 부분을 new로 교체, cnt는 교체 횟수 지정                                                                                 |
    | replace() 예               | >>> s1 = "abcdefg"   >>> print(s1.replace("bc", "123")) #원본 문자열에서 ‘bc’부분을 ‘123’으로 수정   |
    | split([delim[, max]])      | 문자열을 delim(구분자)을 기준으로 분할하여 문자열 리스트를 반환한다. 만약 delim을 생략하면 스페이스가 기본 값으로 사용된다. max는 분할할 개수       |              
    | splitlines(num)            | 문자열을 개행 기준으로 분할하여 각 문자열의 개행을 제거한 리스트를 반환한다. num이 양수이면 각 문자열의 개행을 제거하지 않는다.                   |
    | join(str)                  | str은 문자열 리스트로 이 리스트 안의 문자열들을 하나의 문자열로 결합하여 반환한다. 이 때 개별 문자열 사이에 구분자를 지정하여 추가할 수 있다.               |             
    | for                        | 문자열의 길이만큼 반복한다.                |
    | r 또는 R                   | 문자열 안의 이스케이프 문자를 무시한다.     |

  * #### 검색함수  

    | 함수명([ ]요소는 생략가능)  | 설명                                                                                                         |
    |-----------------------------|--------------------------------------------------------------------------------------------------------------|
    | find(str[, start[, end]])   | 문자열에서 str를 찾아 있으면 위치를 반환하고 없으면 -1을 반환한다. 검색 범위를 start ~ end로 지정할 수 있다. |
    | rfind(str[, start[, end]])  | find()와 동일하지만 반환 되는 위치 값이 오른쪽부터 인덱싱된 값이다.                                          |
    | index(str[, start[, end]])  | find()와 동일하지만 없으면 ValueError라는 에러가 발생한다.                                                   |
    | rindex(str[, start[, end]]) | index()와 동일하지만 반환 값은 마지막으로 검색된 위치 값이다.                                                |
    | count(str[, start[, end]])  | 문자열에서 str의 등장 횟수를 반환한다. 파라메터는 find()와 동일.                                             |
    | len(str)                    | 문자열의 길이를 반환한다.                                                                                    |

  * #### 변환함수  

    | 함수명       | 설명                                                                 | 예                                                            |
    |--------------|----------------------------------------------------------------------|---------------------------------------------------------------|
    | capitalize() | 첫 글자만 대문자로 나머지는 소문자로 변환                            | >>> s1 = "hello WORLD" >>> print(s1.capitalize()) Hello world |
    | lower()      | 모든 문자를 소문자로 변환                                            | >>> s1 = "hello WORLD" >>> print(s1.lower()) hello world      |
    | upper()      | 모든 문자를 대문자로 변환                                            | >>> s1 = "hello WORLD" >>> print(s1.upper()) HELLO WORLD      |
    | swapcase()   | 원 문자열의 모든 문자 대소문를 반대로 변환                           | >>> s1 = "hello WORLD" >>> print(s1.swapcase()) HELLO world   |
    | title()      | 모든 단어의 첫 글자를 대문자로 첫 글자를 제외한 문자는 소문자로 변환 | >>> s1 = "hello WORLD" >>> print(s1.title()) Hello World      |  

  * #### 비교함수  

    | 함수명      | 설명                                                                                  |
    |-------------|---------------------------------------------------------------------------------------|
    | islower()   | 문자열의 모든 문자가 소문자이면 True, 한 문자라도 대문자를 포함하면 False를 반환한다. |
    | isupper()   | 문자열의 모든 문자가 대문자이면 True, 한 문자라도 소문자를 포함하면 False를 반환한다. |
    | isalpha()   | 문자열의 모든 문자가 문자이면 True, 아니면 False를 반환한다.                          |
    | isalnum()   | 문자열의 모든 문자가 문자 또는 숫자이면 True, 아니면 False를 반환한다.                |
    | isdecimal() | 문자열의 모든 문자가 10진수이면 True, 다른 타입의 문자가 포함되면 False를 반환한다.   |
    | isdigit()   | 문자열의 모든 문자가 숫자이면 True, 아니면 False를 반환한다.                          |
    | isnumeric() | 문자열의 모든 문자가 숫자이면 True, 아니면 False를 반환한다.                          |
    
* ### 리스트  

  * #### 리스트 생성  

    ```python
    list1 = [1,2,3,4,5]
    print(list1)

    list2 = [2.34, 4.56, 67.7867]
    list3 = ['aaa', 'bbb', 'ccc','ddd']

    list4=[1, 3.456, 'qerewr', True] # python은 서로 다른 타입도 배열에 담길 수 있음

    list5 = []#빈 리스트 생성
    list6 = list([4,5,6])#리스트 복사해서 만들기
    list7 = list(list1)#리스트 복사해서 만들기

    list8 = list()#빈 리스트 생성
    list9=list(range(1, 4))
    ```
      
  * #### 2차원 리스트  

    ```python
    list1 = [[1,2,3],[4,5,6]]
    print(list1)

    list2 = list([1, 2, 'c', 'd', [6,7,8]])
    print(list2)
    ```
      
    3차원 리스트도 가능  
      
  * #### 리스트 초기화  

    ```python
    list3 = [0]*5
    print(list3)

    list4 = [[0]*3]*2
    print(list4)
    ```
      
  * #### 리스트 요소 접근  

    list[인덱스]. 인덱스는 0부터 시작  

    ```python
    list1 = list(range(1, 6))
    for i in range(0, 5):#i 리스트 인덱스
        print('list1[',i,']=',list1[i])

    list2 = ['aaa', 'bbb', 'ccc']
    for i in range(0, len(list2)):
        print('list2[',i,']=',list2[i])

    for i in list1:
        print(i, end=',')
    print()
    for i in list2:
        print(i, end=',')

    list2 = [[1,2,3], [4,5,6]]
    print(list2[0][1])
    print(list2[1][2])

    list2 = [[1,2,3], [4,5,6]]
    for i in list2:
        for j in i:
            print(j, end=',')
        print()
    ```
      
  * #### 인덱스와 같이 요소값 읽기  

    ```python
    list1 = [1,2,3,4,5]
    for idx, i in enumerate(list1):
        print('index:', idx, ', data:', i)

    list2 = ['aaa', 'bbb', 'ccc']
    for idx, i in enumerate(list2):
        print('list2[',idx,']=', i)
    ```
      
  * #### 리스트 요소 여러 개 접근  

    ```python
    # list[시작위치:끝위치:간격]
    list1 = list(range(1, 11))
    a = list1[3:7]
    print(a)

    b = list1[3:8:2]
    print(b)
    ```
      
  * #### 리스트 요소 추가, 수정, 삭제  

    ```python
    list1 = [1,2,3,4]
    #추가
    #list1[3] = 4
    list1.append(4) #확장 후 추가
    print(list1)
    list1.insert(1, 5)#param1:끼워넣을 위치의 인덱스. param:추가할 값
    print(list1)

    #수정
    list1[1]=50
    print(list1)

    #삭제:del
    del list1[1]
    print(list1)

    del list1[1:3]
    print(list1)

    list1.remove(4)#인덱스 기준이 아니라 값으로 찾아서 삭제
    print(list1)


    #list1.remove(3)#없는 값 삭제시 에러

    list1.clear()#전체항목 삭제
    print(list1)

    del list1#list1 자체 삭제
    print(list1)
    ```
      
  * #### 요소 검색  

    ```python
    list1 = [1,2,3,4,5]
    if 3 in list1:
        print('3은 목록에 포함')
        idx = list1.index(3)
        print(idx, '번째에 있다')
    else:
        print('3은 목록에 포함 안됨')
    ```
      
  * #### 요소 정렬  

    ```python
    list1 = [7,3,5,9,2,4,1]
    print(list1)
    list1.sort()#reverse:False=>오름차순, True:내림차순
    print(list1)

    list1.sort(reverse=True)
    print(list1)

    list2 = ['fsd', 'qwe','qbc', 'asdf']
    print(list2)

    list2.sort()
    print(list2)
    ```
      
