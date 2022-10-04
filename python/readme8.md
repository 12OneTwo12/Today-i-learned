# Python     
  
  #### [ 2022-10-04 ]   
   
  ## 목차  
  * #### [[ numpy ]](#numpy)  
  * #### [[ 배열 생성 ]](#배열-생성)  
  * #### [[ 배열 처리 함수 ]](#배열-처리-함수)  
  * #### [[ 배열 요소 접근과 인덱싱 및 슬라이싱 ]](#배열-요소-접근과-인덱싱-및-슬라이싱)  
  * #### [[ 배열끼리 연산 ]](#배열끼리-연산)  
  * #### [[ 배열과 숫자 연산 ]](#배열과-숫자-연산)  
  * #### [[ 논리 연산 ]](#논리-연산)  
  * #### [[ 차원 변경 ]](#차원-변경)  
  * #### [[ 차원 연관 함수 ]](#차원-연관-함수)  
      
------------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### numpy    
  
  배열의 복잡한 연산, 수학 연산 함수 제공 라이브러리로 많이 사용됨  
  
  ```
  !pip install --upgrade pip
  !pip install numpy
  import numpy as np
  ```  
  
* ### 배열 생성  

  - ndarray.ndim: 차수    
  - ndarray.shape: 배열의 모양을 튜플형태로 반환. (행, 렬)    
  - ndarray.size: 배열의 크기    
  - ndarray.dtype: 요소의 타입    
  - ndarray.itemsize: 요소 데이터 크기(ex>int32=>4)  

  ```python
  a = [1,2,3,4]
  arr = np.array(a)  #배열 생성  np.array(1,2,3,4)
  print(arr) # [1 2 3 4]
  print(arr.dtype) # int32
  print(arr.shape) # (4,)

  arr2 = np.array([5,6,7,8])
  print(arr2) # [5 6 7 8]
  print(arr2.dtype) # int32
  print(arr2.shape) # (4,)

  arr3 = np.array([[1,2,3], [4,5,6]])
  print(arr3) # [[1 2 3]
              #  [4 5 6]]
  print(arr3.dtype) # int32
  print(arr3.shape) # (2, 3)
  print(arr3.ndim) # 2
  ```

  ```python
  arr4 = np.arange(10)#연속된 숫자를 생성하여 배열 생성
  print(arr4) # [0 1 2 3 4 5 6 7 8 9]

  arr5 = np.arange(0, 10, 3) # arange(시작값, 끝값, 간격)
  print(arr5) # [0 3 6 9]

  arr6 = np.arange(12).reshape(3,4) # 배열 모양을 바꿈
  print(arr6) # [[ 0  1  2  3]
              #  [ 4  5  6  7]
              #  [ 8  9 10 11]]

  arr7 = np.linspace(1, 10, 4) # linspace(시작값, 끝값, n(개수)): 시작 값에서 끝값 숫자를 n개 만듬
  print(arr7) # [ 1.  4.  7. 10.]
  ```

  ```python
  np.linspace(0, np.pi, 20)
  '''
  array([0.        , 0.16534698, 0.33069396, 0.49604095, 0.66138793,
       0.82673491, 0.99208189, 1.15742887, 1.32277585, 1.48812284,
       1.65346982, 1.8188168 , 1.98416378, 2.14951076, 2.31485774,
       2.48020473, 2.64555171, 2.81089869, 2.97624567, 3.14159265])
  '''
  
  a = np.zeros((3,4)) # 0을 채운 배열 생성(크기 지정)
  print(a.dtype) # float64
  print(a)
  '''
  [[0. 0. 0. 0.]
   [0. 0. 0. 0.]
   [0. 0. 0. 0.]]
  '''

  np.ones((3,4), dtype=np.int16) # 1을 채운 배열 생성(크기 지정)
  '''
  array([[1, 1, 1, 1],
       [1, 1, 1, 1],
       [1, 1, 1, 1]], dtype=int16)
  '''

  np.eye(4) # 전체가 0이고 대각선 1
  '''
  array([[1., 0., 0., 0.],
       [0., 1., 0., 0.],
       [0., 0., 1., 0.],
       [0., 0., 0., 1.]])
  '''

  np.eye(3,5, k=2)#k는 쉬프트 옵션. 오른쪽으로 쉬프트는 양수, 왼쪽으로 쉬프트는 음수
  '''
  array([[0., 0., 1., 0., 0.],
       [0., 0., 0., 1., 0.],
       [0., 0., 0., 0., 1.]])
  '''

  arr8 = np.array(['1.1','2.2','3.3','4.4'])
  print(arr8.dtype) # <U3
  print(arr8) # ['1.1' '2.2' '3.3' '4.4']

  arr8.astype(float) # 요소 타입변환 함수 : astype(타입) = array([1.1, 2.2, 3.3, 4.4])
  ```

  요소 타입  
    
    bool / int8,  int16,  int32,  int64 / uint8,  uint16,  uint32,  uint64 /   
    float16,  float32,  float64 /  complex64, complex128 / string_  
  
  ```python
  np.empty([6,6]) # empty(크기) : 크기만한 0으로 채운 배열 생성
  '''
  array([[0., 0., 0., 0., 0., 0.],
       [0., 0., 0., 0., 0., 0.],
       [0., 0., 0., 0., 0., 0.],
       [0., 0., 0., 0., 0., 0.],
       [0., 0., 0., 0., 0., 0.],
       [0., 0., 0., 0., 0., 0.]])
  ```

  np.full((2,3), 10, dtype=np.int32) # 지정한 값을 채운 배열. full(크기, 값, 요소타입)
  '''
  array([[10, 10, 10],
       [10, 10, 10]])
  '''
  ```

* ### 배열 처리 함수   

  ```python
  a = np.array([6,3,8,5,1,9,2])
  np.sort(a) # 정렬 array([1, 2, 3, 5, 6, 8, 9])

  b = np.array([11,22,33])
  np.concatenate((a, b)) # 배열 연결 array([ 6,  3,  8,  5,  1,  9,  2, 11, 22, 33])

  a = np.array([[1,2,3],[4,5,6]])
  b = np.array([[7,8,9], [10,11,12]])

  # 배열을 세로로 결합
  np.vstack((a, b))
  '''
  array([[ 1,  2,  3],
       [ 4,  5,  6],
       [ 7,  8,  9],
       [10, 11, 12]])
  '''

  np.hstack((a,b)) # 배열을 가로로 결합
  '''
  array([[ 1,  2,  3,  7,  8,  9],
       [ 4,  5,  6, 10, 11, 12]])
  '''

  a= np.arange(12)
  print(a) # [ 0  1  2  3  4  5  6  7  8  9 10 11]
  print(a.shape) # (12,)

  b=a.reshape(3,4) # 배열 모양 변환
  print(b)
  '''
  [[ 0  1  2  3]
   [ 4  5  6  7]
   [ 8  9 10 11]]
  '''
  print(b.shape) # (3, 4)

  a[1:5] # array([1, 2, 3, 4])

  b[:,0:2] # b[줄의 시작:끝, 칸의 시작 : 끝]
  '''
  array([[0, 1],
       [4, 5],
       [8, 9]])
  '''
  ```

* ### 배열 요소 접근과 인덱싱 및 슬라이싱  

  ```python
  c = a[np.newaxis, :] # newaxis : 새축 추가
  print(c.shape) # (1, 12)
  print(c) # [[ 0  1  2  3  4  5  6  7  8  9 10 11]]

  # 인덱스로 요소 추출
  a[3]#인덱싱. 3

  b = np.array([[1,2,3], [4,5,6]])
  print(b[0, 1])#2차원 배열의 인덱싱 = 2
  print(b[0])  #[1,2,3]    
  print(b[1, 1:]) #[5,6]
  print(b[:, 0]) #[1, 4]
  b[:, 0][:, np.newaxis]#[[1],[4]]

  a[1:3]#슬라이싱 array([2, 3])

  a[a>3]#배열 a의 요소 중 3보다 큰 요소만 추출. 요소에 대한 조건 수식을 작성하면 그 수식을 만족하는 요소만 추출해서 반환
  # array([ 4,  5,  6,  7,  8,  9, 10, 11])

  a[a%2==0] # 배열 a에서 a%2==0 조건이 True인 요소만 추출 
  # array([2, 4])

  a = np.array([1,2,3,4,5,6])
  b = np.array([True, False, True, False, True, False])
  c = a[b] #배열 b를 인덱스로 사용
  c # array([1, 3, 5])

  a = np.array([1,2,3,4,5,6])
  b = np.array([0,1,1,3,3,5])#배열 b를 인덱스로 사용
  c = a[b]
  c # array([1, 2, 2, 4, 4, 6])
  ```

* ### 배열끼리 연산    
  
  => +, -, *, / : 배열의 동일한 요소마다 연산 수행  
    
  ```python
  a=np.array([[1,2,3],[4,5,6]])
  b=np.array([[11,12,13],[14,15,16]])
  a+b
  '''
  array([[12, 14, 16],
       [18, 20, 22]])
  '''

  a-b
  '''
  array([[-10, -10, -10],
       [-10, -10, -10]])
  '''

  a*b
  '''
  array([[11, 24, 39],
       [56, 75, 96]])
  '''

  a/b
  '''
  array([[0.09090909, 0.16666667, 0.23076923],
       [0.28571429, 0.33333333, 0.375     ]])
  '''

  c=np.array([10,11,12])
  a+c#c가 [[10,11,12],[10,11,12]]으로 확장하여 계산. 브로드 캐스팅
  '''
  array([[11, 13, 15],
       [14, 16, 18]])
  '''

  d = np.array([[1,0],[0,1],[1,0]])  #a:[[1,2,3],[4,5,6]]
  a@d
  '''
  array([[ 4,  2],
       [10,  5]])
  '''

  a.dot(d)
  '''
  array([[ 4,  2],
       [10,  5]])
  '''
  ```

* ### 배열과 숫자 연산  

  ```
  +,-,*, **, / ....=> 배열 각 요소에 숫자와 연산
  ```

  ```python
  a*10
  '''
  array([[10, 20, 30],
       [40, 50, 60]])
  '''

  a<5  #배열 각 요소와 비교 연산한 결과인 bool 값을 요소로 하는 배열 반환
  '''
  array([[ True,  True,  True],
       [ True, False, False]])
  '''

  a[a<5]  #조건을 만족하는 배열 요소만 추출하여 배열로 반환 array([1, 2, 3, 4])
  ```

* ### 논리 연산  
   
  각 요소끼리 연산하여 bool 결과들을 배열로 반환  
    
    ```python
    a=np.array([1,2,3,4])
    b=np.array([4,2,2,4])
    print(a[a==b]) # [2 4]
    a==b # array([False,  True, False,  True])

    print(a[a>=b]) # [2 3 4]
    a>=b # array([False,  True,  True,  True])

    np.all(a==b)  #모든 요소가 조건을 만족해야 True, 아니면 False 

    sum(a<3)  #조건을 만족하는 요소의 개수 = 2

    a<3 # array([ True,  True, False, False]) 
    ```

  - np.logical_and():and 연산함수    
  - np.logicla_or():or 연산 함수    

    ```python
    np.logical_and(True, False) # False

    np.logical_and([True, False],[True, False]) # array([ True, False])

    a = np.arange(5)
    a # array([0, 1, 2, 3, 4])

    np.logical_and(a>1, a<4) # array([False, False,  True,  True, False])

    np.logical_or(True, False) # True

    np.logical_or([True, False],[False, False]) # array([ True, False])

    np.logical_or(a<1, a>3) # array([ True, False, False, False,  True])
    ```

  - np.where(조건, 참일때실행, 거짓일때실행)  

    ```python
    a = np.arange(10) # array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

    np.where(a<5, a, a*10) # array([1, 2, 3, 4])

    a = np.array([[0,1,2],[0,2,4],[0,3,6]])
    a
    '''
    array([[0, 1, 2],
         [0, 2, 4],
         [0, 3, 6]])
    '''

    np.where(a<4, a, -1)
    '''
    array([[ 0,  1,  2],
         [ 0,  2, -1],
         [ 0,  3, -1]])
    '''

    a=np.array([1,2,3,4,5])
    b=np.array([11,12,13,14,15])
    np.where([True, False, True, True, False], a, b) # array([ 1, 12,  3,  4, 15])

    np.where([[True,False],[True, True]],[[1,2],3,4]][,[[5,6],[7,8]]) 
    '''
    array([[1, 6],
         [3, 4]])
    '''
    ```

* ### 차원 변경   

  - np.reshape(행,렬)  
  
    ```python
    a=np.arange(12) # array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11])

    b = a.reshape(3,4)
    '''
    array([[ 0,  1,  2,  3],
         [ 4,  5,  6,  7],
         [ 8,  9, 10, 11]])
    '''
    ```

  - np.ravel(), np.flatten() => 배열을 1차원으로 변경  

    ```python
    b.ravel() # array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11])

    b
    '''
    array([[ 0,  1,  2,  3],
       [ 4,  5,  6,  7],
       [ 8,  9, 10, 11]])
    '''

    b.flatten() # array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11])
    ```

  - np.newaxis => 요소를 새 축으로 만듬  
  
    ```python
    c = a[:, np.newaxis]
    c
    '''
    array([[ 0],
       [ 1],
       [ 2],
       [ 3],
       [ 4],
       [ 5],
       [ 6],
       [ 7],
       [ 8],
       [ 9],
       [10],
       [11]])
    '''

    c = b[:, np.newaxis]
    c
    '''
    array([[[ 0,  1,  2,  3]],

       [[ 4,  5,  6,  7]],

       [[ 8,  9, 10, 11]]])
    '''
    ```

* ### 차원 연관 함수  
  
  차수    
  - axis=0 => x축 . 열별리 연산  
  - axis=1 => y축 . 행별로 연산  
  - axis=2 => z축  
  - axis=-1  => 마지막 축(2차원:y축, 3차원:z축)  
  
    ```python
    a = np.array([[1,2,3],[4,5,6]])
    a

    a.sum()#모든 요소의 합 21

    a.sum(axis=0)#열별로 합 array([5, 7, 9])

    a.sum(axis=1)#행별로 합 array([ 6, 15])

    a.max()#a배열 모든 요소에서 최대값 6
 
    a.max(axis=0)#열별로 최대값 array([4, 5, 6])

    a.max(axis=1)#행별로 최대값 array([3, 6])
    ```

  - argmax() / argmin() => 최대, 최소 값의 위치 반환

    ```python
    a.argmax() # 5

    a.argmax(axis=0) # array([1, 1, 1], dtype=int64)

    a.argmax(axis=1) # array([2, 2], dtype=int64)
    ```

