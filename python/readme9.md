# Python     
  
  #### [ 2022-10-04 ]   
   
  ## 목차  
  * #### [[ pandas ]](#pandas)  
  * #### [[ 시리즈 생성 ]](#시리즈-생성)  
  * #### [[ DataFrame 생성 ]](#dataframe-생성)  
  * #### [[ 데이터 연산 ]](#데이터-연산)  
  * #### [[ 통계함수 ]](#통계함수)  
  * #### [[ 요소 추출 ]](#요소-추출)  
  * #### [[ 데이터 통합 ]](#데이터-통합)  
  * #### [[ 파일 입출력 ]](#파일-입출력)  
      
------------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### pandas   
  
  - 구조적 데이터 처리를 위한 라이브러리  

* ### 시리즈 생성  

  ```python
  !pip3 install pandas
  import numpy as np
  import pandas as pd
  ```
  ```python
  s = pd.Series([1, 3, 5, 6, 8])
  s
  '''
  0    1
  1    3
  2    5
  3    6
  4    8
  dtype: int64
  '''

  s.index # RangeIndex(start=0, stop=5, step=1)

  s.values # array([1, 3, 5, 6, 8], dtype=int64)

  s2 = pd.Series([1,2,3,'a','b','c'])
  s2
  '''
  0    1
  1    2
  2    3
  3    a
  4    b
  5    c
  dtype: object
  '''

  #딕셔너리로 시리즈 생성시 키가 인덱스로 사용됨
  s3 = pd.Series({'name':'aaa', 'tel':'111', 'addr':'asdfasd'})
  s3
  '''
  name        aaa
  tel         111
  addr    asdfasd
  dtype: object
  '''

  s4 = pd.Series({'kor':65, 'eng':78, 'math':89})
  s4
  '''
  kor     65
  eng     78
  math    89
  dtype: int64
  '''
  ```

* ### DataFrame 생성    

  - df = pd.DataFrame(data, [,index, columns])  
  
  ```python
  data = [[1,2,3],[4,5,6],[7,8,9]]
  d1 = pd.DataFrame(data)
  d1
  '''
     0  1	 2
    
  0	 1	2	 3
  1	 4	5	 6
  2	 7	8	 9
  '''

  my_index = ['row1', 'row2', 'row3']
  my_col = ['col1', 'col2', 'col3']
  d2 = pd.DataFrame(data, index=my_index, columns=my_col)
  d2
  '''
  	 col1	col2 col3
  row1	1 	2 	3
  row2	4	  5  	6
  row3	7	  8	  9
  '''

  d2.index # Index(['row1', 'row2', 'row3'], dtype='object')

  d2.columns # Index(['col1', 'col2', 'col3'], dtype='object')

  d2.values
  '''
  array([[1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]], dtype=int64)
  '''
  ```

* ### 데이터 연산  
  
  ```python
  a=pd.Series([1,2,3,4])
  b=pd.Series([5,6,7,8])
  a+b
  '''
  0     6
  1     8
  2    10
  3    12
  dtype: int64
  '''

  a-b
  '''
  0   -4
  1   -4
  2   -4
  3   -4
  dtype: int64
  '''

  a*b
  '''
  0     5
  1    12
  2    21
  3    32
  dtype: int64
  '''

  b/a
  '''
  0    5.000000
  1    3.000000
  2    2.333333
  3    2.000000
  dtype: float64
  '''

  a=pd.Series([1,2,3])
  b=pd.Series([5,6,7,8])
  a+b
  '''
  0     6.0
  1     8.0
  2    10.0
  3     NaN
  dtype: float64
  '''

  d1 = pd.DataFrame({'A':[1,2,3], 'B':[4,5,6], 'C':[7,8,9]})
  d1
  '''
  	A	B	C
  0	1	4	7
  1	2	5	8
  2	3	6	9
  '''

  d2 = pd.DataFrame({'A':[11,22], 'B':[33,44], 'C':[55,66]})
  d2
  '''
    A	  B	  C
  0	11	33	55
  1	22	44	66
  '''

  d1+d2
  '''
  	A	    B	    C
  0	12.0	37.0	62.0
  1	24.0	49.0	74.0
  2	NaN	NaN	NaN
  '''

  names = ['aaa', 'bbb', 'ccc']
  d = {'국어':[54,65,76], '영어':[67,56,45], '수학':[98,78,76], '사회':[98,76,45], '과학':[89,97,56]}
  d3 = pd.DataFrame(d, index=names)
  d3
  '''
  	국어	영어	수학	사회	과학
  aaa	54	67	98	98	89
  bbb	65	56	78	76	97
  ccc	76	45	76	45	56
  '''
  ```

* ### 통계함수    
  
  ```
  sum():합  
  mean(): 평균  
  std(): 표준 편차  
  var(): 분산  
  min(): 최소값  
  max(): 최대값  
  cumsum(): 누적합  
  cumprod(): 누적곱
  ```

  ```python
  d3.sum()
  '''
  국어    195
  영어    168
  수학    252
  사회    219
  과학    242
  dtype: int64
  '''

  d3.mean()  #컬럼별 평균
  '''
  국어    65.000000
  영어    56.000000
  수학    84.000000
  사회    73.000000
  과학    80.666667
  dtype: float64
  '''

  d3.mean(axis=1) #행별로 평균
  '''
  aaa    81.2
  bbb    74.4
  ccc    59.6
  dtype: float64
  '''

  d3.describe()
  ''' 
  국어	영어	수학	사회	과학
  count	3.0	3.0	3.000000	3.000000	3.000000
  mean	65.0	56.0	84.000000	73.000000	80.666667
  std	11.0	11.0	12.165525	26.627054	21.733231
  min	54.0	45.0	76.000000	45.000000	56.000000
  25%	59.5	50.5	77.000000	60.500000	72.500000
  50%	65.0	56.0	78.000000	76.000000	89.000000
  75%	70.5	61.5	88.000000	87.000000	93.000000
  max	76.0	67.0	98.000000	98.000000	97.000000
  '''
  ```

* ### 요소 추출  
  
  - head(n): 위에서 n줄 추출    
  - tail(n): 아래에서 n줄 추출  
  
  ```python
  d = np.arange(100).reshape(10,10)
  d2 = pd.DataFrame(d)
  d2
  '''
  	0	1	2	3	4	5	6	7	8	9
  0	0	1	2	3	4	5	6	7	8	9
  1	10	11	12	13	14	15	16	17	18	19
  2	20	21	22	23	24	25	26	27	28	29
  3	30	31	32	33	34	35	36	37	38	39
  4	40	41	42	43	44	45	46	47	48	49
  5	50	51	52	53	54	55	56	57	58	59
  6	60	61	62	63	64	65	66	67	68	69
  7	70	71	72	73	74	75	76	77	78	79
  8	80	81	82	83	84	85	86	87	88	89
  9	90	91	92	93	94	95	96	97	98	99
  '''

  d2.head()#기본이 5줄
  '''
  	0	1	2	3	4	5	6	7	8	9
  0	0	1	2	3	4	5	6	7	8	9
  1	10	11	12	13	14	15	16	17	18	19
  2	20	21	22	23	24	25	26	27	28	29
  3	30	31	32	33	34	35	36	37	38	39
  4	40	41	42	43	44	45	46	47	48	49
  '''

  d2.head(3)
  '''
  	0	1	2	3	4	5	6	7	8	9
  0	0	1	2	3	4	5	6	7	8	9
  1	10	11	12	13	14	15	16	17	18	19
  2	20	21	22	23	24	25	26	27	28	29
  '''

  d2.tail()
  '''
  	0	1	2	3	4	5	6	7	8	9
  5	50	51	52	53	54	55	56	57	58	59
  6	60	61	62	63	64	65	66	67	68	69
  7	70	71	72	73	74	75	76	77	78	79
  8	80	81	82	83	84	85	86	87	88	89
  9	90	91	92	93	94	95	96	97	98	99
  '''

  d2.tail(3)
  '''
  	0	1	2	3	4	5	6	7	8	9
  7	70	71	72	73	74	75	76	77	78	79
  8	80	81	82	83	84	85	86	87	88	89
  9	90	91	92	93	94	95	96	97	98	99
  '''

  d2[2:5]#인덱스 범위 지정 추출
  '''
  	0	1	2	3	4	5	6	7	8	9
  2	20	21	22	23	24	25	26	27	28	29
  3	30	31	32	33	34	35	36	37	38	39
  4	40	41	42	43	44	45	46	47	48	49
  '''

  d2.loc[3]#인덱스 이름으로 한 줄 추출
  '''
  0    30
  1    31
  2    32
  3    33
  4    34
  5    35
  6    36
  7    37
  8    38
  9    39
  Name: 3, dtype: int32
  '''

  s = ['a','b','c','d','e','f','g','h','i','j']
  s2 = ['c_a','c_b','c_c','c_d','c_e','c_f','c_g','c_h','c_i','c_j']
  d3 = pd.DataFrame(d, index=s, columns=s2)
  d3
  '''
  	c_a	c_b	c_c	c_d	c_e	c_f	c_g	c_h	c_i	c_j
  a	0	1	2	3	4	5	6	7	8	9
  b	10	11	12	13	14	15	16	17	18	19
  c	20	21	22	23	24	25	26	27	28	29
  d	30	31	32	33	34	35	36	37	38	39
  e	40	41	42	43	44	45	46	47	48	49
  f	50	51	52	53	54	55	56	57	58	59
  g	60	61	62	63	64	65	66	67	68	69
  h	70	71	72	73	74	75	76	77	78	79
  i	80	81	82	83	84	85	86	87	88	89
  j	90	91	92	93	94	95	96	97	98	99
  '''

  d3.loc['c':'h']
  '''
  	c_a	c_b	c_c	c_d	c_e	c_f	c_g	c_h	c_i	c_j
  c	20	21	22	23	24	25	26	27	28	29
  d	30	31	32	33	34	35	36	37	38	39
  e	40	41	42	43	44	45	46	47	48	49
  f	50	51	52	53	54	55	56	57	58	59
  g	60	61	62	63	64	65	66	67	68	69
  h	70	71	72	73	74	75	76	77	78	79
  '''

  d3['c_b']
  '''
  a     1
  b    11
  c    21
  d    31
  e    41
  f    51
  g    61
  h    71
  i    81
  j    91
  Name: c_b, dtype: int32
  '''

  d3['c_b']['c':'f'] # 인덱스 c~f의 c_b 컬럼만 추출
  '''
  c    21
  d    31
  e    41
  f    51
  Name: c_b, dtype: int32
  '''

  d3.loc['e']['c_e'] #[인덱스][컬럼명]:요소 한개 추출 44

  d3.loc['e','c_e'] # 44

  d3['c_e']['e'] #[열명][인덱스명] 44

  d3['c_e'][1] #인덱스는 위치값으로 표현 가능 14

  d3['c_e'].loc['f'] # 54

  d3.T #전치: 행렬을 뒤집음
  '''
  	a	b	c	d	e	f	g	h	i	j
  c_a	0	10	20	30	40	50	60	70	80	90
  c_b	1	11	21	31	41	51	61	71	81	91
  c_c	2	12	22	32	42	52	62	72	82	92
  c_d	3	13	23	33	43	53	63	73	83	93
  c_e	4	14	24	34	44	54	64	74	84	94
  c_f	5	15	25	35	45	55	65	75	85	95
  c_g	6	16	26	36	46	56	66	76	86	96
  c_h	7	17	27	37	47	57	67	77	87	97
  c_i	8	18	28	38	48	58	68	78	88	98
  c_j	9	19	29	39	49	59	69	79	89	99
  '''
  ```

* ### 데이터 통합  
    
  - append(): 세로로 통합    
  - join(): 가로로 통합     
  - merge(): 특정 열을 기준으로 가로로 통합    
    
  ```python
  d1 = pd.DataFrame({'A':[78,67,54,34], 'B':[87,67,65,34]})
  d2 = pd.DataFrame({'A':[76,54], 'B':[87,56]})
  d1.append(d2)
  '''
  	A	B
  0	78	87
  1	67	67
  2	54	65
  3	34	34
  0	76	87
  1	54	56
  '''

  d1.append(d2, ignore_index=True)
  '''
      A	B
  0	78	87
  1	67	67
  2	54	65
  3	34	34
  4	76	87
  5	54	56
  '''

  d3 = pd.DataFrame({'C':[65,43,32]})
  d3
  '''
  	C
  0	65
  1	43
  2	32
  '''

  d1.join(d3)
  '''
  	A	B	C
  0	78	87	65.0
  1	67	67	43.0
  2	54	65	32.0
  3	34	34	NaN
  '''

  d1 = pd.DataFrame({'판매월':['1월','2월','3월','4월'], 'A':[54,65,76,78], 'B':[87,65,54,43]})
  d1
  '''
  	판매월	A	B
  0	1월	54	87
  1	2월	65	65
  2	3월	76	54
  3	4월	78	43
  '''

  d2 = pd.DataFrame({'판매월':['1월','2월','3월','4월'], 'C':[54,43,32,54], 'D':[98,87,76,45]})
  d2
  '''
  	판매월	C	D
  0	1월	54	98
  1	2월	43	87
  2	3월	32	76
  3	4월	54	45
  '''

  d1.merge(d2)
  '''
  	판매월	A	B	C	D
  0	1월	54	87	54	98
  1	2월	65	65	43	87
  2	3월	76	54	32	76
  3	4월	78	43	54	45
  '''
  ```

  - merge()함수 how옵션    
        
    - left: 왼쪽을 모두 선택. 오른쪽은 지정된 열만    
    - right: 오른쪽 모두 선택. 왼쪽은 지정된 열만    
    - outer: 왼쪽, 오른쪽 모두 다    
    - inner: 지정된 열의 공통된 값만   

    ```python
    d2 = pd.DataFrame({'판매월':['3월','4월','5월', '6월'], 'C':[54,43,32,54], 'D':[98,87,76,45]})
    d2
    '''
    	판매월	C	D
    0	3월	54	98
    1	4월	43	87
    2	5월	32	76
    3	6월	54	45
    '''

    d1.merge(d2)#how 기본 값: inner
    '''
    	판매월	A	B	C	D
    0	3월	76	54	54	98
    1	4월	78	43	43	87
    '''

    d1.merge(d2, how='left')
    '''
    	판매월	A	B	C	D
    0	1월	54	87	NaN	NaN
    1	2월	65	65	NaN	NaN
    2	3월	76	54	54.0	98.0
    3	4월	78	43	43.0	87.0
    '''

    d1.merge(d2, how='right')
    '''
      판매월	A	B	C	D
    0	3월	76.0	54.0	54	98
    1	4월	78.0	43.0	43	87
    2	5월	NaN	NaN	32	76
    3	6월	NaN	NaN	54	45
    '''

    d1.merge(d2, how='outer')
    '''
    	판매월	A	B	C	D
    0	1월	54.0	87.0	NaN	NaN
    1	2월	65.0	65.0	NaN	NaN
    2	3월	76.0	54.0	54.0	98.0
    3	4월	78.0	43.0	43.0	87.0
    4	5월	NaN	NaN	32.0	76.0
    5	6월	NaN	NaN	54.0	45.0
    '''
    ```

* ### 파일 입출력  
    
  - read_csv(파일명): csv 파일에서 읽기  
  - DataFrame.to_csv(파일명): 데이터 프레임 내용을 파일에 작성   
  
  **a.csv**
  ```csv
  이름,국어,영어,수학
  aaa,43,54,65
  bbb,7,67,87
  ccc,54,65,76
  ```
  
  ```python
  #csv 파일 로드
  pd.read_csv('a.csv')
  '''
  	이름	국어	영어	수학
  0	aaa	43	54	65
  1	bbb	7	67	87
  2	ccc	54	65	76
  '''

  pd.read_csv('a.csv', index_col='이름')
  '''
  	 국어 영어 수학
  이름			
  aaa	43	54	65
  bbb	7	67	87
  ccc	54	65	76
  '''

  # 데이터 프레임 데이터를 파일로 쓰기
  d1.to_csv('b.csv')
  ```

  [bicycle_utf8.csv](https://github.com/12OneTwo12/Today-i-learned/files/9703854/bicycle_utf8.csv)

  ```python
  bicycle_data = pd.read_csv('bicycle_utf8.csv', engine='python')  
  bicycle_data

  bicycle_data['노선명']
  '''
  0         동일로
  1     광나루로56길
  2     아차산로70길
  3         능동로
  4         능동로
  5         능동로
  6         능동로
  7        광나루로
  8        광나루로
  9        광나루로
  10       아차산로
  11       아차산로
  12       아차산로
  13       아차산로
  14       아차산로
  15       아차산로
  16        자양로
  17        자양로
  18        자양로
  19       천호대로
  20       천호대로
  21       구천면로
  22       긴고랑로
  23      자양번영로
  24       용마산로
  25        뚝섬로
  26    아차산로36길
  27     능동로10길
  28       강변역로
  29        중랑천
  30       천호대로
  31       천호대로
  32      자양강변길
  33     자양로13길
  34     뚝섬로52길
  Name: 노선명, dtype: object
  '''

  data2 = pd.read_csv('bicycle_utf8.csv', engine='python', index_col='노선명')
  data2

  '''
  함수 만들기
  노선명을 파람으로 받아서 (자전거도로종류	기점	종점	주요경유지) 정보 반환
  '''

  data2.loc['동일로']['자전거도로종류':'주요경유지']

  def getInfo(name):
      data3 = data2.loc[name].T
      return data3.loc['자전거도로종류':'주요경유지'].T

  res = getInfo('아차산로')
  res

  res.loc[res.index[0]]

  res.index.size

  res.values

  res.columns

  def printInfo(name, info):
      print('검색된 '+name+' 노선 정보\n\n')
      cols = info.columns
      vals = info.values
      for i in vals:
          for j in range(0, 4):
              print(cols[j], ':', i[j])
          print('================')


  name = '아차산로'
  res = getInfo(name)
  printInfo(name, res)
  ```

  **엑셀또한 가능**
  ```python
  df = pd.read_excel('a.xlsx', engine='openpyxl', sheet_name='Sheet2')#sheet_name=1 
  
  df = pd.read_excel('a.xlsx', engine='openpyxl', index_col='이름')  #index_col=0
  
  # 'a.xlsx' 파일 데이터 읽음
  # !pip install xlsxwriter
  df = pd.read_excel('a.xlsx', engine='openpyxl')

  # 엑셀파일 writer 생성. 타깃은 'b.xlsx'
  wr = pd.ExcelWriter('b.xlsx', engine='xlsxwriter')#작성자 객체 생성
  df.to_excel(wr, index=False) #sheet_name='Sheet3'
  wr.save()
  
  # 두 시트 데이터를 읽어서 결합
  res = []
  for i in [0,2]:#0, 2번 쉬트 파일 처리
      df = pd.read_excel('a.xlsx', engine='openpyxl', sheet_name=i)
      print(df)
      res.append(df)#배열에 추가

  res[0].append(res[1]) #DataFrame 병합
  
  res = []
  for i in range(0, 2):
      df = pd.read_excel('a.xlsx', engine='openpyxl', sheet_name=i)
      print(df)
      res.append(df)

  res[0].merge(res[1])  
  
  import glob
  files = glob.glob('./*.xlsx')  #문자 패턴과 일치하는 파일명 읽음
  res = []
  print(files)
  for i in files:
      df = pd.read_excel(i, engine='openpyxl')
      print(df)
      res.append(df)
  x = res[0].append(res[1])
  
  wr = pd.ExcelWriter('c.xlsx', engine='xlsxwriter')
  x.to_excel(wr, index=False, sheet_name='fileA_and_fileB') #sheet_name='Sheet3'
  wr.save()
  glob.glob('c.xlsx')   #파일 생성 확인
  
  res = []
  for i in range(0, 2):
      df = pd.read_excel('a.xlsx', engine='openpyxl', sheet_name=i)
      res.append(df)

  x = res[0].merge(res[1])  #국영수 쉬트와 사,지,과 쉬트 병합하여 x에 저장
  t = x.sum(axis=1)         #각 행의 총합
  a = x.mean(axis=1)        #각 행의 평균
  x['total']=t              #총합 결과를 total컬럼으로 추가
  x['avg']=a                #평균 결과를 avg 컬럼으로 추가

  print(x)
  wr = pd.ExcelWriter('c.xlsx', engine='xlsxwriter')
  x.to_excel(wr, index=False, sheet_name='result') #sheet_name='Sheet3'
  wr.save()
  ```
  
